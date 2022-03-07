const game = new Siema({
    selector: ".carousel",
    perPage: 1,
    draggable: false
});

const next = () => {
    game.next();
}

const prev = () => {
    game.prev();
}

const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const cloud4 = document.getElementById("cloud4");
const cloud5 = document.getElementById("cloud5");
const cloud6 = document.getElementById("cloud6");
const cloud7 = document.getElementById("cloud7");
const cloud8 = document.getElementById("cloud8");
const cloud9 = document.getElementById("cloud9");
const cloud10 = document.getElementById("cloud10");
const cloud11 = document.getElementById("cloud11");
const cloud12 = document.getElementById("cloud12");
const cloud13 = document.getElementById("cloud13");
const cloud14 = document.getElementById("cloud14");
const cloud15 = document.getElementById("cloud15");
const cloud16 = document.getElementById("cloud16");
const cloud17 = document.getElementById("cloud17");
const cloud18 = document.getElementById("cloud18");
const cloud19 = document.getElementById("cloud19");

const window1 = document.getElementById("window1");
const window2 = document.getElementById("window2");
const window3 = document.getElementById("window3");
const window4 = document.getElementById("window4");
const window5 = document.getElementById("window5");
const window6 = document.getElementById("window6");
const window7 = document.getElementById("window7");
const window8 = document.getElementById("window8");
const window9 = document.getElementById("window9");
const window10 = document.getElementById("window10");

const windows = [window1, window2, window3, window4, window5, window6, window7, window8, window9, window10];

const show = (el) => {
    el.style.opacity = "1";
}

const hide = (el) => {
    el.style.opacity = "0";
}

const toggleWindow = (n) => {
    if(window.getComputedStyle(windows[n]).getPropertyValue("opacity") === "1") {
        windows[n].style.opacity = "0";
    }
    else {
        windows[n].style.opacity = "1";
    }
}

let currentLvl = 0;
const nextLvl = () => {
    currentLvl++;
    switch(currentLvl) {
        case 1:
            next();
            break;
        case 2:
            show(cloud1);
            break;
        case 3:
            next();
            break;
        case 4:
            show(cloud2);
            break;
        case 5:
            hide(cloud2);
            show(cloud3);
            break;
        case 6:
            next();
            break;
        case 7:
            show(cloud4);
            break;
        case 8:
            hide(cloud4);
            show(cloud5);
            break;
        case 9:
            next();
            break;
        case 10:
            show(cloud6);
            break;
        case 11:
            hide(cloud6);
            show(cloud7);
            break;
        case 12:
            next();
            break;
        case 13:
            show(cloud8);
            break;
        case 14:
            hide(cloud8);
            show(cloud9);
            break;
        case 15:
            hide(cloud9);
            show(cloud10);
            break;
        case 16:
            next();
            break;
        case 17:
            show(cloud11);
            break;
        case 18:
            hide(cloud11);
            show(cloud12);
            break;
        case 19:
            hide(cloud12);
            show(cloud13);
            break;
        case 20:
            next();
            break;
        case 21:
            show(cloud14);
            break;
        case 22:
            hide(cloud14);
            show(cloud15);
            break;
        case 23:
            next();
            break;
        case 24:
            show(cloud16);
            break;
        case 25:
            next();
            break;
        case 26:
            show(cloud17);
            break;
        case 27:
            hide(cloud17);
            show(cloud18);
            break;
        case 28:
            next();
            break;
        case 29:
            show(cloud19);
            break;
        default:
            break;
    }
}

document.querySelectorAll(".window").forEach((item) => {
    item.addEventListener("click", () => {
        if(window.getComputedStyle(item).getPropertyValue("opacity") === "1") {
            item.style.opacity = "0";
        }
        else {
            nextLvl();
        }
    });
})
