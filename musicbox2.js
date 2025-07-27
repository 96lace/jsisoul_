document.getElementById("musicplayer").onclick = function() {
    var audio = document.getElementById("myplaylist");
    if (audio.paused) audio.play();
    else audio.pause();
    };