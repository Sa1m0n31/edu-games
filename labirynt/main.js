let lvl = 0, points = 0; // lvl - plansza (0-5), points - ile aktualnie kliknietych punktow

const pointsRequired = [4, 6, 5, 8, 6, 7];
let buttonsClicked = [];
let onWrongPath = false;

const mainCarousel = new Siema({
    selector: ".carousel",
    perPage: 1,
    draggable: false,
    duration: 100
});

const setLvl = (n) => {
    switch(n) {
        case 0:
            lvl = 0;
            mainCarousel.goTo(1);
            break;
        case 1:
            lvl = 2;
            mainCarousel.goTo(5);
            break;
        case 2:
            lvl = 4;
            mainCarousel.goTo(9);
            break;
        default:
            break;
    }
}

const lvlComplete = () => {
    const feedbacks = [2, 4, 6, 8, 10, 12];
    mainCarousel.goTo(feedbacks[lvl]);
    lvl++;
    points = 0;
}

const wrong = () => {
    points = 0;
    buttonsClicked = [];
    mainCarousel.goTo(13);
}

const isElementInArray = (el, arr) => {
    return arr.findIndex((item) => {
        return item === el;
    }) !== -1;
}

const right = (n) => {
    if(!isElementInArray(n, buttonsClicked)) {
        buttonsClicked.push(n);
        points++;
    }
    if(points === pointsRequired[lvl]) {
        lvlComplete();
    }
}

const verifyAnswer = (pointsAvailable, n = null, wrongPath = false) => {
    if(onWrongPath && !wrongPath) {
        // Wchodzimy na dobra sciezke
        buttonsClicked = [];
        points = 0;
    }

    onWrongPath = wrongPath;

    if(pointsAvailable) {
        if(pointsAvailable.findIndex((item) => {
            return item === points;
        }) !== -1) {
            right(n);
        }
        else {
            wrong();
        }
    }
    else {
        wrong();
    }
}

const home = () => {
    mainCarousel.goTo(0);
}

const playAgain = () => {
    mainCarousel.prev();
    points = 0;
    buttonsClicked = [];
}

const nextLvl = () => {
    mainCarousel.next();
}

const playAgainAfterFailure = () => {
    points = 0;
    buttonsClicked = [];
    switch(lvl) {
        case 0:
            mainCarousel.goTo(1);
            break;
        case 1:
            mainCarousel.goTo(3);
            break;
        case 2:
            mainCarousel.goTo(5);
            break;
        case 3:
            mainCarousel.goTo(7);
            break;
        case 4:
            mainCarousel.goTo(9);
            break;
        case 5:
            mainCarousel.goTo(11);
            break;
        default:
            break;
    }
}

const audio1 = new Audio('./sounds/sound1.mp3');
const audio2 = new Audio('./sounds/sound2.mp3');

let playing1 = false, playing2 = false;
const startIcon1 = document.querySelector('.start1');
const stopIcon1 = document.querySelector('.stop1');
const startIcon2 = document.querySelector('.start2');
const stopIcon2 = document.querySelector('.stop2');

const toggleSound1 = () => {
    if(playing1) {
        audio1.pause();
        startIcon1.style.visibility = 'visible';
        stopIcon1.style.visibility = 'hidden';
    }
    else {
        audio1.play();
        startIcon1.style.visibility = 'hidden';
        stopIcon1.style.visibility = 'visible';
    }
    playing1 = !playing1;
}

audio1.onended = () => {
    startIcon1.style.visibility = 'visible';
    stopIcon1.style.visibility = 'hidden';
    audio1.currentTime = 0;
}

const toggleSound2 = () => {
    if(playing2) {
        audio2.pause();
        startIcon2.style.visibility = 'visible';
        stopIcon2.style.visibility = 'hidden';
    }
    else {
        audio2.play();
        startIcon2.style.visibility = 'hidden';
        stopIcon2.style.visibility = 'visible';
    }
    playing2 = !playing2;
}

audio2.onended = () => {
    startIcon2.style.visibility = 'visible';
    stopIcon2.style.visibility = 'hidden';
    audio2.currentTime = 0;
}

const toggleSound = () => {

}
