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

        elementosParaInserirLinks.innerHTML += `
              <a class="card1" href="${link.url}" target="_blank">
              
                <p>${link.nome}</p>
                
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
  }
});
