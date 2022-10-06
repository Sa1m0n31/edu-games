const views = Array.from(document.querySelectorAll('.view'));
const documents = Array.from(document.querySelectorAll('.document'));
const menuButtons = Array.from(document.querySelectorAll('.view__menu__button'));
const firstQuestion = document.querySelector('.input');
const secondQuestion = document.querySelector('.question2');
const thirdQuestion = document.querySelector('.question3');
const checkAnswerBtn = document.querySelector('.btn--checkAnswer');
const nextDocumentBtn = document.querySelector('.btn--nextDocument');
const feedback = document.querySelector('.feedback');
const firstQuizItem = document.querySelector('.quiz__item--first');
const modal = document.querySelector('.modal');

const green = '#ADFF2F';
const red = '#FF0000';

const question1Answers = [
    null, '21 Inwestycje i remonty', null, '220 Stan prawny nieruchomości',
    null, null, '120 Akta osobowe zatrudnionych po 01.01.1999 r.', '001 Rada Pedagogiczna',
    '1140 Prace zlecone ze składką na ubezpieczenie społeczne', '124 Zaświadczenia o zatrudnieniu  i wynagrodzeniu',
    '1510 Urlopy wypoczynkowe', '0720 Kontakty i zakres współdziałania z podmiotami zagranicznymi',
    '230 Zaopatrzenie w sprzęt i materiały biurowe', '1503 Delegacje służbowe',
    '051 Skargi i wnioski załatwiane bezpośrednio', '021 Zbiory aktów normatywnych własnej jednostki (zarządzenia, regulaminy, statuty)',
    '021 Zbiory aktów normatywnych własnej jednostki (zarządzenia, regulaminy, statuty)', '021 Zbiory aktów normatywnych własnej jednostki (zarządzenia, regulaminy, statuty)',
    '0160 Ewidencja dokumentacji przechowywanej w składnicy akt', '0142 Ochrona danych osobowych', null, null
];
const question2Answers = [
    0, 3, 0, 0, 0, 0, 4, 0, 4, 1, 3, 0, 3, 2, 0, 0, 0, 0, 0, 4, 0, 0
]
const question3Answers = [
    0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2
];

let currentDocument = 0;

const start = () => {
    views[0].style.zIndex = '-1';
    views[1].style.zIndex = '5';

    menu(0);
}

const menu = (n) => {
    currentDocument = n;

    checkAnswerBtn.style.visibility = 'visible';
    nextDocumentBtn.style.visibility = 'hidden';

    firstQuestion.style.borderWidth = '1px';
    secondQuestion.style.borderWidth = '1px';
    thirdQuestion.style.borderWidth = '1px';

    firstQuestion.style.borderColor = '#000';
    secondQuestion.style.borderColor = '#000';
    thirdQuestion.style.borderColor = '#000';

    feedback.style.visibility = 'hidden';
    feedback.style.height = '0';
    feedback.style.padding = '0';
    feedback.style.marginTop = '0';
    feedback.style.marginBottom = '0';

    if(question1Answers[n]) {
       firstQuizItem.style.display = 'block';
    }
    else {
        firstQuizItem.style.display = 'none';
    }

    menuButtons.forEach((item, index) => {
        if(index === n) {
            item.style.background = '#0a73fe';
            item.style.color = '#fff';
        }
        else {
            item.style.background = 'transparent';
            item.style.color = '#000';
        }
    });

    documents.forEach((item, index) => {
        if(index === n) {
            item.style.visibility = 'visible';
        }
        else {
            item.style.visibility = 'hidden';
        }
    })
}

const nextDocument = () => {
    if(currentDocument !== 21) {
        menu(currentDocument + 1);
    }
    else {
        menu(0);
    }
}

const checkAnswer = () => {
    const answer1 = firstQuestion.value;
    const answer2 = secondQuestion.value;
    const answer3 = thirdQuestion.value;

    let points = 0;

    if(question1Answers[currentDocument]) {
        if(answer1 === question1Answers[currentDocument]) {
            firstQuestion.style.borderColor = green;
            points += 1;
        }
        else {
            firstQuestion.style.borderColor = red;
        }

        feedback.style.marginTop = '-30px';
    }
    else {
        points += 1;

        feedback.style.marginTop = '-90px';
        feedback.style.marginBottom = '-30px';
    }

    if(parseInt(answer2) === question2Answers[currentDocument]) {
        secondQuestion.style.borderColor = green;
        points += 1;
    }
    else {
        secondQuestion.style.borderColor = red;
    }

    if(parseInt(answer3) === question3Answers[currentDocument]) {
        thirdQuestion.style.borderColor = green;
        points += 1;
    }
    else {
        thirdQuestion.style.borderColor = red;
    }

    firstQuestion.style.borderWidth = '2px';
    secondQuestion.style.borderWidth = '2px';
    thirdQuestion.style.borderWidth = '2px';

    if(points === 0) {
        feedback.textContent = 'To nie jest poprawna odpowiedź.';
    }
    else if(points < 3) {
        feedback.textContent = 'Twoja odpowiedź jest częściowo poprawna';
    }
    else {
        feedback.textContent = 'Brawo! To jest poprawna odpowiedź.';
    }

    feedback.style.visibility = 'visible';
    feedback.style.height = 'auto';
    feedback.style.padding = '15px 0';

    checkAnswerBtn.style.visibility = 'hidden';
    nextDocumentBtn.style.visibility = 'visible';
}

const closeModal = () => {
    modal.style.zIndex = '-1';
}

const openModal = () => {
    modal.style.zIndex = '100';
}
