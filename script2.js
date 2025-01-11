// script2.js

const bus = document.querySelector('.bus');
const busStops = document.querySelectorAll('.bus-stop');
const passengers = document.querySelector('.passengers');
const scoreDisplay = document.getElementById('score');
const door = document.querySelector('.bus .door'); // Külön ajtó

let score = 0;
let busX = 10;
let busSpeed = 5;
let doorOpen = false;
let atBusStop = null;

// Mozgatás WSAD billentyűkkel
document.addEventListener('keydown', (e) => {
    if (e.key === 'd') {
        busX += busSpeed;
        bus.style.left = `${busX}px`;
        checkBusStop();
    }
    if (e.key === 'a' && busX > 0) {
        busX -= busSpeed;
        bus.style.left = `${busX}px`;
        checkBusStop();
    }
    if (e.key === 'e') {
        toggleDoor();
    }
});

// Ellenőrzés: Busz elérte valamelyik megállót
function checkBusStop() {
    atBusStop = null;
    busStops.forEach((stop) => {
        const busRect = bus.getBoundingClientRect();
        const stopRect = stop.getBoundingClientRect();

        if (
            busRect.right > stopRect.left &&
            busRect.left < stopRect.right &&
            busRect.bottom === stopRect.bottom
        ) {
            atBusStop = stop;
            passengers.style.display = 'flex';
        }
    });

    if (!atBusStop) {
        passengers.style.display = 'none';
    }
}

// Külön ajtó nyitása/zárása
function toggleDoor() {
    if (atBusStop) {
        doorOpen = !doorOpen;
        if (doorOpen) {
            door.classList.add('open'); // Zöld szín a külön ajtón
            pickUpPassengers();
        } else {
            door.classList.remove('open'); // Eredeti piros szín
        }
    }
}

// Utasok felvétele
function pickUpPassengers() {
    if (atBusStop) {
        score += 5;
        scoreDisplay.textContent = score;
        passengers.style.display = 'none';
        passengers.innerHTML = ''; // Utasok eltűnnek
        respawnPassengers(); // Új utasok megjelenítése
    }
}

// Új utasok generálása minden megállóban
function respawnPassengers() {
    busStops.forEach((stop) => {
        const newPassengers = Math.floor(Math.random() * 3) + 1; // 1-3 utas
        stop.innerHTML = '';
        for (let i = 0; i < newPassengers; i++) {
            const passenger = document.createElement('span');
            passenger.textContent = '🚶';
            stop.appendChild(passenger);
        }
    });
}

// Induláskor utasok generálása
respawnPassengers();





