/* =========================================================
   EFTO — ficheiro partilhado por todas as páginas
   Aqui mudas o MENU, o RODAPÉ, a EQUIPA e a GALERIA.
   ========================================================= */

/* ---------- 1. MENU (muda aqui e muda em todas as páginas) ---------- */
const MENU = [
  ["escola.html",    "A Escola"],
  ["aulas.html",     "Aulas & Horários"],
  ["equipa.html",    "Equipa"],
  ["eventos.html",   "Eventos"],
  ["galeria.html",   "Galeria"],
  ["contactos.html", "Contactos"],
];

/* ---------- 2. EQUIPA ---------- */
const EQUIPA = [
  ["Francisco Algarvio", "Mentor e treinador"],
  ["José Carlos",        "Responsável pela formação e pela organização das competições"],
  ["Daniel Gonçalves",   "Treinador"],
  ["José Figueiredo",    "Treinador"],
  ["Lígia Trepado",      "Atleta e treinadora"],
  ["Luís Paz",           "Staff técnico e treinador"],
  ["António Coelho",     "Juiz-árbitro"],
  ["Rodrigo Algarvio",   "Técnico de operações"],
  ["Felipe Puttim",      "Técnico de operações"],
  ["Francisco Geraldes", "Técnico de operações"],
];

/* ---------- 3. GALERIA (põe a foto na pasta "imagens" e escreve o nome aqui) ---------- */
const GALERIA = [
  "carreira.jpg","hero-atleta.jpg","inaug-podio.jpg","alvos.jpg",
  "atletas-sorriso.jpg","inaug-atleta.jpg","corredor.jpg","inaug-jovens.jpg",
  "postos.jpg","inaug-premio.jpg","alvo-13.jpg","inaug-grupo.jpg",
  "inaug-treinador.jpg","inaug-publico.jpg","atleta-casaco.jpg","panorama.jpg",
];

/* ---------- Contactos (usados no rodapé e no botão WhatsApp) ---------- */
const TELEFONE = "+351 937 693 022";
const EMAIL = "escolatiroolimpico@gmail.com";
const INSTAGRAM = "https://www.instagram.com/escolatiroolimpico/";
const FACEBOOK = "https://www.facebook.com/p/Escola-de-Forma%C3%A7%C3%A3o-de-Tiro-Ol%C3%ADmpico-61560631461698/";
const YOUTUBE = "https://www.youtube.com/@escolatiroolimpico";

/* =========================================================
   A partir daqui é o "motor" — normalmente não precisas mexer.
   ========================================================= */
const seta = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const paginaAtual = location.pathname.split("/").pop() || "index.html";
const telLink = "tel:" + TELEFONE.replace(/\s/g, "");
const ICONES = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7c0-1 .5-1.5 1.5-1.5H17V2h-2.8C11.3 2 10 3.8 10 6.5V9H7.5v3.5H10V22h4v-9.5h2.8L17.3 9z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5zM9.7 15.1V8.9l5.6 3.1z"/></svg>',
};

/* Cabeçalho */
document.body.insertAdjacentHTML("afterbegin", `
<header id="topo">
  <div class="wrap nav">
    <a href="index.html" class="marca" aria-label="EFTO — Escola de Formação de Tiro Olímpico, página inicial">
      <img class="logo-branco" src="imagens/logo-branco.png" alt="Logótipo da Escola de Formação de Tiro Olímpico">
      <img class="logo-cor" src="imagens/logo-cor.png" alt="" aria-hidden="true">
    </a>
    <button class="burger" aria-label="Abrir menu" id="burger">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <ul class="menu" id="menu">
      ${MENU.map(([url, nome]) => `<li><a href="${url}"${url === paginaAtual ? ' class="ativo"' : ""}>${nome}</a></li>`).join("")}
      <li><a href="contactos.html#form" class="btn btn-pri">Aula experimental</a></li>
    </ul>
  </div>
</header>`);

/* Chamada final + rodapé + WhatsApp */
const semCta = document.body.dataset.semCta !== undefined;
document.body.insertAdjacentHTML("beforeend", `
${semCta ? "" : `<section class="cta"><div class="wrap"><h2>Pronto para o<br>primeiro disparo?</h2><a class="btn" href="contactos.html#form">Marcar aula experimental ${seta}</a></div></section>`}
<footer>
  <div class="wrap">
    <div class="rod-grid">
      <div><img class="logo-rodape" src="imagens/logo-branco.png" alt="EFTO"><p>Escola de Formação de Tiro Olímpico.<br>Da iniciação à competição, em Almada.</p>
        <div class="redes"><a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">${ICONES.ig}</a><a href="${FACEBOOK}" target="_blank" rel="noopener" aria-label="Facebook">${ICONES.fb}</a><a href="${YOUTUBE}" target="_blank" rel="noopener" aria-label="YouTube">${ICONES.yt}</a></div></div>
      <div><h4>Páginas</h4><ul>${MENU.map(([u, n]) => `<li><a href="${u}">${n}</a></li>`).join("")}</ul></div>
      <div><h4>Aulas</h4><ul><li>Segunda e quarta</li><li>19:00 – 20:30</li><li>20:30 – 22:00</li></ul></div>
      <div><h4>Contacto</h4><ul><li><a href="${telLink}">${TELEFONE}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Rua Ferreira Soares, 58<br>2810-296 Almada</li></ul></div>
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

/* Cabeçalho fica sólido ao descer */
const topo = document.getElementById("topo");
const aoDescer = () => topo.classList.toggle("solido", scrollY > 40);
aoDescer(); addEventListener("scroll", aoDescer, { passive: true });

/* Menu do telemóvel */
const menu = document.getElementById("menu");
document.getElementById("burger").onclick = () => { menu.classList.toggle("aberto"); topo.classList.add("solido"); };
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("aberto")));

/* Equipa (só nas páginas que têm <div id="equipaGrid">) */
const eq = document.getElementById("equipaGrid");
if (eq) {
  const cores = ["var(--vermelho)", "var(--amarelo)", "var(--verde)", "var(--navy-700)"];
  eq.innerHTML = EQUIPA.map(([nome, funcao], i) => {
    const iniciais = nome.split(" ").map(p => p[0]).slice(0, 2).join("");
    return `<div class="membro rv${i === 0 ? " destaque" : ""}"><span class="avatar" style="background:${cores[i % 4]}">${iniciais}</span><div><h3>${nome}</h3><p>${funcao}</p></div></div>`;
  }).join("");
}

/* Galeria + visualizador (data-limite="6" mostra só 6 fotos) */
const gal = document.getElementById("gal");
if (gal) {
  const fotos = GALERIA.slice(0, +gal.dataset.limite || GALERIA.length);
  gal.innerHTML = fotos.map((f, i) => `<button data-i="${i}" class="rv"><img loading="lazy" src="imagens/${f}" alt="Fotografia da EFTO ${i + 1}"></button>`).join("");
  document.body.insertAdjacentHTML("beforeend", `<div class="lightbox" id="lb" role="dialog" aria-label="Fotografia ampliada"><button class="lb-btn lb-fechar" id="lbX" aria-label="Fechar">×</button><button class="lb-btn lb-ant" id="lbA" aria-label="Anterior">‹</button><img id="lbImg" alt=""><button class="lb-btn lb-seg" id="lbS" aria-label="Seguinte">›</button></div>`);
  const lb = document.getElementById("lb"), lbImg = document.getElementById("lbImg");
  let atual = 0;
  const mostra = i => { atual = (i + fotos.length) % fotos.length; lbImg.src = "imagens/" + fotos[atual]; lb.classList.add("aberto"); };
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
if (form) form.addEventListener("submit", async e => {
  e.preventDefault();
  const d = new FormData(form);
  if (d.get("_honey")) return; // proteção contra robôs de spam
  const botao = form.querySelector("button[type=submit]");
  const estado = document.getElementById("estadoForm");
  botao.disabled = true; botao.dataset.txt = botao.innerHTML; botao.textContent = "A enviar…";
  estado.className = "estado"; estado.textContent = "";
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `Novo pedido de aula experimental — ${d.get("nome")}`,
        _template: "table",
        _captcha: "false",
        _replyto: d.get("email") || undefined,
        "Nome": d.get("nome"),
        "Telefone": d.get("tel"),
        "Email": d.get("email") || "(não indicado)",
        "Turma preferida": d.get("turma"),
        "Mensagem": d.get("msg") || "(sem mensagem)",
      }),
    });
    const res = await r.json().catch(() => ({}));
    if (!r.ok || res.success === "false" || res.success === false) throw new Error(res.message || "erro");
    form.reset();
    estado.className = "estado ok";
    estado.textContent = "Pedido enviado! Entraremos em contacto consigo muito em breve.";
  } catch (err) {
    estado.className = "estado erro";
    estado.innerHTML = `Não foi possível enviar agora. Ligue-nos para o <a href="${telLink}">${TELEFONE}</a> ou escreva para <a href="mailto:${EMAIL}">${EMAIL}</a>.`;
  } finally {
    botao.disabled = false; botao.innerHTML = botao.dataset.txt;
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

/* Animação ao aparecer no ecrã */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".rv").forEach(el => io.observe(el));
