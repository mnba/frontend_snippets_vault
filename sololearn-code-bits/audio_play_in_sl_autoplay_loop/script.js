// fsound1 Created by M͝o҉̶ses O̷d̸h͝i̶͟amb̴͜o


const fsound1 = function(){
    var url = 'https://badasstechie.github.io/Clips/Siren.mp3';
    window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
    var context = new AudioContext(); //context
    var source = context.createBufferSource(); //source node
    source.connect(context.destination); //connect source to speakers so we can hear it
    var request = new XMLHttpRequest();
    request.open('GET', url, true); 
    request.responseType = 'arraybuffer'; //the  response is an array of bits
    request.onload = function() {
        context.decodeAudioData(request.response, function(response) {
            source.buffer = response;
            source.start(0); //play audio immediately
            source.loop = true;
        }, function () { console.error('The request failed.'); } );
    }
    request.send();
}


window.onload = fsound1;