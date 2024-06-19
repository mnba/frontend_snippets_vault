/**
navigator.userAgent and navigator.appVersion properties are totally the same.
 
navigator.getBattery() rets Promis
*/
function vibrate() {
  navigator.vibrate(100);
}

function vibrate2() {
  navigator.vibrate([100, 250, 500]);
  //250, 500, 250, 500, 250, 500]);
}

console.log('navigator.userAgent=', 
  navigator.userAgent );

navigator.getBattery( (perc)=>
  console.log(`1. navigator.getBattery()=${perc}%`)
);

navigator.getBattery()
.then((batr) => {
  console.log(`2. navigajor.getBattery().level=${batr.level*100}%`);
  });

//---
function battery(){
  var bat = document.createElement("div");
  document.body.appendChild(bat);
    
  navigator.getBattery()
   .then(function(battery){
    var level = battery.level;
    var time = battery.chargingTime;
    console.log(`Battery Level is ${level*100}% and time is ${time}mins`);
    bat.style.width = level*100+"%";
    
 if(battery.charging){
     console.log("is Charging? : " + battery.charging);
 }else{
    console.log("is Charging? : " + battery.charging); 
 }
 if(battery.onlevelchange){
     bat.style.width = level*100+"%";
 }
 });
}

