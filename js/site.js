/* =========================================================
   EFTO — ficheiro partilhado por todas as páginas
   Aqui mudas o MENU, o RODAPÉ, a EQUIPA e a GALERIA.
   ========================================================= */

/* ---------- 0. NOME DA SECÇÃO DE ARTIGOS (provisório) ----------
   Muda só aqui e muda no menu, no rodapé e nos títulos das páginas.
   Outras ideias: "Blog", "Artigos", "Diário de Tiro", "Na Linha de Tiro" */
const NOME_NOTICIAS = "Notícias";

/* ---------- 1. MENU (muda aqui e muda em todas as páginas) ---------- */
const MENU = [
  ["escola.html",    "A Escola"],
  ["aulas.html",     "Horários & Preçário"],
  ["equipa.html",    "Equipa"],
  ["eventos.html",   "Eventos"],
  ["noticias.html",  NOME_NOTICIAS],
  ["galeria.html",   "Galeria"],
  ["contactos.html", "Contactos"],
];

/* ---------- 2. EQUIPA ---------- */
/* Para cada pessoa:
   foto:         nome do ficheiro dentro de imagens/equipa (ex.: "francisco-algarvio.jpg"). Vazio = mostra as iniciais.
   bio:          uma descrição curta da pessoa. Vazio = mostra "Biografia em breve."
   certificados: link para os certificados (ex.: um PDF em imagens/equipa ou um link do Google Drive). Vazio = sem link. */
const EQUIPA = [
  { nome: "Francisco Algarvio", funcao: "Mentor e treinador",
    foto: "", bio: "",
    certificados: "" },
  { nome: "José Carlos", funcao: "Responsável pela formação e pela organização das competições",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Daniel Gonçalves", funcao: "Treinador",
    foto: "", bio: "",
    certificados: "" },
  { nome: "José Figueiredo", funcao: "Treinador",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Lígia Trepado", funcao: "Atleta e treinadora",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Luís Paz", funcao: "Staff técnico e treinador",
    foto: "", bio: "",
    certificados: "" },
  { nome: "António Coelho", funcao: "Juiz-árbitro",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Rodrigo Algarvio", funcao: "Técnico de operações",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Felipe Puttim", funcao: "Técnico de operações",
    foto: "", bio: "",
    certificados: "" },
  { nome: "Francisco Geraldes", funcao: "Técnico de operações",
    foto: "", bio: "",
    certificados: "" },
];

/* ---------- 3. GALERIA (põe a foto na pasta "imagens/galeria" e escreve o nome aqui, pela ordem em que deve aparecer) ---------- */
const GALERIA = [
  "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg",
  "09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
];

/* ---------- Contactos (usados no rodapé e no botão WhatsApp) ---------- */
const TELEFONE = "+351 937 693 022";
const EMAIL = "escolatiroolimpico@gmail.com";
const INSTAGRAM = "https://www.instagram.com/escolatiroolimpico/";
const FACEBOOK = "https://www.facebook.com/p/Escola-de-Forma%C3%A7%C3%A3o-de-Tiro-Ol%C3%ADmpico-61560631461698/";
const YOUTUBE = "https://www.youtube.com/@escolatiroolimpico";
const MORADA = "Rua Ferreira Soares, 58<br>2810-296 Almada";
const MAPS = "https://maps.google.com/?q=Rua+Ferreira+Soares+58+2810-296+Almada";

/* ---------- 4. PARCEIROS (aparecem no rodapé de todas as páginas) ----------
   logo: ficheiro dentro de imagens/parceiros (ex.: "camara-almada.png"). Vazio = mostra um espaço reservado.
   link: site do parceiro (opcional). Para tirar um espaço, apaga a linha toda. */
const PARCEIROS = [
  { nome: "Parceiro 1", logo: "", link: "" },
  { nome: "Parceiro 2", logo: "", link: "" },
  { nome: "Parceiro 3", logo: "", link: "" },
  { nome: "Parceiro 4", logo: "", link: "" },
  { nome: "Parceiro 5", logo: "", link: "" },
];

/* =========================================================
   A partir daqui é o "motor" — normalmente não precisas mexer.
   ========================================================= */
const seta = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
let paginaAtual = location.pathname.split("/").pop() || "index.html";
if (paginaAtual.startsWith("artigo")) paginaAtual = "noticias.html"; // um artigo acende "Notícias" no menu
const telLink = "tel:" + TELEFONE.replace(/\s/g, "");
const ICONES = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7c0-1 .5-1.5 1.5-1.5H17V2h-2.8C11.3 2 10 3.8 10 6.5V9H7.5v3.5H10V22h4v-9.5h2.8L17.3 9z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5zM9.7 15.1V8.9l5.6 3.1z"/></svg>',
};

const ICONE_MENU = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
const ICONE_FECHAR = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const ic = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${d}</svg>`;

/* Cabeçalho */
document.body.insertAdjacentHTML("afterbegin", `
<header id="topo">
  <div class="wrap nav">
    <a href="index.html" class="marca" aria-label="EFTO — Escola de Formação de Tiro Olímpico, página inicial">
      <img class="logo-branco" src="imagens/logos/logo-branco.png" alt="Logótipo da Escola de Formação de Tiro Olímpico">
      <img class="logo-cor" src="imagens/logos/logo-cor.png" alt="" aria-hidden="true">
    </a>
    <button class="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu" id="burger">${ICONE_MENU}</button>
    <ul class="menu" id="menu">
      ${MENU.map(([url, nome]) => `<li><a href="${url}"${url === paginaAtual ? ' class="ativo" aria-current="page"' : ""}>${nome}</a></li>`).join("")}
      <li><a href="contactos.html#form" class="btn btn-pri">Aula experimental</a></li>
      <li class="menu-extra"><a href="${telLink}">${TELEFONE}</a> · <a href="${INSTAGRAM}" target="_blank" rel="noopener">Instagram</a></li>
    </ul>
  </div>
</header>`);

/* Chamada final + rodapé + WhatsApp */
const semCta = document.body.dataset.semCta !== undefined;
document.body.insertAdjacentHTML("beforeend", `
${semCta ? "" : `<section class="cta"><div class="wrap"><h2>Pronto para o<br>primeiro disparo?</h2><a class="btn" href="contactos.html#form">Marcar aula experimental ${seta}</a></div></section>`}
<footer>
  <div class="wrap">
    <div class="parceiros">
      <h4>Parceiros e apoios</h4>
      <div class="parc-lista">${PARCEIROS.map(p => {
        if (!p.logo) return `<span class="parc parc-vazio">${p.nome}</span>`;
        const img = `<img src="imagens/parceiros/${p.logo}" alt="${p.nome}" loading="lazy">`;
        return p.link ? `<a class="parc" href="${p.link}" target="_blank" rel="noopener">${img}</a>` : `<span class="parc">${img}</span>`;
      }).join("")}</div>
    </div>
    <div class="rod-grid">
      <div><img class="logo-rodape" src="imagens/logos/logo-branco.png" alt="EFTO" loading="lazy"><p>Escola de Formação de Tiro Olímpico.<br>Da iniciação à competição, em Almada.</p>
        <div class="redes"><a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">${ICONES.ig}</a><a href="${FACEBOOK}" target="_blank" rel="noopener" aria-label="Facebook">${ICONES.fb}</a><a href="${YOUTUBE}" target="_blank" rel="noopener" aria-label="YouTube">${ICONES.yt}</a></div></div>
      <div><h4>Páginas</h4><ul>${MENU.map(([u, n]) => `<li><a href="${u}">${n}</a></li>`).join("")}</ul></div>
      <div><h4>Aulas</h4><ul><li>Segunda e quarta</li><li>19:00 – 20:30</li><li>20:30 – 22:00</li></ul>
        <div class="rod-cta"><a class="btn btn-pri" href="contactos.html#form">Aula experimental</a><a class="btn btn-contorno" href="contactos.html?tipo=treino#form">Treino livre</a></div></div>
      <div><h4>Contacto</h4><ul>
        <li class="ic-linha">${ic('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>')}<a href="${telLink}">${TELEFONE}</a></li>
        <li class="ic-linha">${ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')}<a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li class="ic-linha">${ic('<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>')}<a href="${MAPS}" target="_blank" rel="noopener">${MORADA}</a></li>
      </ul></div>
    </div>
    <div class="rod-fim"><span>© ${new Date().getFullYear()} EFTO — Escola de Formação de Tiro Olímpico</span><span><a href="privacidade.html">Privacidade e cookies</a> · <button type="button" class="link-btn" id="abrirCookies">Definições de cookies</button></span></div>
  </div>
</footer>
<nav class="barra-tel" aria-label="Ações rápidas">
  <a href="${telLink}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>Ligar</a>
  <a href="https://wa.me/${TELEFONE.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Gostava de marcar uma aula experimental na EFTO.")}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-10.3 18.1L0 24l6.1-1.6A12 12 0 1 0 12 0zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8z"/></svg>WhatsApp</a>
  <a href="contactos.html#form" class="destaque">Marcar aula</a>
</nav>
<a class="flutua" href="https://wa.me/${TELEFONE.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Gostava de marcar uma aula experimental na EFTO.")}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 0 19.6zM12 0a12 12 0 0 0-10.3 18.1L0 24l6.1-1.6A12 12 0 1 0 12 0z"/></svg>
</a>`);

/* Nome da secção de artigos: preenche todos os sítios marcados com data-nome-noticias */
document.querySelectorAll("[data-nome-noticias]").forEach(el => { el.textContent = NOME_NOTICIAS; });
document.title = document.title.replace("Notícias", NOME_NOTICIAS);

/* Filtros por categoria (página de notícias) */
const filtros = document.querySelectorAll(".filtro");
filtros.forEach(botao => botao.addEventListener("click", () => {
  const cat = botao.dataset.cat;
  filtros.forEach(b => b.setAttribute("aria-pressed", b === botao ? "true" : "false"));
  document.querySelectorAll("[data-cat-artigo]").forEach(art => {
    art.hidden = cat !== "todas" && art.dataset.catArtigo !== cat;
  });
}));

/* Botões de partilha (página de artigo) */
const partilha = document.querySelector(".partilha");
if (partilha) {
  const url = encodeURIComponent(location.href), titulo = encodeURIComponent(document.title);
  partilha.querySelector("[data-rede=fb]").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  partilha.querySelector("[data-rede=wa]").href = `https://wa.me/?text=${titulo}%20${url}`;
  const copiar = partilha.querySelector("[data-rede=link]");
  copiar.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); copiar.setAttribute("aria-label", "Link copiado"); copiar.classList.add("ok"); }
    catch (e) { prompt("Copie o link:", location.href); }
  });
}

/* Cabeçalho fica sólido ao descer (ou com o menu aberto) */
const topo = document.getElementById("topo");
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const aoDescer = () => topo.classList.toggle("solido", scrollY > 40 || menu.classList.contains("aberto"));
aoDescer(); addEventListener("scroll", aoDescer, { passive: true });

/* Menu do telemóvel: abre/fecha no botão ☰/✕, ao escolher uma página, com a tecla Esc ou ao alargar o ecrã */
const abrirMenu = abrir => {
  menu.classList.toggle("aberto", abrir);
  burger.setAttribute("aria-expanded", abrir);
  burger.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  burger.innerHTML = abrir ? ICONE_FECHAR : ICONE_MENU;
  aoDescer();
};
burger.onclick = () => abrirMenu(!menu.classList.contains("aberto"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => abrirMenu(false)));
addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("aberto")) { abrirMenu(false); burger.focus(); } });
matchMedia("(min-width:1201px)").addEventListener("change", e => { if (e.matches) abrirMenu(false); });

/* Equipa (só nas páginas que têm <div id="equipaGrid">) */
const eq = document.getElementById("equipaGrid");
if (eq) {
  const cores = ["var(--vermelho)", "var(--amarelo)", "var(--verde)", "var(--navy-700)"];
  eq.innerHTML = EQUIPA.map((m, i) => {
    const iniciais = m.nome.split(" ").map(p => p[0]).slice(0, 2).join("");
    const foto = m.foto
      ? `<img class="membro-foto" src="imagens/equipa/${m.foto}" alt="${m.nome}" loading="lazy">`
      : `<span class="membro-foto avatar" style="background:${cores[i % 4]}">${iniciais}</span>`;
    const cert = m.certificados
      ? `<a class="membro-cert" href="${m.certificados}" target="_blank" rel="noopener">Ver certificados →</a>`
      : `<span class="membro-cert sem">Certificados em breve</span>`;
    return `<article class="membro rv">
      <div class="membro-lado"><h3>${m.nome}</h3><span class="membro-funcao">${m.funcao}</span>${foto}</div>
      <div class="membro-texto"><p>${m.bio || "Biografia em breve."}</p>${cert}</div>
    </article>`;
  }).join("");
}

/* Galeria + visualizador
   - página Galeria: mostra todas as fotos
   - página inicial (class "gal-mini"): mostra só as primeiras (data-limite) em miniatura + um quadrado "Ver mais"
   O visualizador deixa sempre passar por TODAS as fotos com as setas. */
const gal = document.getElementById("gal");
if (gal) {
  const fotos = GALERIA;
  const limite = +gal.dataset.limite || fotos.length;
  const mini = gal.classList.contains("gal-mini");
  gal.innerHTML = fotos.slice(0, limite).map((f, i) => `<button data-i="${i}" class="rv" aria-label="Ampliar fotografia ${i + 1}"><img loading="lazy" src="imagens/galeria/${f}" alt="Fotografia da EFTO ${i + 1}"></button>`).join("")
    + (mini ? `<a class="gal-mais rv" href="galeria.html" style="background-image:url(imagens/galeria/${fotos[limite % fotos.length]})"><span><b>Ver mais</b>${fotos.length} fotos →</span></a>` : "");
  document.body.insertAdjacentHTML("beforeend", `<div class="lightbox" id="lb" role="dialog" aria-label="Fotografia ampliada"><button class="lb-btn lb-fechar" id="lbX" aria-label="Fechar">×</button><button class="lb-btn lb-ant" id="lbA" aria-label="Anterior">‹</button><img id="lbImg" alt=""><button class="lb-btn lb-seg" id="lbS" aria-label="Seguinte">›</button></div>`);
  const lb = document.getElementById("lb"), lbImg = document.getElementById("lbImg");
  let atual = 0;
  const mostra = i => { atual = (i + fotos.length) % fotos.length; lbImg.src = "imagens/galeria/" + fotos[atual]; lb.classList.add("aberto"); };
  const fecha = () => lb.classList.remove("aberto");
  gal.addEventListener("click", e => { const b = e.target.closest("button"); if (b) mostra(+b.dataset.i); });
  document.getElementById("lbX").onclick = fecha;
  document.getElementById("lbA").onclick = () => mostra(atual - 1);
  document.getElementById("lbS").onclick = () => mostra(atual + 1);
  lb.addEventListener("click", e => { if (e.target === lb) fecha(); });
  addEventListener("keydown", e => {
    if (!lb.classList.contains("aberto")) return;
    if (e.key === "Escape") fecha();
    if (e.key === "ArrowLeft") mostra(atual - 1);
    if (e.key === "ArrowRight") mostra(atual + 1);
  });
}

/* Formulário: envia o pedido DIRETAMENTE para o email da escola.
   Usa o serviço gratuito FormSubmit (formsubmit.co).
   IMPORTANTE: no 1.º envio, a FormSubmit manda um email de ativação para
   a caixa da escola — é preciso clicar em "Activate Form" uma única vez. */
const form = document.getElementById("form");

/* Formulário com 2 tipos de pedido: "Aula experimental" ou "Treino livre".
   O link contactos.html?tipo=treino#form abre logo no treino livre
   (o link antigo ?tipo=atleta continua a funcionar).
   msgObrig = se a mensagem é obrigatória nesse tipo de pedido. */
const TIPOS = {
  aula:   { titulo: "Pedido de aula experimental", assunto: "Novo pedido de aula experimental", msgObrig: true,
            msg: "Idade, experiência anterior, dúvidas…",
            ok: "Pedido enviado! Entraremos em contacto consigo muito em breve." },
  treino: { titulo: "Pedido de treino livre",      assunto: "Novo pedido de treino livre",      msgObrig: false,
            msg: "Disciplina (carabina/pistola), dias em que gostaria de treinar, dúvidas…",
            ok: "Pedido de treino livre enviado! Entraremos em contacto consigo muito em breve." },
};
const tipoUrl = new URLSearchParams(location.search).get("tipo");
let tipoPedido = tipoUrl === "treino" || tipoUrl === "atleta" ? "treino" : "aula";

/* Mensagens de erro de cada campo obrigatório */
const ERROS = {
  nome:      "Indique o seu nome e apelido.",
  tel:       "Indique o seu número de telefone.",
  email:     "Indique o seu email.",
  federacao: "Indique o seu número de atleta da Federação.",
  msg:       "Escreva uma mensagem.",
  consent:   "Tem de aceitar a Política de Privacidade para enviarmos o pedido.",
};
/* Devolve o texto do erro de um campo, ou "" se estiver bem preenchido */
const erroDe = campo => {
  if (campo.disabled) return "";
  const v = campo.type === "checkbox" ? (campo.checked ? "x" : "") : campo.value.trim();
  if (campo.required && !v) return ERROS[campo.name] || "Preencha este campo.";
  if (!v) return "";
  if (campo.name === "nome" && v.split(/\s+/).length < 2) return "Indique o nome e também o apelido.";
  if (campo.name === "tel" && v.replace(/\D/g, "").length < 9) return "Indique um número de telefone válido (pelo menos 9 dígitos).";
  if (campo.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Indique um email válido (ex.: nome@exemplo.pt).";
  return "";
};
/* Mostra (ou apaga) a mensagem de erro por baixo do campo */
const mostraErro = (campo, texto) => {
  /* o erro fica dentro do campo, por baixo da caixa; na caixa de aceitar fica por baixo da frase */
  const caixa = campo.closest("label");
  const fora = caixa.classList.contains("consent");
  let p = fora ? caixa.nextElementSibling : caixa.querySelector(".erro-campo");
  const existe = p && p.classList.contains("erro-campo");
  if (!existe && !texto) return; // sem erro e sem caixa: não há nada a fazer
  if (!existe) {
    p = document.createElement("span");
    p.className = "erro-campo"; p.id = "erro-" + campo.name;
    fora ? caixa.after(p) : caixa.append(p);
    campo.setAttribute("aria-describedby", p.id);
  }
  p.textContent = texto;
  campo.toggleAttribute("aria-invalid", !!texto);
};
const camposObrig = () => [...form.querySelectorAll("[required]")];

if (form) {
  form.insertAdjacentHTML("afterbegin", `<div class="form-tipo" role="group" aria-label="Tipo de pedido">
    <button type="button" data-tipo="aula">Aula experimental</button><button type="button" data-tipo="treino">Treino livre</button></div>`);
  const mudaTipo = t => {
    tipoPedido = t;
    form.querySelectorAll("[data-tipo]").forEach(b => b.setAttribute("aria-pressed", b.dataset.tipo === t));
    form.querySelector("h3").textContent = TIPOS[t].titulo;
    /* mostra só os campos deste tipo; os escondidos ficam desligados (não são validados nem enviados) */
    form.querySelectorAll("[data-so]").forEach(bloco => {
      const ativo = bloco.dataset.so === t;
      bloco.hidden = !ativo;
      bloco.querySelectorAll("input,select,textarea").forEach(c => { c.disabled = !ativo; if (!ativo) mostraErro(c, ""); });
    });
    /* a mensagem é obrigatória na aula experimental e opcional no treino livre */
    const msg = form.querySelector("textarea[name=msg]");
    msg.placeholder = TIPOS[t].msg;
    msg.required = TIPOS[t].msgObrig;
    form.querySelector(".rotulo-msg").innerHTML = TIPOS[t].msgObrig
      ? 'Mensagem <span class="obrig">*</span>' : 'Mensagem <small class="opc">(opcional)</small>';
    mostraErro(msg, "");
    atualizaBotao();
  };
  form.querySelector(".form-tipo").addEventListener("click", e => { const b = e.target.closest("[data-tipo]"); if (b) mudaTipo(b.dataset.tipo); });
  mudaTipo(tipoPedido);
  /* sempre que algo muda: o erro desaparece logo quando o campo é corrigido,
     e o botão "Enviar pedido" liga/desliga conforme os obrigatórios */
  const aoMudar = e => {
    if (e.target.hasAttribute("aria-invalid")) mostraErro(e.target, erroDe(e.target));
    atualizaBotao();
  };
  form.addEventListener("input", aoMudar);
  form.addEventListener("change", aoMudar);
  /* ao sair de um campo obrigatório mal preenchido, mostra o erro por baixo dele */
  form.addEventListener("focusout", e => { if (e.target.required) mostraErro(e.target, erroDe(e.target)); });
}

/* O botão "Enviar pedido" só fica disponível quando todos os campos obrigatórios estão bem preenchidos.
   Enquanto não estiverem, aparece por baixo a nota "Preencha os campos obrigatórios…". */
function atualizaBotao() {
  const botao = form.querySelector("button[type=submit]");
  if (botao.dataset.aEnviar) return; // durante o envio, o botão fica desligado
  const falta = camposObrig().some(c => erroDe(c));
  botao.disabled = falta;
  document.getElementById("faltaPreencher").hidden = !falta;
}

if (form) form.addEventListener("submit", async e => {
  e.preventDefault();
  /* 1.º verifica os campos obrigatórios; se algum falhar, mostra o erro e não envia */
  let primeiroErro = null;
  camposObrig().forEach(c => {
    const texto = erroDe(c);
    mostraErro(c, texto);
    if (texto && !primeiroErro) primeiroErro = c;
  });
  if (primeiroErro) { primeiroErro.focus(); return; }

  const d = new FormData(form);
  if (d.get("_honey")) return; // proteção contra robôs de spam
  const extra = tipoPedido === "aula"
    ? { "Disponibilidade": d.getAll("disp").join(", ") || "(não indicada)" }
    : { "Número de atleta (Federação)": d.get("federacao").trim(), "Clube": d.get("clube")?.trim() || "(não indicado)" };
  const botao = form.querySelector("button[type=submit]");
  const estado = document.getElementById("estadoForm");
  botao.disabled = true; botao.dataset.aEnviar = "1"; botao.dataset.txt = botao.innerHTML; botao.textContent = "A enviar…";
  estado.className = "estado"; estado.textContent = "";
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `${TIPOS[tipoPedido].assunto} — ${d.get("nome")}`,
        _template: "table",
        _captcha: "false",
        _replyto: d.get("email"),
        "Tipo de pedido": TIPOS[tipoPedido].titulo,
        "Nome e apelido": d.get("nome").trim(),
        "Telefone": d.get("tel").trim(),
        "Email": d.get("email").trim(),
        ...extra,
        "Mensagem": d.get("msg").trim() || "(sem mensagem)",
      }),
    });
    const res = await r.json().catch(() => ({}));
    if (!r.ok || res.success === "false" || res.success === false) throw new Error(res.message || "erro");
    form.reset();
    estado.className = "estado ok";
    estado.textContent = TIPOS[tipoPedido].ok;
  } catch (err) {
    estado.className = "estado erro";
    estado.innerHTML = `Não foi possível enviar agora. Ligue-nos para o <a href="${telLink}">${TELEFONE}</a> ou escreva para <a href="mailto:${EMAIL}">${EMAIL}</a>.`;
  } finally {
    botao.innerHTML = botao.dataset.txt; delete botao.dataset.aEnviar;
    atualizaBotao(); // depois de enviar o formulário fica vazio, por isso o botão volta a ficar desligado
  }
});

/* ---------- COOKIES ----------
   "necessarios" / "recusado" → só o essencial (o mapa do Google fica bloqueado)
   "todos"                    → carrega também o mapa do Google */
const CHAVE = "efto-cookies";
const lerEscolha = () => { try { return localStorage.getItem(CHAVE); } catch { return null; } };
const guardarEscolha = v => { try { localStorage.setItem(CHAVE, v); } catch {} };

function aplicarCookies() {
  const ok = lerEscolha() === "todos";
  document.querySelectorAll("[data-mapa]").forEach(box => {
    if (ok && !box.querySelector("iframe")) {
      box.innerHTML = `<iframe class="mapa" loading="lazy" title="Mapa da EFTO" src="${box.dataset.mapa}"></iframe>`;
    } else if (!ok) {
      box.innerHTML = `<div class="mapa-bloq"><p>O mapa do Google usa cookies de terceiros.</p><button type="button" class="btn btn-sec" data-aceitar-mapa>Aceitar e mostrar mapa</button></div>`;
    }
  });
}
document.body.insertAdjacentHTML("beforeend", `
<div class="cookies" id="cookies" role="dialog" aria-live="polite" aria-label="Aviso de cookies" hidden>
  <div class="ck-txt"><b>Este site usa cookies 🍪</b>
    <p>Usamos cookies necessários para o site funcionar. Com a sua autorização, usamos também cookies de terceiros (mapa do Google). <a href="privacidade.html#cookies">Saber mais</a></p></div>
  <div class="ck-btns">
    <button type="button" class="ck ck-linha" data-ck="recusado">Recusar</button>
    <button type="button" class="ck ck-linha" data-ck="necessarios">Apenas necessários</button>
    <button type="button" class="ck ck-cheio" data-ck="todos">Aceitar todos</button>
  </div>
</div>`);
const caixaCookies = document.getElementById("cookies");
if (!lerEscolha()) caixaCookies.hidden = false;
caixaCookies.addEventListener("click", e => {
  const b = e.target.closest("[data-ck]"); if (!b) return;
  guardarEscolha(b.dataset.ck); caixaCookies.hidden = true; aplicarCookies();
});
document.getElementById("abrirCookies").onclick = () => { caixaCookies.hidden = false; };
document.addEventListener("click", e => {
  if (e.target.closest("[data-aceitar-mapa]")) { guardarEscolha("todos"); caixaCookies.hidden = true; aplicarCookies(); }
});
aplicarCookies();

/* ---------- ANIMAÇÕES AO FAZER SCROLL ----------
   Só usam opacidade e movimento (o mais leve para o browser). Cada elemento anima uma única vez. */
const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

// títulos e textos de introdução das secções também aparecem com fade
document.querySelectorAll(".sec .wrap > .etiqueta, .sec .wrap > h2, .sec .wrap > .lead, .sec-topo, .topo-pag .wrap > *")
  .forEach(el => { if (!el.closest(".rv")) el.classList.add("rv"); });
// blocos de duas colunas: um entra pela esquerda e o outro pela direita
document.querySelectorAll(".duas-col > .rv:first-child").forEach(el => el.classList.add("rv-esq"));
document.querySelectorAll(".duas-col > .rv:last-child:not(:first-child), .inclusivo-fotos").forEach(el => el.classList.add("rv-dir"));
// grelhas de cartões: aparecem em cascata, um a seguir ao outro
document.querySelectorAll(".passos, .art-grid, .ev-grid, .perfis, .precos, .equipa-grid, .gal, .valores, .ct-info").forEach(g =>
  [...g.children].forEach((c, i) => { c.classList.add("rv"); c.style.transitionDelay = Math.min(i % 8, 5) * 90 + "ms"; }));
// cabeçalho das subpáginas: em cascata
document.querySelectorAll(".topo-pag .wrap > .rv").forEach((el, i) => { el.style.transitionDelay = i * 100 + "ms"; });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target;
  el.classList.add("on"); io.unobserve(el);
  setTimeout(() => { el.style.transitionDelay = ""; }, 1400); // depois de aparecer, o hover reage sem atraso
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".rv").forEach(el => semMovimento ? el.classList.add("on") : io.observe(el));
