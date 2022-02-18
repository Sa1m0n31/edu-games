const questions = [
        [
            {
                question: 'J`aime bien les porter. C\'est mon accessoire préféré. Je les achète dans une boutique de bijoux.',
                right: 'les boucles d’oreilles',
                wrong1: 'une bague',
                wrong2: 'un collier',
                img: './assets/img1.jpg'
            },
            {
                question: 'Je les essaye et je les achète dans un magasin de chaussures. Je les porte en été. Elles sont très confortables quand il fait chaud.',
                right: 'les sandales',
                wrong1: 'les bottes',
                wrong2: 'les baskets',
                img: './assets/img2.jpg'
            },
            {
                question: 'Je l\'achète dans une parfumerie. C`est pour le cadeau pour ma maman. Elle aime les roses et les lilas.',
                right: 'le parfum',
                wrong1: 'le rouge à lèvres ',
                wrong2: 'la crème.',
                img: './assets/img3.jpg'
            },
            {
                question: 'Je les achète dans un magasin de vêtements. Parfois c\'est très difficile de choisir seulement un seul. Il y en a de toutes les couleurs, ils sont très chauds, c`est bien de les porter en hiver.',
                right: 'les pulls',
                wrong1: 'les robes',
                wrong2: 'les tee-shirts ',
                img: './assets/img4.jpg'
            },
            {
                question: 'Je les achète au supermarché. Au centre commercial, il y a une très bien équipé. J\'adore la cuisine italienne. ',
                right: 'les pâtes',
                wrong1: 'les citrons',
                wrong2: 'les biscuits',
                img: './assets/img5.jpg'
            }
        ],
        [
            {
                question: 'Je le trouve dans un magasin de sport. J`adore la natation et je dois avoir tout ce qu`il me faut.',
                right: 'le maillot de bain',
                wrong1: 'les lunettes de natation',
                wrong2: 'les ballons',
                img: './assets/img6.jpg'
            },
            {
                question: 'Je le choisis pour mon petit neveu au magasin de jouets. C`est très difficile de choisir parmi les jouets différents.',
                right: 'un ours en peluche',
                wrong1: 'une petite voiture',
                wrong2: 'les cubes',
                img: './assets/img10.jpg'
            },
            {
                question: 'Je les achète d\'habitude une fois par semaine. J`aime lire. Au centre commercial, je passe beaucoup de temps à la librairie.',
                right: 'les bandes dessinées ',
                wrong1: 'un roman d’aventures',
                wrong2: 'un polar',
                img: './assets/img7.jpg'
            },
            {
                question: 'Elle l\'achète pour décorer le couloir de notre maison. Ma maman adore décorer la maison. Au centre commercial, elle a son magasin préféré.',
                right: 'un miroir',
                wrong1: 'les bougies',
                wrong2: 'une nappe',
                img: './assets/img8.jpg'
            },
            {
                question: 'On peut les acheter au magasin de chaussures, mais il y a des magasins de maroquinerie où on les vend aussi. Ma mère adore les petits et les grands.',
                right: 'les sacs',
                wrong1: 'les valises',
                wrong2: 'les trousses',
                img: './assets/img9.jpg'
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
const progress = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const progress = [8, 17, 25, 33, 42, 50, 58, 67, 75, 83, 92, 100];
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
}, 6000);

const questionPlaceholder = document.querySelector(".question");
const answer1Placeholder = document.querySelector(".answer--1");
const answer2Placeholder = document.querySelector(".answer--2");
const answer3Placeholder = document.querySelector(".answer--3");
// const answer4Placeholder = document.querySelector(".answer--4");
const image = document.querySelector(".image");

const answerPlaceholders = [answer1Placeholder, answer2Placeholder, answer3Placeholder];
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

    // helpBtn.style.display = "block";

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

        for(let i=1; i<=2; i++) {
            rightAnswerMarker.classList.remove(`img--mark--${i}`);

            wrongAnswerMarker.classList.remove(`img--mark--${i}`);
            wrongAnswerMarker.classList.remove(`img--mark--${i}--wrong`);
        }

        const { question, right, wrong1, wrong2 } = currentQuestionObject;
        questionPlaceholder.textContent = question;
        const currentQuestionAnswers = [right, wrong1, wrong2];
        const shuffledAnswers = shuffleArray(currentQuestionAnswers);

        answer1Placeholder.textContent = shuffledAnswers[0];
        answer2Placeholder.textContent = shuffledAnswers[1];
        answer3Placeholder.textContent = shuffledAnswers[2];
        // answer4Placeholder.textContent = shuffledAnswers[3];

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
