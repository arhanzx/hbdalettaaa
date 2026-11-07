const $=id=>document.getElementById(id);
const scenes=['s1','s2','s3','s4','s5','s6'];
function go(n){scenes.forEach((s,i)=>$(s).classList.toggle('on',i===n))}

// Bintang & hati melayang
const cv=$('c'),x=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
for(let i=0;i<90;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.3,v:Math.random()*.25+.05,t:Math.random()*6});
(function draw(){x.clearRect(0,0,W,H);P.forEach(p=>{p.t+=.03;p.y-=p.v;if(p.y<0)p.y=H;x.globalAlpha=.4+.4*Math.sin(p.t);x.fillStyle='#fff';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(draw)})();

// Hitung mundur
function tick(){
  const target = new Date(CONFIG.year, CONFIG.month - 1, CONFIG.day, CONFIG.hour, CONFIG.minute, 0);
  const t = Math.max(0, target - new Date());
  const f = n => String(n).padStart(2, '0');
  $('h').textContent = f(Math.floor(t / 36e5));
  $('m').textContent = f(Math.floor(t / 6e4) % 60);
  $('s').textContent = f(Math.floor(t / 1e3) % 60);
}
tick();
setInterval(tick, 1000);

// Elemen dekorasi ulang tahun
const spots=[[3,12,-8],[2,42,6],[4,72,-5],[80,10,7],[82,42,-6],[80,72,8]];
(CONFIG.decor||[]).forEach((src,i)=>{const sp=spots[i%spots.length],e=document.createElement('img');
 e.src=src;e.alt='';e.className='dc';e.style.left=sp[0]+'%';e.style.top=sp[1]+'%';
 e.style.setProperty('--r',sp[2]+'deg');e.style.animationDelay=(i*.6)+'s';$('pols').appendChild(e)});
$('sub').textContent=CONFIG.subtitle;

// Mengetik
let timer;
function type(){clearInterval(timer);const el=$('typed');el.textContent='';const txt=CONFIG.message+CONFIG.from;let i=0;
 timer=setInterval(()=>{el.textContent=txt.slice(0,++i);if(i>=txt.length)clearInterval(timer)},45)}

$('gift').onclick=()=>go(1);
$('open').onclick=()=>go(2);
$('read').onclick=()=>{go(3);type()};
$('again').onclick=()=>{clearInterval(timer);$('yt').src='';go(0)};
const tilts=[-6,5,-4,6,-5],caps=CONFIG.musicCaptions||['♡','✿','★','♪','☺'];
CONFIG.musicPhotos.forEach((p,i)=>{const e=document.createElement('div');e.className='fr';
 e.style.setProperty('--r',tilts[i%tilts.length]+'deg');e.style.setProperty('--i',i);
 e.innerHTML='<i class="tape"></i><div class="ph"></div><span class="cap"></span>';
 e.querySelector('.cap').textContent=caps[i%caps.length];
 if(p)e.querySelector('.ph').style.backgroundImage='url("'+p+'")';
 e.onclick=()=>{e.classList.remove('pop');void e.offsetWidth;e.classList.add('pop');
  const r=e.getBoundingClientRect(),h=['💗','✨','🌸','💖','🎀'];
  for(let k=0;k<7;k++){const s=document.createElement('span');s.className='heart';s.textContent=h[k%5];
   s.style.left=(r.left+r.width/2)+'px';s.style.top=(r.top+r.height/2)+'px';
   s.style.setProperty('--dx',(Math.random()*90-45)+'px');s.style.setProperty('--rr',(Math.random()*60-30)+'deg');
   s.style.animationDelay=k*.05+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),1400)}
  setTimeout(()=>e.classList.remove('pop'),1600)};
 $('frames').appendChild(e)});
$('ytlink').href='https://www.youtube.com/watch?v='+CONFIG.youtube;
$('tomusic').onclick=()=>{clearInterval(timer);go(4);$('yt').src='https://www.youtube.com/embed/'+CONFIG.youtube+'?autoplay=1&rel=0'};
$('back').onclick=()=>{$('yt').src='';go(3);type()};

// Hadiah: kue & bunga
function burst(){const e=['🎉','✨','💖','🌸','🎂'];for(let i=0;i<28;i++){const s=document.createElement('span');s.className='fall';s.textContent=e[i%5];s.style.left=Math.random()*100+'vw';s.style.fontSize=(16+Math.random()*18)+'px';s.style.animationDuration=(2.5+Math.random()*2.5)+'s';s.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),6500)}}
$('giftmsg').textContent=CONFIG.giftNote;
$('togift').onclick=()=>{$('wish').textContent='Make a wish, then tap the cake! 🕯️';go(5)};
$('cake').onclick=()=>{$('wish').textContent='May all your wishes come true, Aletta! ✨';burst()};
$('back2').onclick=()=>go(4);