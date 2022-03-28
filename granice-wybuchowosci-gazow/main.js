// Uproszczona wersja instrukcji:
// 1.	Wybieramy gaz
// 2.	Wpisujemy przepływowość powietrza 2,0 dm3/min
// 3.	Wpisujemy przepływowość gazu [z tabeli po kolei] dm3/min
// 4.	Klikamy przycisk zapłonu
// 5.	Widzimy wybuch lub nie

const minAndMaxPossibleValues = [
    { min: 0.038, max: 0.212 }, // propan-butan
    { min: 1.000, max: 0.000 }, // tlenek wegla(IV)
    { min: 0.280, max: 5.700 }, // tlenek wegla(II)
    { min: 0.095, max: 0.325 }  // gaz ziemny
]

const images = [
    './img/propan-butan.png', './img/tlenek-wegla-4.png',
    './img/tlenek-wegla-2.png', './img/gaz-ziemny.png'
]

let minValue = 0, maxValue = 0;
let airValue, gasValue, gas = 0;
let explosionSuccess = false;

const infoLevels = Array.from(document.querySelectorAll('.info__child'));
const airInput = document.querySelector('.input--air');
const gasInput = document.querySelector('.input--gas');
const view = document.querySelector('.view__img');
const gasButtons = Array.from(document.querySelectorAll('.btn--gas'));
const explosions = Array.from(document.querySelectorAll('.explosionImg'));

const chooseGas = (n) => {
    gas = n;
    minValue = minAndMaxPossibleValues[n].min;
    maxValue = minAndMaxPossibleValues[n].max;

    infoLevels[0].style.visibility = 'hidden';
    infoLevels[1].style.visibility = 'visible';

    view.setAttribute('src', images[n]);

    gasButtons.forEach((item) => {
        item.style.display = 'none';
    });
}

const airInputConfirmed = () => {
    infoLevels[1].style.visibility = 'hidden';
    infoLevels[2].style.visibility = 'visible';
}

const explosion = () => {
    gasValue = gasInput.value;
    airValue = airInput.value;

    if(gas < explosions.length) {
        if(2 - airValue === 0 && (gasValue >= minValue && gasValue <= maxValue)) {
            explosions[gas].style.opacity = '1';
            setTimeout(() => {
                explosions[gas].style.opacity = '0';
            }, 500);
            explosionSuccess = true;
        }
        else {
            explosionSuccess = false;
        }
    }
    else {
        explosionSuccess = false;
    }

    infoLevels[2].style.visibility = 'hidden';
    infoLevels[3].style.visibility = 'visible';
}

const answer = (ans) => {
    const feedbackPlaceholder = document.querySelector('.info--5>.info__text');
    if(ans === explosionSuccess) {
        feedbackPlaceholder.textContent = 'Zgadza się!'
    }
    else {
        feedbackPlaceholder.textContent = 'To nie jest poprawna odpowiedź.';
    }

    infoLevels[3].style.visibility = 'hidden';
    infoLevels[4].style.visibility = 'visible';
}

const tryAgain = () => {
    view.setAttribute('src', './img/tlo.png');
    gasButtons.forEach((item) => {
        item.style.display = 'block';
    });

    infoLevels[4].style.visibility = 'hidden';
    infoLevels[0].style.visibility = 'visible';

    airInput.value = null;
    gasInput.value = null;
}
