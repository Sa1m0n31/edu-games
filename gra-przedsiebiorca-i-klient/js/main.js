/* Questions */
const entrepreneurQuestions = [
    {
        question: "Przeanalizuj specyfikę lokalizacji, w której zakładasz przedsiębiorstwo. Do której kategorii analizy SWOT przyporządkujesz czynnik zmniejszania się ludności regionu, w którym ma znajdować się Twoja firma?",
        right: "zagrożenia płynące z otoczenia",
        wrong1: "szanse płynące z otoczenia",
        wrong2: "mocne strony przedsiębiorstwa",
        wrong3: "słabe strony przedsiębiorstwa",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz przyporządkować wskazany czynnik do odpowiedniej kategorii analizy SWOT",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zastanów się, do której kategorii można przyporządkować fakt zmniejszania się liczby potencjalnych klientów i pracowników i spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Jeśli podczas analizy nowego rynku, dostrzegasz wielu klientów innowatorów, jaką strategię najlepiej wybrać?",
        right: "często wprowadzać nowe produkty i/lub usługi",
        wrong1: "zaprzestać działania na rynku",
        wrong2: "unikać zmian w ofercie handlowej",
        wrong3: "skoncentrować się na sprzedaży standardowych produktów",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że wiesz, jak dopasować działania do zainteresowań klienta innowatora.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Pamiętaj, że klient innowator oczekuje nowości. Spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Gdy przedsiębiorca wprowadza nowy produkt na rynek, na czym powinien skupić swoje działania promocyjne?",
        right: "wzbudzeniu potrzeby posiadania nowego produktu oraz jego reklamie",
        wrong1: "przypomnieniu zalet wcześniejszych produktów",
        wrong2: "kształtowaniu świadomości społeczeństwa oraz budowaniu marki firmy",
        wrong3: "budowaniu pozytywnego wizerunku firmy oraz świadomości klienta",
        positiveFeedback: "To jest poprawna odpowiedź. Wiesz, jak postępować w przypadku wprowadzenie nowego produktu.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Pamiętaj, że klienci powinni najpierw dowiedzieć się więcej o nowym produkcie. Spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Wiesz już, jakie przedsiębiorstwo założysz, jaka jest jego specyfika, masz plan działania oraz znasz potencjalne szanse i zagrożenia. Jaki pierwszy dokument należy wypełnić, rejestrując swoją działalność gospodarczą?",
        right: "wniosek CEIDG-1",
        wrong1: "druk ZUA",
        wrong2: "druk ZPA",
        wrong3: "zgłoszenie do Państwowej Inspekcji Pracy i Sanepidu",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że wiesz, który dokument należy przygotować w celu zarejestrowania działalności gospodarczej.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Pamiętaj, że nazwa dokumentu to nazwa organu zajmującego się ewidencją działalności gospodarczych. Spróbuj odpowiedzieć ponownie."
    },
    {
        question: "W ramach prowadzenia przedsiębiorstwa będziesz przygotowywać i przechowywać dokumenty podatkowe. Z wymienionych dokumentów wskaż ten, który stanowi przykład dokumentu podatkowego.",
        right: "faktura",
        wrong1: "arkusz kontrolingu",
        wrong2: "wniosek CEIDG-1",
        wrong3: "ZUS RCA",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz wskazać przykład dokumentu podatkowego.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zastanów się, który dokument poświadcza informacje podatkowe i spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Uwzględniając modelowe warianty strategii rozwoju wynikające z analizy SWOT, można określić strategie rynkowe przedsiębiorstwa. Strategia dotycząca firmy działającej w niszach rynkowych to tzw. strategia:",
        right: "specjalisty",
        wrong1: "naśladowcy",
        wrong2: "lidera",
        wrong3: "pretendenta",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz rozróżniać strategie rynkowe przedsiębiorstw.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zwróć uwagę na pojęcie niszy rynkowej, a następnie spróbuj ponownie udzielić odpowiedzi."
    },
    {
        question: "Zakładając przedsiębiorstwo, ważna jest analiza jego otoczenia, które mogą oddziaływać na jego funkcjonowanie i rozwój. Który z wymienionych czynników nie należy do mikrootoczenia?",
        right: "liczba mieszkańców w regionie",
        wrong1: "dostawcy",
        wrong2: "firmy konkurencyjne",
        wrong3: "firmy wspierające w dystrybucji lub w sprzedaży",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz rozróżnić czynniki makro- i mikrootoczenia przedsiębiorstwa.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Przypomnij sobie pojęcia makrootoczenia oraz mikrootoczenia, a następnie spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Na rynku pojawia się firma konkurencyjna dla Twojego przedsiębiorstwa. Oferuje podobne produkty, ale zyskuje popularność poprzez liczne działania marketingowe. Jak można nazwać taki rodzaj konkurencji?",
        right: "konkurencja informacyjna",
        wrong1: "konkurencja cenowa",
        wrong2: "konkurencja innowacyjna",
        wrong3: "konkurencja jakościowa",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że znasz różne rodzaje konkurencji rynkowej.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Przypomnij sobie charakterystykę poszczególnych rodzajów konkurencji rynkowej, a następnie spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Każde przedsiębiorstwo musi zawierać plan finansowy przedsiębiorstwa. Pierwszym krokiem jest utworzenie budżetu operacyjnego złożonego z budżetów cząstkowych, a drugim opracowanie kilkuelementowego budżetu finansowego. Który dokumentów przynależy do budżetu finansowego?",
        right: "bilans",
        wrong1: "budżet sprzedaży produktu",
        wrong2: "budżet produkcji i zapasów",
        wrong3: "koszty ogólnego zarządzania",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz rozróżnić elementy budżetu operacyjnego od elementów budżetu finansowego.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Przypomnij sobie różnice między budżetem operacyjnym a budżetem finansowym, a następnie spróbuj odpowiedzieć jeszcze raz."
    },
    {
        question: "Przedsiębiorca handlowy chce prowadzić sprzedaż wielokanałową. Które z podanych opisów przedstawia tę strategię?",
        right: "stosowanie sprzedaży pośredniej i bezpośredniej w zależności od sytuacji",
        wrong1: "prowadzenie sprzedaży wyłącznie w sieci, a za pomocą różnych kanałów",
        wrong2: "to inaczej marketing sieciowy",
        wrong3: "korzystanie z usług przedstawicieli handlowych",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz zdefiniować sprzedaż wielokanałową.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Przypomnij sobie pojęcie kanału dystrybucji, a następnie spróbuj ponownie odpowiedzieć na pytanie"
    }
]

const clientQuestions = [
    {
        question: "Klient, który często zgadza się na to, co oferuje mu sprzedawca to klient",
        right: "zgodny",
        wrong1: "zdecydowany",
        wrong2: "otwarty",
        wrong3: "konserwatywny",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że wiesz, jak zachowują się klienci zgodni.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Powtórz informacje z zakresu różnych zachowań klientów i spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Odpowiadasz za zaopatrzenie dużego biura rachunkowego w papier ksero. Dobierz formę zakupu papieru, która byłaby najbardziej dogodna dla Ciebie i płynnego działania biura.",
        right: "umowa długoterminowa obejmująca regularne dostawy i umożliwiająca renegocjacje",
        wrong1: "zakup ryz papieru każdorazowo przez sklep internetowy wybranego sklepu",
        wrong2: "sprawdzanie ofert różnych dostawców i sklepów",
        wrong3: "jednorazowy zakup hurtowej ilości ryz papieru",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz dopasować rodzaj współpracy do potrzeb klienta.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zastanów się, jaka forma współpracy byłaby odpowiednia w tej sytuacji i spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Klient otwarty cechuje się",
        right: "zaufaniem i przyjaznym nastawieniem do sprzedawcy",
        wrong1: "zdecydowaniem na zakup",
        wrong2: "dostosowaniem potrzeb do dostępnej oferty",
        wrong3: "chęcią dokonania zakupu, ale posiadającym dystans do sprzedawcy",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że wiesz, jak zachowa się klient otwarty podczas transakcji kupna-sprzedaży.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Przypomnij sobie cechy klienta otwartego."
    },
    {
        question: `Dla swojej nowo utworzonej firmy chcesz zamówić pierwsze artykuły marketingowe np. długopisy z logotypem Twojej firmy. Zależy Ci na jakości i dobrym wykonaniu artykułów. Która forma zakupu byłaby dla Ciebie najbardziej odpowiednia?`,
        right: "otrzymanie próbek przygotowanych artykułów i po własnej akceptacji dokonanie większego zamówienia",
        wrong1: "umowa długoterminowa",
        wrong2: "zamówienie hurtowej ilości",
        wrong3: "zamówienie artykułów w sklepie internetowym ze względu na szybki czas wykonania zamówienia",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że potrafisz dopasować formę kupna-sprzedaży do potrzeb firmy.",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zwróć uwagę, jakie są potrzeby Twojej firmy. Spróbuj odpowiedzieć ponownie."
    },
    {
        question: "Jakie zachowanie sprzedawcy mogłoby przekonać niezdecydowanego klienta do zakupu?",
        right: "poznanie potrzeb klienta i dobranie do nich odpowiednich produktów lub usług",
        wrong1: "wywarcie presji poprzez przygotowanie atrakcyjnej oferty cenowej o krótkim terminie obowiązywania",
        wrong2: "szybka i profesjonalna obsługa",
        wrong3: "utrzymanie dystansu i pozostawienie klientowi czasu do namysłu",
        positiveFeedback: "To jest poprawna odpowiedź. Oznacza to, że wiesz, jak przekonać do zakupu klienta niezdecydowanego",
        negativeFeedback: "To nie jest poprawna odpowiedź. Zastanów się nad inną strategią sprzedaży i spróbuj odpowiedzieć ponownie"
    }
]

const clientTypeQuestions = [
    {
        question: 'Jak najczęściej wyglądają Twoje zakupy w jednym sklepie:',
        kierowniczy: 'szybko “wpadam” do sklepu i wybieram konkretny produkt, po który przyszedłem / am',
        przyjacielski: 'krążę długo między półkami, nie zawsze wiem po co konkretnie przyszedłem / am',
        analityk: 'spędzam sporo czasu w sklepie bo dokładnie zapoznaje się z etykietami produktów, które chcę kupić',
        ekspresyjny: 'spędzam dużo czasu w sklepie bo lubię porozmawiać sobie ze sprzedawcą na różne tematy, nawet te prywatne'
    },
    {
        question: 'W ofercie sklepu pojawił się całkiem nowy produkt, jak na niego reagujesz:',
        kierowniczy: 'zawsze wiem czego chcę, przychodzę do sklepu po konkretny produkt, żadne nowości mnie nie skuszą, jeżeli akurat nie zaspokajają moich bieżących potrzeb',
        przyjacielski: 'pytam sprzedawcę / przedsiębiorcę o nowy produkt, proszę o jego charakterystykę, szczegółowy opis i spokojnie wysłuchuję',
        analityk: 'czytam dokładnie wszystkie informacje znajdujące się na opakowaniu produktu, interesują mnie najbardziej dane techniczne produktu',
        ekspresyjny: 'z dużym entuzjazmem podchodzę do wszystkich nowości, chętnie podyskutuję dłużej ze sprzedawcą na temat tego produktu i nie tylko'
    },
    {
        question: 'Na co zwracasz uwagę przy wyborze produktu:',
        kierowniczy: 'znam wcześniej produkt, po który przychodzę do sklepu, kupuję to po co przyszedłem, dokładnie wiem czego chcę i potrzebuję',
        przyjacielski: 'kieruję się przede wszystkim emocjami i swoją intuicją',
        analityk: 'kieruję się cechami użytkowymi produktu, jego specyfikacją techniczną',
        ekspresyjny: 'ważniejsza od samego produktu jest atmosfera w sklepie i fakt, czy lubię sprzedawcę / czy da się z nim fajnie porozmawiać, decyzję o zakupie podejmuję spontanicznie'
    },
    {
        question: 'Jak opisałbyś swoją postawę w czasie dokonywania zakupów?',
        kierowniczy: 'wpadam do sklepu zawsze w biegu, biorę tylko to po co przyszedłem',
        przyjacielski: 'spokojnie, pomału rozglądam się po sklepie, raczej wiem czego nie chcę kupić niż co chcę, oczekuję opieki sprzedawcy i rozmowy z nim',
        analityk: 'nie spieszę się z podejmowaniem decyzji,bardzo dokładnie zapoznaje się z parametrami produktu, czytam instrukcje, nieustannie poszukuję informacji',
        ekspresyjny: 'zachowuję się swobodne, dużo gestykuluję - często zbyt dużo i mam bogatą mimikę. Często całym ciałem podkreślam to, co mówię'
    },
    {
        question: 'Który typ sprzedawcy / przedsiębiorcy najbardziej Ci odpowiada?',
        kierowniczy: 'oficjalna postawa, skoncentrowany na produkcie, szybko działa',
        przyjacielski: 'troskliwy,uprzejmy, szczery, stara się ze mną współpracować',
        analityk: 'kompetentny, ekspert w swojej dziedzinie, znający wszystkie szczegóły (także techniczne) na temat produktu',
        ekspresyjny: 'swobodny, na luzie, naturalny, lubiący pogadać nawet na tematy niezwiązane bezpośrednio z zakupem'
    },
    {
        question: 'Które zdanie wypowiedziane przez sprzedawcę / przedsiębiorcę najbardziej do Ciebie przemawia i skłoniłoby Cię do zakupu produktu np. zegarka?',
        kierowniczy: 'nie jest dla mnie ważne co mówi sprzedawca, ja sam najlepiej wiem co chcę kupić i sam najlepiej wybiorę odpowiedni dla siebie produkt.',
        przyjacielski: 'Wspólnie wybierzmy zegarek, który najbardziej Panią / Pana satysfakcjonuje, gwarantuję przy tym pełne bezpieczeństwo transakcji. Opowiem kilka historii na temat jego powstania',
        analityk: 'Oto szczegółowe dane na temat produktu: bransoleta wykonana z 14 karatowego złota, zegarek ten charakteryzuje się baterią o wydłużonej żywotności aż do 7 lat, wykonany z krzemu układ wychwtowy zwiększa jego odporność na namagnesowanie',
        ekspresyjny: 'Proszę sobie wyobrazić, jaki zachwyt wzbudzi Pani/Pan wśród znajomych, jak zobaczą jaki zegarek sobie Pani / Pan sprawił -a'
    }
]

/* Randomize questions */
const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffleArray(entrepreneurQuestions);
shuffleArray(clientQuestions);

/* Play audio in background */
let audio;
document.addEventListener("click", () => {
    audio = new Audio('./assets/music.wav');
    audio.play();
    audio.volume = 0.07;
    audio.loop = true;
}, { once: true });

/* Mute/unmute */
let mute = 0;
const imgSound = document.querySelector(".homeBtn__img--sound");
const imgMute = document.querySelector(".homeBtn__img--mute");
const toggleSound = () => {
    if(mute) {
        audio.volume = 0.07;
        imgSound.style.display = "block";
        imgMute.style.display = "none";
        mute = 0;
    }
    else {
        audio.volume = 0;
        imgSound.style.display = "none";
        imgMute.style.display = "block";
        mute = 1;
    }
}

/* Main carousel */
let durationLength = 200;
const mainCarousel = new Siema({
    selector: ".carousel",
    perPage: 1,
    draggable: false,
    duration: durationLength,
    onChange: () => {
        if(mainCarousel.currentSlide === 8) randomizeAnswers(0);
        if(mainCarousel.currentSlide === 16) randomizeAnswers(0);
        if(mainCarousel.currentSlide === 18) randomizeAnswers(0);
    }
});

const nextSlide = () => {
    mainCarousel.next();
    Array.from(document.querySelectorAll('.btn--clientTypes')).forEach((item) => {
        item.setAttribute('disabled', 'true');
    });
}

const prevSlide = () => {
    /* Exceptions */
    if(mainCarousel.currentSlide === 9) {
        /* Quiz - entrepreneur */
        if(entrepreneurQuizCurrentItem > 0) prevQuestion();
        else mainCarousel.prev();
    }
    else if(mainCarousel.currentSlide === 16) {
        /* Quiz - client */
        if(clientQuizCurrentItem > 0) prevQuestion();
        else mainCarousel.prev();
    }
    else if(mainCarousel.currentSlide === 9) {
        /* Back to quiz */
        entrepreneurQuizCurrentItem = 9;

        mainCarousel.prev();
    }
    else if(mainCarousel.currentSlide === 12) {
        clientQuizCurrentItem = 4;

        mainCarousel.prev();
    }
    else if(mainCarousel.currentSlide === 10) {
        /* Client start */
        mainCarousel.goTo(1);
    }
    else {
        /* Client quiz */
        mainCarousel.prev();
    }
}

const clearFields = () => {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(item => {
        item.value = "";
    });
}

const goHome = (clearFieldsVal = false) => {
    mainCarousel.goTo(0);

    if(clearFieldsVal) clearFields();
}

const goToClient = () => {
    mainCarousel.goTo(16);
}

const goToEntrepreneur = () => {
    mainCarousel.goTo(2);
}

const validateCompanyDescription = () => {
    let validate = true;

    const companyName = document.querySelector(".input--companyName");
    const companyDesc = document.querySelector(".input--companyDesc");
    const industry = document.querySelector(".select--field");
    const pkd = document.querySelector(".input--pkd");
    const sells = document.querySelector(".select--sells");
    const error = document.querySelector(".error--companyDesc");

    if(companyName.value === "") validate = false;
    if(companyDesc.value === "") validate = false;
    if(industry.value === "") validate = false;
    if(pkd.value === "") validate = false;
    if(sells.value === "Wybierz") validate = false;

    if(validate) {
        error.style.display = "none";
        nextSlide();
    }
    else {
        error.style.display = "block";
        error.style.margin = "10px auto 0";
    }
}

const validateCompanyPlan = () => {
    let validate = true;

    const celeStrategiczne = document.querySelector(".input--celeStrategiczne");
    const klienciDocelowi = document.querySelector(".input--klienciDocelowi");
    const dzialaniaSprzedazowe = document.querySelector(".input--dzialaniaSprzedazowe");
    const potrzebneKompetencje = document.querySelector(".input--potrzebneKompetencje");
    const propozycjaWartosci = document.querySelector(".input--propozycjaWartosci");

    const error = document.querySelector(".error--companyPlan");

    if(celeStrategiczne.value === "") validate = false;
    if(klienciDocelowi.value === "") validate = false;
    if(dzialaniaSprzedazowe.value === "") validate = false;
    if(potrzebneKompetencje.value === "") validate = false;
    if(propozycjaWartosci.value === "") validate = false;

    if(validate) {
        error.style.display = "none";
        nextSlide();
    }
    else {
        error.style.display = "block";
        error.style.margin = "10px auto 0";
    }
}

const validateSWOT = () => {
    let validate = true;

    const strengths = document.querySelector(".input--s");
    const weaknesses = document.querySelector(".input--w");
    const opportunities = document.querySelector(".input--o");
    const threats = document.querySelector(".input--t");

    const error = document.querySelector(".error--swot");

    if(strengths.value === "") validate = false;
    if(weaknesses.value === "") validate = false;
    if(opportunities.value === "") validate = false;
    if(threats.value === "") validate = false;

    if(validate) {
        error.style.display = "none";
        nextSlide();
    }
    else {
        error.style.display = "block";
        error.style.margin = "10px auto 0";
    }
}

const validatePorter = () => {
    let validate = true;

    const silaPrzetargowaDostawcow = document.querySelector(".input--silaPrzetargowaDostawcow");
    const silaPrzetargowaNabywcow = document.querySelector(".input--silaPrzetargowaNabywcow");
    const rywalizacja = document.querySelector(".input--rywalizacja");
    const grozbaNowychProducentow = document.querySelector(".input--grozbaPojawieniaSieProducentow");
    const grozbaNowychSubstytutow = document.querySelector(".input--grozbaPojawieniaSieSubstytutow");

    if(silaPrzetargowaDostawcow.value === "") validate = false;
    if(silaPrzetargowaNabywcow.value === "") validate = false;
    if(rywalizacja.value === "") validate = false;
    if(grozbaNowychProducentow.value === "") validate = false;
    if(grozbaNowychSubstytutow.value === "") validate = false;

    const error = document.querySelector(".error--porter");

    if(validate) {
        error.style.display = "none";
        nextSlide();
    }
    else {
        error.style.display = "block";
        error.style.margin = "10px auto 0";
    }
}

/* Quiz */
let entrepreneurQuizCurrentItem = 0, clientQuizCurrentItem = 0, clientTypeQuizCurrentItem = 0;

const questionSlot = document.querySelector(".quizQuestion");
const questionSlotClient = document.querySelector(".quizQuestion--client");
const questionSlotClientType = document.querySelector(".quizQuestion--clientType");

const answerASlot = document.getElementById("answer1");
const answerBSlot = document.getElementById("answer2");
const answerCSlot = document.getElementById("answer3");
const answerDSlot = document.getElementById("answer4");

const answerASlotClient = document.getElementById("answer1--client");
const answerBSlotClient = document.getElementById("answer2--client");
const answerCSlotClient = document.getElementById("answer3--client");
const answerDSlotClient = document.getElementById("answer4--client");

const answerASlotClientType = document.getElementById("answer1--clientType");
const answerBSlotClientType = document.getElementById("answer2--clientType");
const answerCSlotClientType = document.getElementById("answer3--clientType");
const answerDSlotClientType = document.getElementById("answer4--clientType");

const answerBtn1 = document.getElementById("answerBtn1");
const answerBtn2 = document.getElementById("answerBtn2");
const answerBtn3 = document.getElementById("answerBtn3");
const answerBtn4 = document.getElementById("answerBtn4");

const answerBtn1Client = document.getElementById("answerBtn1--client");
const answerBtn2Client = document.getElementById("answerBtn2--client");
const answerBtn3Client = document.getElementById("answerBtn3--client");
const answerBtn4Client = document.getElementById("answerBtn4--client");

const answerBtn1ClientType = document.getElementById("answerBtn1--clientType");
const answerBtn2ClientType = document.getElementById("answerBtn2--clientType");
const answerBtn3ClientType = document.getElementById("answerBtn3--clientType");
const answerBtn4ClientType = document.getElementById("answerBtn4--clientType");

const answersSlots = [answerASlot, answerBSlot, answerCSlot, answerDSlot];
const answerButtons = [answerBtn1, answerBtn2, answerBtn3, answerBtn4];

const answersSlotsClient = [answerASlotClient, answerBSlotClient, answerCSlotClient, answerDSlotClient];
const answerButtonsClient = [answerBtn1Client, answerBtn2Client, answerBtn3Client, answerBtn4Client];

const answersSlotsClientType = [answerASlotClientType, answerBSlotClientType, answerCSlotClientType, answerDSlotClientType];
const answerButtonsClientType = [answerBtn1ClientType, answerBtn2ClientType, answerBtn3ClientType, answerBtn4ClientType];

const isInArray = (el, arr) => {
    return arr.findIndex(item => {
        return item === el;
    }) !== -1;
}

const getRandomNumber = (min, max, exclude) => {
    /* Return number greater or equal min and smaller than max */
    let random = -1;
    while((random === -1)||(isInArray(random, exclude))) {
        random = Math.floor(Math.random() * (max - min)) + min;
    }
    return random;
}

const prevQuestion = () => {
    const entrepreneurMode = mainCarousel.currentSlide === 9;

    if(entrepreneurMode) {
        if(entrepreneurQuizCurrentItem > 0) {
            entrepreneurQuizCurrentItem--;
            nextEntrepreneur(false);
        }
        else prevSlide();
    }
    else {
        if (clientQuizCurrentItem > 0) {
            clientQuizCurrentItem--;
            nextEntrepreneur(false);
        }
        else {
            prevSlide();
        }
    }
}

const randomizeAnswers = (questionNumber) => {
    let question;
    let entrepreneurMode = mainCarousel.currentSlide === 8 || mainCarousel.currentSlide === 9;

    if(entrepreneurMode) {
        question = entrepreneurQuestions[questionNumber];
    }
    else if(mainCarousel.currentSlide === 18 || mainCarousel.currentSlide === 19) {
        question = clientTypeQuestions[questionNumber];
    }
    else {
        question = clientQuestions[questionNumber];
    }

    let wrongAnswers;
    if(entrepreneurMode || (mainCarousel.currentSlide !== 18 && mainCarousel.currentSlide !== 19)) {
        wrongAnswers = [question.wrong1, question.wrong2, question.wrong3];
    }

    /* 0 - set question text */
    if(entrepreneurMode) questionSlot.textContent = question.question;
    else if(mainCarousel.currentSlide === 18 || mainCarousel.currentSlide === 19) questionSlotClientType.textContent = question.question;
    else questionSlotClient.textContent = question.question;

    if(entrepreneurMode) {
        /* 1 - set slot for right answer */
        const slotForRightAnswer = getRandomNumber(0, 4, [-1]);
        answersSlots[slotForRightAnswer].textContent = question.right;
        answersSlots[slotForRightAnswer].classList.add("rightAnswer");

        /* 2 - set slots for wrong answers */
        let slotForFirstWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer]);
        answersSlots[slotForFirstWrongAnswer].textContent = wrongAnswers[0];
        const slotForSecondWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer, slotForFirstWrongAnswer]);
        answersSlots[slotForSecondWrongAnswer].textContent = wrongAnswers[1];
        const slotForThirdWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer, slotForFirstWrongAnswer, slotForSecondWrongAnswer]);
        answersSlots[slotForThirdWrongAnswer].textContent = wrongAnswers[2];
    }
    else if(mainCarousel.currentSlide === 18 || mainCarousel.currentSlide === 19) {
        /* Client type mode */
        Array.from(document.querySelectorAll(`.quizAnswer--clientType`)).forEach((item) => {
            item.style.background = "#fff";
            item.style.borderColor = "#000";
        });

        answerASlotClientType.textContent = question.kierowniczy;
        answerBSlotClientType.textContent = question.przyjacielski;
        answerCSlotClientType.textContent = question.analityk;
        answerDSlotClientType.textContent = question.ekspresyjny;
    }
    else {
        /* 1 - set slot for right answer */
        const slotForRightAnswer = getRandomNumber(0, 4, [-1]);
        answersSlotsClient[slotForRightAnswer].textContent = question.right;
        answersSlotsClient[slotForRightAnswer].classList.add("rightAnswer");

        /* 2 - set slots for wrong answers */
        let slotForFirstWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer]);
        answersSlotsClient[slotForFirstWrongAnswer].textContent = wrongAnswers[0];
        const slotForSecondWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer, slotForFirstWrongAnswer]);
        answersSlotsClient[slotForSecondWrongAnswer].textContent = wrongAnswers[1];
        const slotForThirdWrongAnswer = getRandomNumber(0, 4, [slotForRightAnswer, slotForFirstWrongAnswer, slotForSecondWrongAnswer]);
        answersSlotsClient[slotForThirdWrongAnswer].textContent = wrongAnswers[2];
    }
}

const clientTypeImages = [
    'przeczytaj_opis_czerwony.png', 'przeczytaj_opis_zielony.png', 'przeczytaj_opis_niebieski.png', 'przeczytaj_opis_zolty.png'
]

const clientTypePeople = [
    'klient-kierowniczy.png', 'klient-przyjacielski.png', 'klient-analityk.png', 'klient-ekspresyjny.png'
]

const setClientTypeImage = (clientType) => {
    document.querySelector('.clientType__img').setAttribute('src', `./assets/${clientTypeImages[clientType]}`);
}

const setTypeOfClient = () => {
    let index = 0;
    const type1 = clientTypeAnswers.filter((item) => (item === 1)).length;
    const type2 = clientTypeAnswers.filter((item) => (item === 2)).length;
    const type3 = clientTypeAnswers.filter((item) => (item === 3)).length;
    const type4 = clientTypeAnswers.filter((item) => (item === 4)).length;

    if(type1 >= type2 && type1 >= type3 && type1 >= type4) {
        clientType = 'kierowniczym';
    }
    if(type2 >= type1 && type2 >= type3 && type2 >= type4) {
        clientType = 'przyjacielskim';
        index = 1;
    }
    if(type3 >= type2 && type3 >= type1 && type3 >= type4) {
        clientType = 'analitykiem';
        index = 2;
    }
    if(type4 >= type2 && type4 >= type3 && type4 >= type1) {
        clientType = 'ekspresyjnym';
        index = 3;
    }

    document.querySelector(`.view__content>.clientType--${index+1}`).style.display = 'block';
    document.querySelector('.clientType__people').setAttribute('src', `./assets/${clientTypePeople[index]}`);

    setClientTypeImage(index);
    document.querySelector('.clientType').textContent = `Jesteś klientem ${clientType}`;
}

const nextEntrepreneur = (next = true) => {
    /* Clear rightAnswer class */
    answersSlots.forEach(item => {
       item.classList.remove("rightAnswer");
    });
    answersSlotsClient.forEach(item => {
        item.classList.remove("rightAnswer");
    });

    /* Clear colors */
    answerButtons.forEach(item => {
       item.style.background = "rgba(255, 255, 255, .7)";
       item.style.borderColor = "#000";
    });
    answerButtonsClient.forEach(item => {
        item.style.background = "rgba(255, 255, 255, .7)";
        item.style.borderColor = "#000";
    });

    /* Remove feedback and button */
    const feedbackSlot = document.querySelector(".feedback");
    const feedbackSlotClient = document.querySelector(".feedback--client");
    const btnNextQuiz = document.querySelector(".btn--nextQuiz");
    const btnNextQuizClient = document.querySelector(".btn--nextQuiz--client");

    feedbackSlot.textContent = "";
    feedbackSlot.style.color = "#000";
    feedbackSlotClient.textContent = "";
    feedbackSlotClient.style.color = "#000";
    btnNextQuiz.style.display = "none";
    btnNextQuizClient.style.display = "none";

    if(mainCarousel.currentSlide === 9) {
        if(next) entrepreneurQuizCurrentItem++;

        if(entrepreneurQuizCurrentItem < 10) randomizeAnswers(entrepreneurQuizCurrentItem);
        else {
            nextSlide();
        }
    }
    else if(mainCarousel.currentSlide === 19) {
        if(next) clientTypeQuizCurrentItem++;

        if(clientTypeQuizCurrentItem < 6) randomizeAnswers(clientTypeQuizCurrentItem);
        else {
            setTypeOfClient();
            nextSlide();
        }
    }
    else {
        if(next) clientQuizCurrentItem++;

        if(clientQuizCurrentItem < 5) randomizeAnswers(clientQuizCurrentItem);
        else {
            nextSlide();
        }
    }
}

let clientTypeAnswers = [];
let clientType = '';

const checkAnswer = (n) => {
    let answerToCheck, btnNextQuiz;
    const entrepreneurMode = mainCarousel.currentSlide === 9;

    if(entrepreneurMode) {
        answerToCheck = document.querySelector(`.quizAnswer:nth-of-type(${n})>.quizAnswer__text`);
    }
    else {
        answerToCheck = document.querySelector(`.quizAnswer--client:nth-of-type(${n})>.quizAnswer__text`);
    }

    const feedbackSlot = document.querySelector(".feedback");
    const feedbackSlotClient = document.querySelector(".feedback--client");
    if(entrepreneurMode) btnNextQuiz = document.querySelector(".btn--nextQuiz");
    else if(mainCarousel.currentSlide === 19) btnNextQuiz = document.querySelector(".btn--nextQuiz--clientType");
    else btnNextQuiz = document.querySelector(".btn--nextQuiz--client");

    if(mainCarousel.currentSlide === 19) {
        /* Client type */
        if(clientTypeQuizCurrentItem === clientTypeAnswers.length) clientTypeAnswers.push(n);
        Array.from(document.querySelectorAll(`.quizAnswer--clientType`)).forEach((item) => {
            item.style.background = "#fff";
            item.style.borderColor = "#000";
        });
        let btnToMark = document.querySelector(`.quizAnswer--clientType:nth-of-type(${n})`);
        btnNextQuiz.style.display = "flex";
        btnNextQuiz.style.marginTop = "20px";
        btnToMark.style.background = "#1ABFAA";
        btnToMark.style.borderColor = "#1ABFAA";
    }

    if(answerToCheck.classList[1] === "rightAnswer") {
        let btnToMark;
        if(entrepreneurMode) btnToMark = document.querySelector(`.quizAnswer:nth-of-type(${n})`);
        else btnToMark = document.querySelector(`.quizAnswer--client:nth-of-type(${n})`);
        btnNextQuiz.style.display = "flex";
        btnNextQuiz.style.marginTop = "20px";
        btnToMark.style.background = "#1ABFAA";
        btnToMark.style.borderColor = "#1ABFAA";
        feedbackSlot.style.color = "#1ABFAA";
        feedbackSlotClient.style.color = "#1ABFAA";
        if(entrepreneurMode) feedbackSlot.textContent = entrepreneurQuestions[entrepreneurQuizCurrentItem].positiveFeedback;
        else feedbackSlotClient.textContent = clientQuestions[clientQuizCurrentItem].positiveFeedback;
    }
    else if(mainCarousel.currentSlide !== 19) {
        if(entrepreneurMode) {
            if(window.getComputedStyle(feedbackSlot).getPropertyValue("color") !== "rgb(26, 191, 170)") {
                feedbackSlot.style.color = "#E55314";
                feedbackSlotClient.style.color = "#E55314";
                feedbackSlot.textContent = entrepreneurQuestions[entrepreneurQuizCurrentItem].negativeFeedback;
            }
        }
        else {
            if(window.getComputedStyle(feedbackSlotClient).getPropertyValue("color") !== "rgb(26, 191, 170)") {
                feedbackSlot.style.color = "#E55314";
                feedbackSlotClient.style.color = "#E55314";
                feedbackSlotClient.textContent = clientQuestions[clientQuizCurrentItem].negativeFeedback;
            }
        }
    }
}

/* Print */
const printFields = () => {
    /* Get all fields content */
    const companyName = document.querySelector(".input--companyName").value;
    const companyDesc = document.querySelector(".input--companyDesc").value;
    const companyIndustry = document.querySelector("#industry").value;
    const companyPKD = document.querySelector(".input--pkd").value;
    const companySells = document.querySelector(".select--sells").value;

    const celeStrategiczne = document.querySelector(".input--celeStrategiczne").value;
    const klienciDocelowi = document.querySelector(".input--klienciDocelowi").value;
    const dzialaniaSprzedazowe = document.querySelector(".input--dzialaniaSprzedazowe").value;
    const potrzebneKompetencje = document.querySelector(".input--potrzebneKompetencje").value;
    const propozycjaWartosci = document.querySelector(".input--propozycjaWartosci").value;

    const strengths = document.querySelector(".input--s").value;
    const weaknesses = document.querySelector(".input--w").value;
    const opportunities = document.querySelector(".input--o").value;
    const threats = document.querySelector(".input--t").value;

    const silaPrzetargowaDostawcow = document.querySelector(".input--silaPrzetargowaDostawcow").value;
    const silaPrzetargowaNabywcow = document.querySelector(".input--silaPrzetargowaNabywcow").value;
    const rywalizacja = document.querySelector(".input--rywalizacja").value;
    const grozbaPojawieniaSieProducentow = document.querySelector(".input--grozbaPojawieniaSieProducentow").value;
    const grozbaPojawieniaSieSubstytutow = document.querySelector(".input--grozbaPojawieniaSieSubstytutow").value;

    const documentToPrint = window.open();
    documentToPrint.document.write(`<style>
        h5 {
            margin: 5px 0;
            text-decoration: underline;
        }
        
        p {
            margin: 0 0 15px 0;
        }
        
        h5, p {
            font-size: 14px;
        }
        
        h5, h3, p {
            font-family: 'Arial', sans-serif;
        }
        
        h3 {
            text-align: center;
        }
</style>
<main>
        <h3>Podstawowe informacje o firmie</h3>
        <h5>Nazwa firmy</h5><p>${companyName}</p>
        <h5>Opis firmy</h5><p>${companyDesc}</p>
        <h5>Branża</h5><p>${companyIndustry}</p>
        <h5>Kod PKD</h5><p>${companyPKD}</p>
        <h5>Główny kanał sprzedaży</h5><p>${companySells}</p>
        
        <h3>Plan działania firmy</h3>
        <h5>Cele strategiczne</h5><p>${celeStrategiczne}</p>
        <h5>Klienci docelowi</h5><p>${klienciDocelowi}</p>
        <h5>Działania sprzedażowe i promocyjne</h5><p>${dzialaniaSprzedazowe}</p>
        <h5>Potrzebne kompetencje, zasoby i środki</h5><p>${potrzebneKompetencje}</p>
        <h5>Propozycja wartości dla klientów</h5><p>${propozycjaWartosci}</p>
        
        <h3>Analiza SWOT</h3>
        <h5>Mocne strony</h5><p>${strengths}</p>
        <h5>Słabe strony</h5><p>${weaknesses}</p>
        <h5>Szanse</h5><p>${opportunities}</p>
        <h5>Zagrożenia</h5><p>${threats}</p>
        
        <h3>Analiza 5 sił rynkowych Portera</h3>
        <h5>Siła przetargowa dostawców</h5><p>${silaPrzetargowaDostawcow}</p>
        <h5>Siła przetargowa nabywców</h5><p>${silaPrzetargowaNabywcow}</p>
        <h5>Rywalizacja wewnątrze sektora</h5><p>${rywalizacja}</p>
        <h5>Groźba pojawienia się nowych producentów</h5><p>${grozbaPojawieniaSieProducentow}</p>
        <h5>Groźba pojawienia się substytutów</h5><p>${grozbaPojawieniaSieSubstytutow}</p>
    </main>`);
    documentToPrint.print();
    documentToPrint.close();
}

const tableFirstRow = Array.from(document.querySelectorAll('.view__content__table>tbody>tr:nth-of-type(1)>td:not(:first-of-type)>.table__btn'));
const tableSecondRow = Array.from(document.querySelectorAll('.view__content__table>tbody>tr:nth-of-type(2)>td:not(:first-of-type)>.table__btn'));
const tableThirdRow = Array.from(document.querySelectorAll('.view__content__table>tbody>tr:nth-of-type(3)>td:not(:first-of-type)>.table__btn'));
const tableFourthRow = Array.from(document.querySelectorAll('.view__content__table>tbody>tr:nth-of-type(4)>td:not(:first-of-type)>.table__btn'));
const tableFifthRow = Array.from(document.querySelectorAll('.view__content__table>tbody>tr:nth-of-type(5)>td:not(:first-of-type)>.table__btn'));

const table = [tableFirstRow, tableSecondRow, tableThirdRow, tableFourthRow, tableFifthRow];

const tableClick = (row, btn) => {
    table[row].forEach((item) => {
        item.style.background = '#c1c1c1';
    });
    table[row][btn].style.background = '#1E78B3';
}

/* Interact */
const position1 = { x: 0, y: 0 }
const position2 = { x: 0, y: 0 }
const position3 = { x: 0, y: 0 }
const position4 = { x: 0, y: 0 }
const position5 = { x: 0, y: 0 }
const position6 = { x: 0, y: 0 }
const position7 = { x: 0, y: 0 }
const position8 = { x: 0, y: 0 }
const position9 = { x: 0, y: 0 }
const position10 = { x: 0, y: 0 }
const position11 = { x: 0, y: 0 }
const position12 = { x: 0, y: 0 }

const checkIfAllClientTypesMatched = () => {
    if(clientTypesLvl === 4) {
        clientTypesLvl = 0;
        Array.from(document.querySelectorAll('.btn--clientTypes')).forEach((item) => {
            item.removeAttribute('disabled');
        });
    }
}

let clientTypesLvl = 0;

interact('.draggableBtn--ekspresyjny--1').draggable({
    listeners: {
        move (event) {
            position1.x += event.dx
            position1.y += event.dy

            event.target.style.transform =
                `translate(${position1.x}px, ${position1.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position1.x = 0;
            position1.y = 0;
        }
    }
});
interact('.draggableBtn--kierowniczy--1').draggable({
    listeners: {
        move (event) {
            position2.x += event.dx
            position2.y += event.dy

            event.target.style.transform =
                `translate(${position2.x}px, ${position2.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position2.x = 0;
            position2.y = 0;
        }
    }
});
interact('.draggableBtn--przyjacielski--1').draggable({
    listeners: {
        move (event) {
            position3.x += event.dx
            position3.y += event.dy

            event.target.style.transform =
                `translate(${position3.x}px, ${position3.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position3.x = 0;
            position3.y = 0;
        }
    }
});
interact('.draggableBtn--analityk--1').draggable({
    listeners: {
        move (event) {
            position4.x += event.dx
            position4.y += event.dy

            event.target.style.transform =
                `translate(${position4.x}px, ${position4.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position4.x = 0;
            position4.y = 0;
        }
    }
});

interact('.draggableBtn--ekspresyjny--2').draggable({
    listeners: {
        move (event) {
            position5.x += event.dx
            position5.y += event.dy

            event.target.style.transform =
                `translate(${position5.x}px, ${position5.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position5.x = 0;
            position5.y = 0;
        }
    }
});
interact('.draggableBtn--kierowniczy--2').draggable({
    listeners: {
        move (event) {
            position6.x += event.dx
            position6.y += event.dy

            event.target.style.transform =
                `translate(${position6.x}px, ${position6.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position6.x = 0;
            position6.y = 0;
        }
    }
});
interact('.draggableBtn--przyjacielski--2').draggable({
    listeners: {
        move (event) {
            position7.x += event.dx
            position7.y += event.dy

            event.target.style.transform =
                `translate(${position7.x}px, ${position7.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position7.x = 0;
            position7.y = 0;
        }
    }
});
interact('.draggableBtn--analityk--2').draggable({
    listeners: {
        move (event) {
            position8.x += event.dx
            position8.y += event.dy

            event.target.style.transform =
                `translate(${position8.x}px, ${position8.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position8.x = 0;
            position8.y = 0;
        }
    }
});

interact('.draggableBtn--ekspresyjny--3').draggable({
    listeners: {
        move (event) {
            position9.x += event.dx
            position9.y += event.dy

            event.target.style.transform =
                `translate(${position9.x}px, ${position9.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position9.x = 0;
            position9.y = 0;
        }
    }
});
interact('.draggableBtn--kierowniczy--3').draggable({
    listeners: {
        move (event) {
            position10.x += event.dx
            position10.y += event.dy

            event.target.style.transform =
                `translate(${position10.x}px, ${position10.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position10.x = 0;
            position10.y = 0;
        }
    }
});
interact('.draggableBtn--przyjacielski--3').draggable({
    listeners: {
        move (event) {
            position11.x += event.dx
            position11.y += event.dy

            event.target.style.transform =
                `translate(${position11.x}px, ${position11.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position11.x = 0;
            position11.y = 0;
        }
    }
});
interact('.draggableBtn--analityk--3').draggable({
    listeners: {
        move (event) {
            position12.x += event.dx
            position12.y += event.dy

            event.target.style.transform =
                `translate(${position12.x}px, ${position12.y}px)`
        },
        end (event) {
            event.target.style.transform = 'none';
            position12.x = 0;
            position12.y = 0;
        }
    }
});

interact('.dropzone--1')
    .dropzone({
        ondrop: function (event) {
            event.relatedTarget.style.position = 'absolute';
            event.relatedTarget.style.transform = 'none';
            event.relatedTarget.style.width = '100%';
            event.target.appendChild(event.relatedTarget);
            event.relatedTarget.classList.remove('draggableBtn--kierowniczy');
            clientTypesLvl++;
            checkIfAllClientTypesMatched();
        },
        accept: '.draggableBtn--kierowniczy',
        overlap: .3
    })
    .on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    });

interact('.dropzone--2')
    .dropzone({
        ondrop: function (event) {
            event.relatedTarget.style.position = 'absolute';
            event.relatedTarget.style.transform = 'none';
            event.relatedTarget.style.width = '100%';
            event.target.appendChild(event.relatedTarget);
            event.relatedTarget.classList.remove('draggableBtn--przyjacielski');
            clientTypesLvl++;
            checkIfAllClientTypesMatched();
        },
        accept: '.draggableBtn--przyjacielski',
        overlap: .3
    })
    .on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    });

interact('.dropzone--3')
    .dropzone({
        ondrop: function (event) {
            event.relatedTarget.style.position = 'absolute';
            event.relatedTarget.style.transform = 'none';
            event.relatedTarget.style.width = '100%';
            event.target.appendChild(event.relatedTarget);
            event.relatedTarget.classList.remove('draggableBtn--analityk');
            clientTypesLvl++;
            checkIfAllClientTypesMatched();
        },
        accept: '.draggableBtn--analityk',
        overlap: .3
    })
    .on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    });

interact('.dropzone--4')
    .dropzone({
        ondrop: function (event) {
            event.relatedTarget.style.position = 'absolute';
            event.relatedTarget.style.transform = 'none';
            event.relatedTarget.style.width = '100%';
            event.target.appendChild(event.relatedTarget);
            event.relatedTarget.classList.remove('draggableBtn--ekspresyjny');
            clientTypesLvl++;
            checkIfAllClientTypesMatched();
        },
        accept: '.draggableBtn--ekspresyjny',
        overlap: .3

    })
    .on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    });

const clientTypesArr = ['kierowniczym', 'przyjacielskim', 'analitykiem', 'ekspresyjnym']

const checkVisualisation = (n) => {
    if(clientType === clientTypesArr[n]) {
        document.querySelector('.btn--visualisations').removeAttribute('disabled');
        Array.from(document.querySelectorAll(`.visualisations>.visualisationBtn`)).forEach((item) => {
            item.style.borderColor = '#c1c1c1';
        });
        document.querySelector(`.visualisations>.visualisationBtn:nth-of-type(${n+1})`).style.borderColor = 'green';
    }
}

const checkCommunication = (n) => {
    if(clientType === clientTypesArr[n]) {
        document.querySelector('.btn--communication').removeAttribute('disabled');
        Array.from(document.querySelectorAll(`.communication>.visualisationBtn`)).forEach((item) => {
            item.style.borderColor = '#c1c1c1';
        });
        document.querySelector(`.communication>.visualisationBtn:nth-of-type(${n+1})`).style.borderColor = 'green';
    }
}

const checkLogo = (n) => {
    if(clientType === clientTypesArr[n]) {
        document.querySelector('.btn--logo').removeAttribute('disabled');
        Array.from(document.querySelectorAll(`.logos>.visualisationBtn`)).forEach((item) => {
            item.style.borderColor = '#c1c1c1';
        });
        document.querySelector(`.logos>.visualisationBtn:nth-of-type(${n+1})`).style.borderColor = 'green';
    }
}

const selectChanged = () => {
    if((document.getElementById('select1').value === 'Pięciu')&&
    (document.getElementById('select2').value === 'bliższe')&&
    (document.getElementById('select3').value === 'konkurentów')&&
    (document.getElementById('select4').value === 'mniejsza')) {
        document.querySelector('.btn--select').removeAttribute('disabled');
    }
}
