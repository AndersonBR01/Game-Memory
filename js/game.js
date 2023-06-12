const grid =  document.querySelector('.grid');

const card = [
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
]

const createElement = (tag,className) => {
    const elemet = document.createElement(tag);
    elemet.className = className;
    return elemet;
}

const createCard = () =>{

    const card = createElement('div', 'card');
    const front = createElement('div','face front');
    const back = createElement('div', 'face back');

    card.appendChild( front);
    card.appendChild( back);

    return card;
}



