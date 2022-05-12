const calculationsComponents = Array.from(document.querySelectorAll('.calculationsInputs>.input--calculationsComponent'))
const calculationsResult = document.querySelector('.calculationsInputs>.input--calculationsResult');
const calculationsComponents2 = Array.from(document.querySelectorAll('.calculationsInputs--2>.input--calculationsComponent'));
const calculationsResult2 = document.querySelector('.calculationsInputs--2>.input--calculationsResult');
const kzValueInput = document.querySelector('.input--kz--1');
const kkValueInput = document.querySelector('.input--kk--1');
const radarImages = Array.from(document.querySelectorAll('.radar>.img'));
const largeRadarImages = Array.from(document.querySelectorAll('.largeRadar>.img'));
const largeRadar = document.querySelector('.largeRadar');
const view3Backgrounds = Array.from(document.querySelectorAll('.view__img--3'));
const nkInput = document.querySelector('.input--nk--2>span:first-of-type');
const kkValueSecondInput = document.querySelector('.input--kk--2>span:first-of-type');
const nkInputParent = document.querySelector('.input--nk--2');
const kkValueSecondInputParent = document.querySelector('.input--kk--2');
const viewStart = document.querySelector(`.view--start`);
const view1 = document.querySelector(`.view--1`);
const view2 = document.querySelector(`.view--2`);
const view3 = document.querySelector(`.view--3`);
const viewChart = document.querySelector('.view--chart');
const viewError = document.querySelector('.view--error');
const charts = Array.from(document.querySelectorAll('.view--chart>.view__img'));
const kmCalculateInputs = Array.from(document.querySelectorAll('.kmCalculateInputs>.input'));
const kkCalculateInputs = Array.from(document.querySelectorAll('.kkCalculateInputs>.input'));
const deltaCalculateInputs = Array.from(document.querySelectorAll('.deltaCalculateInputs>.input'));
const nmCalculateInputs = Array.from(document.querySelectorAll('.nmCalculateInputs>.input'));
const nkCalculateInputs = Array.from(document.querySelectorAll('.nkCalculateInputs>.input'));
const deltaCalculateInputs2 = Array.from(document.querySelectorAll('.deltaCalculateInputs--2>.input'));
const helps = Array.from(document.querySelectorAll('.help'));
const compass = document.querySelector('.compass');
const compassValues = document.querySelector('.compassValues');
const staticCompass = document.querySelector('.staticCompass');
const staticCompassValueEl = document.querySelector('.staticCompassValues');
const allInputs = Array.from(document.querySelectorAll('.toClear'));

let selectedAngles = [];
let angles = [0, 45, 90, 135, 180, 225, 270, 315];
let declination = [false, false, false, false, false, false, false, false, false];

let currentCompassRotation = 0;
const compassRotations = [133, 89, 44, 0, -45, -90, -136, -186];
const nkValues = ['46', '47', '48,5', '50', '49', '47', '46', '45'];
const staticCompassRotations = [136, 93, 52, 8, -40, -89, -136, -180];
const staticCompassValues = ['358', '41,5', '83,5', '127', '174,5', '223', '270', '314'];

const reasons = [
    './img/przyczyna1.png',
    './img/przyczyna2.png',
    './img/przyczyna3.png'
]

const ways = [
    './img/sposob1.png',
    './img/sposob2.png'
]

const reasonNames = [
    'Statek nowo zbudowany',
    'Statek po pobycie w stoczni',
    'Przewóz ładunków o silnych właściowościach magnetycznych',
]

const rightDeltaValues1 = [
    [2, -3.5, -6.5, -8, -5.5, -2, 0, -1], // deklinacja = 1
    [0, -1.5, -4.5, -6, -3.5, 0, 2, 1], // deklinacja = -1
    [1, -0.5, -3.5, -5, -2.5, 1, 3, 2] // deklinacja = -2
];
const rightDeltaValues2 = [
    1, 0, -1.5, -3, -2, 0, 1, 2
];

let deklinacjaSlider = document.getElementById('deklinacja');
let reason = 0;
let way = 0;
let reasonsVisible = false;
let waysVisible = false;

/* Start */
const begin = () => {
    viewStart.style.visibility = 'hidden';
    viewStart.style.zIndex = '0';
    view1.style.visibility = 'visible';
}

/* 1st view */
const showReasons = () => {
    const selectedReasonsList = document.querySelector('.selectedReasons--list');
    if(reasonsVisible) {
        selectedReasonsList.style.visibility = 'hidden';
    }
    else {
        selectedReasonsList.style.visibility = 'visible';
    }
    reasonsVisible = !reasonsVisible;
}

const clearInputs = () => {
    allInputs.forEach((item) => {
        item.value = '';
    });
}

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

const setReason = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen');
    chosenImg.setAttribute('src', reasons[n-1]);
    reason = n-1;
    showReasons();

    if(way !== 1) {
        if(reason === 0) {
            deklinacjaSlider.value = 1;
        }
        else if(reason === 1) {
            deklinacjaSlider.value = -1;
        }
        else {
            deklinacjaSlider.value = -2;
        }
    }
}

const setWay = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen--ways');
    chosenImg.setAttribute('src', ways[n-1]);
    const oldWay = way;
    way = n-1;

    if(way === 1) {
        deklinacjaSlider.value = 2;
    }
    else if(way === 0 && oldWay === 1) {
        switch(reason) {
            case 0:
                deklinacjaSlider.value = 1;
                break;
            case 1:
                deklinacjaSlider.value = -1;
                break;
            default:
                deklinacjaSlider.value = -2;
                break;
        }
    }

    showWays();
}

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
    if(way === 1) document.querySelector('.view--3').style.zIndex = '4';
}

const closeHelp = () => {
    helps[way].style.visibility = 'hidden';
    helps[way].style.opacity = '0';
    if(way === 1)  document.querySelector('.view--3').style.zIndex = '2';
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
    document.querySelector('.view--3').style.zIndex = '4';
}

const hideRadar = () => {
    largeRadar.style.opacity = '0';
    largeRadar.style.visibility = 'hidden';
    largeRadar.style.zIndex = '-3';
    document.querySelector('.view--3').style.zIndex = '2';
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
    compassValues.style.transform = `rotate(${compassRotations[currentCompassRotation]}deg)`;
    staticCompassValueEl.style.transform = `rotate(${staticCompassRotations[currentCompassRotation]}deg)`;

    kzValueInput.textContent = staticCompassValues[currentCompassRotation];
    kkValueInput.textContent = angles[currentCompassRotation].toString();

    if(way === 1) {
        view3Backgrounds.forEach((item, index) => {
            if(index === currentCompassRotation + 1) {
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

        nkInputParent.style.opacity = '1';
        kkValueSecondInputParent.style.opacity = '1';
        nkInput.textContent = nkValues[currentCompassRotation];
        kkValueSecondInput.textContent = angles[currentCompassRotation];
    }
}

const start = () => {
    if(declination.filter((item) => {
        return item;
    }).length === 8) {
        viewStart.style.visibility = 'hidden';
        view1.style.visibility = 'hidden';
        view2.style.visibility = 'hidden';
        view3.style.visibility = 'hidden';
        viewChart.style.visibility = 'hidden';
        document.querySelector(`.view--${way+2}`).style.visibility = 'visible';

        Array.from(document.querySelectorAll('.deklinacja--value')).forEach((item) => {
            item.textContent = deklinacjaSlider.value;
        });
        Array.from(document.querySelectorAll('.reason--value')).forEach((item) => {
            item.textContent = reasonNames[reason]
        });

        view3Backgrounds[0].style.visibility = 'visible';

        if(way === 1) {
            document.querySelector('.view--3').style.zIndex = '2';
        }
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
    clearInputs();

    [1, 2, 3, 4, 5, 6, 7, 8].forEach((item) => {
        toggleDeclination(item);
    });

    view1.style.visibility = 'hidden';
    view2.style.visibility = 'hidden';
    view3.style.visibility = 'hidden';
    view3.style.zIndex = '-1';
    viewChart.style.visibility = 'hidden';
    viewChart.style.zIndex = '-1';
    viewError.style.visibility = 'hidden';
    viewStart.style.visibility = 'visible';
    viewStart.style.zIndex = '5';
}

const preventToInputNotNumber = (event) => {
    if(event.target.value.length) {
        const lastSign = event.target.value[event.target.value.length-1];
        if(event.target.value !== '-') {
            if(isNaN(lastSign) && lastSign !== ',' && lastSign !== '.') {
                event.target.value = event.target.value.substr(0, event.target.value.length-1);
            }
            else if(lastSign === ',') {
                event.target.value = event.target.value.substr(0, event.target.value.length-1) + '.';
            }
        }

    }
}

const inputValidation = (event) => {
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
}

const updateDelta1 = (event) => {
    inputValidation(event);

    const firstValues = kmCalculateInputs.map((item) => {
        return item.value;
    });
    const secondValues = kkCalculateInputs.map((item) => {
        return item.value;
    });

    firstValues.forEach((item, index) => {
        if(item && secondValues[index]) {
            const subtractionResult = item - secondValues[index];
            if(Math.abs(subtractionResult) > 350) {
                deltaCalculateInputs[index].value = Math.abs(360 - Math.max(item, secondValues[index]));
            }
            else {
                deltaCalculateInputs[index].value = subtractionResult;
            }
        }
    });
}

const updateDelta2 = (event) => {
    inputValidation(event);

    const firstValues = nmCalculateInputs.map((item) => {
        return item.value;
    });
    const secondValues = nkCalculateInputs.map((item) => {
        return item.value;
    });

    firstValues.forEach((item, index) => {
        if(item && secondValues[index]) {
            const subtractionResult = item - secondValues[index];
            deltaCalculateInputs2[index].value = subtractionResult;
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

calculationsComponents2.forEach((item) => {
    item.addEventListener('input', (event) => {
        const comp1 = calculationsComponents2[0];
        const comp2 = calculationsComponents2[1];

        preventToInputNotNumber(event);

        if(comp1.value && comp2.value) {
            const result = parseFloat(comp1.value) - parseFloat(comp2.value);
            if(!isNaN(result)) calculationsResult2.value = result;
        }
        else {
            calculationsResult2.value = '';
        }
    });
});

const printChart = (n) => {
    viewChart.style.visibility = 'visible';
    viewChart.style.zIndex = '5';

    charts.forEach((item, index) => {
        if(index === n) {
            item.style.opacity = '1';
        }
        else {
            item.style.opacity = '0';
        }
    });
}

const showError = () => {
    viewError.style.opacity = '1';
    viewError.style.visibility = 'visible';
    viewError.style.zIndex = '100';
    setTimeout(() => {
        viewError.style.opacity = '0';
        viewError.style.zIndex = '-5';
        viewError.style.visibility = 'visible';
    }, 2000);
}

const checkDelta1 = () => {
    const validation = deltaCalculateInputs.findIndex((item, index) => {
        return parseFloat(item.value) !== parseFloat(rightDeltaValues1[reason][index]);
    }) === -1;

    if(validation) {
        printChart(reason);
    }
    else {
        showError();
    }
}

const checkDelta2 = () => {
    const validation = deltaCalculateInputs2.findIndex((item, index) => {
        return parseFloat(item.value) !== parseFloat(rightDeltaValues2[index]);
    }) === -1;

    if(validation) {
        printChart(3);
    }
    else {
        showError();
    }
}
