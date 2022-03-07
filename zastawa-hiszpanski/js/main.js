let lvl = 0;
let subLvl = 0;

const lvlSpan = document.querySelector(".currentLvl");
const subLvlSpan = document.querySelector(".currentSubLvl");
const questionPlaceholder = document.querySelector(".question");

let el1Dropped = false, el2Dropped = false, el3Dropped = false, el4Dropped = false;
let el5Dropped = false, el6Dropped = false, el7Dropped = false, el8Dropped = false;
let el9Dropped = false, el10Dropped = false, el11Dropped = false, el12Dropped = false;

let el13Dropped = false, el14Dropped = false, el15Dropped = false, el16Dropped = false, el17Dropped = false, el18Dropped = false;
let el19Dropped = false, el20Dropped = false, el21Dropped = false, el22Dropped = false;
let el23Dropped = false, el24Dropped = false, el25Dropped = false, el26Dropped = false;

let el27Dropped = false, el28Dropped = false, el29Dropped = false, el30Dropped = false, el31Dropped = false;
let el32Dropped = false, el33Dropped = false, el34Dropped = false, el35Dropped = false, el36Dropped = false;
let el37Dropped = false, el38Dropped = false, el39Dropped = false, el40Dropped = false, el41Dropped = false, el42Dropped = false;

/* Add draggable to elements */
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact(".draggable").draggable({
    // enable inertial throwing
    inertia: true,
    // enable autoScroll
    autoScroll: true,

    listeners: {
        // call this function on every dragmove event
        move: dragMoveListener
    }
});

const questions = [
    [
        'Hay un plato en el centro de la mesa. A la izquierda del plato hay un tenedor. A la derecha del plato hay un cuchillo. Hay un vaso arriba del plato',
        'Hay un plato hondo en el centro de la mesa. A la derecha hay una cuchara. Junto a la cuchara hay un cuchillo. A la izquierda del plato hay un tenedor.',
        'Hay un plato de postre en el centro de la mesa. A la derecha hay una taza. Hay cuchara de postre arriba del plato. A la izquierda del plato hay un vaso.'
    ],
    [
        'Hay un plato en el centro de la mesa. Sobre el plato hay un plato hondo. Hay una cuchara a la derecha del plato. Junto a la cuchara hay un cuchillo. Hay un tenedor al lado del cuchillo. A la izquierda del plato hay un vaso',
        'En el centro de la mesa hay un plato de postre. Encima del plato hay un cuenco. Encima del cuenco hay una cuchara de postre. A la izquierda del plato hay un tenedor de postre.',
        'Hay una cuchara en el centro de la mesa. A la derecha de la cuchara hay un plato hondo. A la izquierda de la cuchara hay un plato. Hay un vaso arriba de la cuchara.'
    ],
    [
        'En el centro de la mesa hay un plato. Hay un vaso en el plato. A la derecha del plato hay una taza. A la izquierda del plato hay una cuchara de sopa. Sobre la cuchara hay un salero.',
        'En el centro de la mesa hay un plato hondo. Sobre el plato hondo hay un cuenco. Hay una taza debajo del plato hondo. Hay un pimentero a la derecha del plato. A la izquierda del plato hay un tenedor.',
        'En el centro de la mesa hay un salero. A la derecha del salero hay un pimentero. A la derecha del pimentero hay una cuchara sopera. A la izquierda del salero hay un cuchillo. Arriba del salero y el pimentero hay un vaso. A la derecha del vaso hay una taza.'
    ]
]

const elements11 = document.querySelectorAll("#elements-1-1>*");
const elements12 = document.querySelectorAll("#elements-1-2>*");
const elements13 = document.querySelectorAll("#elements-1-3>*");
const elements21 = document.querySelectorAll("#elements-2-1>*");
const elements22 = document.querySelectorAll("#elements-2-2>*");
const elements23 = document.querySelectorAll("#elements-2-3>*");
const elements31 = document.querySelectorAll("#elements-3-1>*");
const elements32 = document.querySelectorAll("#elements-3-2>*");
const elements33 = document.querySelectorAll("#elements-3-3>*");

const dropzones11 = document.querySelectorAll(".dropzone-1-1");
const dropzones12 = document.querySelectorAll(".dropzone-1-2");
const dropzones13 = document.querySelectorAll(".dropzone-1-3");
const dropzones21 = document.querySelectorAll(".dropzone-2-1");
const dropzones22 = document.querySelectorAll(".dropzone-2-2");
const dropzones23 = document.querySelectorAll(".dropzone-2-3");
const dropzones31 = document.querySelectorAll(".dropzone-3-1");
const dropzones32 = document.querySelectorAll(".dropzone-3-2");
const dropzones33 = document.querySelectorAll(".dropzone-3-3");

const allElements = [[elements11, elements12, elements13],
    [elements21, elements22, elements23],
    [elements31, elements32, elements33]];

const allDropzones = [[dropzones11, dropzones12, dropzones13],
    [dropzones21, dropzones22, dropzones23],
    [dropzones31, dropzones32, dropzones33]];

const nextEtape = () => {
    setTimeout(() => {
        allElements[lvl][subLvl].forEach((item) => {
                item.style.opacity = "0";
                setTimeout(() => {
                    item.style.display = "none";
                }, 500);
        });

        allDropzones[lvl][subLvl].forEach((item) => {
            item.style.display = "none";
        });

        subLvl++;

        if(subLvl === 3) {
            nextLvl();
        }
        else {
            allElements[lvl][subLvl].forEach((item) => {
                setTimeout(() => {
                    item.style.display = "block";
                    item.style.opacity = "1";
                }, 500);
            });
            allDropzones[lvl][subLvl].forEach((item) => {
                item.style.display = "block";
            });

            subLvlSpan.textContent = (subLvl + 1).toString();
            questionPlaceholder.style.opacity = "0";
            setTimeout(() => {
                questionPlaceholder.style.opacity = "1";
                questionPlaceholder.textContent = questions[lvl][subLvl];
            }, 400);
        }
    }, 1000);
}

const nextLvl = () => {
    lvl++;
    subLvl = 0;

    if(lvl === 3) {
        /* End of the game */
        document.querySelector(".textWrapper").style.opacity = "0";
        allElements[2][2].forEach((item) => {
            item.style.opacity = "0";
        });
    }
    else {
        allElements[lvl][subLvl].forEach((item) => {
            setTimeout(() => {
                item.style.display = "block";
                item.style.opacity = "1";
            }, 500);
        });
        allDropzones[lvl][subLvl].forEach((item) => {
            item.style.display = "block";
        });

        lvlSpan.textContent = (lvl + 1).toString();
        subLvlSpan.textContent = (subLvl + 1).toString();
        questionPlaceholder.style.opacity = "0";
        setTimeout(() => {
            questionPlaceholder.style.opacity = "1";
            questionPlaceholder.textContent = questions[lvl][subLvl];
        }, 400);
    }
}

/* Lvl 1 */
const start = () => {
    allElements[0][0].forEach((item) => {
        item.style.display = "block";
        item.style.opacity = "1";
    });
    allDropzones[0][0].forEach((item) => {
        item.style.display = "block";
    });
}

start();

let elementsDropped = 0;

const checkIfEtapeFinished = () => {
    switch(lvl) {
        case 0:
            switch(subLvl) {
                case 0:
                    if(elementsDropped === 4) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 1:
                    if(elementsDropped === 4) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 2:
                    if(elementsDropped === 4) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch(subLvl) {
                case 0:
                    if(elementsDropped === 6) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 1:
                    if(elementsDropped === 4) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 2:
                    if(elementsDropped === 4) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch(subLvl) {
                case 0:
                    if(elementsDropped === 5) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 1:
                    if(elementsDropped === 5) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                case 2:
                    if(elementsDropped === 6) {
                        nextEtape();
                        elementsDropped = 0;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

/* Lvl 1 */
interact(".dropzone-1-1-talerz").dropzone({
    accept: "#talerz-1-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el1Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el1Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el1Dropped = false;
    }
});

interact(".dropzone-1-1-widelec").dropzone({
    accept: "#widelec-1-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el2Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el2Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el2Dropped = false;
    }
});

interact(".dropzone-1-1-szklanka").dropzone({
    accept: "#szklanka-1-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el3Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el3Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el3Dropped = false;
    }
});

interact(".dropzone-1-1-noz").dropzone({
    accept: "#noz-1-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el4Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el4Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el4Dropped = false;
    }
});

/* Lvl 2 */
interact(".dropzone-1-2-talerz").dropzone({
    accept: "#talerz-1-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el5Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el5Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el5Dropped = false;
    }
});

interact(".dropzone-1-2-widelec").dropzone({
    accept: "#widelec-1-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el6Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el6Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el6Dropped = false;
    }
});

interact(".dropzone-1-2-lyzka").dropzone({
    accept: "#lyzka-1-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el7Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el7Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el7Dropped = false;
    }
});

interact(".dropzone-1-2-noz").dropzone({
    accept: "#noz-1-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el8Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el8Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el8Dropped = false;
    }
});

/* Lvl 3 */
interact(".dropzone-1-3-talerzyk").dropzone({
    accept: "#talerzyk-1-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el9Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el9Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el9Dropped = false;
    }
});

interact(".dropzone-1-3-lyzeczka").dropzone({
    accept: "#lyzeczka-1-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el10Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el10Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el10Dropped = false;
    }
});

interact(".dropzone-1-3-filizanka").dropzone({
    accept: "#filizanka-1-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el11Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el11Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el11Dropped = false;
    }
});

interact(".dropzone-1-3-szklanka").dropzone({
    accept: "#szklanka-1-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el12Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el12Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el12Dropped = false;
    }
});

/* Lvl 4 */
interact(".dropzone-2-1-talerz").dropzone({
    accept: "#talerz-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el13Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el13Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el13Dropped = false;
    }
});

interact(".dropzone-2-1-gleboki-talerz").dropzone({
    accept: "#gleboki-talerz-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el14Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el14Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el14Dropped = false;
    }
});

interact(".dropzone-2-1-lyzka").dropzone({
    accept: "#lyzka-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el15Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el15Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el15Dropped = false;
    }
});

interact(".dropzone-2-1-noz").dropzone({
    accept: "#noz-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el16Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el16Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el16Dropped = false;
    }
});

interact(".dropzone-2-1-widelec").dropzone({
    accept: "#widelec-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el17Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el17Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el17Dropped = false;
    }
});

interact(".dropzone-2-1-szklanka").dropzone({
    accept: "#szklanka-2-1",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el18Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el18Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el18Dropped = false;
    }
});

/* Lvl 5 */
interact(".dropzone-2-2-talerzyk").dropzone({
    accept: "#talerzyk-2-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el19Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el19Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el19Dropped = false;
    }
});

interact(".dropzone-2-2-miseczka").dropzone({
    accept: "#miseczka-2-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el20Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el20Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el20Dropped = false;
    }
});

interact(".dropzone-2-2-lyzeczka").dropzone({
    accept: "#lyzeczka-2-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el21Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el21Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el21Dropped = false;
    }
});

interact(".dropzone-2-2-widelczyk").dropzone({
    accept: "#widelczyk-2-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el22Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el22Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el22Dropped = false;
    }
});

/* Lvl 6 */
interact(".dropzone-2-3-talerz").dropzone({
    accept: "#talerz-2-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el23Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el23Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el23Dropped = false;
    }
});

interact(".dropzone-2-3-lyzka").dropzone({
    accept: "#lyzka-2-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el24Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el24Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el24Dropped = false;
    }
});

interact(".dropzone-2-3-gleboki-talerz").dropzone({
    accept: "#gleboki-talerz-2-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el25Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el25Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el25Dropped = false;
    }
});

interact(".dropzone-2-3-kubek").dropzone({
    accept: "#kubek-2-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el26Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el26Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el26Dropped = false;
    }
});

/* Lvl 7 */
interact(".dropzone-3-1-talerz").dropzone({
    accept: "#talerz-3-1",
    overlap: 0.01,
    ondragenter: function(event) {
        if(!el27Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el27Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el27Dropped = false;
    }
});

interact(".dropzone-3-1-szklanka").dropzone({
    accept: "#szklanka-3-1",
    overlap: 0.01,
    ondragenter: function(event) {
        if(!el28Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el28Dropped = true;
    },
    ondragleave: function(event) {
        elementsDropped--;
        el28Dropped = false;
    }
});

interact(".dropzone-3-1-filizanka").dropzone({
    accept: "#filizanka-3-1",
    overlap: 0.01,
    ondragenter: function(event) {
        if(!el29Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el29Dropped = true;
    },
    ondragleave: function(event) {
        elementsDropped--;
        el29Dropped = false;
    }
});

interact(".dropzone-3-1-lyzka").dropzone({
    accept: "#lyzka-3-1",
    overlap: 0.01,
    ondragenter: function(event) {
        if(!el30Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el30Dropped = true;
    },
    ondragleave: function(event) {
        elementsDropped--;
        el30Dropped = false;
    }
});

interact(".dropzone-3-1-solniczka").dropzone({
    accept: "#solniczka-3-1",
    overlap: 0.01,
    ondragenter: function(event) {
        if(!el31Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el31Dropped = true;
    },
    ondragleave: function(event) {
        elementsDropped--;
        el31Dropped = false;
    }
});

/* Lvl 8 */
interact(".dropzone-3-2-gleboki-talerz").dropzone({
    accept: "#gleboki-talerz-3-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el32Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el32Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el32Dropped = false;
    }
});

interact(".dropzone-3-2-miseczka").dropzone({
    accept: "#miseczka-3-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el33Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el33Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el33Dropped = false;
    }
});

interact(".dropzone-3-2-filizanka").dropzone({
    accept: "#filizanka-3-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el34Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el34Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el34Dropped = false;
    }
});

interact(".dropzone-3-2-pieprzniczka").dropzone({
    accept: "#pieprzniczka-3-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el35Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el35Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el35Dropped = false;
    }
});

interact(".dropzone-3-2-widelec").dropzone({
    accept: "#widelec-3-2",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el36Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el36Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el36Dropped = false;
    }
});

/* Lvl 9 */
interact(".dropzone-3-3-noz").dropzone({
    accept: "#noz-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el37Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el37Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el37Dropped = false;
    }
});

interact(".dropzone-3-3-solniczka").dropzone({
    accept: "#solniczka-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el38Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el38Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el38Dropped = false;
    }
});

interact(".dropzone-3-3-pieprzniczka").dropzone({
    accept: "#pieprzniczka-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el39Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el39Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el39Dropped = false;
    }
});

interact(".dropzone-3-3-lyzka").dropzone({
    accept: "#lyzka-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el40Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el40Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el40Dropped = false;
    }
});

interact(".dropzone-3-3-kubek").dropzone({
    accept: "#szklanka-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el41Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el41Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el41Dropped = false;
    }
});

interact(".dropzone-3-3-filizanka").dropzone({
    accept: "#filizanka-3-3",
    overlap: 0.01,
    ondragenter: function(event) {

        if(!el42Dropped) elementsDropped++;
        checkIfEtapeFinished();
        el42Dropped = true;
    },
    ondragleave: function(event) {

        elementsDropped--;
        el42Dropped = false;
    }
});
