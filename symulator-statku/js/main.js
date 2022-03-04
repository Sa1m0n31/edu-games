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
    'Dobrze! Statek o napędzie mechanicznym w drodze powinien pokazywać światło masztowe z przodu, światła burtowe i światło rufowe.',
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

const infos = [
    'Wpływasz do wąskiego przejścia. Obecnie znajdujesz się na jego środku. Wybierz kierunek ruchu za pomocą strzałek, a następnie zapoczątkuj ruch, klikając na manetkę.',
    'Płyniesz wąskim przejściem. Zamierzasz wyprzedzić znajdujący się przed tobą statek z jego prawej burty. Zakomunikuj to w odpowiedni sposób za pomocą sygnałów dźwiękowych.',
    'Statek przed tobą odpowiedział na twój sygnał jednym sygnałem długim, jednym krótkim, jednym długim i jednym krótkim. Co robisz dalej?',
    'Płyniesz wąskim przejściem. Zamierzasz wyprzedzić znajdujący się przed tobą statek z jego lewej burty. Zakomunikuj to w odpowiedni sposób za pomocą sygnałów dźwiękowych.',
    'Statek przed tobą odpowiedział na twój sygnał jednym sygnałem długim, jednym krótkim, jednym długim i jednym krótkim. Co robisz dalej?',
    'Płyniesz w warunkach dobrej widzialności. Naprzeciwko twojego statku dostrzegasz inny statek. Płyniecie wprost na siebie. Co w takim wypadku zrobisz?',
    'Płyniesz w nocy w warunkach dobrej widzialności. Naprzeciwko twojego statku dostrzegasz inny statek. Płyniecie wprost na siebie. Co w takim wypadku zrobisz?',
    'Płyniesz w warunkach dobrej widzialności. W pewnym momencie dostrzegasz drugi statek płynący po prawej stronie. Oceniasz, że wasze kursy przetną się. Co robisz?',
    'Płyniesz w warunkach dobrej widzialności. W pewnym momencie dostrzegasz drugi statek płynący po lewej stronie. Oceniasz, że wasze kursy mogą się przeciąć, ale drugi statek już zaczął podejmować odpowiednie działania, żeby temu zapobiec. Co robisz?',
    'Płyniesz w warunkach dobrej widzialności. W pewnym momencie dostrzegasz drugi statek płynący po lewej stronie. Oceniasz, że wasze kursy mogą się przeciąć, ale drugi statek już zaczął podejmować odpowiednie działania, żeby temu zapobiec. Co robisz?',
    'Płyniesz statkiem o napędzie mechanicznym, o długości do 50 metrów. Kliknij na nazwy świateł, które statek powinien mieć włączone.',
    'Holujesz inny statek. Długość zespołu holowniczego nie przekracza 200 metrów. Które światła powinny być włączone na twoim statku?',
    'Twój statek, który ma mniej niż 50 metrów, zajęty jest trałowaniem. Które światła powinien mieć w takim wypadku włączone?',
    'Znajdujesz się w statku nieodpowiadającym za swoje ruchy, który się nie porusza. Które światła powinny być włączone na takim statku?',
    'Twój statek ma ograniczoną zdolność manewrową. Pomimo tego płynie dalej. Jakie światła powinny być włączone na statku?',
    'Twój statek jest mocno załadowany. Jego zanurzenie ogranicza możliwość manewrowania. Które światła powinien mieć taki statek włączone?',
    'Płyniesz statkiem. Przed dziobem, w oddali, znajduje się inny statek. Niedługo zamierzasz skręcić w prawo. Jaki dźwięk nadasz?',
    'Płyniesz statkiem. Przed dziobem, w oddali, znajduje się inny statek. Niedługo zamierzasz skręcić w lewo. Jaki dźwięk nadasz?',
    'Płyniesz statkiem przed siebie. Po lewej stronie płynie inny statek. Wasze kursy mogą się przeciąć. Czekasz aż drugi statek podejmie odpowiednie działania, ponieważ masz pierwszeństwo. Czas mija, a drugi statek płynie dalej w tym samym kierunku. Jakim sygnałem dźwiękowym wyrazisz swoje wątpliwości co do zaistniałej sytuacji?',
    'Płyniesz statkiem o napędzie mechanicznym w strefie ograniczonej widzialności. Jaki sygnał dźwiękowy powinien być w takim wypadku nadawany?',
    'Twój statek doznał poważnego uszkodzenia. Zaczyna tonąć. Nadaj sygnał dźwiękowy wzywania pomocy.'
]

const sounds = [
    'tyfon', 'tyfonShort'
];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let shifterState = 1; // 0, 1 or 2

const allTextsElements = Array.from(document.querySelectorAll('.text>span'));
const allTexts = allTextsElements.map((item) => {
    return item.textContent;
});

/* Main carousel */
const game = new Siema({
    selector: ".carousel",
    draggable: true,
    perPage: 1
});

const colregBtn = document.querySelector(".btn--colreg");
const next = () => {
    game.goTo(1);

    backBtn.style.display = "flex";
    colregBtn.style.display = "block";
}

const goHome = () => {
    window.location.reload(false);
}

const menu = (lvl) => {
    if(lvl < 21) {
        checkButtons[lvl].style.display = 'flex';

        allTextsElements[lvl].style.color = '#000';
        allTextsElements[lvl].textContent = infos[lvl];

        currentLvl = lvl+1;
        game.goTo(lvl+2);
    }
    else {
        const randomLvl = randomIntFromInterval(1, 21);
        checkButtons[randomLvl-1].style.display = 'flex';

        allTextsElements[randomLvl-1].style.color = '#000';
        allTextsElements[randomLvl-1].textContent = infos[randomLvl-1];

        currentLvl = randomLvl;
        game.goTo(randomLvl+1);
    }
}

const backBtn = document.querySelector(".btn--back");
const prevLvl = () => {
    game.goTo(1);

    feedbackImages.forEach((item) => {
        item.style.zIndex = '-1';
    });

    lightsImages.forEach((item) => {
        item.forEach((item) => {
            item.style.visibility = 'hidden';
        });
    });
    shifterButtons.forEach((item) => {
        item.forEach((item, index) => {
            if(index === 1) item.style.opacity = '1';
            else item.style.opacity = '0';
        })
    });
    arrows.forEach((item) => {
        item.forEach((item) => {
            item.style.visibility = 'hidden';
        });
    });
    arrowsClicked = arrowsClicked.map((item) => {
        return false;
    });
    lightsClicked = lightsClicked.map((item) => {
        return false;
    });
    shifterImages.forEach((item) => {
        item.forEach((item, index) => {
            if(index === 1) item.style.visibility = 'visible';
            else item.style.visibility = 'hidden';
        })
    });

    lvlProgress = [];
    if(currentLvl > 1) currentLvl--;
    if(currentLvl > 0) {
        checkButtons[currentLvl].style.display = 'block';
        allTextsElements[currentLvl].style.display = 'block';
        allTextsElements[currentLvl].style.color = '#000';
        allTextsElements[currentLvl].textContent = allTexts[currentLvl-1];
    }
    turnLightsOff();
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

const feedbackImages = Array.from(document.querySelectorAll('.view__img--feedback'));

const positiveFeedback = () => {
    checkButtons[currentLvl-1].style.display = 'none';

    allTextsElements[currentLvl-1].style.color = 'green';
    allTextsElements[currentLvl-1].textContent = positiveFeedbacks[currentLvl-1];

    const feedbackImage = document.querySelector(`.view--${currentLvl}>.view__img--feedback`);
    if(feedbackImage) feedbackImage.style.zIndex = '2';
};

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
}

Array.from(document.querySelectorAll('audio')).forEach((item) => {
    item.addEventListener('ended', (e) => {
        e.target.currentTime = 0;
    });
});

const turnLightsOff = () => {
    const turnOff = Array.from(
        document.querySelectorAll('.light:not(.light--back)'))
        .concat(
            Array.from(document.querySelectorAll('.light--back>assets'))
        )
        .concat(
            document.querySelectorAll('.light--special>assets')
        )
        .concat(
            document.querySelectorAll('.view--12>.light--top>assets')
        )
    const turnOn = Array.from(document.querySelectorAll('.light--special'));

    // turnOff.forEach((item) => {
    //     item.style.visibility = 'hidden';
    // });
    // turnOn.forEach((item) => {
    //     item.style.visibility = 'visible';
    // });
}

const soundsElements = Array.from(document.querySelectorAll('audio'));

soundsElements.forEach((item, index) => {
    item.onended = () => {
        item.currentTime = 0;
        soundsImages[index].style.visibility = 'hidden';
    }
});

const isAudioPlaying = () => {
    const allAudios = document.querySelectorAll('audio');
    return Array.from(allAudios).findIndex((item) => {
        return item.currentTime !== 0;
    }) !== -1;
}

const playSound = (n) => {
    if(!isAudioPlaying()) {
        soundsImages[n].style.visibility = 'visible';
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
    if(!isElementInLvlProgress(btnIndex)) {
        lvlProgress.push(btnIndex);
    }
    else {
        lvlProgress = lvlProgress.filter((item) => {
            return item !== btnIndex;
        });
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
    else if(lvlProgress.length === 1 && btnIndex === 2) {
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

const wrongAnswer = () => {
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
        wrongAnswer();
    }
}

let shifterButtons = [], arrows = [], shifterImages = [], lightsImages = [], soundsImages = [];
for(let i=1; i<22; i++) {
    shifterButtons.push(Array.from(document.querySelectorAll(`.view--${i} .btn--shifter__img`)));
    arrows.push(Array.from(document.querySelectorAll(`.view--${i} .btn--arrow__img`)));
    shifterImages.push(Array.from(document.querySelectorAll(`.view--${i} .view__shifter__img`)));
    lightsImages.push(Array.from(document.querySelectorAll(`.view--${i} .btn--light__img`)));
    soundsImages.push(Array.from(document.querySelectorAll(`.view--${i} .btn--sound__img`)));
}

let arrowsClicked = [false, false, false, false];
let lightsClicked = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleShifter = (n) => {
    shifterState = n;
    shifterImages[currentLvl-1].forEach((item, index) => {
        if(index === n) {
            item.style.visibility = 'visible';
            shifterButtons[currentLvl-1][index].style.opacity = '1';
        }
        else {
            item.style.visibility = 'hidden';
            shifterButtons[currentLvl-1][index].style.opacity = '0';
        }
    });
}

const toggleArrow = (n) => {
    if(arrowsClicked[n]) {
        arrows[currentLvl-1][n].style.visibility = 'hidden';
    }
    else {
        arrows[currentLvl-1][n].style.visibility = 'visible';
    }
    arrowsClicked[n] = !arrowsClicked[n];
}

const toggleLight = (n) => {
    console.log(lightsImages);
    if(lightsClicked[n]) {
        lightsImages[currentLvl-1][n].style.visibility = 'hidden';
    }
    else {
        lightsImages[currentLvl-1][n].style.visibility = 'visible';
    }
    lightsClicked[n] = !lightsClicked[n];
}

const btnClick = (lvl, btnIndex, action = null) => {
    if(action !== null) {
        if(action < 3) toggleShifter(action);
        else if(action < 7) toggleArrow(action-3);
        else if(action < 23) toggleLight(action-7);
    }

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
            // wrongAnswer();
            break;
    }
}
