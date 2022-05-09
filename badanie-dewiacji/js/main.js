const calculationsComponents = Array.from(document.querySelectorAll('.calculationsInputs>.input--calculationsComponent'))
const calculationsResult = document.querySelector('.calculationsInputs>.input--calculationsResult');
const kzValueInput = document.querySelector('.input--kz--1');
const kkValueInput = document.querySelector('.input--kk--1');
const radarImages = Array.from(document.querySelectorAll('.radar>.img'));
const largeRadarImages = Array.from(document.querySelectorAll('.largeRadar>.img'));
const largeRadar = document.querySelector('.largeRadar');

/* Start */
const begin = () => {
    document.querySelector(`.view--start`).style.visibility = 'hidden';
    document.querySelector(`.view--1`).style.visibility = 'visible';
}

/* 1st view */
const slider2 = document.getElementById('deklinacja');

let deklinacja = -4;
let reason = 0;
let way = 0;

slider2.oninput = function() {
    deklinacja = this.value;
}

let reasonsVisible = false;
const showReasons = () => {
    console.log(reasonsVisible);
    const selectedReasonsList = document.querySelector('.selectedReasons--list');
    if(reasonsVisible) {
        selectedReasonsList.style.visibility = 'hidden';
    }
    else {
        selectedReasonsList.style.visibility = 'visible';
    }
    reasonsVisible = !reasonsVisible;
}

let waysVisible = false;
const showWays = () => {
    const selectedReasonsList = document.querySelector('.selectedWays--list');
    if(waysVisible) {
        selectedReasonsList.style.visibility = 'hidden';
    }
    else {
        selectedReasonsList.style.visibility = 'visible';
    }
    waysVisible = !waysVisible;
}

const reasons = [
    './img/przyczyna1.png',
    './img/przyczyna2.png',
    './img/przyczyna3.png'
]

const ways = [
    './img/sposob1.png',
    './img/sposob2.png'
]

const helps = Array.from(document.querySelectorAll('.help'));
const compass = document.querySelector('.compass');
const compassValues = document.querySelector('.compassValues');
const staticCompass = document.querySelector('.staticCompass');
const staticCompassValueEl = document.querySelector('.staticCompass__value');

let currentCompassRotation = 0;
const compassRotations = [133, 89, 44, 0, -45, -90, -136, -186];
const staticCompassValues = ['358', '41,5', '83,5', '127', '174,5', '223', '270', '314'];

const setReason = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen');
    chosenImg.setAttribute('src', reasons[n-1]);
    reason = n-1;
    showReasons();

    if(way !== 1) {
        if(reason === 0) {
            slider2.value = 1;
        }
        else if(reason === 1) {
            slider2.value = -1;
        }
        else {
            slider2.value = -2;
        }
    }
}

const setWay = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen--ways');
    chosenImg.setAttribute('src', ways[n-1]);
    way = n-1;

    if(way === 1) {
        slider2.value = 2;
    }

    showWays();
}

const reasonNames = [
    'Statek nowo zbudowany',
    'Statek po pobycie w stoczni',
    'Statek po wejściu na mieliznę',
    'Statek po przewozie złomu',
    'Przewóz ładunków o silnych właściowościach magnetycznych',
    'Statek po uderzeniu pioruna'
]

let selectedAngles = [];
let angles = [0, 45, 90, 135, 180, 225, 270, 315];
let declination = [false, false, false, false, false, false, false, false, false];

const toggleDeclination = (n) => {
    if(declination[n-1]) {
        document.querySelector(`.kursy--${n}`).style.background = "#efefef";
        selectedAngles = selectedAngles.filter((item) => {
            return item !== angles[n-1];
        });
    }
    else {
        selectedAngles.push(angles[n-1]);
        document.querySelector(`.kursy--${n}`).style.background = "#32B86E";
    }

    declination = declination.map((item, index) => {
        if(n-1 === index) return !item;
        else return item;
    });
}

const openHelp = () => {
    helps[way].style.visibility = 'visible';
    helps[way].style.opacity = '1';
}

const closeHelp = () => {
    helps[way].style.visibility = 'hidden';
    helps[way].style.opacity = '0';
}

const showCompass = () => {
    compass.style.opacity = '1';
    compass.style.visibility = 'visible';
}

const hideCompass = () => {
    compass.style.opacity = '0';
    compass.style.visibility = 'hidden';
}

const showStaticCompass = () => {
    staticCompass.style.opacity = '1';
    staticCompass.style.visibility = 'visible';
}

const hideStaticCompass = () => {
    staticCompass.style.opacity = '0';
    staticCompass.style.visibility = 'hidden';
}

const enlargeRadar = () => {
    largeRadar.style.opacity = '1';
    largeRadar.style.visibility = 'visible';
    largeRadar.style.zIndex = '100';
}

const hideRadar = () => {
    largeRadar.style.opacity = '0';
    largeRadar.style.visibility = 'hidden';
    largeRadar.style.zIndex = '-3';
}

const acceptCompass = () => {
    hideCompass();
}

const compassPlus = () => {
    currentCompassRotation++;
    if(currentCompassRotation === 8) currentCompassRotation = 0;
    compassRotation();
}

const compassMinus = () => {
    currentCompassRotation--;
    if(currentCompassRotation === -1) currentCompassRotation = 5;
    compassRotation();
}

const compassRotation = () => {
    staticCompassValueEl.textContent = staticCompassValues[currentCompassRotation];
    compassValues.style.transform = `rotate(${compassRotations[currentCompassRotation]}deg)`;

    kzValueInput.textContent = staticCompassValues[currentCompassRotation];
    kkValueInput.textContent = angles[currentCompassRotation].toString();

    if(way === 1) {
        radarImages.forEach((item, index) => {
            if(index === currentCompassRotation) {
                item.style.visibility = 'visible';
            }
            else {
                item.style.visibility = 'hidden';
            }
        });
        largeRadarImages.forEach((item, index) => {
            if(index === currentCompassRotation) {
                item.style.visibility = 'visible';
            }
            else {
                item.style.visibility = 'hidden';
            }
        });
    }
}

const start = () => {
    if(declination.filter((item) => {
        return item;
    }).length === 0) { // TODO: change to 8
        document.querySelector('.view--start').style.visibility = 'hidden';
        document.querySelector('.view--1').style.visibility = 'hidden';
        document.querySelector('.view--chart').style.visibility = 'hidden';
        document.querySelector(`.view--${way+2}`).style.visibility = 'visible';

        Array.from(document.querySelectorAll('.deklinacja--value')).forEach((item) => {
            item.textContent = slider2.value;
        });
        Array.from(document.querySelectorAll('.reason--value')).forEach((item) => {
            item.textContent = reasonNames[reason]
        });
    }
    else {
        const feedback = document.querySelector('.feedback');
        const startBtn = document.querySelector('.startBtn');

        feedback.style.zIndex = '2';
        feedback.textContent = 'Wybierz dokładnie osiem kursów kompasowych';
        startBtn.style.visibility = 'hidden';

        setTimeout(() => {
            feedback.textContent = '';
            feedback.style.zIndex = '-2';
            startBtn.style.visibility = 'visible';
        }, 2000);
    }
}

const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'hidden';
    document.querySelector(`.view--3`).style.visibility = 'hidden';
    document.querySelector(`.view--chart`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
}

const chart = () => {
    if(window.getComputedStyle(document.querySelector('.view--chart')).getPropertyValue('visibility') === 'hidden') {

        document.querySelector(`.view--1`).style.visibility = 'hidden';
        document.querySelector(`.view--2`).style.visibility = 'hidden';
        document.querySelector(`.view--3`).style.visibility = 'hidden';
        document.querySelector(`.view--chart`).style.visibility = 'visible';
    }
    else {
        home();
    }
}

// --------- UPDATE ----------
const preventToInputNotNumber = (event) => {
    if(event.target.value.length) {
        const lastSign = event.target.value[event.target.value.length-1];
        if(event.target.value === '-') {

        }
        else if(isNaN(lastSign) && lastSign !== ',' && lastSign !== '.') {
            event.target.value = event.target.value.substr(0, event.target.value.length-1);
        }
        else if(lastSign === ',') {
            event.target.value = event.target.value.substr(0, event.target.value.length-1) + '.';
        }
    }
}

const kmCalculateInputs = Array.from(document.querySelectorAll('.kmCalculateInputs>.input'));
const kkCalculateInputs = Array.from(document.querySelectorAll('.kkCalculateInputs>.input'));
const deltaCalculateInputs = Array.from(document.querySelectorAll('.deltaCalculateInputs>.input'));

const rightDeltaValues1 = [
    [2, -3.5, -6.5, -8, -5.5, -2, 0, -1], // deklinacja = 1
    [0, -1.5, -4.5, -6, -3.5, 0, 2, 1], // deklinacja = -1
    [1, -0.5, -3.5, -5, -2.5, 1, 3, 2] // deklinacja = -2
]

const goToChartScreen = () => {

}

const updateDelta1 = (event) => {
    if(event.value.length) {
        const lastSign = event.value[event.value.length-1];
        if(event.value === '-') {

        }
        else if(isNaN(lastSign) && lastSign !== ',' && lastSign !== '.') {
            event.value = event.value.substr(0, event.value.length-1);
        }
        else if(lastSign === ',') {
            event.value = event.value.substr(0, event.value.length-1) + '.';
        }
    }

    const firstValues = kmCalculateInputs.map((item) => {
        return item.value;
    });
    const secondValues = kkCalculateInputs.map((item) => {
        return item.value;
    });

    firstValues.forEach((item, index) => {
        if(item && secondValues[index]) {
            const subtractionResult = item - secondValues[index];
            if(Math.abs(subtractionResult) > 10) {
                deltaCalculateInputs[index].value = Math.abs(360 - Math.max(item, secondValues[index]));
            }
            else {
                deltaCalculateInputs[index].value = subtractionResult;
            }
        }
    });
}

calculationsComponents.forEach((item) => {
    item.addEventListener('input', (event) => {
        const comp1 = calculationsComponents[0];
        const comp2 = calculationsComponents[1];
        const comp3 = calculationsComponents[2];

        preventToInputNotNumber(event);

        if(comp1.value && comp2.value && comp3.value) {
            const result = parseFloat(comp1.value) + parseFloat(comp2.value) - parseFloat(comp3.value);
            if(!isNaN(result)) calculationsResult.value = result;
        }
        else {
            calculationsResult.value = '';
        }
    });
});

const allInputs = Array.from(document.querySelectorAll('.toClear'));

const clearInputs = () => {
    allInputs.forEach((item) => {
        item.value = '';
    });
}
