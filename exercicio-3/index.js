let block = document.querySelector('div')

block.addEventListener("click", function trocarCor(){
    const isBlue = block.classList.contains('blue')

    if(isBlue) {
        block.classList.remove('blue')
        block.classList.add('black')
    } else {
        block.classList.remove('black')
        block.classList.add('blue')
    }
})