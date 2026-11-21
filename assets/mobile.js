(function(){
  if(!window.matchMedia||!window.matchMedia('(max-width:760px)').matches)return;
  document.querySelectorAll('.site-footer .f-top h3').forEach(function(h){
    var ul=h.nextElementSibling; if(!ul||ul.tagName!=='UL')return;
    h.classList.add('m-toggle');
    var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-expanded','false');
    b.style.cssText='all:inherit;display:block;width:100%;margin:0;cursor:pointer;text-align:inherit';
    while(h.firstChild)b.appendChild(h.firstChild); h.appendChild(b);
    function t(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');}
    b.addEventListener('click',t);
  });
  var a=document.querySelector('.site-footer .f-areas');
  if(a&&!a.querySelector('details')){
    var d=document.createElement('details'),s=document.createElement('summary');
    s.textContent='Browse all states, cities and guides';
    d.appendChild(s); while(a.firstChild){d.appendChild(a.firstChild);} a.appendChild(d);
  }
  if(!document.querySelector('.m-bar')){
    var bar=document.createElement('div');bar.className='m-bar';
    bar.innerHTML='<a class="m-call" href="tel:+13214426966" aria-label="Call (321) 442-6966"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>Call</a><a class="m-text" href="sms:+13214426966?&body=Hi%2C%20I%27d%20like%20a%20health%20insurance%20quote." aria-label="Text (321) 442-6966"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75h6.75M8.625 13.5h4.5M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>Text</a><a class="m-quote" href="/get-a-quote/">Book a Free Consultation</a>';
    document.body.appendChild(bar);
    var onS=function(){bar.classList.toggle('show',scrollY>420);};addEventListener('scroll',onS,{passive:true});onS();
  }




  if(!document.querySelector('.fab-quote')&&window.matchMedia('(max-width:760px)').matches){
    var q=document.createElement('a');q.className='fab-quote';
    var onQuote=/\/get-a-quote\/?$/.test(location.pathname);
    q.href=(document.querySelector('a.brand')?new URL('get-a-quote/',new URL(document.querySelector('a.brand').getAttribute('href'),location.href)).href:'/get-a-quote/');
    q.setAttribute('aria-label','Get a free quote');
    q.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6M9 4h6a1 1 0 011 1v1H8V5a1 1 0 011-1zM8 6H6.5A1.5 1.5 0 005 7.5v12A1.5 1.5 0 006.5 21h11a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0017.5 6H16"/></svg><span>Free Consultation</span>';
    if(!onQuote) document.body.appendChild(q);
    var sms=document.querySelector('.fab-sms');
    var sync=function(){q.classList.toggle('show',!!(sms&&sms.classList.contains('show')))};
    if(sms&&window.MutationObserver){new MutationObserver(sync).observe(sms,{attributes:true,attributeFilter:['class']})}
    sync();
  }
})();
