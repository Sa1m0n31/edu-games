const view1 = document.querySelector('.view--1');
const view2 = document.querySelector('.view--2');
const viewStart = document.querySelector('.view--start');

const start = () => {
   viewStart.style.visibility = 'hidden';
   view1.style.visibility = 'visible';
}

let wind, temp, baro, rain;

const baroEl = document.querySelector('.values--baro');
const tempEl = document.querySelector('.values--temp');
const clouds = document.querySelector('.clouds>.btn__img');

let currentTransition = 1;

document.getElementById('wiatr').addEventListener('input', (e) => {
    wind = e.target.value;

    clouds.style.animationDuration = (50 / wind) + 's';

    // currentTransition = (15 / wind).toFixed(2);
    //
    // const currentMarginLeft = parseFloat(window.getComputedStyle(clouds).getPropertyValue('margin-left').split('p')[0]);
    // if(currentMarginLeft < 150) {
    //     clouds.style.transition = `${currentTransition}s all`;
    //     clouds.style.marginLeft = (currentMarginLeft + wind * 20).toString() + 'px';
    // }
    // else {
    //     clouds.style.transition = '0s all';
    //     clouds.style.marginLeft = '-20%';
    // }
});

document.getElementById('temperatura').addEventListener('input', (e) => {
    temp = e.target.value;
    tempEl.textContent = temp;
    const rainInput = document.getElementById('opady');
    if(temp < 0) {
        rain = 8;
        rainInput.value = 8;
        clouds.style.transform = 'scale(1.4) skew(10deg)';
    }
    else if(temp > 25) {
        rain = 1;
        rainInput.value = 1;
        clouds.style.transform = 'scale(0) skew(10deg)';
    }
    else if(temp > 20) {
        rain = 3;
        rainInput.value = 3;
        clouds.style.transform = 'scale(.4) skew(10deg)';
    }
    else if(temp > 0) {
        rain = 5;
        rainInput.value = 5;
        clouds.style.transform = 'scale(1) skew(10deg)';
    }
});

let baroLvl = 0;
document.getElementById('cisnienie').addEventListener('input', (e) => {
    baro = e.target.value;
    baroEl.textContent = baro;

    const tempInput = document.getElementById('temperatura');
    if(baro > 1020 && baroLvl !== 1) {
        baroLvl = 1;
        temp = Math.min(30, tempInput.value+6);
        tempInput.value = Math.min(30, tempInput.value+6);
    }
    else if(baro < 1000 && baroLvl !== -1) {
        baroLvl = -1;
        console.log(tempInput.value);
        temp = Math.max(-5, tempInput.value-6);
        tempInput.value = Math.max(-5, tempInput.value-6);
    }
    else if(baro >= 1000 && baro <= 1020) {
        baroLvl = 0;
    }
});

document.getElementById('opady').addEventListener('input', (e) => {
    rain = e.target.value;

    const tempInput = document.getElementById('temperatura');
    if(rain > 8) {
        tempInput.value = -2;
        temp = -2;
        clouds.style.transform = 'scale(1.4) skew(10deg)';
    }
    else if(rain < 2) {
        tempInput.value = 25;
        temp = 25;
        clouds.style.transform = 'scale(.2) skew(10deg)';
    }
});

const windAnimation = () => {

}

let myChart;
const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
    myChart.destroy();
}

const secondView = () => {
    home();
    // document.querySelector(`.view--1`).style.visibility = 'hidden';
    // document.querySelector(`.view--2`).style.visibility = 'visible';
    // document.querySelector(`.view--start`).style.visibility = 'hidden';
}

const chooseCourse = () => {
    document.querySelector('.courses').style.opacity = '1';
    document.querySelector('.courses2').style.opacity = '1';
}
