const audio = new Audio('./assets/sound.mp3');

let playing = false;
const startIcon = document.querySelector('.start');
const stopIcon = document.querySelector('.stop');

const toggleSound = () => {
    if(playing) {
        audio.pause();
        startIcon.style.visibility = 'visible';
        stopIcon.style.visibility = 'hidden';
    }
    else {
        audio.play();
        startIcon.style.visibility = 'hidden';
        stopIcon.style.visibility = 'visible';
    }
    playing = !playing;
}

audio.onended = () => {
    startIcon.style.visibility = 'visible';
    stopIcon.style.visibility = 'hidden';
    audio.currentTime = 0;
}

let volume = 10;
const input = document.querySelector('.volume');
const changeVolume = () => {
   volume = input.value;
   audio.volume = parseFloat(volume) / 100;
}
