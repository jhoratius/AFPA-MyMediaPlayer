var video = document.querySelector('.video');
var juice = document.querySelector('.orange_bar');
var btn = document.getElementById('play_pause');

function togglePlayPause(){
    if(video.paused){
        btn.className = "pause";
        video.play();
    }
    else{
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function(){
    togglePlayPause();
}
video.addEventListener('timeupdate', function(){
    var juicePos= video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className = 'play';
    }
})
var currentVolume;
currentVolume = document.getElementById("currentVolume");
currentVolume.addEventListener("change", setvolume, false)

function setvolume(){
    video.volume = currentVolume.value/100;
}