// Uproszczona wersja instrukcji:
// 1.	Wybieramy gaz
// 2.	Wpisujemy przepływowość powietrza 2,0 dm3/min
// 3.	Wpisujemy przepływowość gazu [z tabeli po kolei] dm3/min
// 4.	Klikamy przycisk zapłonu
// 5.	Widzimy wybuch lub nie

const minAndMaxPossibleValues = [
    { min: 0.038, max: 0.212 }, // propan-butan
    { min: 0.095, max: 0.325 }, // gaz ziemny
    { min: 0.280, max: 5.700 }, // tlenek wegla(II)
    { min: 1.000, max: 0.000 }  // tlenek wegla(IV)
]

let minValue = 0, maxValue = 0;
let airValue, gasValue;

const airInput = document.querySelector('.input--air');
const gasInput = document.querySelector('.input--gas');

const chooseGas = (n) => {
    minValue = minAndMaxPossibleValues[n].min;
    maxValue = minAndMaxPossibleValues[n].max;
}

const explosion = () => {
    gasValue = gasInput.value;
    airValue = airInput.value;

    if(2 - airValue === 0 && (gasValue >= minValue && gasValue <= maxValue)) {
        alert('bum');
    }
    else {
        alert('nie bum');
    }
}
