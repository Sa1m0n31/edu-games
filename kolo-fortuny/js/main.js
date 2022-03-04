const game = new Siema({
    selector: '.carousel',
    perPage: 1,
    // draggable: false,
    duration: 1
});

const circle = document.querySelector('.circle');
let points = 0; // 6 - win
let currentQuestion = 0;
const rightAnswers = [0, 2, 1, 1, 2,
                        0, 2, 1, 1, 0,
                        1, 0, 2, 0, 0,
                        2, 2, 1, 2, 0];

const startCircle = () => {
    const rotation = Math.floor(Math.random() * 360) + 1;
    const numbersOfRotations = Math.floor(Math.random() * 5) + 1;
    circle.style.transform = `rotate(${rotation + (360 * numbersOfRotations)}deg)`;

    if(rotation < 3 || rotation > 343) {
        currentQuestion = 0;
    }
    else if(rotation < 21) {
        currentQuestion = 19;
    }
    else if(rotation < 38) {
        currentQuestion = 18;
    }
    else if(rotation < 56) {
        currentQuestion = 17;
    }
    else if(rotation < 73) {
        currentQuestion = 16;
    }
    else if(rotation < 92) {
        currentQuestion = 15;
    }
    else if(rotation < 110) {
        currentQuestion = 14;
    }
    else if(rotation < 127) {
        currentQuestion = 13;
    }
    else if(rotation < 145) {
        currentQuestion = 12;
    }
    else if(rotation < 163) {
        currentQuestion = 11;
    }
    else if(rotation < 182) {
        currentQuestion = 10;
    }
    else if(rotation < 200) {
        currentQuestion = 9;
    }
    else if(rotation < 218) {
        currentQuestion = 8;
    }
    else if(rotation < 236) {
        currentQuestion = 7;
    }
    else if(rotation < 254) {
        currentQuestion = 6;
    }
    else if(rotation < 272) {
        currentQuestion = 5;
    }
    else if(rotation < 290) {
        currentQuestion = 4;
    }
    else if(rotation < 307) {
        currentQuestion = 3;
    }
    else if(rotation < 327) {
        currentQuestion = 2;
    }
    else if(rotation < 343) {
        currentQuestion = 1;
    }

    setTimeout(() => {
        game.goTo(currentQuestion+1);
    }, 4000);
}

const wrongAnswer = () => {
    game.goTo(21);
}

const end = () => {
    points = 0;
    game.goTo(22);
}

const answer = (question, n) => {
    circle.style.transform = 'none';
    if(n === rightAnswers[question]) {
        points++;
        if(points === 6) {
            end();
        }
        else {
            game.goTo(23);
            setTimeout(() => {
                game.goTo(0);
            }, 3100);
        }
    }
    else {
        points = 0;
        wrongAnswer();
    }
}

const tryAgain = () => {
    game.goTo(0);
}
