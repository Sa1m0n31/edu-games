const questions = [
    [
        {
            question: 'Coche le sentiment auquel correspond la photo.',
            right: 'la curiosite',
            wrong1: 'le courage',
            wrong2: 'le pessimisme',
            wrong3: 'l’intolérance',
            img: './assets/img1.jpg'
        },
        {
            question: 'Coche le sentiment auquel correspond la photo.',
            right: 'la gaieté',
            wrong1: 'la tristesse',
            wrong2: 'la peur',
            wrong3: 'la crainte',
            img: './assets/img2.jpg'
        },
        {
            question: 'Coche le sentiment auquel correspond la photo.',
            right: 'l’inquiétude',
            wrong1: 'la gaieté',
            wrong2: 'l’enthousiasme',
            wrong3: 'la colère',
            img: './assets/img3.jpg'
        },
        {
            question: 'Coche le sentiment auquel correspond la photo.',
            right: 'la peur',
            wrong1: 'l’optimisme',
            wrong2: 'la méchanceté',
            wrong3: 'le courage',
            img: './assets/img4.jpg'
        }
    ],
    [
        {
            question: 'Coche un trait positif du caractère.',
            right: 'la patience',
            wrong1: 'la méchanceté',
            wrong2: 'la paresse',
            wrong3: 'l’avarice'
        },
        {
            question: 'Coche un trait négatif du caractère.',
            right: 'la bêtise',
            wrong1: 'la tolerance',
            wrong2: 'la fidélité',
            wrong3: 'le courage'
        },
        {
            question: 'Coche la description qui correspond à cette personne : une personne peureuse.',
            right: 'J’ai crains beaucoup de choses. Les films d’horreur ? Ce n’est pas pour moi.',
            wrong1: 'J’adore les aventures. Je n’ai peur de rien.',
            wrong2: 'J’ai du courage, j’aime les sports extrêmes.',
            wrong3: 'Je n’aime pas beaucoup travailler.'
        },
        {
            question: 'Coche un trait du caractère qui signifie le contraire du mot : généreux.',
            right: 'avare',
            wrong1: 'paresseux',
            wrong2: 'bête',
            wrong3: 'querelleur'
        }
    ],
    [
        {
            question: 'Lis la description et choisis le trait de caractère de cette personne. J’adore les sports extrêmes. Ma passion, ce sont les films d’horreur. La peur, je ne sais pas ce que c’est.',
            right: 'Cette personne est courageuse.',
            wrong1: 'Cette personne est disponible.',
            wrong2: 'Cette personne est impatiente.',
            wrong3: 'Cette personne est triste.'
        },
        {
            question: 'Lis la description et choisis le trait de caractère de cette personne. Je ne pense jamais aux problèmes. Je vois toujours les bons côtés dans chaque situation.',
            right: 'Cette personne est optimiste. ',
            wrong1: 'Cette personne est bavarde.',
            wrong2: 'Cette personne est travailleuse.',
            wrong3: 'Cette personne est sociable.'
        },
        {
            question: 'Lis la description et choisis le trait de caractère de cette personne. Je ne mens jamais. Je dis toujours la vérité.',
            right: 'Cette personne est honnête.',
            wrong1: 'Cette personne est heureuse.',
            wrong2: 'Cette personne est intolérante.',
            wrong3: 'Cette personne est méchante.'
        },
        {
            question: 'Lis la description et choisis le trait de caractère de cette personne. J’aime parler avec des gens. Je peux trouver des sujets de conversation avec tout le monde.',
            right: 'Cette personne est communicative.',
            wrong1: 'Cette personne est cultivée.',
            wrong2: 'Cette personne est pessimiste.',
            wrong3: 'Cette personne est infidèle.'
        }
    ]
]

/* Play audio in background */
let audio;
document.addEventListener("click", () => {
    audio = new Audio('./assets/podklad.wav');
    audio.play();
    audio.volume = 0.07;
    audio.loop = true;
}, { once: true });

// const progress = [7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100];
// const progress = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const progress = [8, 17, 25, 33, 42, 50, 58, 67, 75, 83, 92, 100];
// const progress = [11, 22, 33, 44, 56, 67, 78, 89, 100];

/* Randomize questions */
const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

let currentLvl = 0;
let gameOver = false;
let helpAvailable = 2;

let lvl1Questions = shuffleArray(questions[0]);
let lvl2Questions = shuffleArray(questions[1]);
let lvl3Questions = shuffleArray(questions[2]);

const intro = document.querySelector(".view--start");
const questionImg = document.querySelector(".view--question");

const rightAnswerMarker = document.querySelector(".img--right");
const wrongAnswerMarker = document.querySelector(".img--wrong");

const feedbackRight = document.querySelector(".feedbackWrapper--right");
const feedbackWrong = document.querySelector(".feedbackWrapper--wrong");
const feedbackRightPercentPlaceholder = document.querySelector(".feedbackWrapper--right__percent");

const helpBtn = document.querySelector(".help");
const endOfTheGame = document.querySelector(".view--end");

setTimeout(() => {
    intro.style.display = "none";
    questionImg.style.display = "block";
}, 2000);

const questionPlaceholder = document.querySelector(".question");
const answer1Placeholder = document.querySelector(".answer--1");
const answer2Placeholder = document.querySelector(".answer--2");
const answer3Placeholder = document.querySelector(".answer--3");
const answer4Placeholder = document.querySelector(".answer--4");
const image = document.querySelector(".image");

const answerPlaceholders = [answer1Placeholder, answer2Placeholder, answer3Placeholder, answer4Placeholder];
// const answerPlaceholders = [answer1Placeholder, answer2Placeholder, answer3Placeholder];

const enableAllAnswers = () => {
    answerPlaceholders.forEach((item) => {
        item.removeAttribute("disabled");
    });
}

const playAgain = () => {
    lvl1Questions = shuffleArray(questions[0]);
    lvl2Questions = shuffleArray(questions[1]);
    lvl3Questions = shuffleArray(questions[2]);

    feedbackWrong.style.opacity = "0";
    feedbackWrong.style.display = "none";
    wrongAnswerMarker.style.display = "none";

    helpBtn.style.display = "block";

    gameOver = false;
    currentLvl = 0;
    helpAvailable = 2;

    enableAllAnswers();
    nextLvl();
}

const markRightAnswer = (position) => {
    rightAnswerMarker.style.display = "block";

    rightAnswerMarker.removeAttribute('class');
    rightAnswerMarker.classList.add('img--right');
    rightAnswerMarker.classList.add(`img--mark--${position}`);

    feedbackRight.style.display = "block";
    feedbackRight.style.opacity = "1";

    // feedbackRightPercentPlaceholder.textContent = progress[currentLvl-1].toString();

    setTimeout(() => {
        nextLvl();
    }, 2000);
}

const markWrongAnswer = (position) => {
    wrongAnswerMarker.style.display = "block";

    wrongAnswerMarker.removeAttribute('class');
    wrongAnswerMarker.classList.add('img--wrong');
    wrongAnswerMarker.classList.add(`img--mark--${position}`);
    wrongAnswerMarker.classList.add(`img--mark--${position}--wrong`);

    feedbackWrong.style.display = "block";
    feedbackWrong.style.opacity = "1";

    gameOver = true;

    setTimeout(() => {
        playAgain();
    }, 3000);
}

const checkAnswer = (e, position) => {
    if(!gameOver) {
        image.style.display = "none";

        const selectedAnswer = e.textContent;
        const currentQuestionObject = getCurrentQuestionObject();

        if(selectedAnswer === currentQuestionObject.right) {
            markRightAnswer(position);
        }
        else {
            markWrongAnswer(position);
        }
    }
}

const getCurrentQuestionObject = () => {
    if(currentLvl < 5) return lvl1Questions[currentLvl-1];
    else if(currentLvl < 9) return lvl2Questions[(currentLvl-1)%4];
    else return lvl3Questions[(currentLvl-1)%4];
}

const nextLvl = () => {
    currentLvl++;

    if(currentLvl < 13) {
        enableAllAnswers();

        rightAnswerMarker.style.display = "none";
        wrongAnswerMarker.style.display = "none";
        feedbackRight.style.opacity = "0";
        feedbackRight.style.display = "none";

        const currentQuestionObject = getCurrentQuestionObject();

        for(let i=1; i<=2; i++) {
            rightAnswerMarker.classList.remove(`img--mark--${i}`);

            wrongAnswerMarker.classList.remove(`img--mark--${i}`);
            wrongAnswerMarker.classList.remove(`img--mark--${i}--wrong`);
        }

        const { question, right, wrong1, wrong2, wrong3 } = currentQuestionObject;
        questionPlaceholder.textContent = question;
        const currentQuestionAnswers = [right, wrong1, wrong2, wrong3];
        const shuffledAnswers = shuffleArray(currentQuestionAnswers);

        answer1Placeholder.textContent = shuffledAnswers[0];
        answer2Placeholder.textContent = shuffledAnswers[1];
        answer3Placeholder.textContent = shuffledAnswers[2];
        answer4Placeholder.textContent = shuffledAnswers[3];

        if(currentQuestionObject.img) {
            image.style.display = "block";
            image.setAttribute("src", currentQuestionObject.img);
        }
        else image.style.display = "none";
    }
    else {
        endOfTheGame.style.display = "flex";
        audio.pause();
    }
}

const excludeTwoAnswers = () => {
    helpAvailable--;
    if(helpAvailable <= 0) {
        helpBtn.style.display = "none";
    }

    const { wrong1, wrong2, wrong3 } = getCurrentQuestionObject();
    const wrongAnswers = [wrong1, wrong2, wrong3];
    const shuffledWrongAnswers = shuffleArray(wrongAnswers);

    const answerToExclude1 = shuffledWrongAnswers[0];
    const answerToExclude2 = shuffledWrongAnswers[1];

    answerPlaceholders.forEach((item) => {
       if((item.textContent === answerToExclude1)||(item.textContent === answerToExclude2)) {
            item.textContent = "";
            item.setAttribute("disabled", "true");
       }
    });
}

/* Start the game */
nextLvl();
