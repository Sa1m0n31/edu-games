const questions = [
        [
            {
                question: 'Fnac es:',
                right: 'la primera marca distribuidora en Europa de productos tecnológicos y culturales',
                wrong1: 'la marca distribuidora de alimentación',
                wrong2: 'la primera marca distribuidora de ropa ',
                wrong3: 'la marca que produce zapatillas deportivas'
            },
            {
                question: 'Fnac nació en el:',
                right: '1954',
                wrong1: '1594',
                wrong2: '1945',
                wrong3: '1845'
            },
            {
                question: 'En Fnac es posible comprar:',
                right: 'videojuegos, auriculares, libros, televisores, productos de hogar, etc. ',
                wrong1: 'leche, huevos, pan, carne, pescado, etc.',
                wrong2: 'muebles, zapatillas deportivas, alimentos, etc. ',
                wrong3: 'vestidos, calcetines, calzoncillos, trajes de baño, etc. '
            },
            {
                question: 'Desde hace 20 años Fnac es una compañía: ',
                right: 'con cuatro formas de entrega de los productos',
                wrong1: 'con solo una forma de entrega de los productos ',
                wrong2: 'con dos formas de entrega de los productos ',
                wrong3: 'con tres formas de entrega de los productos'
            }
        ],
        [
            {
                question: 'La opción Click & Collect se refiere a la posibilidad de:',
                right: 'comprar en la web un producto y recogerlo en la tienda o recibirlo en el domicilio',
                wrong1: 'comprar en la tienda un producto que físicamente está en otro lugar para recogerlo en la propia tienda o recibirlo en el domicilio',
                wrong2: 'reservar online un producto que está disponible en la tienda y pasar a recogerlo en 1 hora',
                wrong3: 'apostar por la flexibilidad '
            },
            {
                question: 'Same-Day Delivery es la opción que consiste en:',
                right: 'las entregas a domicilio en el día y entregas en 2h en todas las ciudades donde Fnac tiene sus tiendas',
                wrong1: 'recibir un producto comprado en la tienda',
                wrong2: 'apostar por la flexibilidad',
                wrong3: 'reservar online un producto'
            },
            {
                question: 'Fnac constituye un ejemplo único de alianza entre:',
                right: 'comercio, cultura y tecnología',
                wrong1: 'alimentación, moda y cultura',
                wrong2: 'música, cine y moda',
                wrong3: 'tecnología, alimentación y deporte'
            },
            {
                question: 'Para facilitar la recogida de los productos, Fnac dispone de:',
                right: 'lockers',
                wrong1: 'la tienda abierta 24/7',
                wrong2: 'el teléfono de ayuda',
                wrong3: 'la página web'
            }
        ],
    [
        {
            question: '¿Cuál de las siguientes cosas no vas a comprar en Fnac?',
            right: 'traje de baño',
            wrong1: 'televisor',
            wrong2: 'libros',
            wrong3: 'auriculares'
        },
        {
            question: 'En España Fnac tiene:',
            right: 'treinta y nueve tiendas y la página web',
            wrong1: 'treinta tiendas pero no tiene la página web',
            wrong2: 'solo la página web',
            wrong3: 'solo dos tiendas'
        },
        {
            question: '¿Qué puedes comprar en Fnac? ',
            right: 'móviles',
            wrong1: 'vestidos',
            wrong2: 'tacones',
            wrong3: 'gafas del sol'
        },
        {
            question: 'La opción en la que el cliente reserva online un producto que está disponible en la tienda y puede pasar a recogerlo en 1 hora se llama: ',
            right: 'Reserve & Collect',
            wrong1: 'Click & Collect',
            wrong2: 'ClickinStore',
            wrong3: 'Same-Day Delivery'
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

    feedbackRightPercentPlaceholder.textContent = progress[currentLvl-1].toString();

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
