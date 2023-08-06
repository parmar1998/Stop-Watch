// Array to store the timer's time units.
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// Reference to the element displaying the timer value
let timeRef = document.querySelector(".timer-display");
// Variable to store the interval ID for the timer.
let int = null;
// Boolean variable to track if the timer is paused
let isPaused = false; // Track if the timer is paused
document.getElementById("start-timer").addEventListener("click", () => {
    
    document.getElementById("startSound").play();
    if (int !== null) {
        clearInterval(int);
    }
    isPaused = false; // Reset pause status
    int = setInterval(displayTimer, 10);
    resumeAnimation(); // Resume animation
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
    isPaused = true; // Set pause status
    pauseAnimation(); // Pause animation
});

document.getElementById("reset-timer").addEventListener("click", () => {
    document.getElementById("resetSound").play();
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
    isPaused = false; // Reset pause status
    stopAnimation(); // Stop animation
});


function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
                ? "0" + milliseconds : milliseconds;
    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}
// Function to resume the background animation.
function resumeAnimation() {
    document.querySelectorAll(".wave").forEach((wave) => {
        wave.style.animationPlayState = "running";
    });
}
// Function to pause the background animation.
function pauseAnimation() {
    document.querySelectorAll(".wave").forEach((wave) => {
        wave.style.animationPlayState = "paused";
    });
}
// Function to stop and reset the background animation.
function stopAnimation() {
    document.querySelectorAll(".wave").forEach((wave) => {
        wave.style.animationPlayState = "paused";
        wave.style.transform = "translateX(0) translateZ(0) scaleY(1)";
    });
}