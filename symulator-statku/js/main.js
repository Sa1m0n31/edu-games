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
    'Płyniesz w warunkach dobrej widzialności. W pewnym momencie dostrzegasz drugi statek płynący po lewej stronie. Oceniasz, że wasze kursy mogą się przeciąć. Czas mija, ale drugi statek nie podejmuje żadnych działań. Znajdujecie się coraz bliżej siebie. Co robisz?',
    'Płyniesz statkiem o napędzie mechanicznym, o długości do 50 metrów. Kliknij na nazwy świateł, które statek powinien mieć włączone.',
    'Holujesz inny statek. Twój statek ma długość mniejszą niż 50 metrów. Długość zespołu holowniczego nie przekracza 200 metrów. Które światła powinny być włączone na twoim statku?',
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

const visibility0 = Array.from(document.querySelectorAll('.visibility-0'));
const visibility1 = Array.from(document.querySelectorAll('.visibility-1'));
const opacity0 = Array.from(document.querySelectorAll('.opacity-0'));
const opacity1 = Array.from(document.querySelectorAll('.opacity-1'));
const visibleOnFeedback = Array.from(document.querySelectorAll('.visibility-1-on-feedback'));

/* Main carousel */
const game = new Siema({
    selector: ".carousel",
    draggable: false,
    perPage: 1
});

const colregBtn = document.querySelector(".btn--colreg");
const next = () => {
    game.goTo(1);

    backBtn.style.display = "flex";
    colregBtn.style.display = "block";
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

    allLights.forEach((item) => {
        item.forEach((item) => {
            item.style.visibility = 'hidden';
        });
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

    visibility0.forEach((item) => {
        item.style.visibility = 'hidden';
    });
    visibility1.forEach((item) => {
        item.style.visibility = 'visible';
    });
    opacity0.forEach((item) => {
        item.style.opacity = '0';
    });
    opacity1.forEach((item) => {
        item.style.opacity = '1';
    });
    visibleOnFeedback.forEach((item) => {
        item.style.visibility = 'hidden';
    });

    lvlProgress = [];
    if(currentLvl > 1) currentLvl--;
    if(currentLvl > 0) {
        checkButtons[currentLvl].style.display = 'block';
        allTextsElements[currentLvl].style.display = 'block';
        allTextsElements[currentLvl].style.color = '#000';
        allTextsElements[currentLvl].textContent = allTexts[currentLvl-1];
    }
}

let colregVisible = false;
let questionBoxesContent = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const colregContentHTML = document.querySelector(".colregContent").innerHTML;
const checkButtons = document.querySelectorAll('.btn--check');
const backButtons = document.querySelectorAll('.btn--textBack');

const lights1 = Array.from(document.querySelectorAll('.view--11>.view__img--light'));
const lights2 = Array.from(document.querySelectorAll('.view--12>.view__img--light'));
const lights3 = Array.from(document.querySelectorAll('.view--13>.view__img--light'));
const lights4 = Array.from(document.querySelectorAll('.view--14>.view__img--light'));
const lights5 = Array.from(document.querySelectorAll('.view--15>.view__img--light'));
const lights6 = Array.from(document.querySelectorAll('.view--16>.view__img--light'));
const allLights = [lights1, lights2, lights3, lights4, lights5, lights6];

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
let pointsNeeded = [3, 3, 3, 4, 3, 3, 3, 2, 2, 2, 4, 6, 5, 2, 8, 8, 1, 2, 5, 1, 9];
let lvlProgress = [];

const feedbackImages = Array.from(document.querySelectorAll('.view__img--feedback'));

const areTwoArraysEquals = (array1, array2) => {
    return array1.sort().join(',') === array2.sort().join(',');
}

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

const arrayHasElement = (arr, el) => {
    return arr.findIndex((item) => {
        return item === el
    }) !== -1;
}

const check = () => {
    let verified = false;
    if(lvlProgress.length === pointsNeeded[currentLvl-1]) {
        switch(currentLvl) {
            case 1:
                if(areTwoArraysEquals(lvlProgress, [1, 2, 3])) verified = true;
                break;
            case 2:
                verified = true;
                break;
            case 3:
                if(areTwoArraysEquals(lvlProgress, [1, 2, 3])) verified = true;
                break;
            case 4:
                verified = true;
                break;
            case 5:
                if(areTwoArraysEquals(lvlProgress, [1, 2, 3])) verified = true;
                break;
            case 6:
                if(areTwoArraysEquals(lvlProgress, [1, 2, 3])) verified = true;
                break;
            case 7:
                if(areTwoArraysEquals(lvlProgress, [1, 2, 3])) verified = true;
                break;
            case 8:
                if(areTwoArraysEquals(lvlProgress, [2, 3])) verified = true;
                break;
            case 9:
                if(areTwoArraysEquals(lvlProgress, [1, 2])) verified = true;
                break;
            case 10:
                if (areTwoArraysEquals(lvlProgress, [1, 2])) verified = true;
                break;
            case 11:
                if(arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && (arrayHasElement(lvlProgress, 1) || arrayHasElement(lvlProgress, 2) || arrayHasElement(lvlProgress, 3))) {
                    verified = true;
                }
                break;
            case 12:
                if(arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && arrayHasElement(lvlProgress, 7) && (arrayHasElement(lvlProgress, 1) || arrayHasElement(lvlProgress, 2) || arrayHasElement(lvlProgress, 3))) {
                    verified = true;
                }
                break;
            case 13:
                if(arrayHasElement(lvlProgress, 1) && arrayHasElement(lvlProgress, 2) && arrayHasElement(lvlProgress, 3) && ((arrayHasElement(lvlProgress, 4) || arrayHasElement(lvlProgress, 6) || arrayHasElement(lvlProgress, 8)) && (arrayHasElement(lvlProgress, 5) || arrayHasElement(lvlProgress, 7) || arrayHasElement(lvlProgress, 9)))) {
                    verified = true;
                }
                break;
            case 14:
                if(areTwoArraysEquals(lvlProgress, [1, 2]) || areTwoArraysEquals(lvlProgress, [2, 3]) || areTwoArraysEquals(lvlProgress, [1, 3])) {
                    verified = true;
                }
                break;
            case 15:
                if(arrayHasElement(lvlProgress, 1) && arrayHasElement(lvlProgress, 2) && arrayHasElement(lvlProgress, 3) && arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && ((arrayHasElement(lvlProgress, 7) && arrayHasElement(lvlProgress, 8)) || (arrayHasElement(lvlProgress, 7) && arrayHasElement(lvlProgress, 9)) || (arrayHasElement(lvlProgress, 9) && arrayHasElement(lvlProgress, 8)))) {
                    verified = true;
                }
                break;
            case 16:
                if(arrayHasElement(lvlProgress, 1) && arrayHasElement(lvlProgress, 2) && arrayHasElement(lvlProgress, 3) && arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && ((arrayHasElement(lvlProgress, 7) && arrayHasElement(lvlProgress, 8)) || (arrayHasElement(lvlProgress, 7) && arrayHasElement(lvlProgress, 9)) || (arrayHasElement(lvlProgress, 9) && arrayHasElement(lvlProgress, 8)))) {
                    verified = true;
                }
                break;
            case 17:
                if(areTwoArraysEquals(lvlProgress, [1])) verified = true;
                break;
            case 18:
                if(areTwoArraysEquals(lvlProgress, [1, 1])) verified = true;
                break;
            case 19:
                if(areTwoArraysEquals(lvlProgress, [1, 1, 1, 1, 1])) verified = true;
                break;
            case 20:
                if(areTwoArraysEquals(lvlProgress, [1])) verified = true;
                break;
            case 21:
                verified = true;
                break;
            default:
                break;
        }
    }
    else {
        switch(currentLvl) {
            case 11:
                if(arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && (arrayHasElement(lvlProgress, 1) || arrayHasElement(lvlProgress, 2) || arrayHasElement(lvlProgress, 3))) {
                    verified = true;
                }
                break;
            case 12:
                if(arrayHasElement(lvlProgress, 4) && arrayHasElement(lvlProgress, 5) && arrayHasElement(lvlProgress, 6) && arrayHasElement(lvlProgress, 7) && (arrayHasElement(lvlProgress, 1) || arrayHasElement(lvlProgress, 2) || arrayHasElement(lvlProgress, 3))) {
                    verified = true;
                }
                break;
            case 19:
                if(lvlProgress.findIndex((item) => {
                    return item !== 1;
                }) === -1) {
                    verified = true;
                }
                break;
            default:
                negativeFeedback();
                break;
        }
    }

    if(verified) {
        positiveFeedback();
        visibleOnFeedback.forEach((item) => {
            item.style.visibility = 'visible';
        });
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

const soundsElements = Array.from(document.querySelectorAll('audio'));

soundsElements.forEach((item, index) => {
    item.onended = () => {
        item.currentTime = 0;
        soundsImages.forEach((item) => {
            item.forEach((item) => {
                item.style.visibility = 'hidden';
            });
        });
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
        soundsImages.forEach((item) => {
            if(item[n]) item[n].style.visibility = 'visible';
        });
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
        else if(btnIndex === 2 && lvlProgress.length >= 2) {
            lvlProgress.push(btnIndex);
        }
        else if((btnIndex === 1 && lvlProgress.length === 2) || (btnIndex === 2 && lvlProgress.length < 2)) {
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
            lvlProgress.push(btnIndex);
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
    else {
        lvlProgress = lvlProgress.filter((item) => {
            return item !== btnIndex;
        });
    }
}

const lvl17Click = (btnIndex) => {
    if(btnIndex === 1) lvlProgress.push(1);
    else if(btnIndex === 2) lvlProgress.push(2);
}

const lvl21Click = (btnIndex) => {
    if(btnIndex === 2 && (lvlProgress.length < 3 || lvlProgress.length >= 6)) {
        lvlProgress.push(1);
    }
    else if(btnIndex === 1 && (lvlProgress.length >= 3 && lvlProgress.length <= 5)) {
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

const toggle360Lights = (on, off1, off2) => {
    allLights.forEach((item) => {
        item[on].style.visibility = 'visible';
        item[off1].style.visibility = 'hidden';
        item[off2].style.visibility = 'hidden';
        lightsImages[currentLvl-1][on].style.visibility = 'visible';
        lightsImages[currentLvl-1][off1].style.visibility = 'hidden';
        lightsImages[currentLvl-1][off2].style.visibility = 'hidden';
    })
}

const toggleLight = (n) => {
    if(lightsClicked[n]) {
        lightsImages[currentLvl-1][n].style.visibility = 'hidden';
        allLights.forEach((item) => {
            item[n].style.visibility = 'hidden';
        });
    }
    else {
        if(n < 7) {
            lightsImages[currentLvl-1][n].style.visibility = 'visible';
            allLights.forEach((item) => {
                item[n].style.visibility = 'visible';
            });
        }
        else {
            switch(n) {
                case 7:
                    toggle360Lights(7, 8, 9);
                    break;
                case 8:
                    toggle360Lights(8, 7, 9);
                    break;
                case 9:
                    toggle360Lights(9, 7, 8);
                    break;
                case 10:
                    toggle360Lights(10, 11, 12);
                    break;
                case 11:
                    toggle360Lights(11, 10, 12);
                    break;
                case 12:
                    toggle360Lights(12, 10, 11);
                    break;
                case 13:
                    toggle360Lights(13, 14, 15);
                    break;
                case 14:
                    toggle360Lights(14, 13, 15);
                    break;
                case 15:
                    toggle360Lights(15, 13, 14);
                    break;
                default:
                    break;
            }
        }
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
            lvl1Click(btnIndex);
            break;
        case 9:
            lvl1Click(btnIndex);
            break;
        case 10:
            lvl1Click(btnIndex);
            break;
        case 11:
            lvl11Click(btnIndex);
            break;
        case 12:
            lvl11Click(btnIndex);
            break;
        case 13:
            lvl11Click(btnIndex);
            break;
        case 14:
            lvl11Click(btnIndex);
            break;
        case 15:
            lvl11Click(btnIndex);
            break;
        case 16:
            lvl11Click(btnIndex);
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
            lvl17Click(btnIndex);
            break;
        case 21:
            lvl21Click(btnIndex);
            break;
        default:
            break;
    }
}
