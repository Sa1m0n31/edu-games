const questions = [
    [
        {
            question: 'Où les étudiants prennent-ils généralement leur repas de midi ?',
            right: 'au resto universitaire',
            wrong1: 'à la cantine',
            wrong2: 'dans la classe',
            wrong3: 'dans le parc',
        },
        {
            question: 'Où habitent les étudiants qui arrivent d’une autre ville pour faire leurs études ?',
            right: 'à la résidence universitaire',
            wrong1: 'à la maison d’accueil',
            wrong2: 'dans un hotel',
            wrong3: 'chez amis',
        },
        {
            question: 'Où tu ne peux pas continuer ton éducation après le bac ?',
            right: 'au lycée',
            wrong1: 'à l’Université',
            wrong2: 'à l’École Polytechnique',
            wrong3: 'aux écoles supérieures',
        },
        {
            question: 'Quel diplôme peux-tu recevoir à la fin de trois ans d\'éducation supérieure ? ',
            right: 'la licence',
            wrong1: 'le bac',
            wrong2: 'le BEP',
            wrong3: 'le doctorat',
        }
    ],
    [
        {
            question: 'Qu’est-ce que tu dois rédiger pour terminer le premier cycle d\'études ?',
            right: 'un mémoire de master',
            wrong1: 'une thèse de maîtrise',
            wrong2: 'un travail de fin d\'année',
            wrong3: 'une dissertation',
        },
        {
            question: 'Le document que tu reçois après l’entrée à l’université et qui t’identifie au tant qu’étudiant, c’est :',
            right: 'la carte d’étudiant',
            wrong1: 'la carte d’identité',
            wrong2: 'le certificat d\'études',
            wrong3: 'la carte d’université',
        },
        {
            question: 'Le type de cours qui sert à illustrer et approfondir les questions théoriques à l’aide des exemples, exposés et d\'exercices pratiques, c’est :',
            right: 'le TD (Travaux Dirigés)',
            wrong1: 'le CM (Cours Magistraux)',
            wrong2: 'l’apprentissage',
            wrong3: 'les ateliers',
        },
        {
            question: 'Avant d’entrer aux études tu dois payer :',
            right: 'les frais d’inscription',
            wrong1: 'les frais de location',
            wrong2: 'les frais de scolarité',
            wrong3: 'les acomptes',
        }
    ],
    [
        {
            question: 'Tous les bâtiments universitaires ainsi que les résidences universitaires forment :',
            right: 'la cité U',
            wrong1: 'la faculté',
            wrong2: 'l’institut',
            wrong3: 'le doyenné',
        },
        {
            question: 'La partie de l’université où se donne l’enseignement supérieur dans une discipline déterminée, c’est :',
            right: 'la faculté',
            wrong1: 'la classe',
            wrong2: 'l’atelier',
            wrong3: 'le labo',
        },
        {
            question: 'Combien d\'universités est-ce qu’il y a en France ?',
            right: '67',
            wrong1: '53',
            wrong2: '75',
            wrong3: '81',
        },
        {
            question: 'Quelles étaient les spécialités les plus demandées en licence en France en 2021 ?',
            right: 'le droit',
            wrong1: 'les sciences de la vie',
            wrong2: 'l\'économie et gestion',
            wrong3: 'la psychologie',
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
