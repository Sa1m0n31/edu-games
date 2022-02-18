const view1 = document.querySelector('.view--1');
const view2 = document.querySelector('.view--2');
const view3 = document.querySelector('.view--3');
const timerEl = document.querySelector('.timer');
const currentWordEl = document.querySelector('.currentWord');

const letterImagesPlaceholders = Array.from(document.querySelectorAll('.letter__img'));

const wordsLvl1 = [

]

const wordsLvl2 = [

]

const wordsLvl3 = [

]

let currentLvlWords = [], currentLvlLetters = [];

const lettersLvl1 = [0, 2, 3, 4, 10, 14, 15, 17, 18, 20, 1, 8, 9, 21, 12, 13];
const lettersLvl2 = [0, 2, 3, 4, 10, 14, 15, 17, 18, 20, 1, 8, 9, 21, 12, 13];
const lettersLvl3 = [0, 2, 3, 4, 10, 14, 15, 17, 18, 20, 1, 8, 9, 21, 12, 13];

const words = [wordsLvl1, wordsLvl2, wordsLvl3];
const letters = [lettersLvl1, lettersLvl2, lettersLvl3];

const lettersImages = [
    './assets/litery-jasne-0.png',
    './assets/litery-jasne-1.png',
    './assets/litery-jasne-2.png',
    './assets/litery-jasne-3.png',
    './assets/litery-jasne-4.png',
    './assets/litery-jasne-5.png',
    './assets/litery-jasne-6.png',
    './assets/litery-jasne-7.png',
    './assets/litery-jasne-8.png',
    './assets/litery-jasne-9.png',
    './assets/litery-jasne-10.png',
    './assets/litery-jasne-11.png',
    './assets/litery-jasne-12.png',
    './assets/litery-jasne-13.png',
    './assets/litery-jasne-14.png',
    './assets/litery-jasne-15.png',
    './assets/litery-jasne-16.png',
    './assets/litery-jasne-17.png',
    './assets/litery-jasne-18.png',
    './assets/litery-jasne-19.png',
    './assets/litery-jasne-20.png',
    './assets/litery-jasne-21.png',
    './assets/litery-jasne-22.png',
    './assets/litery-jasne-23.png',
    './assets/litery-jasne-24.png',
    './assets/litery-jasne-25.png',
    './assets/litery-jasne-26.png',
    './assets/litery-jasne-27.png',
    './assets/litery-jasne-28.png'
]

const lettersSelectedImages = [
    './assets/litery-ciemne-0.png',
    './assets/litery-ciemne-1.png',
    './assets/litery-ciemne-2.png',
    './assets/litery-ciemne-3.png',
    './assets/litery-ciemne-4.png',
    './assets/litery-ciemne-5.png',
    './assets/litery-ciemne-6.png',
    './assets/litery-ciemne-7.png',
    './assets/litery-ciemne-8.png',
    './assets/litery-ciemne-9.png',
    './assets/litery-ciemne-10.png',
    './assets/litery-ciemne-11.png',
    './assets/litery-ciemne-12.png',
    './assets/litery-ciemne-13.png',
    './assets/litery-ciemne-14.png',
    './assets/litery-ciemne-15.png',
    './assets/litery-ciemne-16.png',
    './assets/litery-ciemne-17.png',
    './assets/litery-ciemne-18.png',
    './assets/litery-ciemne-19.png',
    './assets/litery-ciemne-20.png',
    './assets/litery-ciemne-21.png',
    './assets/litery-ciemne-22.png',
    './assets/litery-ciemne-23.png',
    './assets/litery-ciemne-24.png',
    './assets/litery-ciemne-25.png',
    './assets/litery-ciemne-26.png',
    './assets/litery-ciemne-27.png',
    './assets/litery-ciemne-28.png'
]

let lvl = 0;
let selectedLetters = []; // array of numbers, number = index in lettersImages array
let selectedWords = []; // array of ?

const start = () => {
    view1.style.zIndex = '-1';
    view1.style.opacity = '0';
    view2.style.opacity = '1';
    view2.style.zIndex = '2';
}

const setLvl = (n) => {
    lvl = n;
    currentLvlLetters = letters[n];
    console.log(currentLvlLetters);

    view2.style.zIndex = '-1';
    view2.style.opacity = '0';
    view3.style.opacity = '1';
    view3.style.zIndex = '2';

    startGame();
}

const startGame = () => {
    startTimer(60 * 3, timerEl);

    /* Randomize letters */
    letterImagesPlaceholders.forEach((item, index) => {
        item.parentNode.classList.add(`letter-${currentLvlLetters[index]}`);
        item.setAttribute('src', lettersImages[currentLvlLetters[index]]);
    });
}

const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const isElementInArray = (el, arr) => {
    return arr.findIndex((item) => {
        return item === el;
    }) !== -1;
}

const removeElementFromArray = (el, arr) => {
    return arr.filter((item) => {
        return item !== el;
    });
}

const updateCurrentWord = () => {
    Array.from(currentWordEl.childNodes).forEach((item) => {
        item.remove();
    });

    selectedLetters.forEach((item) => {
        console.log(item);
        const newLetter = document.createElement('img');
        newLetter.setAttribute('src', lettersSelectedImages[item]);
        newLetter.classList.add('currentWord__letter');
        currentWordEl.appendChild(newLetter);
    });
}

const toggleLetter = (el) => {
    const img = el.childNodes[1];
    const n = el.classList[1].split('-')[1];
    if(isElementInArray(n, selectedLetters)) {
        selectedLetters = removeElementFromArray(n, selectedLetters);
        img.setAttribute('src', lettersImages[n]);
    }
    else {
        selectedLetters.push(n);
        img.setAttribute('src', lettersSelectedImages[n]);
    }

    updateCurrentWord();
}

const checkWord = () => {

}

const cancel = () => {
    selectedLetters = [];
    updateCurrentWord();

    letterImagesPlaceholders.forEach((item, index) => {
        item.parentNode.classList.add(`letter-${currentLvlLetters[index]}`);
        item.setAttribute('src', lettersImages[currentLvlLetters[index]]);
    });
}

const accept = () => {

}
