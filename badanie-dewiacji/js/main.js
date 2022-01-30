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
    './img/Laboratorium_1_przyczyna_1-01.png',
    './img/Laboratorium_1_przyczyna_2-01.png',
    './img/Laboratorium_1_przyczyna_3-01.png',
    './img/Laboratorium_1_przyczyna_4-01.png',
    './img/Laboratorium_1_przyczyna_5-01.png',
    './img/Laboratorium_1_przyczyna_6-01.png'
]

const ways = [
    './img/Laboratorium_1_sposób_1-01.png',
    './img/Laboratorium_1_sposób_2-01.png',
    './img/Laboratorium_1_sposób_3-01.png'
]

const setReason = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen');
    chosenImg.setAttribute('src', reasons[n-1]);
    reason = n-1;
    showReasons();
}

const setWay = (n) => {
    const chosenImg = document.querySelector('.selected__img--chosen--ways');
    chosenImg.setAttribute('src', ways[n-1]);
    way = n-1;
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
let angles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
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
        document.querySelector(`.kursy--${n}`).style.background = "green";
    }

    declination = declination.map((item, index) => {
        if(n-1 === index) return !item;
        else return item;
    });
}

const start = () => {
    if(declination.filter((item) => {
        return item;
    }).length === 6) {
        document.querySelector('.view--start').style.visibility = 'hidden';
        document.querySelector(`.view--${way+1}`).style.visibility = 'visible';

        Array.from(document.querySelectorAll('.deklinacja--value')).forEach((item) => {
            item.textContent = deklinacja;
        });
        Array.from(document.querySelectorAll('.reason--value')).forEach((item) => {
            item.textContent = reasonNames[reason]
        });

        console.log(`.kkValues--${way}>kkValues--item`);
        Array.from(document.querySelectorAll(`.kkValues--${way+1}>.kkValues--item`)).forEach((item, index) => {
            item.textContent = selectedAngles.sort()[index];
        });
    }
    else {

    }
}

const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'hidden';
    document.querySelector(`.view--3`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
}

[1, 2, 3, 4, 5, 6].forEach((item) => {
    document.querySelector(`.kkValues--input--${item}`).addEventListener('input', (e) => {
        document.querySelector(`.kkValues--disabled--1>.kkValues--${item}`).textContent = e.target.value;
    })
});

const data = {
    labels: selectedAngles,
    datasets: [{
        label: 'Wykres dewiacji',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const chart = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'hidden';
    document.querySelector(`.view--3`).style.visibility = 'hidden';
    document.querySelector(`.view--chart`).style.visibility = 'visible';

    const myChart = new Chart(
        document.getElementById('chart'),
        config
    );
}
