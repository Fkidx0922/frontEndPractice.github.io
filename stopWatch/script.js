const click = document.getElementById('startStop');
const watchTime = document.getElementById('stopwatch');
const reset = document.getElementById('reset');
let toggle = false;
let count = 0;
let interval;

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateCount() {
    count += 1;
    watchTime.textContent = formatTime(count);
}

click.addEventListener('click', () => {
    if (toggle) {
        click.textContent = "Start";
        clearInterval(interval);
        interval = null; // 重置 interval 變量
    } else {
        click.textContent = "Stop";
        interval = setInterval(updateCount, 1000);
    }
    toggle = !toggle;
});

reset.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null; // 重置 interval 變量
    }
    count = 0;
    watchTime.textContent = '00:00:00';
    click.textContent = "Start";
    toggle = false; // 確保 toggle 被重置
});
