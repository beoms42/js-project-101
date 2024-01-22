// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const button = document.querySelector('button');

const tooglePlay = () => {
    const video = document.querySelector('video');

    if(video.paused){
        button.innerText="정지";
        video.play();
    } else {
        button.innerText="재생";
        video.pause();
    }
};

button.addEventListener('click', tooglePlay);