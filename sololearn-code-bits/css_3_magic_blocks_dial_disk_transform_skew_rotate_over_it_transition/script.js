//Code goes further, after svg img/code.
//`` backtick is a multiline string!!
// Regarding SVG data/file/: despite most part are circles, it is encoded automatically (by 
//   Adobe Illustrator (AI), in such way it has many elemetns in many paths. pity.
var imgSVGdata = 
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.5 392.5" class="no-class"  id="dial-disk">
 <style> 
.a{ fill:#56ACE0; } /*light-blue bg*/
.b{ fill:#FFF; }  /*white*/
.c{ fill:#FFC10D; } /*orange finger-places bg*/
.d{ fill:#194F82; } /*dark-blue*/
 </style>
 <path d="M21.8 196.3c0 96.2 78.3 174.5 174.5 174.5 32.5 0 62.8-9 89-24.4l-20.5-60.2c-2.5-8.5 4.7-16.5 13.8-13.8l62.5 21.3c18.7-27.8 29.7-61.3 29.7-97.2 0-96.2-78.3-174.5-174.5-174.5S21.8 100.1 21.8 196.3z" class="a"/>
 <path d="M196.3 131c-36 0-65.3 29.3-65.3 65.3s29.3 65.3 65.3 65.3 65.3-29.3 65.3-65.3S232.3 131 196.3 131z" class="b"/>
 <path d="M196.3 76.1c6 0 10.9-4.8 10.9-10.9 0-6-4.8-10.9-10.9-10.9s-10.9 4.8-10.9 10.9S190.3 76.1 196.3 76.1z" class="c"/>
 <path d="M196.3 316.4c-6 0-10.9 4.8-10.9 10.9 0 6 4.8 10.9 10.9 10.9 6 0 10.9-4.8 10.9-10.9S202.3 316.4 196.3 316.4z" class="c"/>
 <path d="M327.3 207.2c6 0 10.9-4.8 10.9-10.9s-4.8-10.9-10.9-10.9c-6.1 0-10.9 4.8-10.9 10.9C316.4 202.3 321.3 207.2 327.3 207.2z" class="c"/>
 <path d="M65.2 185.3c-6 0-10.9 4.8-10.9 10.9 0 6 4.8 10.9 10.9 10.9s10.9-4.8 10.9-10.9S71.2 185.3 65.2 185.3z" class="c"/>
 <path d="M288.9 114.5c6 0 10.9-4.8 10.9-10.9 0-6.1-4.8-10.9-10.9-10.9 -6.1 0-10.9 4.8-10.9 10.9C278 109.6 283 114.5 288.9 114.5z" class="c"/>
 <path d="M103.6 278c-6 0-10.9 4.8-10.9 10.9 0 6 4.8 10.9 10.9 10.9s10.9-4.8 10.9-10.9C114.5 282.9 109.6 278 103.6 278z" class="c"/>
 <path d="M103.6 114.5c6 0 10.9-4.8 10.9-10.9 0-6.1-4.8-10.9-10.9-10.9s-10.9 4.8-10.9 10.9C92.7 109.6 97.6 114.5 103.6 114.5z" class="c"/>
 <path d="M326.9 311.7l-34.5-11.6 11.4 33.5C312.2 326.9 319.9 319.7 326.9 311.7z" class="c"/>
 <path d="M196.3 97.9c18 0 32.7-14.7 32.7-32.7s-14.7-32.8-32.7-32.8 -32.7 14.7-32.7 32.7S178.2 97.9 196.3 97.9zM196.3 54.3c6 0 10.9 4.8 10.9 10.9 0 6-4.8 10.9-10.9 10.9s-10.9-4.8-10.9-10.9C185.3 59.2 190.3 54.3 196.3 54.3z" class="d"/>
 <path d="M196.3 294.7c-18 0-32.7 14.7-32.7 32.7s14.7 32.7 32.7 32.7 32.7-14.7 32.7-32.7S214.3 294.7 196.3 294.7zM196.3 338.2c-6 0-10.9-4.8-10.9-10.9 0-6 4.8-10.9 10.9-10.9 6 0 10.9 4.8 10.9 10.9C207.2 333.3 202.3 338.2 196.3 338.2z" class="d"/>
 <path d="M294.7 196.3c0 18 14.7 32.7 32.7 32.7 18 0 32.7-14.7 32.7-32.7s-14.7-32.7-32.7-32.7C309.3 163.6 294.7 178.2 294.7 196.3zM327.3 185.3c6 0 10.9 4.8 10.9 10.9 0 6-4.8 10.9-10.9 10.9 -6.1 0-10.9-4.8-10.9-10.9S321.3 185.3 327.3 185.3z" class="d"/>
 <path d="M288.9 136.3c18 0 32.7-14.7 32.7-32.7s-14.7-32.7-32.7-32.7c-18 0-32.7 14.7-32.7 32.7S270.9 136.3 288.9 136.3zM288.9 92.6c6 0 10.9 4.8 10.9 10.9 0 6-4.8 10.9-10.9 10.9 -6.1 0-10.9-4.8-10.9-10.9C278 97.5 283 92.6 288.9 92.6z" class="d"/>
 <path d="M103.6 136.3c18 0 32.7-14.7 32.7-32.7s-14.7-32.7-32.7-32.7 -32.7 14.7-32.7 32.7S85.5 136.3 103.6 136.3zM103.6 92.6c6 0 10.9 4.8 10.9 10.9 0 6-4.8 10.9-10.9 10.9s-10.9-4.8-10.9-10.9S97.6 92.6 103.6 92.6z" class="d"/>
 <path d="M103.6 256.3c-18 0-32.7 14.7-32.7 32.7 0 18 14.7 32.7 32.7 32.7s32.7-14.7 32.7-32.7C136.3 270.9 121.6 256.3 103.6 256.3zM103.6 299.9c-6 0-10.9-4.8-10.9-10.9s4.8-10.9 10.9-10.9 10.9 4.8 10.9 10.9S109.6 299.9 103.6 299.9z" class="d"/>
 <path d="M97.9 196.3c0-18-14.7-32.7-32.7-32.7s-32.7 14.7-32.7 32.7 14.7 32.7 32.7 32.7S97.9 214.3 97.9 196.3zM65.2 207.2c-6 0-10.9-4.8-10.9-10.9s4.8-10.9 10.9-10.9 10.9 4.8 10.9 10.9C76.1 202.3 71.2 207.2 65.2 207.2z" class="d"/>
  <path d="M196.3 109.2c-48 0-87.1 39.1-87.1 87.1s39.1 87.1 87.1 87.1 87.1-39.1 87.1-87.1S244.2 109.2 196.3 109.2zM196.3 261.6c-36 0-65.3-29.3-65.3-65.3s29.3-65.3 65.3-65.3 65.3 29.3 65.3 65.3S232.3 261.6 196.3 261.6z" class="d"/>
 <path d="M196.3 0C88 0 0 88 0 196.3s88 196.3 196.3 196.3 196.3-88 196.3-196.3S304.5 0 196.3 0zM303.8 333.4l-11.4-33.5 34.5 11.6C319.9 319.7 312.2 326.9 303.8 333.4zM278.6 272.2c-9.2-2.7-16.3 5.3-13.8 13.8l20.5 60.2c-26.1 15.5-56.5 24.4-89 24.4 -96.2 0.1-174.5-78.2-174.5-174.4S100.1 21.8 196.3 21.8s174.5 78.3 174.5 174.5c0 35.9-11 69.4-29.7 97.2L278.6 272.2z" class="d"/> 
</svg>`;

//Load event: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

function pv(nm,x){ //print var
  console.log(nm+"=", x, typeof x, JSON.stringify(x));
}

//NB window.onload/addEventListener, not document.onload()
window.addEventListener('load', (evt)=>{
   //let img1= document.getElementById("dial-disk"); //according to this version, <svg> was in
   //   html part, but since it moved here, this is not working
   let ddp_img= document.getElementById("dial-disk-placeholder-img");
   let d4= document.getElementById("d4");
     //let d4 = document.querySelector(".diamond4"); //imgContainer
     //let d4 = document.getElementByClassName("diamond4");
     //pv("d4", d4); pv("ddp_img",ddp_img); //debug
   
   // prepare svg data: base64-encode 
   let imgSVGdata_base64enc = window.btoa(imgSVGdata);
   // version-1: set div.bg-img to data-encoded : works OK
   //d4.style.backgroundImage = `url(data:image/svg+xml;base64,${imgSVGdata_base64enc})`;
   
   // version 2: set img.src to given SVG using data: scheme. Works OK!
   ddp_img.src = `data:image/svg+xml;base64,${imgSVGdata_base64enc}`;
   //ddp_img.innerHTML = imgSVGdata; //version 3: didn't tested, got this from the same kirupa.com link
});

/*window.onload = (evt)=>{
    console.log();
};*/

/*
version 2 and final to the moment:
https://www.kirupa.com/tricks/billion_ways_display_svg.htm
 -> "Base64 Encoded Versions of SVGs" 

version:
https://stackoverflow.com/questions/10600828/javascript-get-image-source-and-inject-into-another-image-source
*/
