let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    display.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
});

updateDisplay();
