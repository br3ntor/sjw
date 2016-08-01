$(document).ready(function() {
	var bigRedClick = 0;

    $('#skrill-img').click(function() {
        document.getElementById('skrill-audio').play();
    });
    $('#carl-img').click(function() {
        document.getElementById('carl-audio').play();
    });
    $('#triggly-img').click(function() {
        document.getElementById('triggly-audio').play();
    });
    $('#zombie-img').click(function() {
        document.getElementById('zombie-audio').play();
    });
    $('#bigred-img').click(function() {
    	if (bigRedClick < 2) {
    	document.getElementById('bigred-audio' + bigRedClick).play();
    	bigRedClick++;
    	} else {    		
    		document.getElementById('bigred-audio0').play();
    		bigRedClick = 1;
    	}
        
    });
    $('#atheism-img').click(function() {
        document.getElementById('atheism-audio0').play();
    });
});
