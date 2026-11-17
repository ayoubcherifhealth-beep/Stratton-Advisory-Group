(function(){
  if(!window.matchMedia||!window.matchMedia('(max-width:760px)').matches)return;
  document.querySelectorAll('.site-footer .f-top h3').forEach(function(h){
    var ul=h.nextElementSibling; if(!ul||ul.tagName!=='UL')return;
    h.classList.add('m-toggle'); h.setAttribute('role','button'); h.setAttribute('tabindex','0'); h.setAttribute('aria-expanded','false');
    function t(){var o=h.classList.toggle('open');h.setAttribute('aria-expanded',o?'true':'false');}
    h.addEventListener('click',t);
    h.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();t();}});
  });
  var a=document.querySelector('.site-footer .f-areas');
  if(a&&!a.querySelector('details')){
    var d=document.createElement('details'),s=document.createElement('summary');
    s.textContent='Browse all states, cities and guides';
    d.appendChild(s); while(a.firstChild){d.appendChild(a.firstChild);} a.appendChild(d);
  }
  if(!document.querySelector('.m-bar')){
    var bar=document.createElement('div');bar.className='m-bar';
    bar.innerHTML='<a class="m-call" href="tel:+13214426966" aria-label="Call (321) 442-6966"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>Call</a><a class="m-text" href="sms:+13214426966?&body=Hi%2C%20I%27d%20like%20a%20health%20insurance%20quote." aria-label="Text (321) 442-6966"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75h6.75M8.625 13.5h4.5M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>Text</a><a class="m-quote" href="/get-a-quote/">Get a Free Quote</a>';
    document.body.appendChild(bar);
    var onS=function(){bar.classList.toggle('show',scrollY>420);};addEventListener('scroll',onS,{passive:true});onS();
  }

  var per=document.querySelector('.persona');
  if(per&&!per.dataset.auto&&!(window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
    per.dataset.auto='1';
    var cards=[].slice.call(per.children);
    cards.forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');k.setAttribute('tabindex','-1');k.classList.add('clone');per.appendChild(k);});
    per.classList.add('auto');
    var paused=false,timer=null,pos=0,last=0,speed=0.035;
    function setW(){return cards[cards.length-1].offsetLeft+cards[cards.length-1].offsetWidth-cards[0].offsetLeft+parseFloat(getComputedStyle(per).columnGap||14);}
    var loopW=0;
    function step(t){
      if(!last)last=t; var dt=Math.min(t-last,50); last=t;
      if(!loopW)loopW=setW();
      if(!paused&&per.getBoundingClientRect().bottom>0&&per.getBoundingClientRect().top<innerHeight){
        pos=per.scrollLeft+speed*dt; if(pos>=loopW)pos-=loopW; per.scrollLeft=pos;
      }
      requestAnimationFrame(step);
    }
    function hold(){paused=true;clearTimeout(timer);}
    function release(){clearTimeout(timer);timer=setTimeout(function(){if(per.scrollLeft>=loopW)per.scrollLeft-=loopW;paused=false;},2500);}
    per.addEventListener('touchstart',hold,{passive:true});
    per.addEventListener('touchend',release,{passive:true});
    per.addEventListener('pointerdown',hold);
    per.addEventListener('pointerup',release);
    addEventListener('resize',function(){loopW=0;});
    requestAnimationFrame(step);
  }

  if(document.getElementById('qualify')){document.body.classList.add('home-m');var mq=document.querySelector('.m-bar .m-quote');if(mq)mq.setAttribute('href','#quote');}
})();
