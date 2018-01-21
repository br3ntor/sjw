var atheismClick = 0;
var bigRedClick = 0;
var carlClick = 0;
var oldWhiteClick = 0;
var shiaClick = 0;
var skrillClick = 0;
var trigglyClick = 0;
var zombieClick = 0;

var audio = document.getElementsByTagName('audio');
var imgId = '';
var lastAudio = [];


$('img').click(function(event) {
    var click_count;
    var sjwAudio = [];

    // gets name part of id from clicked img
    imgId = event.target.id;
    imgId = imgId.slice(0, imgId.indexOf('-'));

    // set click_count to click counter for sjw
    click_count = window[imgId + 'Click'];

    // make array of clicked sjw audio to get number of files to cycle
    for (var i = 0; i < audio.length; i++) {
        if (audio[i].id.indexOf(imgId) !== -1) {
            sjwAudio.push(audio[i]);
        }
    }

    // cycle through files on click
    if (click_count < sjwAudio.length) {
        document.getElementById(imgId + '-audio' + click_count).play();
        lastAudio.unshift(imgId + '-audio' + click_count);
        window[imgId + 'Click']++;
    } else {
        document.getElementById(imgId + '-audio0').play();
        lastAudio.unshift(imgId + '-audio0');
        window[imgId + 'Click'] = 1;
    }

    // pauses audio if the last file is still being played
    if (document.getElementById(lastAudio[1])) {
        if (!document.getElementById(lastAudio[1]).paused) {
            document.getElementById(lastAudio[1]).pause();
            document.getElementById(lastAudio[1]).currentTime = 0;
        }
    }
});
