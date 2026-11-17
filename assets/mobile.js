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
})();
