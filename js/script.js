// Aumentando a fonte para facilitar a leitura

const plus = document.querySelector('.js-zoom');
const widthMobile = window.matchMedia('(max-width: 700px)').matches;

function zoom(){
  document.documentElement.classList.toggle('zoom');
  if(widthMobile){
    document.documentElement.classList.remove('zoom');
    document.documentElement.classList.toggle('zoom-mobile');
  }
}
plus.addEventListener('click', zoom);

// Responsável pela navegação dinâmica entre imagens/descrições

function navigation(){
const jsCreatures = document.querySelectorAll('.js-creatures li');
const jsCreaturesDescription = document.querySelectorAll('.js-creatures-description section');

if(jsCreatures.length && jsCreaturesDescription.length){
jsCreaturesDescription[0].classList.add('active');

function navigationCreatures(index){
  jsCreaturesDescription.forEach((e) =>{
    e.classList.remove('active');
  });
  jsCreaturesDescription[index].classList.add('active');
}

jsCreatures.forEach((e, index) =>{
  e.addEventListener('click', () =>{
    navigationCreatures(index);
  });
});
}
}
navigation();

// Suavização do Scroll

function scrollSmooth(){
const linksScroll = document.querySelectorAll('a[href^="#"]');

function scroll(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

linksScroll.forEach((e) =>{
  e.addEventListener('click', scroll);
});
}
scrollSmooth();


