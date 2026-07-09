const menuBtn=document.getElementById('menuBtn');
const navbar=document.getElementById('navbar');
menuBtn.onclick=()=>navbar.classList.toggle('active');

let slides=document.querySelectorAll('.slide');
let current=0;
setInterval(()=>{
  slides[current].classList.remove('active');
  current=(current+1)%slides.length;
  slides[current].classList.add('active');
},3800);

const reveals=document.querySelectorAll('.reveal');
function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();

let countersStarted=false;
function startCounters(){
  if(countersStarted) return;
  const section=document.querySelector('.stats');
  if(!section) return;
  if(section.getBoundingClientRect().top < window.innerHeight-80){
    countersStarted=true;
    document.querySelectorAll('[data-count]').forEach(counter=>{
      const target=+counter.dataset.count;
      let count=0;
      const step=Math.max(1,Math.floor(target/80));
      const timer=setInterval(()=>{
        count+=step;
        if(count>=target){count=target;clearInterval(timer)}
        counter.innerText=count+'+';
      },22);
    });
  }
}
window.addEventListener('scroll',startCounters);
startCounters();
