const saveButton = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item")

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputItem.value);
});
