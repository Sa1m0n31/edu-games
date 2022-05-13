const view1 = document.querySelector('.view--1');
const viewStart = document.querySelector('.view--start');
const help = document.querySelector('.help');

const wind1El = document.querySelector('.radar__img--wind1');
const wind2El = document.querySelector('.radar__img--wind2');
const rainEl = document.querySelector('.radar__img--rain');
const snowEl = document.querySelector('.radar__img--snow');

const start = () => {
   viewStart.style.visibility = 'hidden';
   view1.style.visibility = 'visible';
}

const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
}

const openHelp = () => {
    help.style.opacity = '1';
    help.style.visibility = 'visible';
}

const closeHelp = () => {
    help.style.opacity = '0';
    help.style.visibility = 'hidden';
}

let wind, rain;
const wiatrRange = document.getElementById('wiatr')
const opadyRange = document.getElementById('opady');
const predkoscRange = document.getElementById('predkosc');

wiatrRange.addEventListener('input', (e) => {
    wind = parseInt(e.target.value);

    if(wind === 0) {
        wind1El.style.visibility = 'hidden';
        wind2El.style.visibility = 'hidden';
    }
    else if(wind === 1) {
        wind1El.style.visibility = 'visible';
        wind2El.style.visibility = 'hidden';
    }
    else {
        wind1El.style.visibility = 'hidden';
        wind2El.style.visibility = 'visible';
    }
});

opadyRange.addEventListener('input', (e) => {
    rain = parseInt(e.target.value);

    if(rain === 0) {
        rainEl.style.visibility = 'hidden';
        snowEl.style.visibility = 'hidden';
    }
    else if(rain === 1) {
        rainEl.style.visibility = 'visible';
        snowEl.style.visibility = 'hidden';
    }
    else {
        rainEl.style.visibility = 'hidden';
        snowEl.style.visibility = 'visible';
    }
});

const ship = document.querySelector('.ship');
const shipRotations = [0, 45, 90, 135, 180, 225, 270, 315];
const compassRotations = [-30, 13, 61, 103, 150, 194, 238, 282];
const zyrokompasRotations = [137, 89, 49, 10, -30, -89, -135, -183];
const compassIndicator = document.querySelector('.indicator--kompas');
const zyrokompasIndicator = document.querySelector('.indicator--zyrokompas');
let currentPermanentTransform = 0;

const transformIndicator = (n) => {
    compassIndicator.style.opacity = '.5';
    compassIndicator.style.transform = `rotate(${compassRotations[n]}deg)`;
}

const transformIndicatorPermanent = (n) => {
    currentPermanentTransform = n;
    compassIndicator.style.opacity = '1';
    compassIndicator.style.transform = `rotate(${compassRotations[n]}deg)`;
    zyrokompasIndicator.style.transform = `rotate(${zyrokompasRotations[n]}deg)`;
    ship.style.transform = `rotate(${shipRotations[n]}deg)`;
}

const backToPreviousTransform = () => {
    compassIndicator.style.opacity = '1';
    compassIndicator.style.transform = `rotate(${compassRotations[currentPermanentTransform]}deg)`;
}

const clearInputs = () => {
    transformIndicatorPermanent(0);
    opadyRange.value = 0;
    wiatrRange.value = 0;
    predkoscRange.value = 0;

    wind1El.style.visibility = 'hidden';
    wind2El.style.visibility = 'hidden';
    rainEl.style.visibility = 'hidden';
    snowEl.style.visibility = 'hidden';
}
