# Profession + state SEO/AEO campaign — progress record
Brief: /mnt/user-data/uploads/80b11afe-attachment.txt (Nov 15, 2026). Builder: /home/claude/work/build/builder.py (+ batchN.py).
Messaging (owner's direction): lead with private PPO; national PPO network travels with you across the U.S.; self-employed premiums usually deductible (Form 7206); ACA usually not the best route for healthy, higher-earning professionals (400% FPL cliff, regional HMO/EPO networks, full APTC repayment from TY2026, enrollment windows). Keep one honest caveat (underwriting, pre-existing, Marketplace for serious conditions). Do NOT discuss Medicaid, Medicare, disability or supplemental plans. COBRA only as the expensive option. No invented stats/prices.
Rollout: batches on preview branch seo-expansion-2026-11; owner says "deploy" per batch.

## STATUS (Nov 15): ALL BATCHES BUILT ON PREVIEW — owner reviewing everything at once, awaiting "deploy"

## Batch 1 — built
- NEW landing: /health-insurance-for-truck-drivers-florida/
- NEW landing: /health-insurance-for-travel-nurses-florida/
- NEW blog: /blog/owner-operator-health-insurance-guide/
- NEW blog: /blog/travel-nurse-health-insurance-between-assignments/
- Sitewide footer "Professions" line: + Truck drivers, Travel nurses (82 files)
- blog/index.html cards + renumber; sitemap +4; llms.txt +4

## Batch 2 — built
NEW blogs: health-insurance-for-dentists-who-own-a-practice, health-insurance-for-solo-attorneys, health-insurance-for-top-producing-realtors, health-insurance-for-consultants-who-travel, startup-founder-health-insurance, health-insurance-for-yacht-crew-fort-lauderdale (each linked from its profession page body)
## Batch 3 — built: profession section on all 26 Florida city pages (cities.py; unique intro + local spotlights + rotating rest/close; max pairwise similarity 0.54)
## Batch 4 — built: professions woven into 13 existing guides/coverage pages (weave.py)
## Batch 5 — built: 30 state pages /health-insurance-{state}/ (states.py + states_extra.py): state marketplace (CO GA IL KY MD NV VA run their own; AR OK SBM-FP on HealthCare.gov; rest HealthCare.gov), metros, hospital systems, economy, 3 situations, neighbor-state links; service-areas #states links; sitemap 117 URLs; llms.txt
Fixes along the way: Naples + ACA page FAQ schema text mismatch.
Remaining ideas: more profession articles (2nd per profession), state-specific profession pages (e.g., truck drivers Texas), review real Google reviews into site once collected.

## Batch 6 — built: 41 targeted profession x city articles (owner chose targeted set over 208)
/blog/health-insurance-for-{profession}-in-{city}/ via cityprof.py. Combos: truck drivers (Jacksonville, Tampa, Orlando, Miami, Fort Lauderdale, Tallahassee); travel nurses (Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, Naples); physicians & dentists (Miami, Tampa, Orlando, Jacksonville, Boca Raton); attorneys (Tallahassee, Miami, West Palm Beach, Tampa, Fort Lauderdale); realtors (Naples, Palm Beach, Boca Raton, 30A/Destin, Sarasota); financial advisors (Boca Raton, West Palm Beach, Palm Beach Gardens, Naples, Tampa); founders & remote workers (Miami, Tampa, Orlando, Lakewood Ranch); yacht captains (Miami, Jupiter, Palm Beach, Naples, 30A/Destin).
Linked from city pages ("Local guides" line) and profession pages ("By city" line); sitemap 158; llms.txt. Same-profession 5-gram overlap median 0.21.
Next if Search Console shows traction (6-8 wks): add more combos where pages rank.

## Batch 7 — built: 39 profession x state articles (stateprof.py, reuses cityprof)
Truck: TX IN TN AR NE MO OH WI · Nurses: TX TN NC GA CO · Physicians: TN TX MD NC OH · Attorneys: DE VA IL GA · Founders: UT CO TX MT NC · Yacht: MD SC LA VA · Advisors: IL IA NC SD · Realtors: TX NV SC TN.
State pages got a "Who we help in [State]" box; profession pages got "In other states" line; Guides page "By profession & state" section; sitemap 197.
Uniqueness tuning: per-page hash salts chosen to cut max overlap (Y-virginia 'h', N-texas 'c', R-naples 'd', T-missouri 'd', W-orlando 'i') — if rebuilding these five, set cityprof.OVR[city]=salt for that build only.
Also: nav now Coverage / Who We Help (families, self-employed & 1099, small business, individuals first, then 8 professions) / Locations (31 states; Florida -> service-areas) ; city pages have prof-grid; Guides page grouped with jump links.

## Batch 8 — 30 state COBRA pages /cobra-alternatives-{state}/ (cobrastates.py)
State continuation data: Mercer "Beyond COBRA" Nov 12 2024 Appendix A (statute cites). No mini-COBRA: AL, IN, MI, MT, NV. No state election deadlines stated (they vary). Hash salts in OVR. Median 5-gram overlap 0.24, max 0.44.
Linked from cobra-alternatives/ ("COBRA alternatives by state"), each state page cobra-note, sitemap (227), llms.txt.

## Batch 9 — brand + 31-state hubs (batch9.py)
about-stratton-advisory-group/, private-ppo-health-insurance/, self-employed-health-insurance/, health-insurance-for-high-earners/, overpaying-for-health-insurance-through-work/, health-insurance-for-people-who-travel/, state-continuation-coverage-laws/ (31-state mini-COBRA chart; FL row from Mercer: 18 mo/29 disability, 115%/150%, § 627.6692).
Coverage menu: Private PPO (31 states) first, Overpaying Through Work; Who We Help self-employed -> national hub; footer "All 31 states:" line on every page; state pages "More guides" line. Sitemap 234. User: focus only on the 31 licensed states.
