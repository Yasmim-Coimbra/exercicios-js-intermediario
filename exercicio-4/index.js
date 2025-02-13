let inputUnico = document.querySelector("#meu-input")

inputUnico.addEventListener("change", function alterarCorBorda() {
    if (inputUnico.value !== "") {
        inputUnico.classList.add("not-blank")
    } else {
        inputUnico.classList.remove("not-blank")
    }
})