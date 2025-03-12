import { criarItemLista } from "./scripts/criarItemLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const saveButton = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const itemLista = criarItemLista();
    listaDeCompras.appendChild(itemLista);
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);