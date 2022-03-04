const view1 = document.querySelector('.view--1');
const view2 = document.querySelector('.view--2');
const view3 = document.querySelector('.view--3');
const view4 = document.querySelector('.view--4');
const timerEl = document.querySelector('.timer');
const currentWordEl = document.querySelector('.currentWord');
const wordsTable = document.querySelector('.wordsTable');
const pointsTable = document.querySelector('.pointsTable');
const feedbackImage = document.querySelector('.currentWord__img');
const pointsCount = document.querySelector('.pointsCount');

const letterImagesPlaceholders = Array.from(document.querySelectorAll('.letter__img'));

const wordsLvl1 = [
    [21, 17, 15, 9, 4, 17],
    [14, 28, 21, 9, 2, 0],
    [22, 9, 5, 15, 4, 0],
    [2, 17, 14, 18, 20, 0],
    [5, 15, 22, 20, 5, 7, 0],
    [2, 23, 12, 22, 23, 20, 0],
    [14, 0, 20, 2, 0],
    [2, 17, 14, 5, 20, 2, 9, 17]
]

const wordsLvl2 = [
    [22, 5, 2, 15, 17, 12, 17, 7, 9, 0],
    [22, 5, 12, 5, 24, 9, 21, 17, 20],
    [22, 5, 12, 5, 24, 9, 21, 17, 20, 5, 21],
    [0, 23, 20, 9, 2, 23, 12, 0, 20, 5, 21],
    [21, 17, 15, 9, 4, 17],
    [22, 9, 5, 15, 4, 0],
    [22, 9, 5, 15, 4, 0, 21],
    [2, 23, 12, 22, 23, 20, 0],
    [12, 9, 22, 5, 20, 0, 22, 23, 20, 0]
]

const wordsLvl3 = [
    [2, 23, 12, 22, 23, 20, 0],
    [0, 23, 20, 9, 2, 23, 12, 0, 20, 5, 21],
    [14, 0, 20, 2, 0],
    [22, 5, 12, 5, 24, 9, 21, 17, 20],
    [22, 5, 12, 5, 24, 9, 21, 17, 20, 5, 21],
    [12, 9, 1, 20, 17],
    [12, 9, 1, 20, 17, 21],
    [22, 9, 5, 15, 4, 0],
    [2, 17, 14, 5, 20, 2, 9, 17],
    [12, 9, 22, 5, 20, 0, 22, 23, 20, 0],
]

let currentLvlWords = [], currentLvlLetters = [];
let points = 0;

const lettersLvl1 = [21, 17, 15, 9, 14, 28, 2, 0, 4, 17, 27, 5, 18, 20, 7, 23];
const lettersLvl2 = [22, 5, 2, 15, 17, 9, 0, 24, 9, 21, 20, 12, 17, 7, 23, 4];
const lettersLvl3 = [20, 9, 0, 23, 2, 12, 0, 22, 5, 17, 14, 24, 1, 4, 29, 21];

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
    './assets/litery-jasne-28.png',
    './assets/litery-jasne-29.png'
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
    './assets/litery-ciemne-28.png',
    './assets/litery-ciemne-29.png'
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
    currentLvlWords = words[n];

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
        item.parentNode.setAttribute('class', 'letter');
        item.parentNode.classList.add(`letter-${currentLvlLetters[index]}`);
        item.setAttribute('src', lettersImages[currentLvlLetters[index]]);
    });
}

let interval;

const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    const intervalFunc = () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            endOfTime();
            timer = duration;
        }
    }

    interval = setInterval(intervalFunc, 1000);
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
        if(item.classList?.length) {
            if(item.classList[0] !== 'currentWord__img') item.remove();
        }
        else item.remove();
    });

    selectedLetters.forEach((item) => {
        const newLetter = document.createElement('img');
        newLetter.setAttribute('src', lettersSelectedImages[item]);
        newLetter.classList.add('currentWord__letter');
        currentWordEl.appendChild(newLetter);
    });
}

const toggleLetter = (el) => {
    const img = el.childNodes[1];
    const n = parseInt(el.classList[1].split('-')[1]);

    feedbackImage.style.opacity = '0';
    if(selectedLetters.length <= 16) selectedLetters.push(n);
    img.setAttribute('src', lettersSelectedImages[n]);
    setTimeout(() => {
        img.setAttribute('src', lettersImages[n]);
    }, 120)

    updateCurrentWord();
}

const correctAnimation = () => {
    const newWord = document.createElement('p');
    newWord.classList.add('currentWord__item');
    selectedLetters.forEach((item) => {
        const newLetter = document.createElement('img');
        newLetter.setAttribute('src', lettersSelectedImages[item]);
        newWord.appendChild(newLetter);
    });
    wordsTable.appendChild(newWord);

    feedbackImage.style.opacity = '1';

    setTimeout(() => {
        feedbackImage.style.opacity = '0';
    }, 2000);

    const newPoint = document.createElement('p');
    newPoint.classList.add('pointsTable__item');
    newPoint.textContent = '1';
    pointsTable.appendChild(newPoint);

    points++;
    selectedLetters = [];
    cancel();
}

const wrongAnimation = () => {
    Array.from(document.querySelectorAll('.currentWord>*:not(.currentWord__img)')).forEach((item) => {
        item.style.opacity = '0';
    });

    feedbackImage.setAttribute('src', './assets/wrong.svg');
    feedbackImage.style.opacity = '1';

    setTimeout(() => {
        feedbackImage.style.opacity = '0';
        Array.from(document.querySelectorAll('.currentWord>*:not(.currentWord__img)')).forEach((item) => {
            item.style.opacity = '1';
        });
    }, 2000);
}

const isArrayTheSame = (array1, array2) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

const removeWordFromWordsBank = (word) => {
    words[lvl] = words[lvl].filter((item) => {
        return !isArrayTheSame(item, word);
    });
    currentLvlWords = words[lvl];
}

const setRedLetters = () => {
    letterImagesPlaceholders.forEach((item, index) => {
        item.parentNode.classList.add(`letter-${currentLvlLetters[index]}`);
        item.setAttribute('src', lettersImages[currentLvlLetters[index]]);
    });
}

const checkWord = () => {
    if(currentLvlWords.findIndex((item, index) => {
        return isArrayTheSame(item, selectedLetters);
    }) !== -1) {
        feedbackImage.setAttribute('src', './assets/right.svg');
        removeWordFromWordsBank(selectedLetters);
        setTimeout(() => {
            correctAnimation();
        }, 50);
    }
    else {
        wrongAnimation();
    }
}

const cancel = () => {
    selectedLetters.pop();
    updateCurrentWord();
    setRedLetters();
}

const endOfTime = () => {
    view3.style.opacity = '0';
    view3.style.zIndex = '-1';
    view4.style.opacity = '1';
    view4.style.zIndex = '2';

    selectedLetters = [];
    updateCurrentWord();
    clearInterval(interval);
    pointsCount.textContent = points;
    points = 0;

    Array.from(document.querySelectorAll('.wordsTable>*')).forEach((item) => {
        item.style.display = 'none';
    });
    Array.from(document.querySelectorAll('.pointsTable>*')).forEach((item) => {
        item.style.display = 'none';
    });
}

const home = () => {
    view4.style.opacity = '0';
    view4.style.zIndex = '-1';
    view2.style.opacity = '1';
    view2.style.zIndex = '2';
}
