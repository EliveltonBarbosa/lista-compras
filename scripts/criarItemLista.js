const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemLista() {
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

    inputCheckbox.addEventListener("click", () => {
        if (inputCheckbox.checked) {
            itemText.style.textDecoration = "line-through";
        } else {
            itemText.style.textDecoration = "none";
        }
    });

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(itemText)

    itemLista.appendChild(containerItemLista)

    const textoData = criarTextoData();
    itemLista.appendChild(textoData);

    inputItem.value = ""

    return itemLista;
}

function criarTextoData() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" })
        .charAt(0)
        .toUpperCase() + new Date().toLocaleDateString("pt-BR", { weekday: "long" })
        .slice(1);
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    const textoData = document.createElement("p");
    textoData.classList.add("texto-data");
    textoData.innerText = dataCompleta;
    return textoData;
}
