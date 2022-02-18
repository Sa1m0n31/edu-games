const view1 = document.querySelector('.view--1');
const view2 = document.querySelector('.view--2');
const viewStart = document.querySelector('.view--start');

const start = () => {
   viewStart.style.visibility = 'hidden';
   view1.style.visibility = 'visible';
}

let wind, temp, baro, rain, speed;

const baroEl = document.querySelector('.values--baro');
const tempEl = document.querySelector('.values--temp');
const awsEl = document.querySelector('.values--aws');
const clouds = document.querySelector('.clouds');

document.getElementById('predkosc').addEventListener('input', (e) => {
     speed = e.target.value;

     awsEl.textContent = speed;
});

document.getElementById('wiatr').addEventListener('input', (e) => {
    wind = e.target.value;

    clouds.style.animationDuration = (11 - wind) + 's';
});

document.getElementById('temperatura').addEventListener('input', (e) => {
    temp = e.target.value;
    tempEl.textContent = temp;
    const rainInput = document.getElementById('opady');
    if(temp < 0) {
        rain = 8;
        rainInput.value = 8;
        clouds.style.width = '40%';
    }
    else if(temp > 25) {
        rain = 1;
        rainInput.value = 1;
        clouds.style.width = '0';
    }
    else if(temp > 20) {
        rain = 3;
        rainInput.value = 3;
        clouds.style.width = '18%';
    }
    else if(temp > 0) {
        rain = 5;
        rainInput.value = 5;
        clouds.style.width = '30%';
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

let myChart;
const home = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'hidden';
    document.querySelector(`.view--start`).style.visibility = 'visible';
    document.querySelector(`.chart`).style.zIndex = '-1';
    myChart.destroy();
}

const secondView = () => {
    document.querySelector(`.view--1`).style.visibility = 'hidden';
    document.querySelector(`.view--2`).style.visibility = 'visible';
    document.querySelector(`.chart`).style.zIndex = '90';
    document.querySelector(`.view--start`).style.visibility = 'hidden';
}

const chooseCourse = () => {
    const chooseCourseModal = document.querySelector('.chooseCourse__modal');

    chooseCourseModal.style.zIndex = '100';
    chooseCourseModal.style.opacity = '1';
}

const courses = [
    45, 90, 135, 180, 225, 270, 315, 360
];
let selectedCourses = [
    false, false, false, false, false, false, false, false
];
const kkPlaceholders = Array.from(document.querySelectorAll('.courses>div>p:first-of-type'));
const kzPlaceholders = Array.from(document.querySelectorAll('.courses>div>p:last-of-type'));
const kk2Placeholders = Array.from(document.querySelectorAll('.courses2>div:nth-of-type(2)>p'));
const kmPlaceholders = Array.from(document.querySelectorAll('.courses2>div:first-of-type>p'));
const deltaPlaceholders = Array.from(document.querySelectorAll('.courses2>div:last-of-type>p'));

const selectCourse = (n) => {
    const selectedCourse = document.querySelector(`.chooseCourse__modal__btn:nth-of-type(${n})`);
    if(!selectedCourses[n-1]) {
        selectedCourse.style.background = '#2E3192';
        selectedCourse.style.color = '#fff';
        selectedCourses[n-1] = true;
    }
    else {
        selectedCourse.style.background = 'transparent';
        selectedCourse.style.color = '#000';
        selectedCourses[n-1] = false;
    }
}

let coursesFlag = false;

const chooseSelectedCourses = () => {
    const numOfCourses = selectedCourses.filter((item) => {
        return item;
    }).length;
    if(numOfCourses === 6) {
        coursesFlag = true;
        const coursesModal = document.querySelector('.chooseCourse__modal');
        coursesModal.style.opacity = '0';
        coursesModal.style.zIndex = '-1';
        const selectedCoursesNumbers = courses.filter((item, index) => {
            return selectedCourses[index];
        });
        kkPlaceholders.forEach((item, index) => {
            item.textContent = selectedCoursesNumbers[index];
        });
        kzPlaceholders.forEach((item, index) => {
            item.textContent = selectedCoursesNumbers[index];
        });
        kk2Placeholders.forEach((item, index) => {
            item.textContent = selectedCoursesNumbers[index];
        });
        kmPlaceholders.forEach((item, index) => {
            item.textContent = (selectedCoursesNumbers[index] + 3);
        });
        deltaPlaceholders.forEach((item, index) => {
            item.textContent = 3;
        });
    }
}

const chart = () => {
    if(coursesFlag) {
        document.querySelector('.chart>canvas').style.visibility = 'visible';
        document.querySelector('.chart>canvas').style.zIndex = '90';

        data = {
            labels: courses.filter((item, index) => {
                return selectedCourses[index];
            }),
            datasets: [{
                label: 'Wykres dewiacji',
                backgroundColor: '#fff',
                borderColor: '#463DB7',
                color: '#fff',
                data: [3, 3, 3, 3, 3, 3]
            }]
        };

        myChart = new Chart(
            document.getElementById('chart'),
            {
                type: 'line',
                data: data,
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            }
        );
    }
}
