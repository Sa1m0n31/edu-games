const images = Array.from(document.querySelectorAll('.img'));

let currentColor = 0;

const changeColor = (n) => {
    if(n !== currentColor) {
        images[currentColor].style.opacity = '0';
        images[n].style.opacity = '1';
        currentColor = n;
    }
}
