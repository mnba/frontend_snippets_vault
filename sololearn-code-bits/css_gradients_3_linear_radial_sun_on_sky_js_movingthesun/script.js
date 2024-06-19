/** functions: getStyle(), getStyleById(), 
    "load the vars", moveTheSun() 
 */

function getStyleById(elid, styleProp)
{
  let el = document.getElementById(elid);
  return getStyle(el, styleProp);
}

function getStyle(el, styleProp)
{
    let y = null;
    if (el.currentStyle)
        y = el.currentStyle[styleProp];
    else if (window.getComputedStyle)
        y = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);
    return y;
}
// end of getStyle*() functions 

// constants 
const step= 5;

//vars
let sky = null;
let sun = null;
let tm = null; //the timer 
let sky_width = null;
let sun_width = null;

// load the values of UI-elts
document.addEventListener('DOMContentLoaded', () => {
  sky = document.getElementById ("sky");
  //-console.log('sky=', sky);//tmp

  sun = document.getElementById("sun1");
  //-console.log('sun=', sun);//tmp
  sun_width = parseInt( getStyle(sun, 'width'));
  //console.log('sun.width=', sun_width);//100
  
  sky_width = parseInt( getStyle(sky, 'width'));
  //console.log('sky_width=', sky_width);//344
  
  //moveTheSun(); //test
  
  //console.log('sun1=', sun1);
  //Why!? sun1 is not undefined and not null Hmm
});


/** Move the Sun function:
   sun1.style.left==="" always, that is why we use getStyle*() function.
*/
function moveTheSun() {
  // nleft sleft - left position of sun elt
  let sleft = getStyleById("sun1",'left')
  if(sleft===''){
      clearInterval(tm);
      console.error("Error: sleft=''")
      return;
  }

  let nleft= parseInt(sleft);
  
  if ( nleft > sky_width 
    //|| nleft + step > window.width
    //FIXME window.width is not correct value of actual window width 
  ) {
    nleft = -1* sun_width;
    //console.log('nleft=', nleft);//dbg
    
    /* //stop the eternal cycle 
    clearInterval(tm);
    return;
    */ 
  }
  
  //--let nleft = parseInt(getStyle(sun, 'left'));
  let new_sun_left = (nleft + step) +"px";
  /*    
  //.right manipulating does not work! 
  // does not change position of element */
  //- sun.style.right = new_sun_right;
  
  sun.style.left = new_sun_left;
  //sun1 instead of sun also works!!
}

//moveTheSun(); //test
tm = setInterval(moveTheSun, 75);
//moveTheSun itself will turn off the timer `tm`. 

/* unused/abandoned idea of test func
function moveTheSunNTimes(n){
  for(let i of Array(5).keys() ){
    moveTheSun();
    setInterval()
  }
}
*/

// used now 
//document.addEventListener('DOMContentLoaded', (event) => {});




/*-----------------
Note. 
 getStyle() functions are taken from:
https://stackoverflow.com/questions/10610015/javascript-style-left-is-empty-string
 > How to get computed style of a HTMLElement >
 : https://www.quirksmode.org/dom/getstyles.html
2006: https://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/
*/
