const daysElement = document.querySelector('.timer-item--days');
const hoursElement = document.querySelector('.timer-item--hours');
const minsElement = document.querySelector('.timer-item--mins');
const secondsElement = document.querySelector('.timer-item--seconds');

const deadline = '1 Jan 2022';

function countdown() {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    const timeDifference = deadlineDate - currentDate;

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const mins = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minsElement.textContent = formatTime(mins);
    secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);