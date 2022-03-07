const viewStart = document.querySelector('.view--start');
const viewDetails = document.querySelector('.view--details');
const images = document.querySelectorAll('.img');

const goTo = (n) => {
    viewDetails.style.opacity = '1';
    viewDetails.style.zIndex = '1';

    viewStart.style.opacity = '0';
    viewStart.style.zIndex = '-1';

    images.forEach((item, index) => {
        if(index !== n) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'block';
        }
    });
}

const backToStart = () => {
    viewDetails.style.opacity = '0';
    viewDetails.style.zIndex = '-1';

    viewStart.style.opacity = '1';
    viewStart.style.zIndex = '1';
}
