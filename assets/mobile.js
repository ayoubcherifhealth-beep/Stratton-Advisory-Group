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
})();
