const rawStarsImages = Array.from(document.querySelectorAll('.slide--3 .img'));
const printersImages = Array.from(document.querySelectorAll('.slide--4 .img'));

let currentColor = 0, printColor = 0;

const changeColor = (n) => {
    if(n !== currentColor) {
        rawStarsImages[currentColor].style.opacity = '0';
        rawStarsImages[n].style.opacity = '1';
        currentColor = n;
        printColor = n;
    }
}

const changeColor2 = (n) => {
    if(n !== currentColor) {
        printersImages[0].style.opacity = '0';
        printersImages[printColor].style.opacity = '0';
        printersImages[n].style.opacity = '1';
        printColor = n;
    }
}

// NEW
let currentLab = 0;
const slides = Array.from(document.querySelectorAll('.slide'));
const inputPercent = document.querySelector('.input--percent');
const inputHeight = document.querySelector('.input--height');
const errors = Array.from(document.querySelectorAll('.error'));

const switchSlides = (hide, show) => {
    slides[hide].style.opacity = '0';
    slides[hide].style.zIndex = '-1';
    slides[show].style.opacity = '1';
    slides[show].style.zIndex = '1';
}

const setLab = (n) => {
    currentLab = n;

    switchSlides(0, 1);
}

const acceptStatute = () => {
    if(currentLab === 0) {
        switchSlides(1, 2);
    }
    else {
        switchSlides(1, 10);
    }
}

const goToProjectMode = () => {
    switchSlides(2, 3);
}

const showHint = () => {

}

const showQuestions = () => {

}

const playSound = (n) => {

}

const inputError = (n) => {
    errors[n].style.transform = 'scaleY(1)';
}

const generateGCode = () => {
    if(parseFloat(inputHeight.value) === 0.28 && parseInt(inputPercent.value) === 50) {
        switchSlides(3, 4);
    }
    else {
        inputError(0);
    }
}
