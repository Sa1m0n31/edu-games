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
    'Dobrze! Gdy statki są wzajemnie widoczne, statek o napędzie mechanicznym w drodze powinien wskazać manewr skrętu w prawo za pomocą jednego krótkiego sygnału dźwiękowego.',
    'Dobrze! Gdy statki są wzajemnie widoczne, statek o napędzie mechanicznym w drodze powinien wskazać manewr skrętu w lewo za pomocą dwóch krótkich sygnałów dźwiękowych.',
    'Dobrze! Gdy statki wzajemnie widoczne zbliżają się do siebie i z jakiejkolwiek przyczyny którykolwiek z nich nie rozumie zamiarów lub działań drugiego statku lub ma wątpliwości, czy drugi statek podejmie wystarczające działania w celu uniknięcia zderzenia, statek mający wątpliwości powinien wskazać je przez nadanie gwizdkiem co najmniej pięciu krótkich i szybko po sobie następujących sygnałów.',
    'Dobrze! W strefie ograniczonej widzialności lub w jej pobliżu podczas dnia lub nocy statek o napędzie mechanicznym posuwający się po wodzie powinien nadawać z przerwami nie większymi niż 2 minuty jeden długi dźwięk.',
    'Dobrze! Jednym ze sposobów wzywania pomocy na statku jest nadawanie sygnału SOS składającego się z trzech krótkich, trzech długich i trzech krótkich dźwięków.'
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
    'Źle! Gdy statki są wzajemnie widoczne, statek o napędzie mechanicznym w drodze powinien wskazać manewr skrętu w prawo za pomocą jednego krótkiego sygnału dźwiękowego.',
    'Źle! Gdy statki są wzajemnie widoczne, statek o napędzie mechanicznym w drodze powinien wskazać manewr skrętu w lewo za pomocą dwóch krótkich sygnałów dźwiękowych.',
    'Źle! Gdy statki wzajemnie widoczne zbliżają się do siebie i z jakiejkolwiek przyczyny którykolwiek z nich nie rozumie zamiarów lub działań drugiego statku lub ma wątpliwości, czy drugi statek podejmie wystarczające działania w celu uniknięcia zderzenia, statek mający wątpliwości powinien wskazać je przez nadanie gwizdkiem co najmniej pięciu krótkich i szybko po sobie następujących sygnałów.',
    'Źle! W strefie ograniczonej widzialności lub w jej pobliżu podczas dnia lub nocy statek o napędzie mechanicznym posuwający się po wodzie powinien nadawać z przerwami nie większymi niż 2 minuty jeden długi dźwięk.',
    'Źle! Jednym ze sposobów wzywania pomocy na statku jest nadawanie sygnału SOS składającego się z trzech krótkich, trzech długich i trzech krótkich dźwięków.'
];

const sounds = [
    'tyfon', 'tyfonShort'
];

const allWhitespaceElements = Array.from(document.querySelectorAll('.text'));
const allTextsElements = Array.from(document.querySelectorAll('.text>span'));
const allTexts = allTextsElements.map((item) => {
    return item.textContent;
});

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

    lvlProgress = [];
    if(currentLvl > 1) currentLvl--;
    if(currentLvl > 0) {
        checkButtons[currentLvl-1].style.display = 'block';
        allTextsElements[currentLvl-1].style.display = 'block';
        allTextsElements[currentLvl-1].style.color = '#000';
        allTextsElements[currentLvl-1].textContent = allTexts[currentLvl-1];
    }
}

let colregVisible = false;
let questionBoxesContent = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const colregContentHTML = document.querySelector(".colregContent").innerHTML;
const checkButtons = document.querySelectorAll('.btn--check');
const backButtons = document.querySelectorAll('.btn--textBack');

const toggleColreg = () => {
    const questionBoxesColreg = document.querySelectorAll(".text>.questionBoxColreg");
    const questionBoxesQuestions = document.querySelectorAll(".text>span");

    if(colregVisible) {
        colregVisible = false;
        questionBoxesColreg.forEach((item, index) => {
            item.innerHTML = questionBoxesContent[index];
            questionBoxesQuestions[index].style.display = "block";
            item.style.maxWidth = "none";
            item.style.maxHeight = "none";
            item.style.overflowY = "hidden";
        });
        checkButtons.forEach((item) => {
            item.style.display = 'flex';
        });
        backButtons.forEach((item) => {
            item.style.visibility = 'hidden';
            item.style.margin = '0';
            item.style.padding = '0';
            item.style.height = '0';
        });
    }
    else {
        colregVisible = true;
        questionBoxesColreg.forEach((item, index) => {
            questionBoxesContent[index] = item.innerHTML;
            item.innerHTML = colregContentHTML;
            questionBoxesQuestions[index].style.display = "none";
            item.style.maxHeight = "90%";
            item.style.overflowY = "scroll";
        });
        checkButtons.forEach((item) => {
            item.style.display = 'none';
        });
        backButtons.forEach((item) => {
            item.style.visibility = 'visible';
            item.style.margin = '5px auto 12px';
            item.style.padding = '5px';
            item.style.height = 'auto';
        });
    }
}

let currentLvl = 1;
let pointsNeeded = [3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 4, 6, 5, 2, 8, 8, 1, 2, 5, 1, 9];
let lvlProgress = [];

const positiveFeedback = () => {
    checkButtons[currentLvl-1].style.display = 'none';

    allTextsElements[currentLvl-1].style.color = 'green';
    allTextsElements[currentLvl-1].textContent = positiveFeedbacks[currentLvl-1];
}

const negativeFeedback = () => {
    checkButtons[currentLvl-1].style.display = 'none';

    allTextsElements[currentLvl-1].style.color = 'red';
    allTextsElements[currentLvl-1].textContent = negativeFeedbacks[currentLvl-1];
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
    }, 2000);
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

const turnTopLightsOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top`).style.visibility = 'visible';
}

const turnFirstTopLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top>.light__img:first-of-type`).style.visibility = 'visible';
}

const turnSecondTopLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top>.light__img:nth-of-type(2)`).style.visibility = 'visible';
}

const turnThirdTopLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top>.light__img:last-of-type`).style.visibility = 'visible';
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

/* Holowanie */
const turnFirstBackLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--back>.light--back__img--1`).style.visibility = 'visible';
}

const turnSecondBackLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--back>.light--back__img--2`).style.visibility = 'visible';
}

const turnFirstSpecialLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--special>.light__img:first-of-type`).style.visibility = 'visible';
}

const turnSecondSpecialLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--special>.light__img:nth-of-type(2)`).style.visibility = 'visible';
}

const turnThirdSpecialLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--special>.light__img:last-of-type`).style.visibility = 'visible';
}

const turnFirstTopSpecialLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top--1`).style.visibility = 'visible';
}

const turnSecondTopSpecialLightOn = () => {
    document.querySelector(`.view--${currentLvl}>.light--top--2`).style.visibility = 'visible';
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
            turnSecondBackLightOn();
            break;
        default:
            break;
    }
}

const lvl12Click = (btnIndex) => {
    if (!isElementInLvlProgress(btnIndex)) lvlProgress.push(btnIndex);
    switch (btnIndex) {
        case 1:
            turnFirstTopLightOn();
            break;
        case 2:
            turnSecondTopLightOn();
            break;
        case 3:
            turnLeftLightsOn();
            break;
        case 4:
            turnRightLightsOn();
            break;
        case 5:
            turnSecondBackLightOn();
            break;
        case 6:
            turnFirstBackLightOn();
            break;
        default:
            break;
    }
}

const lvl13Click = (btnIndex) => {
    if(!isElementInLvlProgress(btnIndex)) lvlProgress.push(btnIndex);
    switch(btnIndex) {
        case 1:
            turnFirstSpecialLightOn();
            break;
        case 2:
            turnSecondSpecialLightOn();
            break;
        case 3:
            turnLeftLightsOn();
            break;
        case 4:
            turnRightLightsOn();
            break;
        case 5:
            turnSecondBackLightOn();
            break;
        default:
            break;
    }
}

const lvl14Click = (btnIndex) => {
    if(!isElementInLvlProgress(btnIndex)) lvlProgress.push(btnIndex);
    switch(btnIndex) {
        case 1:
            turnFirstSpecialLightOn();
            break;
        case 2:
            turnSecondSpecialLightOn();
            break;
        default:
            break;
    }
}

const lvl15Click = (btnIndex) => {
    if(!isElementInLvlProgress(btnIndex)) lvlProgress.push(btnIndex);
    switch(btnIndex) {
        case 1:
            turnFirstSpecialLightOn();
            break;
        case 2:
            turnSecondSpecialLightOn();
            break;
        case 3:
            turnThirdSpecialLightOn();
            break;
        case 4:
            turnFirstTopSpecialLightOn();
            break;
        case 5:
            turnSecondTopSpecialLightOn();
            break;
        case 6:
            turnLeftLightsOn();
            break;
        case 7:
            turnRightLightsOn();
            break;
        case 8:
            turnSecondBackLightOn();
            break;
        default:
            break;
    }
}

const lvl17Click = (btnIndex) => {
    if(btnIndex === 2) lvlProgress.push(1);
    else {
        lvlProgress.push(1);
        lvlProgress.push(1);
    }
}

const lvl20Click = (btnIndex) => {
    if(btnIndex === 1) lvlProgress.push(1);
    else {
        lvlProgress.push(1);
        lvlProgress.push(1);
    }
}

const lvl21Click = (btnIndex) => {
    if(btnIndex === 2 && (lvlProgress.length < 3 || lvlProgress.length > 6)) {
        lvlProgress.push(1);
    }
    else if(btnIndex === 1 && (lvlProgress.length >= 3 && lvlProgress.length <= 6)) {
        lvlProgress.push(1);
    }
    else {
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
        lvlProgress.push(1);
    }
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
        case 13:
            lvl13Click(btnIndex);
            break;
        case 14:
            lvl14Click(btnIndex);
            break;
        case 15:
            lvl15Click(btnIndex);
            break;
        case 16:
            lvl15Click(btnIndex);
            break;
        case 17:
            lvl17Click(btnIndex);
            break;
        case 18:
            lvl17Click(btnIndex);
            break;
        case 19:
            lvl17Click(btnIndex);
            break;
        case 20:
            lvl20Click(btnIndex);
            break;
        case 21:
            lvl21Click(btnIndex);
            break;
        default:
            break;
    }
}
