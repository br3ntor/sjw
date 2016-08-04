$(document).ready(function() {
    var bigRedClick = 0;
    var oldWhiteClick = 0;
    var atheismClick = 0;
    var skrillClick = 0;
    var zombieClick = 0;

    $('#skrill-img').click(function() {
        if (skrillClick < 3) {
            document.getElementById('skrill-audio' + skrillClick).play();
            skrillClick++;
        } else {
            document.getElementById('skrill-audio0').play();
            skrillClick = 1;
        }
    });

    $('#carl-img').click(function() {
        document.getElementById('carl-audio').play();
    });

    $('#triggly-img').click(function() {
        document.getElementById('triggly-audio').play();
    });

    $('#zombie-img').click(function() {
        if (zombieClick < 5) {
            document.getElementById('zombie-audio' + zombieClick).play();
            zombieClick++;
        } else {
            document.getElementById('zombie-audio0').play();
            zombieClick = 1;
        }
    });

    $('#bigred-img').click(function() {
        if (bigRedClick < 3) {
            document.getElementById('bigred-audio' + bigRedClick).play();
            bigRedClick++;
        } else {
            document.getElementById('bigred-audio0').play();
            bigRedClick = 1;
        }
    });

    $('#atheism-img').click(function() {
        if (atheismClick < 4) {
            document.getElementById('atheism-audio' + atheismClick).play();
            atheismClick++;
        } else {
            document.getElementById('atheism-audio0').play();
            atheismClick = 1;
        }
    });

    $('#oldWhite-img').click(function() {
        if (oldWhiteClick === 0) {
            document.getElementById('oldWhite-audio0').play();
            oldWhiteClick++;
        } else if (oldWhiteClick === 1) {
            document.getElementById('oldWhite-audio1').play();
            oldWhiteClick = 0;
        }
    });
});
