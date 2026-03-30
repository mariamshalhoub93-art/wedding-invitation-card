// Countdown
const weddingDate = new Date("June 20, 2026 19:00:00").getTime();
const countdown = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  if(distance>0){
    const days=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    countdown.innerHTML=`${days} DAYS • ${hours} HOURS • ${minutes} MINUTES`;
  }
},1000);

// Scroll smooth
function scrollToSection(selector){
  document.querySelector(selector).scrollIntoView({behavior:"smooth"});
}

// Music toggle
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
music.pause(); // start paused
btn.addEventListener("click", ()=>{
  if(music.paused){
    music.play();
    btn.style.background="#bfa181";
    btn.style.color="white";
  } else {
    music.pause();
    btn.style.background="#f4eee9";
    btn.style.color="#4b4b4b";
  }
});

// Animate cards
document.querySelectorAll(".timeline-item, .schedule-grid .card").forEach(card=>{
  card.addEventListener("click",()=>{card.classList.toggle("open");});
});

// Flower canvas
const canvas=document.getElementById("flowerCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let flowers=[];
class Flower{constructor(x,y,size,color){this.x=x;this.y=y;this.size=size;this.color=color;this.vx=Math.random()*2-1;this.vy=Math.random()*-1-0.5;this.alpha=1;}
draw(){ctx.save();ctx.globalAlpha=this.alpha;ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();ctx.restore();}
update(){this.x+=this.vx;this.y+=this.vy;this.alpha-=0.002;}}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let i=flowers.length-1;i>=0;i--){flowers[i].update();flowers[i].draw();if(flowers[i].alpha<=0)flowers.splice(i,1);}requestAnimationFrame(animate);}
animate();
window.addEventListener("mousemove",(e)=>{for(let i=0;i<2;i++){flowers.push(new Flower(e.clientX+(Math.random()*30-15),e.clientY+(Math.random()*30-15),5+Math.random()*5,"#f7c1c1"));}});
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

