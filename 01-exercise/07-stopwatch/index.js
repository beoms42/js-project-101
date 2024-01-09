// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const displaySet = document.querySelector('.time');

let timerId;

let msec = 0;
let min = 0;
let sec = 0;

const display = () => {
    const fMin = min < 10 ? `0${min}` : min;
    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMsec = msec < 10 ? `0${msec}` : msec;
    displaySet.innerText=`${fMin} : ${fSec} : ${fMsec}`;
}
const timer = () => {
    msec++; // 0.01초씩 무한증가

    if(msec === 100) {
        msec = 0;
        sec++;
    }

    if(sec === 60) {
        sec = 0;
        min++;
    }

    display();
}
const start = () => {
    timerId = setInterval(timer, 10);
}
const stop = () => {
    clearInterval(timerId);
}
const reset = () => {
    stop();
    [msec, sec, min] = [0, 0, 0];
    display();
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

