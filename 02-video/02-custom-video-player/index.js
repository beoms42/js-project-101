// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const video = document.querySelector('video');
const playToggleBtn = document.querySelector('.play-pause');
const rateBtns = document.querySelectorAll('.rate');
const volumeBar = document.querySelector('input');

const formatting = (time) => {
    const sec = Math.floor(time % 60);
    const min = Math.floor(time / 60) % 60;
    const hour = Math.floor(time / 3600);

    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMin = min < 10 ? `0${min}` : min;
    const fHour = sec < 10 ? `0${hour}` : hour;

    return `${fHour}:${fMin}:${fSec}`;
}

const updateProgress =() => {
    const percent = (video.currentTime/video.duration) * 100;
    const progressBar = document.querySelector('.bar');
    progressBar.style.width = `${percent}%`;
}

const updateTime = () => {
    const current = document.querySelector('.current');
    const duration = document.querySelector('.duration');

    current.innerText=formatting(video.currentTime);
    duration.innerText=formatting(video.duration);

    if(video.ended){
        pause();
    }
}
const setVolume = (event) => {
    video.volume = event.target.value;
};
const pause = () => {
    playToggleBtn.innerText='▶︎';
    video.pause();
};

const play = () => {
    playToggleBtn.innerText='||';
    video.play();
};

const setRate = (event) => {
    const {rate} = event.target.dataset;
    video.playbackRate = rate;
};

const playToggle = () => {
  video.paused ? play() : pause();
};

playToggleBtn.addEventListener('click', playToggle);
rateBtns.forEach((btn) => {
    btn.addEventListener('click', setRate);
})

volumeBar.addEventListener('change', setVolume);
video.addEventListener('timeupdate', updateTime);
video.addEventListener('timeupdate', updateProgress);