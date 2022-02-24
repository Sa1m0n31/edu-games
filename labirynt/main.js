let lvl = 0, points = 0; // lvl - plansza (0-5), points - ile aktualnie kliknietych punktow

const pointsRequired = [4, 6, 5, 8, 6, 8];
let buttonsClicked = [];
let onWrongPath = false;

const mainCarousel = new Siema({
    selector: ".carousel",
    perPage: 1,
    draggable: true,
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
        console.log('enter right path');
        buttonsClicked = [];
        points = 0;
    }

    onWrongPath = wrongPath;

    if(pointsAvailable) {
        console.log(points);
        console.log(pointsAvailable);
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

    console.log('---');
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
