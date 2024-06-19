//document.onload= function(){

var synth = window.speechSynthesis; 
console.log(synth,'==synth');
// if (!synth('speechSynthesis' in window)) alert_nospsynth();
if (!synth) alert_nospsynth();
else{ console.log(synth,'==synth'); }

var inputForm = document.querySelector('form'); 
var inputTxt = document.querySelector('.txt'); 
var voiceSelect = document.querySelector('select'); 
var pitch = document.querySelector('#pitch'); 
var pitchValue = document.querySelector('.pitch-value'); 
var rate = document.querySelector('#rate'); 
var rateValue = document.querySelector('.rate-value'); 
//console.log
document.write(["form vars=[", inputForm, inputTxt, voiceSelect, pitch, pitchValue, rate, rateValue,"]" ]);//debug

function alert_nospsynth() {
  alert("Speech Synthesis not supported.");
  //+voiceSelect.innerHTML = "<option value='0'>None found</option>";
  //+document.getElementsByTagName("button")[0].onclick = function() {};
}

// Voices:
var voices = []; 

function populateVoiceList() {
 if (!synth){
   console.log("populateVoiceList: Speech Synthesis not supported");
   return false;
 }
 voices = synth.getVoices();
 if(!voices){
     
 }
 console.log('voices=',voices);
 for(i = 0; i < voices.length ; i++) { 
  var option = document.createElement('option'); 
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  if(voices[i].default) { 
    option.textContent += ' -- DEFAULT'; 
  } 
  option.setAttribute('data-lang', voices[i].lang); 
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option); 
 }
 return true;
} 

populateVoiceList();
if (synth) { 
 if (speechSynthesis.onvoiceschanged !== undefined) {
   speechSynthesis.onvoiceschanged = populateVoiceList; 
 }

 inputForm.onsubmit = function(event) { 
  event.preventDefault(); 
  var utterThis = new SpeechSynthesisUtterance(inputTxt.value); 
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name'); 
  for(i = 0; i < voices.length ; i++) { 
   if(voices[i].name === selectedOption) { 
    utterThis.voice = voices[i]; 
   } 
  } 
  utterThis.pitch = pitch.value; 
  utterThis.rate = rate.value; 
  synth.speak(utterThis); 
  inputTxt.blur(); 
 }
}//eo if synth

//}//eo document.onload