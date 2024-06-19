// Created by bamskination

// Created by ChillPill 🌶 

var analyser;
var canvasCtx;
var canvas;
var bufferLength ;
var dataArray ;


var init=()=>{
    var b=document.querySelector("button");
    b.onclick=()=>{};
    b.style.display="none";
    document.querySelector("#player").style.display="block";
    var audio=document.querySelector("audio");
    window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;
    var ctx=new AudioContext();
    analyser=ctx.createAnalyser();
    var source=ctx.createMediaElementSource(audio);    
    source.connect(analyser);
    analyser.connect(ctx.destination);
    canvas = document.getElementById("oscilloscope"); 
    canvas.width=canvas.height=330;
    canvasCtx = canvas.getContext("2d");
    analyser.fftSize=bufferLength=1024;
    dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);
    draw();




function draw() { 
    analyser.getByteTimeDomainData(dataArray); 
    canvasCtx.fillStyle = "rgba(0, 0, 0,0.99)";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 1; 
    var angle=0;
    var increment=Math.PI*2/bufferLength;
    
    for (var i = 0; i < bufferLength; i++) { 
        angle=i*increment;
        canvasCtx.fillStyle="hsl("+180*angle/Math.PI+",100%,50%)";
        canvasCtx.beginPath();
        canvasCtx.ellipse(((dataArray[i])/1.5+15)*Math.cos(angle) + canvas.width/2,((dataArray[i])/1.5+15)*Math.sin(angle)+canvas.height/2,8*Math.random()**2,8*Math.random()**4,angle,0,Math.PI*2);
        canvasCtx.fill();
    }
    requestAnimationFrame(draw);
} 
    
}




