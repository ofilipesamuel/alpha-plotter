const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Abrir menu':'Fechar menu');nav.classList.toggle('open',!isOpen)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Abrir menu')}));
const comparison=document.querySelector('#comparison');
const range=document.querySelector('.compare-range');
range?.addEventListener('input',()=>comparison.style.setProperty('--split',`${range.value}%`));
document.querySelector('#year').textContent=new Date().getFullYear();

