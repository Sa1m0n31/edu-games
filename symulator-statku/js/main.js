/* Content */
const positiveFeedbacks = [
    'Dobrze! Statek płynący wzdłuż wąskiego przejścia lub toru wodnego powinien trzymać się tak blisko, jak dalece jest to bezpieczne i wykonalne, zewnętrznej granicy takiego przejścia lub toru, leżącej z jego prawej burty.',
    'Brawo! Wyprzedzanie z prawej burty w wąskim przejściu należy zakomunikować dwoma długimi sygnałami i jednym krótkim.',
    'Brawo! Statek przed tobą wyraził zgodę na wyprzedzanie, więc twoje postępowanie było adekwatne.',
    'Brawo! Wyprzedzanie z lewej burty w wąskim przejściu należy zakomunikować dwoma długimi sygnałami i dwoma krótkimi.',
    'Brawo! Statek przed tobą wyraził zgodę na wyprzedzanie, więc twoje postępowanie było adekwatne.',
    'Dobrze! Jeżeli dwa statki o napędzie mechanicznym płyną przeciwnymi kursami w taki sposób, że powoduje to ryzyko zderzenia, wówczas każdy z nich powinien zmienić kurs w prawo.',
    'Dobrze! Jeżeli dwa statki o napędzie mechanicznym płyną przeciwnymi kursami w taki sposób, że powoduje to ryzyko zderzenia, wówczas każdy z nich powinien zmienić kurs w prawo.',
    'Dobrze! Jeżeli dwa statki o napędzie mechanicznym przecinają swoje kursy w taki sposób, że powoduje to ryzyko zderzenia, wówczas statek, który ma drugi statek ze swej prawej burty, powinien ustąpić mu z drogi.',
    'Dobrze! Jeżeli jeden z dwóch statków ma ustąpić z drogi, to drugi statek powinien zachować swój kurs i szybkość.',
    'Dobrze! Jeżeli z jakiejkolwiek przyczyny statek obowiązany do zachowania swego kursu i szybkości znajdzie się tak blisko, że nie można uniknąć zderzenia przez samo tylko działanie statku ustępującego z drogi, wówczas powinien on podjąć działanie, które najlepiej przyczyni się do uniknięcia zderzenia. Statek powinien nie zmieniać kursu w lewo, jeżeli z lewej jego burty znajduje się drugi statek.'
];

const negativeFeedbacks = [
    'Źle! Statek płynący wzdłuż wąskiego przejścia lub toru wodnego powinien trzymać się tak blisko, jak dalece jest to bezpieczne i wykonalne, zewnętrznej granicy takiego przejścia lub toru, leżącej z jego prawej burty.',
    'Źle! Wyprzedzanie z prawej burty w wąskim przejściu należy zakomunikować dwoma długimi sygnałami i jednym krótkim.',
    'Źle! Statek przed tobą wyraził zgodę na wyprzedzanie, więc trzeba było wykonać ten manewr.',
    'Źle! Wyprzedzanie z lewej burty w wąskim przejściu należy zakomunikować dwoma długimi sygnałami i dwoma krótkimi.',
    'Źle! Statek przed tobą wyraził zgodę na wyprzedzanie, więc trzeba było wykonać ten manewr.',
    'Źle! Jeżeli dwa statki o napędzie mechanicznym płyną przeciwnymi kursami w taki sposób, że powoduje to ryzyko zderzenia, wówczas każdy z nich powinien zmienić kurs w prawo.',
    'Źle! Jeżeli dwa statki o napędzie mechanicznym płyną przeciwnymi kursami w taki sposób, że powoduje to ryzyko zderzenia, wówczas każdy z nich powinien zmienić kurs w prawo.',
    'Źle! Jeżeli dwa statki o napędzie mechanicznym przecinają swoje kursy w taki sposób, że powoduje to ryzyko zderzenia, wówczas statek, który ma drugi statek ze swej prawej burty, powinien ustąpić mu z drogi.',
    'Źle! Jeżeli jeden z dwóch statków ma ustąpić z drogi, to drugi statek powinien zachować swój kurs i szybkość.',
    'Źle! Jeżeli z jakiejkolwiek przyczyny statek obowiązany do zachowania swego kursu i szybkości znajdzie się tak blisko, że nie można uniknąć zderzenia przez samo tylko działanie statku ustępującego z drogi, wówczas powinien on podjąć działanie, które najlepiej przyczyni się do uniknięcia zderzenia. Statek powinien nie zmieniać kursu w lewo, jeżeli z lewej jego burty znajduje się drugi statek.'
];

const sounds = [
    'tyfon', 'tyfonShort'
];

/* Main carousel */
const game = new Siema({
    selector: ".carousel",
    draggable: false,
    perPage: 1
});

const colregBtn = document.querySelector(".btn--colreg");
const next = () => {
    game.next();
    backBtn.style.display = "flex";
    colregBtn.style.display = "block";
}

const goHome = () => {
    window.location.reload(false);
}

const backBtn = document.querySelector(".btn--back");
const prevLvl = () => {
    game.prev();

    /* Reset lvl 1 */
    currentElementToPick = 0;
}

const toggleColreg = () => {

}

let currentLvl = 1;
let pointsNeeded = [3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
let lvlProgress = [];

const positiveFeedback = () => {
    document.querySelector(`.text--${currentLvl}`).textContent = positiveFeedbacks[currentLvl-1];
}

const negativeFeedback = () => {
    document.querySelector(`.text--${currentLvl}`).textContent = negativeFeedbacks[currentLvl-1];
}

const check = () => {
    if(lvlProgress.length === pointsNeeded[currentLvl-1]) {
        positiveFeedback();
    }
    else {
        negativeFeedback();
    }

    setTimeout(() => {
        next();
        lvlProgress = [];
        currentLvl++;
    }, 1);
}

Array.from(document.querySelectorAll('audio')).forEach((item) => {
    item.addEventListener('ended', (e) => {
        e.target.currentTime = 0;
    });
});

const isAudioPlaying = () => {
    const allAudios = document.querySelectorAll('audio');
    return Array.from(allAudios).findIndex((item) => {
        return item.currentTime !== 0;
    }) !== -1;
}

const playSound = (n) => {
    if(!isAudioPlaying()) {
        let audio = document.getElementById(sounds[n]);
        audio.play();
    }
}

const isElementInLvlProgress = (el) => {
    return lvlProgress.findIndex((item) => {
        return el === item;
    }) !== -1;
}

const lvl1Click = (btnIndex) => {
    if(btnIndex === 3) {
        if(lvlProgress.length === 2) {
            lvlProgress.push(btnIndex);
        }
    }
    else {
        if(!isElementInLvlProgress(btnIndex)) {
            lvlProgress.push(btnIndex);
        }
    }
}

const lvl2Click = (btnIndex) => {
    if(!isAudioPlaying()) {
        if(btnIndex === 1 && lvlProgress.length < 2) {
            lvlProgress.push(btnIndex);
        }
        else if(btnIndex === 1 && lvlProgress.length === 2) {
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
        }
        else if(btnIndex === 2 && lvlProgress.length === 2) {
            lvlProgress.push(btnIndex);
        }
    }
}

const lvl4Click = (btnIndex) => {
    if(!isAudioPlaying()) {
        if(btnIndex === 1 && lvlProgress.length < 2) {
            lvlProgress.push(btnIndex);
        }
        else if(btnIndex === 1 && lvlProgress.length === 2) {
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
        }
        else if(btnIndex === 2 && lvlProgress.length >= 2) {
            lvlProgress.push(btnIndex);
        }
    }
}

const lvl8Click = (btnIndex) => {
    if(lvlProgress.length === 0 && btnIndex === 1) {
        lvlProgress.push(btnIndex);
    }
    else if(lvlProgress.length === 1 && btnIndex === 1) {
        lvlProgress.push(btnIndex);
    }
}

const lvl10Click = (btnIndex) => {
    if(lvlProgress.length === 0) lvlProgress.push(btnIndex);
}

const btnClick = (lvl, btnIndex) => {
    switch(lvl) {
        case 1:
            lvl1Click(btnIndex);
            break;
        case 2:
            lvl2Click(btnIndex);
            break;
        case 3:
            lvl1Click(btnIndex);
            break;
        case 4:
            lvl4Click(btnIndex);
            break;
        case 5:
            lvl1Click(btnIndex);
            break;
        case 6:
            lvl1Click(btnIndex);
            break;
        case 7:
            lvl1Click(btnIndex);
            break;
        case 8:
            lvl8Click(btnIndex);
            break;
        case 9:
            lvl8Click(btnIndex);
            break;
        case 10:
            lvl10Click(btnIndex);
            break;
        default:
            break;
    }
}
