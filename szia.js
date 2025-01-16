const bus = document.getElementById('bus');
const door = document.getElementById('door');

let busPosition = 50; // Busz pozíciója
let busSpeed = 0; // Busz sebessége
let doorOpen = false;

// Gáz, fék, és tolatás vezérlése
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w': // Gáz
            busSpeed = 5;
            break;
        case 's': // Tolatás
            busSpeed = -3;
            break;
        case ' ': // Fékezés
            busSpeed = 0;
            break;
        case 'e': // Ajtó nyitása/zárása
            doorOpen = !doorOpen;
            door.style.transform = doorOpen ? 'rotateY(90deg)' : 'rotateY(0deg)';
            break;
    }
});

// Busz mozgása
function moveBus() {
    busPosition += busSpeed;
    bus.style.left = `${busPosition}px`;
    checkBusStop();
    requestAnimationFrame(moveBus);
}

// Megállóban lévő emberek kezelése
function checkBusStop() {
    const stops = document.querySelectorAll('.bus-stop');
    stops.forEach((stop) => {
        const stopLeft = parseInt(stop.style.left);
        if (Math.abs(busPosition - stopLeft) < 30 && busSpeed === 0 && doorOpen) {
            stop.innerHTML = `${stop.textContent.split(' ')[0]} Megálló (Emberek beszálltak!)`;
            stop.style.backgroundColor = '#ff5722'; // Jelzi a megállást
        } else {
            stop.style.backgroundColor = '#4caf50';
        }
    });
}

// Indítsd el a mozgást
moveBus();


