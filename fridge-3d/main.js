const allVideos = Array.from(document.querySelectorAll('.video'));
const startVideo = document.querySelector('.video--start');
const backBtn = document.querySelector('.backBtn');

const labelsGroup1 = Array.from(document.querySelectorAll('.label--g1'));
const labelsGroup2 = Array.from(document.querySelectorAll('.label--g2'));
const labelsGroup3 = Array.from(document.querySelectorAll('.label--g3'));
const labelsGroup4 = Array.from(document.querySelectorAll('.label--g4'));
const labelsGroup5 = Array.from(document.querySelectorAll('.label--g5'));
const labelsGroup6 = Array.from(document.querySelectorAll('.label--g6'));

const allLabels = [
    labelsGroup1, labelsGroup2, labelsGroup3, labelsGroup4, labelsGroup5, labelsGroup6
];

allVideos.forEach((item) => {
    item.addEventListener('ended', function(){
        if(parseInt(window.getComputedStyle(item).getPropertyValue('opacity')) !== 1) {
            item.currentTime = 0;
        }
    });
});

startVideo.addEventListener('ended', function() {
    showTopLevelButtons();
});

const goToShelf = (n) => {
    hideTopLevelButtons();

    allVideos[n].style.opacity = '1';
    allVideos[n].style.width = '100%';
    allVideos[n].style.height = 'auto';
    allVideos[n].style.display = 'block';

    allVideos[n].play();

    setTimeout(() => {
        backBtn.style.opacity = '1';
        backBtn.style.visibility = 'visible';
        allLabels[n].forEach((item) => {
            item.style.opacity = '1';
        });
    }, 3000);
}

const showTopLevelButtons = () => {
    Array.from(document.querySelectorAll('.btn')).forEach((item) => {
        item.style.opacity = '1';
    });
}

const hideTopLevelButtons = () => {
    Array.from(document.querySelectorAll('.btn')).forEach((item) => {
        item.style.opacity = '0';
    });
}

const backToStart = () => {
    backBtn.style.opacity = '0';
    backBtn.style.visibility = 'hidden';

    allLabels.forEach((item) => {
        item.forEach((item) => {
            item.style.opacity = '0';
        });
    });

    setTimeout(() => {
        allVideos.forEach((item) => {
            item.style.opacity = '0';
            item.style.width = '0';
            item.style.height = '0';
            item.style.display = 'none';
        });
        showTopLevelButtons();
        startVideo.style.opacity = '1';
    }, 300);
}
