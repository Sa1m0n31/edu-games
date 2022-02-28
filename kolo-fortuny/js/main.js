const game = new Siema({
    selector: '.carousel',
    perPage: 1,
    draggable: false
});

let points = 0;
let levelsCompleted = 0;
let questionsSelected = [];
const questionsSlides = [1, 4, 8, 11, 15, 18];
const rightAnswers = [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
const tableButtons = Array.from(document.querySelectorAll('.btn--table'));
const summaryImages = ['./img/punkty-0.png', './img/punkty-1.png', './img/punkty-2.png'];
const summaryImgEl = document.querySelector('.view__img--summary');

const isElementInArray = (el, arr) => {
    return arr.findIndex((item) => {
        return item === el;
    }) !== -1;
}

const setQuestions = (n) => {
    if(!isElementInArray(n, questionsSelected)) {
        questionsSelected.push(n);
        tableButtons[n].setAttribute('disabled', 'true');
        levelsCompleted++;
        game.goTo(questionsSlides[n]);
    }
}

const summary = () => {
    if(points <= 80) {
        summaryImgEl.setAttribute('src', summaryImages[0]);
    }
    else if(points <= 160) {
        summaryImgEl.setAttribute('src', summaryImages[1]);
    }
    else {
        summaryImgEl.setAttribute('src', summaryImages[2]);
    }

    game.next();
}

const answer = (question, n) => {
    if(n === rightAnswers[question]) {
        points += 10;
    }

    if(question === 2 || question === 6 || question === 9 || question === 13 || question === 16 || question === 20) {
        if(levelsCompleted === 6) {
            summary();
        }
        else {
            game.goTo(0);
        }
    }
    else {
        game.next();
    }
}
