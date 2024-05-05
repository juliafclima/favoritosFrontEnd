import todosLinks from "./dados.js";

document.addEventListener("DOMContentLoaded", function () {
  const elementosParaInserirLinks = document.getElementById("links");

  exibirLinksNaTela(todosLinks);

  function exibirLinksNaTela(listaDeLinks) {
    for (const category in listaDeLinks) {
      listaDeLinks[category].data.forEach((link) => {
        let categoriasHTML = "";

        link.categorias.forEach((categoria) => {
          categoriasHTML += `<img class="card__categoria-image" src="${categoria}"/>`;
        });

        const descricaoLimitada = limitarTexto(link.descricao, limitePalavras);

        elementosParaInserirLinks.innerHTML += `
        <div class="card">
        <div>
          <a class="card__link" href="${link.url}" target="_blank">
            <h2 class="card__titulo">${link.nome}</h2>
          </a>
          <p class="card__descricao">${descricaoLimitada}</p>
          </div>
          
          <div class="card__categoria">${categoriasHTML}</div>
        </div>
        `;
      });
    }
  }
});

function limitarTexto(texto, limite) {
  const palavras = texto.split(" ");

  if (palavras.length > limite) {
    return palavras.slice(0, limite).join(" ") + "...";
  } else {
    return texto;
  }
}

const limitePalavras = 10;
