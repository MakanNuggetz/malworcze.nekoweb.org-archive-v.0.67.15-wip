const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date("January 1, 2027 00:00:00").getTime();

const timer = setInterval(() => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "HAPPY NEW YEAR";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}, 1000);
