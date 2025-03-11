import { criarItemLista } from "./scripts/criarItemLista.js";

const saveButton = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const itemLista = criarItemLista();
    listaDeCompras.appendChild(itemLista)
    verificarListaVazia();
});

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

verificarListaVazia();