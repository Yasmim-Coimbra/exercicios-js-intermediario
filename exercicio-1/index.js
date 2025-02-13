// lembrar sempre de colocar o index no final de qualquer getElementsBy, senão dará erro no código


let colorSwitchBtn = document.getElementsByClassName('switch-color')[0]

let blockToChange = document.getElementsByClassName('upper-block')[0]

colorSwitchBtn
.addEventListener("click", function trocarCor() {
    blockToChange.classList.add('changed-block')
})