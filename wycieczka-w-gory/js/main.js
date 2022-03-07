/* Initialize Siema.js carousel */
const carousel = new Siema({
    selector: ".siemaCarousel",
    perPage: 1,
    draggable: false
});

let slide = 0;
let tasksCompleted = 0;

const start = document.querySelector(".start");
const contentSection = document.querySelector(".content__text");
const contentHeader = document.querySelector(".content__text__header");
const contentText = document.querySelector(".content__text__text");
const answerWrapper = document.querySelector(".answerWrapper");
const placesWrapper = document.querySelector(".placesWrapper");
const placesDropzonesWrapper = document.querySelector(".placesDropzonesWrapper");
const mountainsWrapper = document.querySelector(".mountainsWrapper");
const peaksWrapper = document.querySelector(".peaksWrapper");
const itemsWrapper = document.querySelector(".itemsWrapper");
const additionalHints = document.querySelector(".additionalHints");

const btnNext = document.querySelector(".btn--next");

let currentDraggableX = 0;
let currentDraggableY = 0;

/* Add draggable to elements */
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

function dropListener(event) {
    const target = event.target;
    console.log("drop");

    target.style.transform = 'translate(' + currentDraggableX + 'px, ' + currentDraggableY + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', currentDraggableX);
    target.setAttribute('data-y', currentDraggableY);
}

function dragStartListener(event) {
    console.log("start");
    const target = event.target;
    currentDraggableX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    currentDraggableY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact(".draggable").draggable({
    // enable inertial throwing
    inertia: true,
    // enable autoScroll
    autoScroll: true,

    listeners: {
        // call this function on every dragmove event
        start: dragStartListener,
        move: dragMoveListener,
        end: dropListener
    }
});

interact(".dropzone").dropzone({
    accept: ".equipment-ok",
    overlap: 0.75,
    ondragenter: function(event) {
        event.relatedTarget.style.display = "none";
        event.relatedTarget.classList.remove("equipment-ok");

        /* Check if all equipment packed */
        if(!document.querySelectorAll(".equipment-ok")?.length) {
            setTimeout(() => {
                tasksCompleted++;
                changeSection(true);
            }, 500);
        }
    }
});

const checkIfLastPlaceDropped = () => {
    if(document.querySelectorAll(".place-dropped").length === 4) {
        setTimeout(() => {
            tasksCompleted++;
            changeSection(true);
        }, 500);
    }
}

const checkIfLastMountainsDropped = () => {
    if(document.querySelectorAll(".place-dropped-mountain").length === 3) {
        setTimeout(() => {
            tasksCompleted++;
            changeSection(true);
        }, 500);
    }
}

const checkIfLastPeakDropped = () => {
    if(document.querySelectorAll(".place-dropped-peak").length === 5) {
        setTimeout(() => {
            tasksCompleted++;
            changeSection(true);
        }, 500);
    }
}

const checkIfLastItemDropped = () => {
    if(document.querySelectorAll(".place-dropped-item").length === 5) {
        setTimeout(() => {
            tasksCompleted++;
            changeSection(true);
        }, 500);
    }
}

const ex2Answers = document.querySelectorAll(".answer");
const ex2Feedback = document.querySelector(".answerFeedback");

const wrongAnswer = () => {
    ex2Answers.forEach((item) => {
        item.style.display = "none";
    });
    ex2Feedback.style.display = "block";

    setTimeout(() => {
        ex2Feedback.style.display = "none";
        ex2Answers.forEach((item) => {
            item.style.display = "block";
        })
    }, 3000);
}

const checkAnswer = () => {
    if(tasksCompleted === 1) tasksCompleted++;
    changeSection(true);
}

/* Places dropzoness */
interact("#dropzone-jezioro").dropzone({
    accept: "#jezioro",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPlaceDropped();
    }
});
interact("#dropzone-gory").dropzone({
    accept: "#gory",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPlaceDropped();
    }
});
interact("#dropzone-las").dropzone({
    accept: "#las",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPlaceDropped();
    }
});
interact("#dropzone-morze").dropzone({
    accept: "#morze",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPlaceDropped();
    }
});

/* Mountains dropzones */
interact("#sudety-dropzone").dropzone({
    accept: "#sudety",
    overlap: 0.1,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-mountain");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastMountainsDropped();
    }
});
interact("#karpaty-dropzone").dropzone({
    accept: "#karpaty",
    overlap: 0.1,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-mountain");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastMountainsDropped();
    }
});
interact("#gory-swietokrzyskie-dropzone").dropzone({
    accept: "#gory-swietokrzyskie",
    overlap: 0.1,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-mountain");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastMountainsDropped();
    }
});

/* Five peaks dropzones */
interact("#number-1-dropzone").dropzone({
    accept: "#number-1",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-peak");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPeakDropped();
    }
});
interact("#number-2-dropzone").dropzone({
    accept: "#number-2",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-peak");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPeakDropped();
    }
});
interact("#number-3-dropzone").dropzone({
    accept: "#number-3",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-peak");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPeakDropped();
    }
});
interact("#number-4-dropzone").dropzone({
    accept: "#number-4",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-peak");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPeakDropped();
    }
});
interact("#number-5-dropzone").dropzone({
    accept: "#number-5",
    overlap: 0.75,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-peak");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastPeakDropped();
    }
});

/* Five items dropzones */
interact("#item-dropzone-sniezka").dropzone({
    accept: "#sniezka",
    overlap: 0.2,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-item");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastItemDropped();
    }
});
interact("#item-dropzone-kamien").dropzone({
    accept: "#kamien",
    overlap: 0.2,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-item");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastItemDropped();
    }
});
interact("#item-dropzone-chmurka").dropzone({
    accept: "#chmurki",
    overlap: 0.2,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-item");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastItemDropped();
    }
});
interact("#item-dropzone-kwiatki").dropzone({
    accept: "#kwiatki",
    overlap: 0.2,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-item");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastItemDropped();
    }
});
interact("#item-dropzone-plecak").dropzone({
    accept: "#plecak",
    overlap: 0.2,
    ondragenter: function(event) {
        event.target.appendChild(event.relatedTarget);
        event.relatedTarget.classList.add("place-dropped-item");
        event.relatedTarget.classList.remove("draggable");

        checkIfLastItemDropped();
    }
});

const changeSection = (plus) => {
    if(plus) slide++;
    else slide--;

    if(slide < 0) slide = 0;

    switch(slide) {
        case 0:
            contentHeader.textContent = "";
            contentText.textContent = "";
            contentSection.style.opacity = "0";
            contentSection.style.transform = "translateY(50px)";
            carousel.goTo(0);
            break;
        case 1:
            start.style.display = "none";
            contentSection.style.top = "50%";
            contentSection.style.right = "unset";
            contentSection.style.transform = "translate(-50%, -50%)";
            contentSection.style.left = "50%";
            contentHeader.textContent = "";
            contentSection.style.maxWidth = "400px";
            contentText.textContent = "Wybierasz się na wycieczkę w góry. Aby dotrzeć na najwyższy szczyt, musisz po drodze\n" +
                "wykonać różne zadania i udzielić odpowiedzi na pytania. Bądź uważny i zachowaj\n" +
                "ostrożność! Wykorzystaj wcześniej zdobytą wiedzę.";
            contentSection.style.opacity = "1";
            btnNext.style.display = "block";
            carousel.goTo(0);
            break;
        case 2:
            contentSection.style.opacity = "1";
            contentHeader.textContent = "Zadanie 1.";
            contentText.textContent = "Co musisz zabrać na wyprawę w góry? Zapakuj do plecaka wyłącznie niezbędne\n" +
                "przedmioty.";
            contentSection.style.left = "69%";
            contentSection.style.right = "unset";
            contentSection.style.top = "20%";
            if(tasksCompleted < 1) btnNext.style.display = "none";
            carousel.goTo(1);
            break;
        case 3:
            contentSection.style.opacity = "0";
            btnNext.style.display = "block";
            answerWrapper.style.display = "none";
            carousel.goTo(2);
            break;
        case 4:
            contentHeader.textContent = "Zadanie 2.";
            contentText.textContent = "W czasie wędrówki spotkał cię deszcz i burza. Niedaleko znajduje się schronisko górskie. Co zrobisz?";
            contentSection.style.opacity = "1";
            contentSection.style.right = "unset";
            contentSection.style.left = "50%";
            contentSection.style.top = "50%";
            contentSection.style.maxWidth = "400px";
            if(tasksCompleted < 2) btnNext.style.display = "none";
            carousel.goTo(3);
            answerWrapper.style.display = "block";
            break;
        case 5:
            contentSection.style.right = "40%";
            contentSection.style.top = "30%";
            contentSection.style.display = "none";
            answerWrapper.style.display = "none";
            btnNext.style.display = "block";
            carousel.goTo(4);
            break;
        case 6:
            contentHeader.textContent = "Zadanie 3.";
            contentSection.style.display = "block";
            contentText.textContent = "Aby ruszyć w drogę na kolejny szczyt, uzupełnij rysunek według instrukcji";
            contentSection.style.opacity = "1";
            contentSection.style.top = "42%";
            contentSection.style.right = "-4%";
            contentSection.style.left = "unset";
            itemsWrapper.style.display = "flex";
            additionalHints.style.display = "block";
            if(tasksCompleted < 3) btnNext.style.display = "none";
            carousel.goTo(5);
            break;
        case 7:
            contentSection.style.opacity = "0";
            contentSection.style.opacity = "1";
            contentSection.style.top = "50%";
            contentSection.style.right = "0";
            contentHeader.textContent = "Świetna robota! Kolejny szczyt jest coraz bliżej.";
            contentText.textContent = "";
            btnNext.style.display = "block";
            itemsWrapper.style.display = "none";
            additionalHints.style.display = "none";
            placesWrapper.style.display = "none";
            carousel.goTo(5);
            break;
        case 8:
            contentSection.style.maxWidth = "600px";
            contentSection.style.top = "20%";
            contentSection.style.left = "39%";
            contentSection.style.opacity = "1";
            contentHeader.textContent = "Zadanie 4.";
            contentText.textContent = "W chwili odpoczynku zastanawiasz się, w jakich miejscach można spędzić wakacje. Dopasuj\n" +
                "podpisy do wakacyjnych miejsc.";
            placesWrapper.style.display = "flex";
            placesDropzonesWrapper.style.display = "flex";
            if(tasksCompleted < 4) btnNext.style.display = "none";
            carousel.goTo(6);
            break;
        case 9:
            contentSection.style.left = "50%";
            contentSection.style.top = "50%";
            contentSection.style.transform = "translate(-50%, -50%)";
            contentSection.style.maxWidth = "300px";
            contentHeader.textContent = "";
            contentText.textContent = "Udało ci się! Dotarłeś na Śnieżkę, skąd rozciągają się piękne widoki!\n" +
                "Znajdujesz się na wysokości 1602 m n.p.m.";
            placesWrapper.style.display = "none";
            placesDropzonesWrapper.style.display = "none";
            mountainsWrapper.style.display = "none";
            btnNext.style.display = "block";
            carousel.goTo(7);
            break;
        case 10:
            contentSection.style.maxWidth = "400px";
            contentSection.style.top = "45%";
            contentSection.style.left = "27%";
            contentHeader.textContent = "Zadanie 5.";
            contentText.textContent = "Na mapie Polski widzisz zaznaczone trzy kropki. Dopasuj w odpowiednie miejsca nazwy polskich gór.";
            mountainsWrapper.style.display = "flex";
            if(tasksCompleted < 5) btnNext.style.display = "none";
            carousel.goTo(8);
            break;
        case 11:
            document.querySelectorAll(".answer--mountains").forEach((item) => {
                item.style.display = "none";
            });
            mountainsWrapper.style.display = "none";
            contentSection.style.top = "50%";
            contentSection.style.left = "50%";
            contentSection.style.transform = "translate(-50%, -50%)";
            contentSection.style.maxWidth = "500px";
            contentSection.style.opacity = "1";
            contentHeader.textContent = "";
            btnNext.style.display = "block";
            contentText.textContent = "Nieprawdopodobne! Dzięki szybko wykonanej pracy możesz iść dalej.";
            peaksWrapper.style.display = "none";
            carousel.goTo(9);
            break;
        case 12:
            contentSection.style.left = "30%";
            contentSection.style.maxWidth = "500px";
            contentHeader.textContent = "Zadanie 6.";
            contentText.textContent = "Uporządkuj nazwy polskich szczytów górskich od najniższego do najwyższego. Najniższy oznacz numerem 1.";
            contentSection.style.opacity = "1";
            contentSection.style.top = "27%";
            contentSection.style.left = "50%";
            peaksWrapper.style.display = "block";
            if(tasksCompleted < 6) btnNext.style.display = "none";
            carousel.goTo(10);
            break;
        case 13:
            contentSection.style.opacity = "0";
            peaksWrapper.style.display = "none";
            btnNext.style.display = "block";
            carousel.goTo(11);
            break;
        case 14:
            carousel.goTo(12);
            break;
        default:
            break;
    }
}

const startAgain = () => {
    window.location.reload(true);
}
