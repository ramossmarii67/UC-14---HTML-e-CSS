const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menuPrincipal");
const botaoTema = document.getElementById("botaoTema");

/* Abre e fecha o menu hambúrguer e atualiza o aria-expanded */
function alternarMenu() {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}
botaoMenu.addEventListener("click", alternarMenu);
menu.addEventListener("click", function (evento) {
  if (evento.target.tagName === "A" && menu.classList.contains("aberto")) {
    alternarMenu();
  }
});

/* Retorna "Bom dia", "Boa tarde" ou "Boa noite" conforme a hora */
function obterSaudacao(hora) {
  if (hora >= 5 && hora < 12) {
    return "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}
document.getElementById("saudacao").textContent = obterSaudacao(new Date().getHours()) + "!";

/* Aplica o tema (claro ou escuro) e guarda a escolha no localStorage */
function aplicarTema(escuro) {
  document.body.classList.toggle("escuro", escuro);
  botaoTema.innerHTML = escuro ? "&#9728;" : "&#9790;";
  try {
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  } catch (erro) {
    /* sem localStorage, o tema só vale nesta visita */
  }
}
botaoTema.addEventListener("click", function () {
  aplicarTema(!document.body.classList.contains("escuro"));
});
try {
  if (localStorage.getItem("tema") === "escuro") {
    aplicarTema(true);
  }
} catch (erro) {
  /* ignora */
}

/* Mostra só os projetos da tecnologia escolhida */
function filtrarProjetos(filtro) {
  document.querySelectorAll(".card").forEach(function (card) {
    const tecnologias = card.dataset.tecnologias.split(" ");
    card.hidden = !(filtro === "todos" || tecnologias.includes(filtro));
  });
  document.querySelectorAll(".filtro").forEach(function (botao) {
    const ativo = botao.dataset.filtro === filtro;
    botao.classList.toggle("filtro--ativo", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}
document.querySelectorAll(".filtro").forEach(function (botao) {
  botao.setAttribute("aria-pressed", String(botao.dataset.filtro === "todos"));
  botao.addEventListener("click", function () {
    filtrarProjetos(botao.dataset.filtro);
  });
});

/* Escreve ou limpa a mensagem de erro de um campo; retorna true se não há erro */
function mostrarErro(idErro, texto) {
  document.getElementById(idErro).textContent = texto;
  return texto === "";
}

/* Confere todos os campos do formulário e retorna true ou false */
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const consentimento = document.getElementById("consentimento").checked;

  const nomeOk = mostrarErro("erroNome", nome === "" ? "Escreva seu nome." : "");

  let textoEmail = "";
  if (email === "") {
    textoEmail = "Escreva seu e-mail.";
  } else if (!email.includes("@") || !email.includes(".")) {
    textoEmail = "O e-mail precisa ter @ e um ponto. Exemplo: nome@site.com";
  }
  const emailOk = mostrarErro("erroEmail", textoEmail);

  let textoMensagem = "";
  if (mensagem === "") {
    textoMensagem = "Escreva sua mensagem.";
  } else if (mensagem.length < 20) {
    textoMensagem = "A mensagem precisa ter pelo menos 20 caracteres (agora tem " + mensagem.length + ").";
  }
  const mensagemOk = mostrarErro("erroMensagem", textoMensagem);

  const consentimentoOk = mostrarErro("erroConsentimento", consentimento ? "" : "Marque a caixa para continuar.");

  return nomeOk && emailOk && mensagemOk && consentimentoOk;
}

/* Ao enviar: mostra sucesso e limpa o formulário, ou mantém os erros na tela */
const formulario = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensagemSucesso.textContent = "";
  if (validarFormulario()) {
    formulario.reset();
    mensagemSucesso.textContent = "Mensagem enviada! Obrigada pelo contato.";
  }
});

/* Insere o ano atual no rodapé */
document.getElementById("anoAtual").textContent = new Date().getFullYear();

/* Mostra o link "Voltar ao topo" só depois de rolar a página */
const voltarTopo = document.getElementById("voltarTopo");
function atualizarVoltarTopo() {
  voltarTopo.style.visibility = window.scrollY > 300 ? "visible" : "hidden";
}
window.addEventListener("scroll", atualizarVoltarTopo);
atualizarVoltarTopo();