let taskCompleted = 0;

const carousel = new Siema({
    selector: ".container",
    perPage: 1,
    draggable: false
});

const next = () => {
   carousel.next();
}

/* Interact - drag and drop */
let currentDraggableX = 0, currentDraggableY = 0;

function dragMoveListener (event) {
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

function dropListener(event) {
    const target = event.target;

    target.style.transform = 'translate(0, 0)';

    // update the posiion attributes
    target.setAttribute('data-x', currentDraggableX);
    target.setAttribute('data-y', currentDraggableY);
}

function dragStartListener(event) {
    const target = event.target;
    currentDraggableX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    currentDraggableY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact(".draggable").draggable({
    // enable inertial throwing
    inertia: true,
    // enable autoScroll
    autoScroll: true,

    listeners: {
        start: dragStartListener,
        move: dragMoveListener,
        end: dropListener
    }
});

const switchElements = (selector1, selector2) => {
    const el1 = document.querySelector(selector1);
    const el2 = document.querySelector(selector2);

    el1.style.visibility = "hidden";
    el1.style.display = "none";
    el2.style.display = "block";
    el2.style.visibility = "visible";
    el2.style.height = "auto";
}

const instructions = document.querySelectorAll(".view__instruction__p");
const endLvl = (n) => {
    const currentInstruction = instructions[n-1];
    currentInstruction.style.opacity = "0";
    setTimeout(() => {
        currentInstruction.textContent = "Świetnie!";
        currentInstruction.style.opacity = "1";
        setTimeout(() => {
            next();
        }, 1000);
    }, 400);
}

/* Lvl 1 - can dropzone */
interact(".dropzone--1-1").dropzone({
    accept: ".element--1-1",
    overlap: 0.3,
    ondragenter: function(event) {
        /* Add honey to can */
        if(taskCompleted === 0) {
            switchElements('.element__img--emptyCan', '.element__img--fullCan');
            taskCompleted++;
        }
    }
});

/* Lvl 1 - pan dropzone */
interact(".dropzone--1-2").dropzone({
    accept: [".element--1-8", ".element--1-7", ".element--1-4"],
    overlap: 0.3,
    ondragenter: function(event) {
        const elementClass = event.relatedTarget.classList[1];
        if(taskCompleted === 1 && elementClass === 'element--1-8') {
            /* Add honey to pan */
            switchElements('.element__img--emptyPan', '.element__img--panWithHoney');
            taskCompleted++;
        }
        else if(taskCompleted === 3 && elementClass === 'element--1-7') {
            /* Add butter to pan */
            switchElements('.element__img--panWithHoney', '.element__img--panWithButterAndHoney');
            switchElements('.element__img--bowlWithButter', '.element__img--emptyBowl');
            switchElements('.element__img--scales80', '.element__img--scales0');
            taskCompleted++;
        }
        else if(taskCompleted === 5 && elementClass === 'element--1-7') {
            /* Add sugar to pan */
            switchElements('.element__img--panWithButterAndHoney', '.element__img--fullPan');
            switchElements('.element__img--bowlWithSugar', '.element__img--emptyBowl');
            switchElements('.element__img--scales90', '.element__img--scales0');
            taskCompleted++;
            startTurnCookerButtonAnimation();
        }
        else if(taskCompleted === 7 && elementClass === 'element--1-4') {
            const cookerTurnOnBtn = document.querySelector(".element--1-9");
            cookerTurnOnBtn.style.display = "none";
            taskCompleted++;
            endLvl(1);
        }
    }
});

/* Lvl 1 - scales dropzone */
interact(".dropzone--1-3").dropzone({
    accept: [".element--1-2", ".element--1-3"],
    overlap: 0.3,
    ondragenter: function(event) {
        /* Add butter to scales */
        if(taskCompleted === 2) {
            switchElements('.element__img--emptyBowl', '.element__img--bowlWithButter');
            switchElements('.element__img--scales0', '.element__img--scales80');
            taskCompleted++;
        }
        else if(taskCompleted === 4) {
            switchElements('.element__img--scales0', '.element__img--scales90');
            switchElements('.element__img--emptyBowl', '.element__img--bowlWithSugar');
            taskCompleted++;
        }
    }
});

/* Lvl 2 - scales dropzone */
interact(".dropzone--2-1").dropzone({
    accept: [".element--2-3"],
    overlap: 0.3,
    ondragenter: function(event) {
        /* Add butter to scales */
        if(taskCompleted === 8) {
            switchElements('.element__img--emptyBowl-2', '.element__img--bowlWithSugar-2');
            switchElements('.element__img--scales0-2', '.element__img--scales380');
            taskCompleted++;
        }
    }
});

/* Lvl 2 - stolnica dropzone */
const sitkoInPlace = document.querySelector(".element__img--sitkoInPlace");
interact(".dropzone--2-2").dropzone({
    accept: [".element--2-1", ".element--2-4"],
    overlap: 0.3,
    ondragenter: function(event) {
        /* Add sitko to stolnica */
        if(taskCompleted === 9 && event.relatedTarget.classList[1] === 'element--2-1') {
            const sitko = event.relatedTarget;
            sitko.style.display = "none";
            sitkoInPlace.style.display = "block";
            taskCompleted++;
        }
        else if(taskCompleted === 10) {
            /* Add flour to stolnica */
            switchElements(".element__img--stolnica", ".element__img--stolnicaZMaka");
            switchElements(".element__img--bowlWithSugar-2", ".element__img--emptyBowl-2");
            switchElements(".element__img--scales380", ".element__img--scales0-2");
            sitkoInPlace.style.display = "none";
            taskCompleted++;
            endLvl(2);
        }
    }
});

/* Lvl 3 - stolnica dropzone */
interact(".dropzone--3-2").dropzone({
    accept: [".element--3-8"],
    overlap: 0.1,
    ondragenter: function(event) {
        /* Add soda to stolnica */
        if(taskCompleted === 12 && event.relatedTarget.classList[1] === 'element--3-8') {
            switchElements(".element__img--lyzeczkaZSoda", ".element__img--lyzeczkaBezSody");
            taskCompleted++;
        }
        if(taskCompleted === 14 && event.relatedTarget.classList[1] === 'element--3-4') {
            /* Add przyprawy to stolnica */
            switchElements(".element__img--stolnicaZMaka-2", ".element__img--stolnicaZPrzyprawami");
            switchElements(".element__img--emptyBowl-3", ".element__img--bowlWithSugar-3");
            switchElements(".element__img--scales20-2", ".element__img--scales0-3");
            taskCompleted++;
        }
        if(taskCompleted === 15 && event.relatedTarget.classList[1] === 'element--3-6') {
            /* Add egg to stolnica */
            document.querySelector(".element--3-6").style.display = "none";
            switchElements(".element__img--stolnicaZPrzyprawami", ".element__img--stolnicaZJajkiem");
            taskCompleted++;
        }
        if(taskCompleted === 16 && event.relatedTarget.classList[1] === 'element--3-10') {
            /* Add rondel to stolnica */
            switchElements(".element__img--stolnicaZJajkiem", ".element__img--stolnicaZeWszystkim");
            taskCompleted++;
            endLvl(3);
        }
    }
});

/* Lvl 3 - soda dropzone */
interact(".dropzone--3-3").dropzone({
    accept: [".element--3-8"],
    overlap: 0.05,
    ondragenter: function(event) {
        /* Get soda on spoon */
        if(taskCompleted === 11 && event.relatedTarget.classList[1] === 'element--3-8') {
            switchElements(".element__img--lyzeczkaBezSody", ".element__img--lyzeczkaZSoda");
            taskCompleted++;
        }
    }
});

/* Lvl 3 - scales dropzone */
interact(".dropzone--3-4").dropzone({
    accept: [".element--3-9"],
    overlap: 0.1,
    ondragenter: function(event) {
        /* Add przyprawy to bowl */
        if(taskCompleted === 13) {
            switchElements(".element__img--emptyBowl-3", ".element__img--bowlWithSugar-3");
            switchElements(".element__img--scales0-3", ".element__img--scales20-2");
            taskCompleted++;
        }
    }
});

/* Lvl 4 - make pie on click */
const makePie = () => {
    if(taskCompleted === 17) {
        switchElements(".element__img--ciasto", ".element__img--rece");
        document.querySelector(".element__img--rece").classList.add("animation");
        setTimeout(() => {
            switchElements(".element__img--rece", ".element__img--ciastoUgniecione");
            taskCompleted++;
        }, 3000);
    }
}

let tempValue = 0, timeValue = 0;
const tempCounter = document.querySelector(".tempCounter");
const timeCounter = document.querySelector(".timeCounter");

let tempCounterInner = document.querySelector(".tempCounter__temp");
let timeCounterInner = document.querySelector(".timeCounter__minutes");

const endGame = () => {
    const currentInstruction = instructions[4];
    currentInstruction.style.opacity = "0";
    setTimeout(() => {
        currentInstruction.textContent = "Gratulacje! Twoje świąteczne pierniczki są już gotowe!";
        currentInstruction.style.opacity = "1";
    }, 400);
}

const startBaking = () => {
    switchElements(".element__img--ovenWithPies", ".element__img--oven");
    tempCounter.style.transform = "none";
    timeCounter.style.transform = "none";
    taskCompleted++;
    let interval = setInterval(() => {
        if(timeValue > 1) {
            timeValue--;
            timeCounterInner.textContent = "0" + timeValue;
        }
        else if(timeValue === 1) {
            timeCounterInner.textContent = "00";
            timeValue--;
        }
        else if(timeValue === 0) {
            switchElements(".element__img--oven", ".element__img--ovenReady");
            tempCounter.style.transform = "translateX(31%)";
            timeCounter.style.transform = "translateX(12%)";
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}

const isOvenReady = () => {
    return tempValue === 180 && timeValue === 10;
}

const increaseTemp = () => {
    if(taskCompleted === 24) {
        tempValue += 10;
        tempCounterInner.textContent = tempValue;
        if(isOvenReady()) startBaking();
    }
}

const decreaseTemp = () => {
    if(taskCompleted === 24) {
        tempValue -= 10;
        if(tempValue < 0) tempValue = 0;
        tempCounterInner.textContent = tempValue;
        if(isOvenReady()) startBaking();
    }
}

const increaseTime = () => {
    if(taskCompleted === 24) {
        timeValue++;
        if(timeValue < 10) timeCounterInner.textContent = "0" + timeValue;
        else timeCounterInner.textContent = timeValue;
        if(isOvenReady()) startBaking();
    }
}

const decreaseTime = () => {
    if(taskCompleted === 24) {
        timeValue--;
        if(timeValue < 0) timeValue = 0;
        if(timeValue < 10) timeCounterInner.textContent = "0" + timeValue;
        else timeCounterInner.textContent = timeValue;
        if(isOvenReady()) startBaking();
    }
}

/* Lvl 5 - oven dropzone */
interact(".dropzone--5-1").dropzone({
    accept: [".element--5-2"],
    overlap: 0.3,
    ondragenter: function(event) {
        /* Add pies to oven */
        if(taskCompleted === 22) {
            switchElements(".element__img--oven", ".element__img--openOven");
            tempCounter.style.transform = "translateX(31%)";
            timeCounter.style.transform = "translateX(12%)";
            taskCompleted++;
        }
    },
    ondrop: function(event) {
        if(taskCompleted === 23) {
            switchElements(".element__img--openOven", ".element__img--ovenWithPies");
            document.querySelector(".element--5-2").style.display = "none";
            taskCompleted++;
        }
    }
});

let firstForm = '', selectorForOnePie = '', selectorForTwoPies = '';
const isForm = (str) => {
    return str === 'element--4-1' || str === 'element--4-2' || str === 'element--4-3';
}

const getForm = (str) => {
    switch(str) {
        case 'element--4-1':
            if(!firstForm) firstForm = 'gwiazdka';
            return 'gwiazdka';
        case 'element--4-2':
            if(!firstForm) firstForm = 'serce';
            return 'serce';
        case 'element--4-3':
            if(!firstForm) firstForm = 'ludzik';
            return 'ludzik';
        default:
            return '';
    }
}

const getPieWithTwoForms = (str) => {
    switch(getForm(str)) {
        case 'gwiazdka':
            if(firstForm === 'serce') return '.element__img--ciastoGwiazdkaSerce';
            else return '.element__img--ciastoGwiazdkaLudzik';
        case 'serce':
            if(firstForm === 'gwiazdka') return '.element__img--ciastoGwiazdkaSerce';
            else return '.element__img--ciastoSerceLudzik';
        case 'ludzik':
            if(firstForm === 'serce') return '.element__img--ciastoSerceLudzik';
            else return '.element__img--ciastoGwiazdkaLudzik';
        default:
            return '';
    }
}

const getPieWithOneForm = (str) => {
   getForm(str);
   switch(str) {
       case 'element--4-1':
           return '.element__img--ciastoGwiazdka';
       case 'element--4-2':
           return '.element__img--ciastoSerce';
       case 'element--4-3':
           return '.element__img--ciastoLudzik';
       default:
           break;
   }
}

const addPie = (str) => {
    switch(str) {
        case 'element--4-1':
            document.querySelector(".element--4-7").classList.remove('hidden');
            break;
        case 'element--4-2':
            document.querySelector(".element--4-6").classList.remove('hidden');
            break;
        case 'element--4-3':
            document.querySelector(".element--4-8").classList.remove('hidden');
            break;
        default:
            break;
    }
}

/* Lvl 3 - pie dropzone */
interact(".dropzone--4-1").dropzone({
    accept: [".element--4-5", ".element--4-1", ".element--4-2", ".element--4-3"],
    overlap: 0.3,
    ondragenter: function(event) {
        if(taskCompleted === 18 && event.relatedTarget.classList[1] === 'element--4-5') {
            switchElements(".element__img--ciastoUgniecione", ".element__img--ciastoRozwalkowane");
            taskCompleted++;
        }
        else if(taskCompleted === 19 && isForm(event.relatedTarget.classList[1])) {
            selectorForOnePie = getPieWithOneForm(event.relatedTarget.classList[1]);
            switchElements(".element__img--ciastoRozwalkowane", selectorForOnePie);
            addPie(event.relatedTarget.classList[1]);
            taskCompleted++;
        }
        else if(taskCompleted === 20 && isForm(event.relatedTarget.classList[1])) {
            selectorForTwoPies = getPieWithTwoForms(event.relatedTarget.classList[1]);
            switchElements(selectorForOnePie, selectorForTwoPies);
            addPie(event.relatedTarget.classList[1]);
            taskCompleted++;
        }
        else if(taskCompleted === 21 && isForm(event.relatedTarget.classList[1])) {
            switchElements(selectorForTwoPies, ".element__img--ciastoTrzyPierniki");
            addPie(event.relatedTarget.classList[1]);
            taskCompleted++;
            endLvl(4);
        }
    }
});

let cookerBtnInterval;
let test = true;
const startTurnCookerButtonAnimation = () => {
    const btn = document.querySelector(".element--1-9");
    btn.style.opacity = "1";
    let visible = true;
    cookerBtnInterval = setInterval(() => {
        if(test) {
            btn.style.opacity = visible ? "0" : "1";
            visible = !visible;
        }
    }, 1000);
}

const stopTurnCookerButtonAnimation = () => {
    clearInterval(cookerBtnInterval);
    const btn = document.querySelector(".element--1-9");
    btn.style.opacity = "1";
}

/* Lvl 1 - turn on cooker */
const turnCookerOn = () => {
    if(taskCompleted === 6) {
        stopTurnCookerButtonAnimation();
        taskCompleted++;
    }
}
