let tyrion  = {
    'name'      : '– Tyrion Lanister \u2022 Game of Thrones',
    'picture'   : 'img/Tyrion-Lanister.png',
    'quote'     : '“Never forget what you are, the rest of the world will not. Wear it like armour and it can never be used to hurt you.”'
};

let yoda = {
    'name'      : '– Master Yoda \u2022 Star Wars',
    'picture'   : 'img/yoda.jpg',
    'quote'     : '“Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.”'
};

let phoebe = {
    'name'      : '– Phoebe Buffay \u2022 Friends',
    'picture'   : 'img/phoebe-buffay.jpg',
    'quote'     : '“I deserve a real celebration and I am not gonna let some sweaty little man make me feel badly about it.”'
};

let monica = {
    'name'      : '– Monica Geller \u2022 Friends',
    'picture'   : 'img/monica-geller.jpg',
    'quote'     : '“They don\'t know that we know that they know!”'
};

let joey = {
    'name'      : '– Joey Tribbiani \u2022 Friends',
    'picture'   : 'img/joey-tribbiani.jpg',
    'quote'     : '“Yeah. It\'s like a cow\'s opinion. It just doesn\'t matter. It\'s moo.”'
};

let rachel = {
    'name'      : '– Rachel Green \u2022 Friends',
    'picture'   : 'img/Rachel-Green.jpg',
    'quote'     : '“I don\'t want my baby\'s first words to be "How You Doing?"”'
};

let ross = {
    'name'      : '– Ross Geller \u2022 Friends',
    'picture'   : 'img/ross-geller.jpg',
    'quote'     : '“I grew up in a house with Monica, okay. If you didn\'t eat fast, you didn\'t eat.”'
};

let poussey = {
    'name'      : '– Poussey Washington \u2022 Orange Is The New Black',
    'picture'   : 'img/poussey.jpg',
    'quote'     : '“You can\'t live your life according to maybes.”'
};

let cristina = {
    'name'      : '– Cristina Yang \u2022 Grey\'s Anatomy',
    'picture'   : 'img/cristina.jpg',
    'quote'     : '“Don\'t let what he wants eclipse what you need. He\'s very dreamy, but he\'s not the sun. You are.”'
};

let annalise = {
    'name'      : '– Annalise Keating \u2022 How To Get Away With Murder',
    'picture'   : 'img/annalise.jpg',
    'quote'     : '“Never take a learning opportunity away from another student. No matter how smart you need everyone to think you are.”'
};

let listArray = [tyrion, yoda, phoebe, monica, joey, rachel, ross, poussey, cristina, annalise];

let quote           = document.querySelector('#quote');
let author          = document.querySelector('#author');
let picture         = document.querySelector('#picture');
let newQuoteButton  = document.querySelector('#btn');
let randomNumber    = 0;
let lastNumber      = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * listArray.length);
};

newQuoteButton.addEventListener('click', () => {
    do {
        randomNumber = getRandomNumber()
    } while (randomNumber == lastNumber)

    quote.textContent   = listArray[randomNumber]['quote'];
    author.textContent  = listArray[randomNumber]['name'];
    picture.src         = listArray[randomNumber]['picture'];
    lastNumber          = randomNumber;
});

