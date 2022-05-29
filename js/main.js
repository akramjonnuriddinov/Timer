// TIMER FIELDS
const elHour = document.querySelector('.hour');
const elMinute = document.querySelector('.minute');
const elSecond = document.querySelector('.second');
const elMillisecond = document.querySelector('.millisecond');
const elResultsClear = document.querySelector('.js-results-clear');
const elResults = document.querySelector('.js-results');

// BUTTONS
const elStartButton = document.querySelector('.start');
const elPauseButton = document.querySelector('.pause');
const elStopButton = document.querySelector('.stop');
const elNewButton = document.querySelector('.new');

// VARIABLE
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    disabled = true;

// LISTENERS
elStartButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    notDisableBtn();
});

elPauseButton.addEventListener('click', () => {
    clearInterval(interval);
});

elStopButton.addEventListener('click', () => {
    clearInterval(interval);
    clearFields();
    disableBtn();
});

let count = 0;
elNewButton.addEventListener('click', () => {
    count++;
    elResultsClear.classList.add('results__clear--show');
    clearInterval(interval);
    const elResultsItem = document.querySelector('.js-results-item');
    const block = document.createElement('div');
    block.classList.add('results__info');
    block.innerText = `Result ${count}:   ${hour} : ${minute} : ${second} : ${millisecond}`;
    elResultsItem.append(block);
    clearFields();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    elResults.classList.add('results--show');
    
    // CLEAR RESULTS AND HIDE RESULTS CLEAR BUTTON
    elResultsClear.addEventListener('click', () => {
        block.innerText = '';
        count = 0;
        elResultsClear.classList.add('results__clear--none');
        elResults.classList.remove('results--show');
    });
    // CLEAR RESULTS BUTTON QAYTA PAYDO BO'LISHI UCHUN
    elResultsClear.classList.remove('results__clear--none');

});

// FUNCTION startTimer
function startTimer() {
    millisecond++;

    // MILLISECOND
    if (millisecond < 9) {
        elMillisecond.innerText = '0' + millisecond;
    } if (millisecond > 9) {
        elMillisecond.innerText = millisecond;
    } if (millisecond > 99) {
        second++;
        elSecond.innerText = '0' + second;
        millisecond = '0';
        elMillisecond.innerText = '0' + millisecond;
    }

    // SECOND
    if (second < 9) {
        elSecond.innerText = '0' + second;  
    } if (second > 9) {
        elSecond.innerText = second;
    } if (second > 60) {
        minute++;
        elMinute.innerText = '0' + minute;
        second = 0;
        elSecond.innerText = '0' + second;
    }

    // MINUTES
    if (minute > 9) {
        elMinute.innerText = minute;
    }

    // HOURS
    if (hour > 9) {
        elMinute.innerText = hour;
    }
}

function clearFields() {
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    elHour.textContent = '00';
    elMinute.textContent = '00';
    elSecond.textContent = '00';
    elMillisecond.textContent = '00';
}

function disableBtn() {
    if (disabled) {
        elNewButton.disabled = true;
    }
}
disableBtn();

function notDisableBtn() {
    if (disabled) {
        elNewButton.disabled = false;
    }
}