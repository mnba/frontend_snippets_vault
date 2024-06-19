$(function() {
  //let text1_html= $("#pane1").html();
  const text1_html = "<pre>"+hy_ameno_era +"</pre>";
  $("#pane1").html(text1_html );
  
  $("#btn1").click(function() {
    $("#pane1").toggle(550, make_sound1);
    //if visible, restore original text
    //console.log("pane1.visible=", Object_toString( $("#pane1:visible")) );
    if ($("#pane1:visible").length !=0 ){
      console.log("Set original (hy) text");
      $("#pane1").html( text1_html );
    }
  });
  $("#btn1").dblclick(() => {
    //set religious-magical spell to provoke:
    console.log("Set Latin text");
    $("#pane1").html("<pre>"+ameno_era+"</pre>");
    //attende_domine +"</pre>");
    make_sound(0);
  });
  
  $("#clear_all_snd").click( ()=>{
    console.log("clear_all_sounds()");
    for(let aud of g_snd){
      if( ! aud.ended ){
       aud.pause(); //stop() is absent in Web Audio API HTMLAudioElement 
       aud = null;
       console.log(" aud.stop");
      }
      else console.log(` aud.stop-skipping ${aud}`);
    }
    g_snd.length=0; //in JS there is no such func as g_snd.clear(), but decreasing length removes elements.
  });
  
});

let g_snd= [];

function make_sound(i){
 console.log(`mk_snd(${i})`);
 let src1 = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
 let src2 = "https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/button_tiny.mp3";
 const snd_src_arr= [src1, src2];
 
 if (arguments.length ==0)
   i = 1;
 if (i<0 || i>= snd_src_arr.length ){
   console.log(`i=${i} out of bounds`);
   return;
 }
 let audio = new Audio(snd_src_arr[i]);
 audio.play();
 g_snd.push(audio);
}

const make_sound1= () => make_sound(1);

/** return Object `obj` pretty-printed
     string representstion. 
    Get rid of nonesense [Object object] strings!
 */
function Object_toString(obj){
  return "{" +
    ( Object.entries(obj)
      .map(([k,v])=>"\n "+k+":"+v+"") +
    "\n}" );
}

/** Some helpful links **

This is main:

How to play a notification sound on websites? - Stack Overflow
https://stackoverflow.com/questions/10105063/how-to-play-a-notification-sound-on-websites

these are so-so:

Playing audio with JavaScript? - Stack Overflow
https://stackoverflow.com/questions/9419263/playing-audio-with-javascript/18628124#18628124

Playing audio with JavaScript? - Stack Overflow
https://stackoverflow.com/questions/9419263/playing-audio-with-javascript/18628124#18628124
 */

// texts
const ameno_era= `Dori me, interimo
Dori me
Ameno
Latire, latiremo
Dori me

Ameno
Omenare imperavi ameno
Dimere, dimere mantiro
Mantiremo, ameno

Omenare imperavi emulari
Ameno
Omenare imperavi emulari

Ameno
Ameno dore
Ameno dori me
Ameno dori me

Ameno dom
Dori me reo
Ameno dori me
Ameno dori me
Dori me am

Ameno
Ameno

Ameno
Omenare imperavi ameno
Dimere dimere mantiro
Mantiremo, ameno

Omenare imperavi emulari
Ameno
Omenare imperavi emulari

Ameno
Ameno dore
Ameno dori me
Ameno dori me

Ameno dom
Dori me reo
Ameno dori me
Ameno dori me
Dori me am

Ameno
Ameno
Ameno dori me
Ameno dori me
Dori me
Dori me
Dori me
Dori me
Dori me
Dori me
Dori me
Dori me
Dori me

Ameno
Ameno dore
Ameno dori me
Ameno dori me

Ameno dom
Dori me reo
Ameno dori me
Ameno dori me
Ameno
Ameno
Ameno
Ameno dori me
Ameno
Ameno dori me
Ameno dom
Dori me reo
Ameno
Ameno dori me
Ameno
Ameno dori me`;

const hy_ameno_era = `Դորի մե, ինտերիմո
Դորի մե
Ամենո
Լատիրե, լատիրեմո
Դորի մե

Ամենո
Օմենարե իմպերավի ամենո
Դիմերե, դիմերե մանտիրո
Մանտիրեմո, ամենո

Օմենարե իմպերավի էմուլարի
Ամենո
Օմենարե իմպերավի էմուլարի

Ամենո
Ամենո դորե
Ամենո դորի մե
Ամենո դորի մե

Ամենո դոմ
Դորի մե ռեո
Ամենո դորի մե
Ամենո դորի մե
Դորի մե ամ

Ամենո
Ամենո

Ամենո
Օմենարե իմպերավի ամենո
Դիմերե, դիմերե մանտիրո
Մանտիրեմո, ամենո

Օմենարե իմպերավի էմուլարի
Ամենո
Օմենարե իմպերավի էմուլարի`;


//----
const attende_domine= `Attende Domine, et miserere, quia peccavimus tibi.
Attende Domine, et miserere, quia peccavimus tibi.

Ad te Rex summe,
omnium Redemptor,
oculos nostros
sublevamus flentes:
exaudi, Christe,
supplicantum preces.

Attende Domine, et miserere, quia peccavimus tibi.

Dextera Patris,
lapis angularis,
via salutis,
ianua caelestis,
ablue nostri
maculas delicti.

Attende Domine, et miserere, quia peccavimus tibi.

Rogamus, Deus,
tuam maiestatem:
auribus sacris
gemitus exaudi:
crimina nostra
placidus indulge.

Attende Domine, et miserere, quia peccavimus tibi.

Tibi fatemur
crimina admissa:
contrito corde
pandimus occulta:
tua, Redemptor,
pietas ignoscat.

Attende Domine, et miserere, quia peccavimus tibi.

Innocens captus,
nec repugnans ductus;
testibus falsis
pro impiis damnatus
quos redemisti,
tu conserva, Christe.

Attende Domine, et miserere, quia peccavimus tibi.`;
