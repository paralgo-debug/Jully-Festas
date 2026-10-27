const NUM="5579981633920";
const wa=t=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(t);
document.querySelectorAll(".wa").forEach(a=>{a.href=wa("Olá, Jully Festas! Gostaria de solicitar um orçamento.");a.target="_blank";a.rel="noopener"});
const slug=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const C=[
{s:"aquaticos",n:"Brinquedos Infláveis Aquáticos",e:"💦",c:"#1E90FF",d:["Molhou, divertiu! Refresca o calor e a criançada não quer mais sair.","Água, espuma e gargalhadas garantidas na sua festa."],i:["Balão inflável","Futsabão M 8x4","Futsabão 3 em 1 Grande 10x5m","Arena de espuma","Tobogã Radical Splash Premium 8m (com água)","Toboágua Premium","Futebol de sabão Piso Sansui 10x5m","Slide radical premium duplo","Futsabão Tradicional Grande Piso Sider 10x5m","Tobogã GRANDE Golfinho 8m","Dual splash radical","Circuito aquático GIGANTE de 16m","Slide radical duplo piso Sider 8x4m"]},
{s:"mecanicos",n:"Brinquedos Mecânicos",e:"🐂",c:"#E8281E",d:["Adrenalina e emoção para os pequenos e os grandes.","Diversão com segurança, monitorada pela nossa equipe."],i:["Tombo legal","Cama elástica Gigante","Cama elástica Média 3m","Cama elástica Grande 4m","Touro mecânico de excelência 5x5m"]},
{s:"mini-lanches",n:"Barraquinha de Mini Lanches",e:"🍿",c:"#FF8A00",d:["Quentinho na hora, no tamanho certo para os pequenos.","Sabor de festa preparado ali, bem na frente da criançada."],i:["Algodão doce","Mini churros","Crepes suíços","Mini X-Burguer","Mini hot dog","Mini pizza","Batata frita","Pipoca (pipoqueira elétrica)","Mini hambúrguer"],p:"Barraquinha — "},
{s:"efeitos",n:"Máquinas de Efeitos",e:"🫧",c:"#A230C8",d:["Efeito especial que deixa a festa com cara de show.","Cria um clima mágico e cheio de fotos incríveis."],i:["Bolha de Sabão","Máquina de fumaça","Canhão de Espuma"]},
{s:"secos",n:"Brinquedos Infláveis Secos",e:"🏰",c:"#34B233",d:["Pula, escorrega e explora sem parar, a festa inteira.","Cores vibrantes e muito espaço para a energia da turma."],i:["Tobogã Premium G","Casinha de Bolinhas Inflável BABY 2x2m","Casinha de bolinhas Home 2x2m","Tobogã Médio","Tobogã Slid Premium Tigre","Guerra de Cotonete Gigante","Arena Babay 5x5m","Mini Tobogã com piscina de bolinhas (2 em 1)","Castelinho","Kid play home","Corrida maluca","MultPark","Castelo com escorrega temático Tigre","Tobogã Premium Dino","MultPlay Dino","Tobogã com Splash Radical Premium 8m (Piscina com Bolinhas)"]}];
const cats=document.getElementById("cats"),lista=document.getElementById("lista");
cats.innerHTML='<div class="grid">'+C.map((k,i)=>`<article class="card cc" style="--c:${k.c}"><div class="ft"><div>${k.e}<span>Sua foto aqui</span></div><img loading="lazy" src="categoria-${k.s}.jpg" alt="${k.n}" onerror="this.remove()"></div><div class="cb"><h3>${k.n}</h3><p class="n">${k.i.length} produtos</p><button class="btn" data-i="${i}">Ver produtos</button></div></article>`).join("")+"</div>";
function abrir(i){const k=C[i];cats.hidden=true;lista.hidden=false;
lista.innerHTML=`<button class="btn voltar">← Voltar às categorias</button><div class="cat" style="background:${k.c}"><span>${k.e}</span>${k.n}<small>${k.i.length} produtos</small></div><div class="grid">${k.i.map((x,j)=>{const nm=(k.p||"")+x;return `<article class="card" style="--c:${k.c}"><div class="ft"><div>${k.e}<span>Sua foto aqui</span></div><img loading="lazy" src="produto-${slug(nm)}.jpg" alt="${nm}" onerror="this.remove()"></div><div class="cb"><h3>${nm}</h3><p>${k.d[j%2]}</p><a class="btn" target="_blank" rel="noopener" href="${wa("Olá! Quero um orçamento do item: "+nm)}">Solicitar orçamento</a></div></article>`}).join("")}</div>`;
lista.querySelector(".voltar").onclick=fechar;document.getElementById("produtos").scrollIntoView()}
function fechar(){lista.hidden=true;cats.hidden=false;document.getElementById("produtos").scrollIntoView()}
cats.onclick=e=>{const b=e.target.closest("button[data-i]");if(b)abrir(+b.dataset.i)};
// galeria (fotos em img/galeria/)
const g=[1,2,3,4,5].map(n=>`<img loading="lazy" src="foto-${n}.jpg" alt="Festa com brinquedos da Jully Festas">`).join("")+`<div class="ph">📷<br>Suas próximas fotos entram aqui</div>`;
document.getElementById("trk").innerHTML=g+g;
// balões
const cs=["#E8281E","#FFC928","#34B233","#A230C8","#FF8A00","#fff"];
document.getElementById("bals").innerHTML=Array.from({length:9},(_,i)=>`<div class="bal" style="left:${5+i*11}%;background:${cs[i%6]};animation-duration:${11+i%4*3}s;animation-delay:-${i*2}s"></div>`).join("");
// avaliações: cada card abre a avaliação no Google
const REV=[{n:"Akta Luana",d:"8 meses atrás",u:"https://goo.gl/maps/9h3jh2LC64vV6kmJA",t:"Atendimento perfeito desde as escolhas dos brinquedos até o momento da festa. Brinquedos novos, limpos, monitores atenciosos e pontuais. Super indico e com certeza vou alugar novamente. As crianças amaaam e os adultos também."},
{n:"Erica Santos",d:"Um ano atrás",u:"https://goo.gl/maps/VW81awtFJgTvxBqz8",t:"Serviço de primeira qualidade, desde o primeiro contato até o dia da montagem dos brinquedos e monitoramento durante o uso. Vale super a pena."},
{n:"Whosgton Jesus Santos",d:"Um ano atrás",u:"https://goo.gl/maps/adrpVTYtaWSC3sGN6",t:"A melhor empresa do estado, sem igual. Compromisso e responsabilidade é com eles, nota 1.000. Essa recomendo sem medo."}];
document.getElementById("rs").innerHTML=REV.map(r=>`<a class="r" href="${r.u}" target="_blank" rel="noopener"><div class="s">★★★★★</div><p>${r.t}</p><b>${r.n}</b><small>${r.d}</small><em>Ver essa avaliação no Google</em></a>`).join("");
