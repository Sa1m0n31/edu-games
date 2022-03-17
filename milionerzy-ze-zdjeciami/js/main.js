const questions = [
    [
        {
            question: 'Qu’est-ce qu’un sport extrême ? Coche la mauvaise réponse.',
            right: 'Un sport extrême est une pratique sportive ennuyante',
            wrong1: 'Un sport extrême est une activité physique qui donne de l’adrénaline.',
            wrong2: 'Un sport extrême est une activité qui peut provoquer de graves blessures',
            wrong3: 'Un sport extrême est pratiqué par les “casse-cous”: ceux qui n’ont pas peur de mourir.'
        },
        {
            question: 'A quoi correspond l’expression “sport extrême” ? Coche la mauvaise réponse.',
            right: 'A des gens qui bronzent sur une plage paradisiaque.',
            wrong1: 'A des quads sur un terrain boueux.',
            wrong2: 'A des hommes sautant depuis un hélicoptère.',
            wrong3: 'A des hommes-poissons s’enfonçant toujours un peu plus dans les profondeurs sous-marines.',
            img: './assets/img2.png'
        },
        {
            question: 'Coche la mauvaise réponse.Qui dit sport extrême dit :',
            right: 'la tranquillité',
            wrong1: 'le danger de mort',
            wrong2: 'le frisson',
            wrong3: 'des performances physiques incroyables'
        },
        {
            question: 'Que doit-on vérifier avant de faire un sport extrême dans un club pour ne pas prendre de risques inutiles? Coche la mauvaise réponse.',
            right: 'si ce n’est pas cher',
            wrong1: 'si le club possède une licence',
            wrong2: 'si on est pas tous seuls',
            wrong3: 'la sécurité des équipements'
        },
        {
            question: 'Imagine la scène : vous êtes en haut de la montagne, relié à un câble élastique puis, vous sautez. De quel sport extrême s’agit-il ?',
            right: './assets/img-5-1.png',
            wrong1: './assets/img-5-2.png',
            wrong2: './assets/img-5-3.png',
            wrong3: './assets/img-5-4.png',
            images: true
        }
    ],
    [
        {
            question: 'Coche la photo illustrant la tyrolienne.Pense à Tarzan qui se déplace d’un arbre sur l’autre à l’aide des lianes.',
            right: './assets/img-6-1.jpg',
            wrong1: './assets/img-6-2.jpg',
            wrong2: './assets/img-6-3.jpg',
            wrong3: './assets/img-6-4.jpg',
            images: true
        },
        {
            question: 'Pense au sport où les vagues surpuissantes et les rochers ne sont jamais bien loin…Coche la bonne réponse.',
            right: 'Le surf',
            wrong1: 'La tyrolienne',
            wrong2: 'Le saut à l’élastique',
            wrong3: 'Le motocross',
            img: './assets/img8.jpg'
        },
        {
            question: 'Pourquoi pratiquer un sport extrême ? Coche la mauvaise réponse.',
            right: 'Pour dépenser beaucoup d’argent.',
            wrong1: 'Pour réaliser une introspection et mieux se connaître.',
            wrong2: 'Pour sortir de sa zone de confort.',
            wrong3: 'Pour rencontrer notre plus grand adversaire : soi-même.'
        },
        {
            question: 'Termine la phrase : Quand un accident a lieu dans les montagnes, il faut : ',
            right: 'appeler les secours.',
            wrong1: 'reste calme',
            wrong2: 'appelons de l’aide.',
            wrong3: 'paniquer.'
        },
        {
            question: 'Termine la phrase : Quand on pratique un sport extrême, il faut…',
            right: 'être prudent.',
            wrong1: 'être pessimiste.',
            wrong2: 'être optimiste.',
            wrong3: 'avoir peur.'
        }
    ],
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
const progress = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const progress = [8, 17, 25, 33, 42, 50, 58, 67, 75, 83, 92, 100];
// const progress = [11, 22, 33, 44, 56, 67, 78, 89, 100];

const viewNormal = document.querySelector('.view--question>.view__img--normal');
const viewImages = document.querySelector('.view--question>.view__img--images');

/* Randomize questions */
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

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
// let lvl3Questions = shuffleArray(questions[2]);

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
    // lvl3Questions = shuffleArray(questions[2]);

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
    if(currentLvl < 6) return lvl1Questions[currentLvl-1];
    else if(currentLvl < 11) return lvl2Questions[(currentLvl-1)%5];
    // else return lvl3Questions[(currentLvl-1)%4];
}

const nextLvl = () => {
    currentLvl++;

    if(currentLvl < 11) {
        enableAllAnswers();

        rightAnswerMarker.style.display = "none";
        wrongAnswerMarker.style.display = "none";
        feedbackRight.style.opacity = "0";
        feedbackRight.style.display = "none";

        const currentQuestionObject = getCurrentQuestionObject();

        const { question, right, wrong1, wrong2, wrong3 } = currentQuestionObject;
        const currentQuestionAnswers = [right, wrong1, wrong2, wrong3];
        const shuffledAnswers = shuffleArray(currentQuestionAnswers);

        if(currentQuestionObject?.images) {
            viewNormal.style.visibility = 'hidden';
            viewImages.style.visibility = 'visible';
        }
        else {
            viewNormal.style.visibility = 'visible';
            viewImages.style.visibility = 'hidden';

            for(let i=1; i<=2; i++) {
                rightAnswerMarker.classList.remove(`img--mark--${i}`);

                wrongAnswerMarker.classList.remove(`img--mark--${i}`);
                wrongAnswerMarker.classList.remove(`img--mark--${i}--wrong`);
            }

            answer1Placeholder.textContent = shuffledAnswers[0];
            answer2Placeholder.textContent = shuffledAnswers[1];
            answer3Placeholder.textContent = shuffledAnswers[2];
            answer4Placeholder.textContent = shuffledAnswers[3];
        }

        questionPlaceholder.textContent = question;

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
