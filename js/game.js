const grid =  document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const spanTimer = document.querySelector('.timer');


const characters = [
    'img-001',
    'img-002',
    'img-003',
    'img-004',
    'img-005',
    'img-006',
    'img-007',
    'img-008',
    'img-009',
    'img-010',
    'img-011',
    'img-012',
];

const createElement = (tag,className) => {
    const elemet = document.createElement(tag);
    elemet.className = className;
    return elemet;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 24){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}!Seu tempo foi de ${spanTimer.innerHTML}. Prossega!!`);

        window.location= '../pages/parabens.html'
    }
}
const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';


        checkEndGame();
    }else{
        setTimeout(() =>{
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 400)
       
    }

};

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '' ){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    };
    
};

const createCard = (character) =>{

    const card = createElement('div', 'card');
    const front = createElement('div','face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () =>{

    const duplicateCharacters = [...characters, ...characters ];

    const sufflerArray = duplicateCharacters.sort(() => Math.random() -0.5);    

    

    sufflerArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
};

const startTime = () =>{

    this.loop =  setInterval(() =>{
        const currentTime = + spanTimer.innerHTML;
        spanTimer.innerHTML = currentTime + 1;

    },1000);
};

window.onload = () =>{

    spanPlayer.innerHTML= localStorage.getItem('player');

    startTime();
    loadGame();

};


