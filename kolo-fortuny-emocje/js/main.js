const circle = document.querySelector('.circle--circle');

setTimeout(() => {
    circle.style.transition = '3s all ease-in-out';
}, 100);

const startCircle = () => {
    const rotation = Math.floor(Math.random() * 360) + 1;
    const numbersOfRotations = Math.floor(Math.random() * 5) + 3;
    circle.style.transform = `rotate(${rotation + (360 * numbersOfRotations)}deg) scale(.55)`;
}
