const btnSwitchBack = document.getElementById('switch-back');
const btnSwitchFoward = document.getElementById('switch-foward');

const body = document.querySelector('body')

const cards = document.querySelectorAll('.card')
let cardActive = 0

if(cardActive === cards.length - 1 && cardActive === 0) {
    btnSwitchFoward.classList.add('last')
    // se tiver só 1 card, ou seja, se o último e o primeiro card for o mesmo, as duas setas estarão desativadas e não entram dentro do if abaixo(não recebem o addEventListener)
}

if(!(cardActive === cards.length - 1 && cardActive === 0)){
    btnSwitchFoward.addEventListener('click', function trocarImagem() {
        if(cardActive === 0) {
            btnSwitchBack.classList.remove('last')
            // para tornar a seta de voltar clicável novamente a partir do 2º card
        } else if(cardActive === cards.length - 1) {
            return; // para parar a execução da função quando chegar no último card
        } else if (cardActive === cards.length - 2) {
            btnSwitchFoward.classList.add('last')
            // para tornar a seta de avançar não-clicável novamente no último card
        }
    
        cards[cardActive].classList.remove('active')
        cardActive++
        cards[cardActive].classList.add('active')
    
    
        // parte que eu não consegui fazer de modo que o código fique reutilizável
        if(cardActive === 0) {
            body.classList.remove('yellowBg', 'burgundyBg', 'blueBg')
            body.classList.add('pinkBg')
        } else if (cardActive === 1) {
            body.classList.remove('pinkBg', 'burgundyBg', 'blueBg')
            body.classList.add('yellowBg')
        } else if (cardActive === 2) {
            body.classList.remove('pinkBg', 'yellowBg', 'blueBg')
            body.classList.add('burgundyBg')
        } else if (cardActive === 3) {
            body.classList.remove('pinkBg', 'yellowBg', 'burgundyBg')
            body.classList.add('blueBg')
        }
    })
    
    btnSwitchBack.addEventListener('click', function trocarImagem() {
        if(cardActive === 0) {
            return; // para parar a execução da função quando chegar no primeiro card
        } else if (cardActive === 1) {
            btnSwitchBack.classList.add('last')
            // para tornar a seta de voltar não-clicável novamente no primeiro card
        } else if(cardActive === cards.length - 1) {
            btnSwitchFoward.classList.remove('last')
            // para tornar a seta de avançar clicável novamente a partir do penultimo card
        }
    
        cards[cardActive].classList.remove('active')
        cardActive--
        cards[cardActive].classList.add('active')
    
    
        // parte que eu não consegui fazer de modo que o código fique reutilizável
        if(cardActive === 0) {
            body.classList.remove('yellowBg', 'burgundyBg', 'blueBg')
            body.classList.add('pinkBg')
        } else if (cardActive === 1) {
            body.classList.remove('pinkBg', 'burgundyBg', 'blueBg')
            body.classList.add('yellowBg')
        } else if (cardActive === 2) {
            body.classList.remove('pinkBg', 'yellowBg', 'blueBg')
            body.classList.add('burgundyBg')
        } else if (cardActive === 3) {
            body.classList.remove('pinkBg', 'yellowBg', 'burgundyBg')
            body.classList.add('blueBg')
        }
    }) 
}

