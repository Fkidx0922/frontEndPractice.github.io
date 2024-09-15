// Write JavaScript code here
let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let startValue = 0;
let endValue = 90;
let speed = 100;

function updateProgress() {
    startValue++;

    progressValue.textContent = `${startValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
   
    if (startValue < endValue) {
        // setTimeout(function, delay)
        setTimeout(updateProgress, speed);
    }
}

updateProgress();