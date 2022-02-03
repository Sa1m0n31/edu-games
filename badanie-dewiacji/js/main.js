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
    './assets/przyczyna1.png',
    './assets/przyczyna2.png',
    './assets/przyczyna3.png',
    './assets/przyczyna4.png',
    './assets/przyczyna5.png',
    './assets/przyczyna6.png'
]

const ways = [
    './assets/sposob1.png',
    './assets/sposob2.png',
    './assets/sposob3.png'
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
        document.querySelector(`.kursy--${n}`).style.background = "#32B86E";
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
        document.querySelector('.view--chart').style.visibility = 'hidden';
        document.querySelector(`.view--${way+1}`).style.visibility = 'visible';

        Array.from(document.querySelectorAll('.deklinacja--value')).forEach((item) => {
            item.textContent = deklinacja;
        });
        Array.from(document.querySelectorAll('.reason--value')).forEach((item) => {
            item.textContent = reasonNames[reason]
        });

        Array.from(document.querySelectorAll(`.kkValues--${way+1}>.kkValues--item`)).forEach((item, index) => {
            item.textContent = selectedAngles.sort((a, b) => {
                return parseInt(a) >= parseInt(b) ? 1 : -1;
            })[index];
        });
    }
    else {
        const feedback = document.querySelector('.feedback');
        const startBtn = document.querySelector('.startBtn');

        feedback.style.zIndex = '2';
        feedback.textContent = 'Wybierz dokładnie sześć kursów kompasowych';
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
    myChart.destroy();
}

const homeOrPrev = () => {
    if(window.getComputedStyle(document.querySelector('.view--chart')).getPropertyValue('visibility') !== 'hidden') {
        start();
        myChart.destroy();
    }
    else {
        home();
    }
}

let deltaValues = [0, 0, 0, 0, 0, 0];

[1, 2, 3, 4, 5, 6].forEach((item) => {
    document.querySelector(`.kkValues--input--${item}`).addEventListener('input', (e) => {
        document.querySelector(`.kkValues--disabled--1>.kkValues--${item}`).textContent = e.target.value;
    })
});

const setDeltaValues = () => {
    deltaValues = deltaValues.map((item, index) => {
        return document.querySelector(`.deltaInputs--${way+1}>input:nth-of-type(${index+1})`).value;
    });
}

let data, myChart;

const chart = () => {
    if(window.getComputedStyle(document.querySelector('.view--chart')).getPropertyValue('visibility') === 'hidden') {
        setDeltaValues();

        document.querySelector(`.view--1`).style.visibility = 'hidden';
        document.querySelector(`.view--2`).style.visibility = 'hidden';
        document.querySelector(`.view--3`).style.visibility = 'hidden';
        document.querySelector(`.view--chart`).style.visibility = 'visible';

        data = {
            labels: selectedAngles.sort((a, b) => {
                return parseInt(a) >= parseInt(b) ? 1 : -1;
            }),
            datasets: [{
                label: 'Wykres dewiacji',
                backgroundColor: '#fff',
                borderColor: '#463DB7',
                color: '#fff',
                data: deltaValues,
            }]
        };

        myChart = new Chart(
            document.getElementById('chart'),
            {
                type: 'line',
                data: data,
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            }
        );
    }
    else {
        home();
    }
}
