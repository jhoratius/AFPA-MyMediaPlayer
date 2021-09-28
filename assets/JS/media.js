var video = document.querySelector('.video');
var juice = document.querySelector('.orange_bar');
var btn = document.getElementById('play_pause');
var fwdBtn = document.querySelector('.button2');
var bwdBtn = document.querySelector('.button3');

// Fonction Play/Pause 
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

// EventListener Play/Pause
btn.onclick = function(){
    togglePlayPause();
}

// EventListener Loading
video.addEventListener('timeupdate', function(){
    var juicePos= video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className = 'play';
    }
})

// EventListener Backward/Forward
bwdBtn.addEventListener('click', bwd, false);
fwdBtn.addEventListener('click', fwd, false);

// Fonction Backward/Forward
function fwd(){
    video.currentTime -= 3;
}

function bwd(){
    video.currentTime += 3;
    if(video.currentTime > video.duration){
        fwdBtn.preventDefault(fwdBtn.onclick);
    }
}

//EventListener Volume
var currentVolume;
currentVolume = document.getElementById("currentVolume");
currentVolume.addEventListener("change", setvolume, false)

// Fonction Volume 
function setvolume(){
    video.volume = currentVolume.value/100;
}