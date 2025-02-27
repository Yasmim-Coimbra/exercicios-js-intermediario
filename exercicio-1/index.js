// lembrar sempre de colocar o index no final de qualquer getElementsBy, senão dará erro no código


let colorSwitchBtn = document.getElementsByClassName('switch-color')[0]

let blockToChange = document.getElementsByClassName('upper-block')[0]

colorSwitchBtn
.addEventListener("click", function trocarCor() {
    if (blockToChange.classList.contains('upper-block')) {
        blockToChange.classList.remove('upper-block')
        blockToChange.classList.add('changed-block')
    } else {
        blockToChange.classList.remove('changed-block')
        blockToChange.classList.add('upper-block')
    }
})