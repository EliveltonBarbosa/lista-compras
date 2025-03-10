const saveButton = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")
let contador = 0;

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, digite o nome do item.");
        return;
    }
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = `checkbox-${contador++}`;
    const itemText = document.createElement("p");
    itemText.innerText = inputItem.value;

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(itemText)

    itemLista.appendChild(containerItemLista)
    listaDeCompras.appendChild(itemLista)
});
