const sounds = [
    'c.mp3', 'd.mp3', 'e.mp3', 'f.mp3', 'g.mp3', 'a.mp3', 'h.mp3',
    'c1.mp3', 'd1.mp3', 'e1.mp3', 'f1.mp3', 'g1.mp3', 'a1.mp3', 'h1.mp3',
    'c2.mp3',
    'cis.mp3', 'dis.mp3', 'fis.mp3', 'gis.mp3', 'ais.mp3',
    'cis1.mp3', 'dis1.mp3', 'fis1.mp3', 'gis1.mp3', 'ais1.mp3'
]

const keys = document.querySelectorAll(".key");

const playSound = (n) => {
    let classToAdd = "";
    if(n < 15) {
        classToAdd = "key--clicked";
    }
    else {
        classToAdd = "smallKey--clicked";
    }

    const audio = new Audio(`./sounds/${sounds[n]}`);
    audio.play();

    keys[n].classList.add(classToAdd);
    setTimeout(() => {
        keys[n].classList.remove(classToAdd);
    }, 600);
}

document.addEventListener("keyup", (event) => {
   switch(event.key) {
       case '1':
           playSound(0);
           break;
       case '2':
           playSound(1);
           break;
       case '3':
           playSound(2);
           break;
       case '4':
           playSound(3);
           break;
       case '5':
           playSound(4);
           break;
       case '6':
           playSound(5);
           break;
       case '7':
           playSound(6);
           break;
       case '8':
           playSound(7);
           break;
       case '9':
           playSound(8);
           break;
       case 'q':
           playSound(9);
           break;
       case 'w':
           playSound(10);
           break;
       case 'e':
           playSound(11);
           break;
       case 'r':
           playSound(12);
           break;
       case 't':
           playSound(13);
           break;
       case 'y':
           playSound(14);
           break;
       case 'a':
           playSound(15);
           break;
       case 's':
           playSound(16);
           break;
       case 'd':
           playSound(17);
           break;
       case 'f':
           playSound(18);
           break;
       case 'g':
           playSound(19);
           break;
       case 'h':
           playSound(20);
           break;
       case 'j':
           playSound(21);
           break;
       case 'k':
           playSound(22);
           break;
       case 'l':
           playSound(23);
           break;
       case 'm':
           playSound(24);
           break;
       default:
           break;
   }
});
