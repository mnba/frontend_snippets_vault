//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 0; 
    //our box element
    var box = document
     .getElementById('box');
    var t = setInterval(move, 10);
    let dir= +1;
    const step= 3; //2.9; //1;
    const totalcount= 3;
    let nth_mvmt=0;
  
    function move() {
        if( dir== +1 && pos >= 150) 
        {
            //finish the forward movement timer
            clearInterval(t);
            //Start a new movement: backward
            dir= -1;
            t = setInterval(move, 10);
            return;
        }
        if( dir== -1 && pos <= 0){
            //finish the backward move timer
            clearInterval(t);
            // start a new movmtL forward
            /**/
            nth_mvmt +=1;
            if (nth_mvmt < totalcount ){
              dir= +1;
              pos=0;
              t = setInterval(move, 10);
            }
            /**/
            return;
        }
        
        // step in dir direction:
        pos += dir * step;
        box.style.left = pos+'px';
    }
    
};