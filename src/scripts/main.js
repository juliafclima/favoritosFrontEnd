import todosLinks from "./dados.js";

document.addEventListener("DOMContentLoaded", function () {
  //const loader = document.getElementById("loader");
  const elementosParaInserirLinks = document.getElementById("links");

  //loader.style.display = "block";

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
              <a class="card1" href="${link.url}" target="_blank">
              
                <p>${link.nome}</p>
                <p class="small">${descricaoLimitada}</p>
                
                <div class="card__categoria">${categoriasHTML}</div>

                <div class="go-corner" href="${link.url}">
                  <div class="go-arrow">
                  →
                  </div>
                </div>
              </a>
        `;
      });
    }

    //loader.style.display = "none";
    //mainContent.classList.remove("hidden");
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
