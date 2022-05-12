const view1 = document.querySelector('.view--1');
const viewStart = document.querySelector('.view--start');
const help = document.querySelector('.help');

const start = () => {
   viewStart.style.visibility = 'hidden';
   view1.style.visibility = 'visible';
}

const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
}

const openHelp = () => {
    help.style.opacity = '1';
    help.style.visibility = 'visible';
}

const clearValues = () => {

}

const closeHelp = () => {
    help.style.opacity = '0';
    help.style.visibility = 'hidden';
}

let wind, temp, baro, rain, speed;

const baroEl = document.querySelector('.values--baro');
const tempEl = document.querySelector('.values--temp');
const awsEl = document.querySelector('.values--aws');
const clouds = document.querySelector('.clouds');

document.getElementById('wiatr').addEventListener('input', (e) => {
    wind = e.target.value;

    clouds.style.animationDuration = (11 - wind) + 's';
});

document.getElementById('opady').addEventListener('input', (e) => {
    rain = e.target.value;

    const tempInput = document.getElementById('temperatura');
    if(rain > 8) {
        tempInput.value = -2;
        temp = -2;
        clouds.style.width = '40%';
    }
    else if(rain < 2) {
        tempInput.value = 25;
        temp = 25;
        clouds.style.width = '0';
    }
    else {
        clouds.style.width = '30%';
    }
});

document.addEventListener('mousemove', (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
    console.log('---');
})
