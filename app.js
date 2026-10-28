const NUM="5579981633920";
const wa=t=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(t);
document.querySelectorAll(".wa").forEach(a=>{a.href=wa("Olá, Jully Festas! Gostaria de solicitar um orçamento.");a.target="_blank";a.rel="noopener"});
const slug=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const C=[
{s:"aquaticos",f:2,n:"Brinquedos Infláveis Aquáticos",e:"💦",c:"#1E90FF",d:["Molhou, divertiu! Refresca o calor e a criançada não quer mais sair.","Água, espuma e gargalhadas garantidas na sua festa."],i:["Bolão inflável","Futsabão M 8x4","Futsabão 3 em 1 Grande 10x5m","Arena de espuma","Tobogã Radical Splash Premium 8m (COM ÁGUA)","Toboágua Premium","Futebol de sabão Piso Sansui 10x5m","Slide radical premium duplo","Futsabão Tradicional GRANDE Piso Sider 10x5m","Tobogã GRANDE Golfinho 8m","Dual splash radical","Circuito aquático GIGANTE de 16m","Slide radical duplo piso Sider 8x4m"]},
{s:"mecanicos",f:2,n:"Brinquedos Mecânicos",e:"🐂",c:"#E8281E",d:["Adrenalina e emoção para os pequenos e os grandes.","Diversão com segurança, monitorada pela nossa equipe."],i:["Tombo legal","Cama elástica Gigante","Cama elástica Média 3m","Cama elástica Grande 4m","Touro mecânico de excelência 5x5m"]},
{s:"mini-lanches",f:2,n:"Barraquinha de Mini Lanches",e:"🍿",c:"#FF8A00",d:["Quentinho na hora, no tamanho certo para os pequenos.","Sabor de festa preparado ali, bem na frente da criançada."],i:["Algodão doce","Mini churros","Crepes suíços","Mini X-Burguer","Mini hot dog","Mini pizza","Batata frita","Pipoca (pipoqueira elétrica)","Mini hambúrguer"],p:"Barraquinha — "},
{s:"efeitos",f:1,n:"Máquinas de Efeitos",e:"🫧",c:"#A230C8",d:["Efeito especial que deixa a festa com cara de show.","Cria um clima mágico e cheio de fotos incríveis."],i:["Bolha de Sabão","Máquina de fumaça","Canhão de Espuma"]},
{s:"secos",f:2,n:"Brinquedos Infláveis Secos",e:"🏰",c:"#34B233",d:["Pula, escorrega e explora sem parar, a festa inteira.","Cores vibrantes e muito espaço para a energia da turma."],i:["Tobogã Premium G","Casinha de Bolinhas Inflável BABY 2x2m","Casinha de bolinhas Home 2x2m","Tobogã Médio","Tobogã Slid Premium Tigre","Guerra de Cotonete Gigante","Arena Babay 5x5m","Mini Tobogã com piscina de bolinhas (2 em 1)","Castelinho","Kid play home","Corrida maluca","MultPark","Castelo com escorrega temático Tigre","Tobogã Premium Dino","MultPlay Dino","Tobogã com Splash Radical Premium 8m (Piscina com Bolinhas)"]}];
// ---------- fotos com várias imagens ----------
// 1ª foto: nome.jpg · 2ª: nome-2.jpg · 3ª: nome-3.jpg ...
const fotos=(base,n=1)=>Array.from({length:n},(_,i)=>base+(i?"-"+(i+1):"")+".jpg");
// Produtos com mais de 1 foto: "nome exato do produto":quantidade (ex.: "Futsabão M 8x4":3 -> produto-futsabao-m-8x4.jpg, -2.jpg, -3.jpg)
const NF={};
const slide=(arr,alt)=>`<div class="sl">${arr.map((s,i)=>`<img class="${i?"":"on"}" loading="lazy" src="${s}" alt="${i?"":alt}" onerror="this.remove()">`).join("")}${arr.length>1?`<div class="dt">${arr.map((_,i)=>`<button type="button" data-k="${i}" aria-label="Ver foto ${i+1}"${i?"":' class="on"'}></button>`).join("")}</div>`:""}</div>`;
const mostrar=(s,k)=>{const im=[...s.querySelectorAll("img")],bt=[...s.querySelectorAll(".dt button")];if(!im.length)return;k=(k+im.length)%im.length;im.forEach((x,i)=>x.classList.toggle("on",i===k));bt.forEach((x,i)=>x.classList.toggle("on",i===k))};
const atual=s=>[...s.querySelectorAll("img")].findIndex(x=>x.classList.contains("on"));
let tick=0;
setInterval(()=>{tick++;if(document.hidden||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
document.querySelectorAll(".sl").forEach((s,k)=>{if(!s.querySelector(".dt")||(tick+k)%3||Date.now()-(+s.dataset.hold||0)<6000)return;mostrar(s,atual(s)+1)})},1300);
document.addEventListener("click",e=>{const d=e.target.closest(".dt button");if(!d)return;const s=d.closest(".sl");s.dataset.hold=Date.now();mostrar(s,+d.dataset.k)});
// descrições detalhadas (nome exato do produto -> texto + medidas)
const D={
"Bolão inflável":{t:"Bolão inflável de 1,20m. Indicado para uso com o futsabão ou com a quadra 3 em 1 (futebol/vôlei/basquete)."},
"Futsabão M 8x4":{t:"Quadra de futebol de sabão inflável 8x4, indicada para crianças de 2 a 14 anos.",m:["Não recomendado a adultos"]},
"Futsabão 3 em 1 Grande 10x5m":{t:"Futebol de sabão 3 em 1 (futebol, basquete e vôlei).",m:["10 m de comprimento","5 m de largura","2,5 m de altura","Crianças de até 14 anos","Energia: 110V"]},
"Arena de espuma":{t:"Espaço para um delicioso banho de espuma, cercado por paredes infláveis, ideal para brincadeiras e competições: caça ao tesouro, pega-pega e esconde-esconde dentro da espuma.",m:["5 m de comprimento","5 m de largura","2 m de altura","Todas as idades, inclusive adultos"]},
"Tobogã Radical Splash Premium 8m (COM ÁGUA)":{t:"Brinquedo radical tipo escorregador, com possibilidade de uso com água, bolinhas de PVC ou espuma de sabão.",m:["8 m de comprimento","5 m de altura","3 m de largura","Crianças de até 14 anos"]},
"Toboágua Premium":{t:"Um escorregador super radical, que leva muito mais alegria para festas na piscina, com momentos refrescantes e divertidos.",m:["5 m de comprimento","3 m de largura","4,8 m de altura","Crianças de até 14 anos"]},
"Futebol de sabão Piso Sansui 10x5m":{t:"Campo inflável de futebol de sabão 10x5m, para crianças, adolescentes e adultos. Uma diversão contagiante!",m:["10 m de comprimento","5 m de largura","2,5 m de altura","Todas as idades, inclusive adultos","Energia: tomada 110V"]},
"Slide radical premium duplo":{t:"Brinquedo hiper divertido, que leva alegria e competitividade, com um delicioso banho de espuma ou simplesmente um banho de piscina diferenciado.",m:["8 m de comprimento","3 m de largura","2,5 m de altura"]},
"Futsabão Tradicional GRANDE Piso Sider 10x5m":{t:"Uma verdadeira competição divertida em uma quadra 100% segura.",m:["10 m de comprimento","5 m de largura","2,8 m de altura"]},
"Tobogã GRANDE Golfinho 8m":{t:"Brinquedo que pode ser usado na beira da piscina ou, com a parede de proteção, fora da piscina.",m:["8 m de comprimento","6,5 m de altura","4 m de largura","Todas as idades, inclusive adultos"]}};
const desc=(nm,fb)=>{const d=D[nm];return d?`<div class="ds"><p>${d.t}</p>${d.m?`<ul class="sp">${d.m.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}</div>`:`<p>${fb}</p>`};
const cats=document.getElementById("cats"),lista=document.getElementById("lista");
cats.innerHTML='<div class="grid">'+C.map((k,i)=>`<article class="card cc" style="--c:${k.c}"><div class="ft"><div>${k.e}<span>Sua foto aqui</span></div>${slide(fotos("categoria-"+k.s,k.f),k.n)}</div><div class="cb"><h3>${k.n}</h3><p class="n">${k.i.length} produtos</p><button class="btn" data-i="${i}">Ver produtos</button></div></article>`).join("")+"</div>";
function abrir(i){const k=C[i];cats.hidden=true;lista.hidden=false;
lista.innerHTML=`<button class="btn voltar">← Voltar às categorias</button><div class="cat" style="background:${k.c}"><span>${k.e}</span>${k.n}<small>${k.i.length} produtos</small></div><div class="grid">${k.i.map((x,j)=>{const nm=(k.p||"")+x;return `<article class="card" style="--c:${k.c}"><div class="ft"><div>${k.e}<span>Sua foto aqui</span></div>${slide(fotos("produto-"+slug(nm),NF[nm]||1),nm)}</div><div class="cb"><h3>${nm}</h3>${desc(nm,k.d[j%2])}<a class="btn" target="_blank" rel="noopener" href="${wa("Olá! Quero um orçamento do item: "+nm)}">Solicitar orçamento</a></div></article>`}).join("")}</div>`;
lista.querySelector(".voltar").onclick=fechar;document.getElementById("produtos").scrollIntoView()}
function fechar(){lista.hidden=true;cats.hidden=false;document.getElementById("produtos").scrollIntoView()}
cats.onclick=e=>{const b=e.target.closest("button[data-i]");if(b)abrir(+b.dataset.i)};
// galeria (fotos em img/galeria/)
const trk=document.getElementById("trk"),COP=4,NFT=5;
trk.setAttribute("role","region");trk.setAttribute("aria-label","Galeria de fotos: deslize para os lados");
trk.innerHTML=Array.from({length:COP},(_,c)=>Array.from({length:NFT},(_,n)=>`<img src="foto-${n+1}.jpg" ${c?'alt="" aria-hidden="true"':'alt="Festa com brinquedos da Jully Festas"'} draggable="false" decoding="async">`).join("")).join("");
// anda sozinha, mas dá para arrastar com o dedo ou com o mouse
(()=>{const el=trk,reduz=matchMedia("(prefers-reduced-motion:reduce)").matches;
let W=0,pos=0,lastSet=-1,user=-1e9,seg=false,drag=null,t0=0;
const agora=()=>performance.now();
const medir=()=>{const k=el.children.length/COP,w=el.children[k].offsetLeft-el.children[0].offsetLeft;if(w>0){const novo=!W;W=w;if(novo){pos=W;lastSet=W;el.scrollLeft=W}}};
el.addEventListener("load",medir,true);addEventListener("load",medir);addEventListener("resize",medir);
el.addEventListener("scroll",()=>{if(Math.abs(el.scrollLeft-lastSet)>2)user=agora()},{passive:true});
el.addEventListener("touchstart",()=>{seg=true},{passive:true});
const fim=()=>{seg=false;user=agora()};el.addEventListener("touchend",fim,{passive:true});el.addEventListener("touchcancel",fim,{passive:true});
el.addEventListener("wheel",()=>{user=agora()},{passive:true});
el.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse"||e.button)return;drag={x:e.clientX,s:el.scrollLeft};el.setPointerCapture(e.pointerId);el.classList.add("arr")});
el.addEventListener("pointermove",e=>{if(!drag)return;el.scrollLeft=drag.s-(e.clientX-drag.x);user=agora()});
const solta=()=>{if(drag){drag=null;el.classList.remove("arr");user=agora()}};el.addEventListener("pointerup",solta);el.addEventListener("pointercancel",solta);
const quadro=t=>{const dt=Math.min(.05,(t-t0)/1000||0);t0=t;
if(W){if(seg||drag||reduz||document.hidden||agora()-user<2200){pos=el.scrollLeft}
else{pos+=45*dt;while(pos>=2*W)pos-=W;while(pos<W)pos+=W;lastSet=pos;el.scrollLeft=pos}}
requestAnimationFrame(quadro)};
medir();requestAnimationFrame(quadro)})();
// balões
const cs=["#E8281E","#FFC928","#34B233","#A230C8","#FF8A00","#fff"];
document.getElementById("bals").innerHTML=Array.from({length:9},(_,i)=>`<div class="bal" style="left:${5+i*11}%;background:${cs[i%6]};animation-duration:${11+i%4*3}s;animation-delay:-${i*2}s"></div>`).join("");
// avaliações: cada card abre a avaliação no Google
const REV=[{n:"Akta Luana",d:"8 meses atrás",u:"https://goo.gl/maps/9h3jh2LC64vV6kmJA",t:"Atendimento perfeito desde as escolhas dos brinquedos até o momento da festa. Brinquedos novos, limpos, monitores atenciosos e pontuais. Super indico e com certeza vou alugar novamente. As crianças amaaam e os adultos também."},
{n:"Erica Santos",d:"Um ano atrás",u:"https://goo.gl/maps/VW81awtFJgTvxBqz8",t:"Serviço de primeira qualidade, desde o primeiro contato até o dia da montagem dos brinquedos e monitoramento durante o uso. Vale super a pena."},
{n:"Whosgton Jesus Santos",d:"Um ano atrás",u:"https://goo.gl/maps/adrpVTYtaWSC3sGN6",t:"A melhor empresa do estado, sem igual. Compromisso e responsabilidade é com eles, nota 1.000. Essa recomendo sem medo."}];
document.getElementById("rs").innerHTML=REV.map(r=>`<a class="r" href="${r.u}" target="_blank" rel="noopener"><div class="s">★★★★★</div><p>${r.t}</p><b>${r.n}</b><small>${r.d}</small><em>Ver essa avaliação no Google</em></a>`).join("");
