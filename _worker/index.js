// Edge gate: visitors from one specific network see a neutral "unavailable"
// page unless their browser holds a private pass. Only SHA-256 hashes are
// stored here, so neither the network address nor the pass is in the repo.
const BLOCKED_IP_HASHES = new Set([
  "b952e700c406cdbcc5c4693e4307fa4bdb64449d706a206ecf55e80fd414f6c4",
]);
const PASS_HASH = "487ca7779b8acaeb16019f9a0b301dc3efdb6f2894afe1c475afb40eedfd8f87";
const COOKIE = "sag_pass";

async function sha256(s) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function readCookie(req, name) {
  const h = req.headers.get("Cookie") || "";
  for (const part of h.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return "";
}

const UNAVAILABLE = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Unavailable</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#f6f6f6;color:#333}div{text-align:center;padding:2rem}h1{font-size:1.25rem;font-weight:600;margin:0 0 .5rem}p{margin:0;color:#666;font-size:.95rem}</style></head><body><div><h1>This page is temporarily unavailable.</h1><p>Please try again later.</p></div></body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Private pass link: /pass/<token> sets a long-lived cookie, then goes home.
    if (url.pathname.startsWith("/pass/")) {
      const token = url.pathname.slice(6).replace(/\/$/, "");
      if (token && (await sha256(token)) === PASS_HASH) {
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/",
            "Set-Cookie": `${COOKIE}=${token}; Max-Age=31536000; Path=/; Secure; HttpOnly; SameSite=Lax`,
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex",
          },
        });
      }
      return env.ASSETS.fetch(new Request(new URL("/404-not-found/", url), request));
    }

    const ip = request.headers.get("CF-Connecting-IP") || "";
    if (ip && BLOCKED_IP_HASHES.has(await sha256(ip))) {
      const pass = readCookie(request, COOKIE);
      if (!pass || (await sha256(pass)) !== PASS_HASH) {
        return new Response(UNAVAILABLE, {
          status: 403,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex",
          },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
