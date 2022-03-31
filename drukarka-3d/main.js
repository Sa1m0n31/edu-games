const rawStarsImages = Array.from(document.querySelectorAll('.slide--3 .img'));
const printersImages = Array.from(document.querySelectorAll('.slide--4 .img'));
const rawStarsImagesSlide5 = Array.from(document.querySelectorAll('.slide--5 .img--raw'));

const slide5Images = Array.from(document.querySelectorAll('.slide--5 .img'));
const treatStars0 = Array.from(document.querySelectorAll('.img--treat0'));
const treatStars1 = Array.from(document.querySelectorAll('.img--treat1'));
const treatStars2 = Array.from(document.querySelectorAll('.img--treat2'));
const treatStars = [treatStars0, treatStars1, treatStars2];

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
    if(n === currentColor) {
        printersImages[0].style.opacity = '0';
        printersImages[0].style.opacity = '0';
        printersImages[n+1].style.opacity = '1';
    }
    else {
        error(1);
    }
}

// NEW
let currentLab = 0;
const slides = Array.from(document.querySelectorAll('.slide'));
const inputPercent = document.querySelector('.input--percent');
const inputHeight = document.querySelector('.input--height');
const errors = Array.from(document.querySelectorAll('.error'));
const bookViews = Array.from(document.querySelectorAll('.bookView'));
const fixedInput1 = document.querySelector('.input--fixed1');
const fixedInput2 = document.querySelector('.input--fixed2');

const sounds = [
    'material.mp3', 'wysokosc.mp3', 'wypelnienie.mp3',
    'metody-obrobki-koncowej.mp3', 'brzegi.mp3',
    'predkosc-retrakcji.mp3', 'dlugosc-retrakcji.mp3', 'dodaj-podpory.mp3'
]
const audios = sounds.map((item) => {
    return new Audio(`./sounds/${item}`);
});

let supportClicked = false;

fixedInput1.value = '7 mm';
fixedInput2.value = '20 mm/s';

const switchSlides = (hide, show) => {
    stopAllAudios();

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
        switchSlides(1, 6);
    }
}

const goToProjectMode = (lab) => {
    if(lab === 0) switchSlides(2, 3);
    else switchSlides(6, 7);
}

const stopAllAudios = () => {
    audios.forEach((item) => {
        item.pause();
        item.currentTime = 0;
    });
}

const playSound = (n) => {
    stopAllAudios();
    audios[n].play();
}

const error = (n) => {
    errors[n].style.transform = 'scaleY(0)';
    setTimeout(() => {
        errors[n].style.transform = 'scaleY(1)';
    }, 200);
}

const generateGCode = () => {
    if(parseFloat(inputHeight.value) === 0.28 && parseInt(inputPercent.value) === 50) {
        errors[0].style.transform = 'scaleY(0)';
        switchSlides(3, 4);
    }
    else {
        error(0);
    }
}

const finalTreatment = () => {
    rawStarsImagesSlide5[currentColor].style.visibility = 'visible';
    switchSlides(4, 5);
}

const makeFinalTreatment = (n) => {
    slide5Images.forEach((item) => {
        item.style.visibility = 'hidden';
    });
    treatStars[currentColor][n].style.visibility = 'visible';
}

const home = (currentSlide) => {
    inputPercent.value = null;
    inputHeight.value = null;

    switchSlides(currentSlide, 0);
}

const showBookView = (n) => {
    bookViews[n].style.zIndex = '100';
    bookViews[n].style.opacity = '1';
}

const closeBookView = () => {
    bookViews.forEach((item) => {
        item.style.zIndex = '-1';
        item.style.opacity = '0';
    });
}

const changePrintSpeed = (e) => {
    if(e.value === '100 mm/s') {
        fixedInput1.value = '14 mm';
        fixedInput2.value = '40 mm/s';
    }
    else {
        fixedInput1.value = '7 mm';
        fixedInput2.value = '20 mm/s';
    }
}

const clickSupport = () => {
    supportClicked = true;
}

const generateGCode2 = () => {
    if(supportClicked) {

    }
    else {
        error(2);
    }
}
