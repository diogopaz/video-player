let video = document.getElementsByClassName("video")[0];
let playBtn = document.getElementsByClassName("play")[0];
let pauseBtn = document.getElementsByClassName("pause")[0];
let controls = document.getElementsByClassName("controls")[0];
let videoInProgress = false;

function play() {
    video.play();
    pauseBtn.removeAttribute("hidden");
    playBtn.setAttribute("hidden", "");
    videoInProgress = true;
    hideControls();
}

function pause() {
    video.pause();
    pauseBtn.setAttribute("hidden", "");
    playBtn.removeAttribute("hidden");
    videoInProgress = false;
}

function stop() {
    video.pause();
    video.currentTime = 0;
    pauseBtn.setAttribute("hidden", "");
    playBtn.removeAttribute("hidden");
    videoInProgress = false;
}

function rewind() {
    video.currentTime -= 10;
}

function advance() {
    video.currentTime += 10;
}

function decreaseSpeed() {
    video.playbackRate -= 0.25;
}

function increaseSpeed() {
    video.playbackRate += 0.25;
}

function hideControls() {
    if (videoInProgress) {
        setTimeout(function () {
            controls.setAttribute("hidden", "");
        }, 2500);
    }
}

function showControls() {
    controls.removeAttribute("hidden");
}

video.addEventListener("mouseout", hideControls);
video.addEventListener("mouseover", showControls);
