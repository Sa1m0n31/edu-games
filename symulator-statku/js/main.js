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
    'Dobrze! Jeżeli z jakiejkolwiek przyczyny statek obowiązany do zachowania swego kursu i szybkości znajdzie się tak blisko, że nie można uniknąć zderzenia przez samo tylko działanie statku ustępującego z drogi, wówczas powinien on podjąć działanie, które najlepiej przyczyni się do uniknięcia zderzenia. Statek powinien nie zmieniać kursu w lewo, jeżeli z lewej jego burty znajduje się drugi statek.',
    'Dobrze! Statek o napędzie mechanicznym w drodze powinien pokazywać światło masztowe z przodu, światła burtowe i światło rufowe. Ponadto statek o długości większej niż 50 metrów powinien pokazywać drugie światło masztowe z tyłu przedniego i wyżej od niego z tym. Statek o mniejszej długości może, ale nie musi pokazywać tego światła.',
    'Dobrze! Statek o napędzie mechanicznym podczas holowania powinien pokazywać dwa światła masztowe umieszczone w linii pionowej, światła burtowe, światła rufowe i światło holowania umieszczone w linii pionowej nad światłem rufowym.',
    'Dobrze! Statek zajęty trałowaniem o długości mniejszej niż 50 metrów powinien pokazywać dwa światła widoczne dookoła widnokręgu, umieszczone w linii pionowej, górne zielone, a dolne białe, a gdy posuwa się po wodzie dodatkowo światła burtowe i światło rufowe.',
    'Dobrze! Statek nieodpowiadający za swoje ruchy, gdy się nie porusza, powinien pokazywać dwa czerwone światła widoczne dookoła widnokręgu, umieszczone w linii pionowej w miejscu, skąd będą najlepiej widoczne.',
    'Dobrze! Statek o ograniczonej zdolności manewrowej powinien pokazywać trzy światła widoczne dookoła widnokręgu, umieszczone w linii pionowej w miejscu, skąd będą najlepiej widoczne (światła górne i dolne powinny być czerwone, a środkowe białe). Ponadto gdy posuwa się po wodzie – światło lub światła masztowe, światła burtowe i światło rufowe.',
    'Dobrze! Statek ograniczony swym zanurzeniem może, prócz standardowych świateł, które muszą mieć włączone statki o napędzie mechanicznym, pokazywać w miejscu, skąd będą najlepiej widoczne, trzy czerwone światła widoczne dookoła widnokręgu, umieszczone w linii pionowej.',
    ''
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
    'Źle! Jeżeli z jakiejkolwiek przyczyny statek obowiązany do zachowania swego kursu i szybkości znajdzie się tak blisko, że nie można uniknąć zderzenia przez samo tylko działanie statku ustępującego z drogi, wówczas powinien on podjąć działanie, które najlepiej przyczyni się do uniknięcia zderzenia. Statek powinien nie zmieniać kursu w lewo, jeżeli z lewej jego burty znajduje się drugi statek.',
    'Źle! Statek o napędzie mechanicznym w drodze powinien pokazywać światło masztowe z przodu, światła burtowe i światło rufowe.',
    'Źle! Statek o napędzie mechanicznym podczas holowania powinien pokazywać dwa światła masztowe umieszczone w linii pionowej, światła burtowe, światła rufowe i światło holowania umieszczone w linii pionowej nad światłem rufowym.',
    'Źle! Statek zajęty trałowaniem o długości mniejszej niż 50 metrów powinien pokazywać dwa światła widoczne dookoła widnokręgu, umieszczone w linii pionowej, górne zielone, a dolne białe, a gdy posuwa się po wodzie dodatkowo światła burtowe i światło rufowe.',
    'Źle! Statek nieodpowiadający za swoje ruchy, gdy się nie porusza, powinien pokazywać dwa czerwone światła widoczne dookoła widnokręgu, umieszczone w linii pionowej w miejscu, skąd będą najlepiej widoczne.',
    'Źle! Statek o ograniczonej zdolności manewrowej powinien pokazywać trzy światła widoczne dookoła widnokręgu, umieszczone w linii pionowej w miejscu, skąd będą najlepiej widoczne (światła górne i dolne powinny być czerwone, a środkowe białe). Ponadto gdy posuwa się po wodzie – światło lub światła masztowe, światła burtowe i światło rufowe.',
    'Źle! Statek ograniczony swym zanurzeniem może, prócz standardowych świateł, które muszą mieć włączone statki o napędzie mechanicznym, pokazywać w miejscu, skąd będą najlepiej widoczne, trzy czerwone światła widoczne dookoła widnokręgu, umieszczone w linii pionowej.',
    ''
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

game.goTo(11);

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
let pointsNeeded = [3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 4];
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

currentLvl = 11;

const turnTopLightsOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top`).style.visibility = 'visible';
}

const turnLeftLightsOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--left`).style.visibility = 'visible';
}

const turnRightLightsOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--right`).style.visibility = 'visible';
}

const turnBackLightsOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--back`).style.visibility = 'visible';
}

const turnFirstBackLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--back>.light--back__img--1`).style.visibility = 'visible';
}

const turnSecondBackLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--back>.light--back__img--2`).style.visibility = 'visible';
}

const lvl11Click = (btnIndex) => {
    if(!isElementInLvlProgress(btnIndex)) lvlProgress.push(btnIndex);
    switch(btnIndex) {
        case 1:
            turnTopLightsOn();
            break;
        case 2:
            turnLeftLightsOn();
            break;
        case 3:
            turnRightLightsOn();
            break;
        case 4:
            turnBackLightsOn();
            break;
        default:
            break;
    }
}

const lvl12Click = (btnIndex) => {

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
        case 11:
            lvl11Click(btnIndex);
            break;
        case 12:
            lvl12Click(btnIndex);
            break;
        default:
            break;
    }
}
