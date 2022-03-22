const steam = document.querySelector('.el--steam');
const snow = document.querySelector('.el--snow');
const rain = document.querySelector('.el--rain');
const river = document.querySelector('.el--river');

const sounds = [
    './sounds/staly.mp3', './sounds/ciekly.mp3', './sounds/gazowy.mp3', './sounds/reszta.mp3'
]

const audio0 = new Audio(sounds[0]);
const audio1 = new Audio(sounds[1]);
const audio2 = new Audio(sounds[2]);
const audio3 = new Audio(sounds[3]);

const audios = [audio0, audio1, audio2, audio3];

const resetAllAnimations = () => {
    audios.forEach((item) => {
        item.pause();
        item.currentTime = 0;
    });

    snow.style.visibility = 'hidden';
    river.style.visibility = 'hidden';
    rain.style.visibility = 'hidden';
    steam.style.visibility = 'hidden';

    snow.classList.remove('showAndHideAnimation');
    river.classList.remove('showAndHideAnimation');
    rain.classList.remove('showAndHideAnimation');
    steam.classList.remove('steamAnimation');
}

const start = () => {
    audios.forEach((item) => {
        item.pause();
        item.currentTime = 0;
    });

    audios[3].play();

    snow.style.visibility = 'visible';
    river.style.visibility = 'visible';
    rain.style.visibility = 'visible';
    steam.style.visibility = 'visible';

    snow.classList.add('showAndHideAnimation');
    river.classList.add('showAndHideAnimation');
    rain.classList.add('showAndHideAnimation');
    steam.classList.add('steamAnimation');
}

const state = (n) => {
    resetAllAnimations();
    audios[n].play();

    switch(n) {
        case 0:
            snow.style.visibility = 'visible';
            snow.classList.add('showAndHideAnimation');
            break;
        case 1:
            river.style.visibility = 'visible';
            rain.style.visibility = 'visible';
            river.classList.add('showAndHideAnimation');
            rain.classList.add('showAndHideAnimation');
            break;
        case 2:
            steam.style.visibility = 'visible';
            steam.classList.add('steamAnimation');
            break;
        default:
            break;
    }
}
