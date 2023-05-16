//("Olá, eu sou a IA da Pokédex!")

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  /*body.classList.toggle("modo-escuro");*/

  if (modoEscuroAtivo) {
    body.classList.remove("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute(
        "src", "./src/imagens/imagens/sun.png");
  } else {
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute(
      "src", "./src/imagens/imagens/moon.png");
  }
});