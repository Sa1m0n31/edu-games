const questions = [
    [
        {
            question: 'Un rasgo positivo es:',
            right: 'sincero',
            wrong1: 'vago',
            wrong2: 'pesimista',
            wrong3: 'impaciente'
        },
        {
            question: 'Un rasgo negativo es:',
            right: 'tacaño',
            wrong1: 'sociable',
            wrong2: 'simpático',
            wrong3: 'valiente'
        },
        {
            question: 'Un rasgo positivo es:',
            right: 'honesto',
            wrong1: 'impuntual',
            wrong2: 'deshonesto',
            wrong3: 'antipático'
        },
        {
            question: 'Un rasgo negativo es:',
            right: 'tonto',
            wrong1: 'paciente',
            wrong2: 'puntual',
            wrong3: 'trabajador'
        },
        {
            question: 'Un rasgo positivo es:',
            right: 'optimista',
            wrong1: 'miedoso',
            wrong2: 'callado',
            wrong3: 'tacaño'
        }
    ],
    [
        {
            question: 'El rasgo opuesto a tonto es:',
            right: 'inteligente',
            wrong1: 'vago',
            wrong2: 'callado',
            wrong3: 'hablador'
        },
        {
            question: 'El rasgo opuesto a hablador es:',
            right: 'callado',
            wrong1: 'tímido',
            wrong2: 'sociable',
            wrong3: 'generoso'
        },
        {
            question: 'El rasgo opuesto a tacaño es:',
            right: 'generoso',
            wrong1: 'deshonesto',
            wrong2: 'trabajador',
            wrong3: 'miedoso'
        },
        {
            question: 'El rasgo opuesto a sincero es:',
            right: 'mentiroso',
            wrong1: 'optimista',
            wrong2: 'tonto',
            wrong3: 'impuntual'
        },
        {
            question: 'El rasgo opuesto a tímido es:',
            right: 'sociable',
            wrong1: 'deshonesto',
            wrong2: 'impaciente',
            wrong3: 'optimista'
        }
    ],
    [
        {
            question: 'Una persona que no trabaja y solo descansa es:',
            right: 'vaga',
            wrong1: 'trabajadora',
            wrong2: 'mentirosa',
            wrong3: 'pesimista'
        },
        {
            question: 'Una persona que llega siempre a tiempo es:',
            right: 'puntual',
            wrong1: 'sociable',
            wrong2: 'pesimista',
            wrong3: 'antipática'
        },
        {
            question: 'Una persona que se siente insegura cuando está en grupo de personas es:',
            right: 'tímida',
            wrong1: 'sociable',
            wrong2: 'pesimista',
            wrong3: 'antipática'
        },
        {
            question: 'Una persona que no tiene miedo de tomar riesgos es:',
            right: 'valiente',
            wrong1: 'habladora',
            wrong2: 'inteligente',
            wrong3: 'miedosa'
        },
        {
            question: 'Una persona que muestra sentimientos negativos hacia los demás es:',
            right: 'antipática',
            wrong1: 'simpática',
            wrong2: 'tímida',
            wrong3: 'pesimista'
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

const progress = [7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100];

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
let points = 0;
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
const endOfTheGameText = document.querySelector('.view--end>.view__start__text');

const clock = document.querySelector('.clock');
const clockInner = document.querySelector('.clock__inner');
const pointsImages = Array.from(document.querySelectorAll('.view__img--points>.view__img'));
const helpersButtons = Array.from(document.querySelectorAll('.helpers__btn'));
let helpersAvailable = [true, true, true];

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

const markRightAnswer = (position) => {
    rightAnswerMarker.style.display = "block";

    rightAnswerMarker.removeAttribute('class');
    rightAnswerMarker.classList.add('img--right');
    rightAnswerMarker.classList.add(`img--mark--${position}`);

    feedbackRight.style.display = "block";
    feedbackRight.style.opacity = "1";

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

    setTimeout(() => {
        nextLvl();
    }, 2000);
}

const addPoints = () => {
    if(currentLvl < 5) points += 1;
    else if(currentLvl < 10) points += 2;
    else points += 3;
}

const checkAnswer = (e, position) => {
    if(!gameOver) {
        image.style.display = "none";
        currentTime = 22;
        clock.style.opacity = '0';

        const selectedAnswer = e.textContent;
        const currentQuestionObject = getCurrentQuestionObject();

        if(selectedAnswer === currentQuestionObject.right) {
            addPoints();
            markRightAnswer(position);
        }
        else {
            markWrongAnswer(position);
        }
    }
}

const getCurrentQuestionObject = () => {
    if(currentLvl < 6) return lvl1Questions[currentLvl-1];
    else if(currentLvl < 11) return lvl2Questions[(currentLvl-1)%5];
    else return lvl3Questions[(currentLvl-1)%5];
}

const getEndFeedback = () => {
    if(points <= 10) {
        return 'hay que trabajar un poco más';
    }    else if(points <= 18) {
        return 'bien, pero repasa el vocabulario';
    }
    else if(points <= 26) {
        return '¡muy bien!';
    }
    else {
        return '¡eres un crack!';
    }
}

let interval;
let currentTime = 22;

const endOfTime = () => {
    clock.style.opacity = '0';
    currentTime = 22;
    clearInterval(interval);
}

const nextLvl = () => {
    currentLvl++;

    /* Change points view */
    pointsImages.forEach((item, index) => {
       if(currentLvl-1 === index) {
           item.style.visibility = 'visible';
       }
       else {
           item.style.visibility = 'hidden';
       }
    });

    /* Change helpers buttons */
    if(currentLvl === 6) {
        helpersButtons.forEach((item, index) => {
            if(index === 1) {
                item.style.visibility = 'visible';
            }
            else {
                item.style.visibility = 'hidden';
            }
        });
    }
    else if(currentLvl === 11) {
        helpersButtons.forEach((item, index) => {
            if(index === 2) {
                item.style.visibility = 'visible';
            }
            else {
                item.style.visibility = 'hidden';
            }
        });
    }

    if(currentLvl < 16) {
        enableAllAnswers();

        rightAnswerMarker.style.display = "none";
        wrongAnswerMarker.style.display = "none";
        feedbackRight.style.opacity = "0";
        feedbackRight.style.display = "none";
        feedbackWrong.style.opacity = "0";
        feedbackWrong.style.display = "none";

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

        /* Start clock */
        clock.style.opacity = '1';
        if(interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            currentTime--;
            if(!currentTime) {
                endOfTime();
            }
            else {
                clockInner.textContent = (currentTime.toString().length > 1 ? currentTime : '0' + currentTime.toString());
            }
        }, 1000);
    }
    else {
        endOfTheGame.style.display = "flex";
        endOfTheGameText.textContent = getEndFeedback();
        audio.pause();
    }
}

const changeHelpersView = (i) => {
    const activeIcon = document.querySelector(`.helpers__btn:nth-of-type(${i})>.helpers__btn__img--active`);
    const noactiveIcon = document.querySelector(`.helpers__btn:nth-of-type(${i})>.helpers__btn__img--noactive`);
    const helpersBtn = document.querySelector(`.helpers__btn:nth-of-type(${i})`);

    helpersBtn.style.cursor = 'default';
    activeIcon.style.visibility = 'hidden';
    noactiveIcon.style.visibility = 'visible';
}

const excludeTwoAnswers = () => {
    if(helpersAvailable[0]) {
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

    changeHelpersView(1);
    helpersAvailable = [false, true, true];
}

const hint = () => {
    if(helpersAvailable[1]) {

    }

    changeHelpersView(2);
    helpersAvailable = [false, false, true];
}

const translateQuestion = () => {
    if(helpersAvailable[2]) {

    }

    changeHelpersView(3);
    helpersAvailable = [false, false, false];
}

/* Start the game */
nextLvl();
