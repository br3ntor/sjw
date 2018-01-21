$(document).ready(function() {
    var bigRedClick = 0;
    var oldWhiteClick = 0;
    var atheismClick = 0;
    var skrillClick = 0;
    var zombieClick = 0;
    var trigglyClick = 0;
    var shiaClick = 0;

    var lastAudio = [];



    $('#shia-img').click(function() {
        if (shiaClick < 12) {
            document.getElementById('shia-audio' + shiaClick).play();
            lastAudio.unshift('shia-audio' + shiaClick);
            console.log(lastAudio);
            shiaClick++;
        } else {
            document.getElementById('shia-audio0').play();
            lastAudio.unshift('shia-audio0');
            console.log(lastAudio);
            shiaClick = 1;
        }

        if (document.getElementById(lastAudio[1])) {
            if (!document.getElementById(lastAudio[1]).paused) {
                document.getElementById(lastAudio[1]).pause();
            }
        }

    });


    $('#skrill-img').click(function() {
        if (skrillClick < 3) {
            document.getElementById('skrill-audio' + skrillClick).play();
            lastAudio.unshift('skrill-audio' + skrillClick);
            skrillClick++;
        } else {
            document.getElementById('skrill-audio0').play();
            lastAudio.unshift('skrill-audio0');
            skrillClick = 1;
        }
    });

    $('#carl-img').click(function() {
        document.getElementById('carl-audio').play();
        lastAudio.unshift('carl-audio');
    });

    $('#triggly-img').click(function() {
        if (trigglyClick < 2) {
            document.getElementById('triggly-audio' + trigglyClick).play();
            lastAudio.unshift('triggly-audio' + trigglyClick);
            trigglyClick++;
        } else {
            trigglyClick = 0;
            document.getElementById('triggly-audio' + trigglyClick).play();
            lastAudio.unshift('triggly-audio' + trigglyClick);
            trigglyClick++;
        }
    });

    $('#zombie-img').click(function() {
        if (zombieClick < 5) {
            document.getElementById('zombie-audio' + zombieClick).play();
            lastAudio.unshift('zombie-audio' + zombieClick);
            zombieClick++;
        } else {
            document.getElementById('zombie-audio0').play();
            lastAudio.unshift('zombie-audio0');
            zombieClick = 1;
        }
    });

    $('#bigred-img').click(function() {
        if (bigRedClick < 3) {
            document.getElementById('bigred-audio' + bigRedClick).play();
            lastAudio.unshift('bigred-audio' + bigRedClick);
            bigRedClick++;
        } else {
            document.getElementById('bigred-audio0').play();
            lastAudio.unshift('bigred-audio0');
            bigRedClick = 1;
        }
    });

    $('#atheism-img').click(function() {
        if (atheismClick < 4) {
            document.getElementById('atheism-audio' + atheismClick).play();
            lastAudio.unshift('atheism-audio' + atheismClick);
            atheismClick++;
        } else {
            document.getElementById('atheism-audio0').play();
            lastAudio.unshift('atheism-audio0');
            atheismClick = 1;
        }
    });

    $('#oldWhite-img').click(function() {
        if (oldWhiteClick === 0) {
            document.getElementById('oldWhite-audio0').play();
            lastAudio.unshift('oldWhite-audio0');
            oldWhiteClick++;
        } else if (oldWhiteClick === 1) {
            document.getElementById('oldWhite-audio1').play();
            lastAudio.unshift('oldWhite-audio1');
            oldWhiteClick = 0;
        }
    });
});
