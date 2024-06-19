// Created by Krishna Teja Yeluripati

// Speech Synthesis is not supported in many browsers.
function speechSupport() {
    if ('speechSynthesis' in window) {
        loadAllVoices();
        window.speechSynthesis.onvoiceschanged = function(e) { loadAllVoices(); };
    } else {
        alert("Speech Synthesis Not Supported!");
        document.getElementById("voices").innerHTML = "<option value='0'>None Found</option>";
        document.getElementsByTagName("button")[0].onclick = function() {};
    }
}

// This function loads different voices available for speech synthesis.
function loadAllVoices() {
    window.speechSynthesis.getVoices().forEach(function(voice, i) {
        var voices = document.createElement("option");
        voices.value = voice.name;
        voices.innerHTML = voice.name;
        document.getElementById("voices").appendChild(voices);
    });
}

// This code handles the event that's fired when list of available voices change.
if ('speechSynthesis' in window)
    window.speechSynthesis.onvoiceschanged = function(e) { loadAllVoices(); };

function speechDemo() {
    // A SpeechSynthesisUtterance Object to avail the Speech Synthesis.
    var msg = new SpeechSynthesisUtterance();
    // Setting the text which should be converted to Speech.
    msg.text = document.getElementById("text").value;
    // Setting the voice of the Speech.
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == document.getElementById("voices").value; })[0];
    // Synthesising Speech.
    window.speechSynthesis.speak(msg);
}