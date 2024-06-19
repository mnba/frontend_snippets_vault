$(function() {
  //on ready: 
  let obj1 = $("#obj1");
  
  //Get repeat count from element innerHTML.
  //Additionally: fool-protect the input: set default if error or absent
  const sTimes = Number.isInteger(obj1.text()) ? obj1.text() : "5";
  
  // repeat N times: 
  const N= Number( sTimes);
  //?const N= new Number( sTimes); //??
  /*---Just noticed quirky thing! if ^line is `const N= *new* Number( sTimes);` the code stops after 1st iteration, but WHY???
  the only change is `new` ---*/

  // correct the text, set default
  if(! Number.isInteger(obj1.text()) )
    obj1.text(""+N);
  
  //Starting Workout! 
  for (let i of Array(N).keys()){
      // of [...Array(N).keys()]){
    //line-height: =height; for vertical centering; set it to change here the same way as `height`
    
    //Workout movements: 
    // Note: `lineHeight` property changes here are only for keeping numerical label centered. They are the same as for `height`
    
    //prepare. concentrate
    obj1.animate({opacity: 1}, 300);
    //mvt.enlarge and go down
    obj1.animate({height: '+=100px', lineHeight:'+=100px', width: '+=100px', top: '+=100px'}, 500);
    //mvt.diminish and go right
    obj1.animate({height: '-=100px', lineHeight:'-=100px', width: '-=100px', left: '+=100px'}, 500);
    //mvt.enlarge and go up
    obj1.animate({height: '+=100px', lineHeight:'+=100px', width: '+=100px', top: '-=100px'}, 500);
    //mvt.diminish and go left, returning to the starting pose
    obj1.animate({height: '-=100px', lineHeight:'-=100px', width: '-=100px', left: '-=100px'}, 500);
    // relax
    obj1.animate({opacity: 0.5},100);
    
    //Now change the number of repetitions
    //The rest of code here until the end is for that (3 lines eventually).
    
    //Set the label with number of repetitions
    // *exactly on geometrical center of the circle*. 
    //(I just leave failed tries here too.)
    
    //unsuccessful tries: 
    
/* //"backup": original version of code w/o line-height changes
    obj1.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    obj1.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    obj1.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    obj1.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
 */

    /*// try 1
    //console.log( obj1[0].innerHTML);
    // Setting value through DOM element directly didn't work, it somehow is not changed.
    obj1[0].innerHtml= ""+ (N-i);
    console.log(" after assign="+ obj1[0].innerHTML);//the same as before assignment
    */
    // try 2
    //obj1.html( ""+ (N-i));//JQ method works but is not queued so int expression is the latest on start= 1
    
    // successful implementation: 
    //try 3
    //OK works: jQuery.html()+queued 
    obj1.queue( ()=> { 
      obj1.html( '' + (N-1-i)); // i));
      obj1.dequeue(); // This is necessary to continue the animation 
    });
    
  }//end of for cycle
}); //end of "ready()"