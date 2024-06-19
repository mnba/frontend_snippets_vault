// Created by Nomeh Uchenna Gabriel


var winW = window.innerWidth;
var winH = window.innerHeight;
var v = 0;
var a = 0;
var ab = 0;
var val = 5;
var maxNe = 0;
var maxNeNum = 0;
var ov,bs,p,t,oe,gc,fe,anim;

function init(){
    ov = 0;
    bs = 0;
    p = 0;
    t = 0;
    oe = 0;
    gc = 0;
    fe = 0;
    anim = 0;
};

function Nomeh(){
a = 0;
ab = 0;
    $("article").css("display", "none");
    
     $("section").animate({height: "100v"}, 300);
    
    $(".nav_all").animate({opacity: 0},1);
    
   $(".svg_all").animate({left: "0px", top: "0px", width: "50px", height: "50px", borderRadius: "0px"}, 300)
    
    
   $(".nav_all").css("background-color", "#fff")
    
   $(".svg_all").css("background-color", "#247")
    
   $(".svg_all").css("fill", "yellow")
    
   $(".nav_all").css("box-shadow", "0px 0px 5px 2px #555")
   
//for Filter Effects    
    $("#svg_fe").css("fill", "#fff")
    $("#svg_fe text").css("stroke", "url(#lgd_fe0)")
    
//for anim
    $("#svg_cHc").css("fill", "white")
    
   $(".p_all").animate({top: "-5px"}, 300)
    
   $("#svgTop").animate({top: "100%", opacity: 0},300)
    
    $("section").css("display", "none");
    
};


nomeh = {
    ans_t: "spacing"
}



function Uchenna(){
    

//specifying the module alignments.
//overview
    var svg_overview = document.getElementById("svg_overview");
    svg_overview.style.left = (winW/2) - 40 + "px";
 
//basic shapes.
var svg_bs = document.getElementById("svg_bs");
    svg_bs.style.left = (winW/4) - 40 + "px";
    
    
//Path.
var svg_path = document.getElementById("svg_path");
    svg_path.style.left = (winW/4) - 40 + "px";
    

    
//Text.
var svg_t = document.getElementById("svg_t");
    svg_t.style.left = (winW/4) - 40 + "px";
    
    
    
//other elements.
var svg_oe = document.getElementById("svg_oe");
    svg_oe.style.left = (winW/4) - 40 + "px";    
    
    
//Gradient &CDATA.
var svg_gc = document.getElementById("svg_gc");
    svg_gc.style.left = (winW/4) - 40 + "px";    
    
//Filter Effects.
var svg_fe = document.getElementById("svg_fe");
    svg_fe.style.left = (winW/4) - 40 + "px";    
    
    
//Animations.
var svg_anim = document.getElementById("svg_anim");
    svg_anim.style.left = (winW/2) - 40 + "px";        
    
    
//challenges.
var svg_cHc = document.getElementById("svg_cHc");
    svg_cHc.style.left = (winW/2) - 40 + "px";        
        

}



function next(){
--a;
++ab;
//ov
if(ov){
if(a > maxNe){
    $(".artOver").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_o").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
    
//bs
if(bs){
if(a > maxNe){
    $(".artbs").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_bs").animate({bottom: "5px", opacity: 1},200);
    
    }
     
    };
    


//path
if(p){
if(a > maxNe){
    $(".artp").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=16px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_p").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
    
    
    
    
   
//Text
if(t){
if(a > maxNe){
    $(".artt").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_t").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
 
    
    
    //Other elements.
if(oe){
if(a > maxNe){
    $(".artoe").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_oe").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
 
    
    

    //Gradient & CDATA.
if(gc){
if(a > maxNe){
    $(".artgc").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_gc").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
    
    
    
//Filter Effects
if(fe){
if(a > maxNe){
    $(".artfe").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=16px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_fe").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };
    
        
    
//Animations
if(anim){
if(a > maxNe){
    $(".artanim").animate({left: "-=100%"}, 300);
    $("#trans_pr").animate({left: "+=32px"})
}
    //2
        
if(ab > maxNeNum){
    $("#bottomBar").animate({bottom: "-45px", opacity: 0},200);
    ab = 0;
    
    $("#qSub_anim").animate({bottom: "5px", opacity: 1},200);
    
    }
    
    };    
    
    
    
    

}






function back(){
++a;
--ab;
if(ov){
if(a < 1){
    $(".artOver").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
else{

      init()
      home()
        
    }};
    
    
    if(bs){
if(a < 1){
    $(".artbs").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
else{
      init()
      home();
        
    }};
    
    if(p){
        if(a < 1){
             $(".artp").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=16px"})
    }
       else{

      init()
      home();
        
           }};
           
           
           
           
           
            
    if(t){
        if(a < 1){
             $(".artt").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
       else{

      init()
      home();
        
           }};
           
           
           
         if(oe){
        if(a < 1){
             $(".artoe").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
       else{

      init()
      home();
        
           }};  
           
           
           
    if(gc){
        if(a < 1){
             $(".artgc").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
       else{

      init()
      home();
        
           }};  
                  
           
           
 if(fe){
        if(a < 1){
             $(".artfe").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=16px"})
    }
       else{

      init()
      home();
        
           }};            
           
           
           
if(anim){
        if(a < 1){
             $(".artanim").animate({left: "+=100%"}, 300);
    $("#trans_pr").animate({left: "-=32px"})
    }
       else{

      init()
      home();
        
           }};                
           
           
           
    };
    
    
    
//home.


function home(){
Uchenna();


$("#cBs, #eBs, #pBs, #rBs").css("stroke", "#0a0");

$("#roadP").css("stroke", "#0a0")

$("#chCover").animate({bottom: "-100px"}, 1);

    $(".svg_all").animate({width: "80px", height: "80px", borderRadius: "100%"}, 300)
    
    
/* Module realignment. */    

//overview.
     $("#nav_overview").animate({left: "0px", top: "100px", width: "100%", height: "120px"}, 600);
     
     
//basic shapes.
     $("#nav_bs").animate({left: "0px", top: "250px", width: "50%", height: "120px"}, 600);
     
     
//Path.
     $("#nav_path").animate({left: "50%", top: "250px", width: "50%", height: "120px"}, 600);
     
     
//Text.
     $("#nav_t").animate({left: "0px", top: "400px", width: "50%", height: "120px"}, 600);
     
     
          
//Other Elements.
     $("#nav_oe").animate({left: "50%", top: "400px", width: "50%", height: "120px"}, 600);
     
     
          
//Gradient and CDATA.
     $("#nav_gc").animate({left: "0%", top: "550px", width: "50%", height: "120px"}, 600);
     
     
     
//Filter Effects.
     $("#nav_fe").animate({left: "50%", top: "550px", width: "50%", height: "120px"}, 600);
         
    
    
//Animations.
     $("#nav_anim").animate({left: "0%", top: "700px", width: "100%", height: "120px"}, 600);    
    
    
//challenges.
     $("#nav_cHc").animate({left: "0%", top: "850px", width: "100%", height: "120px"}, 600);    
        
    
        
    
    $(".nav_all").css("background-color", "transparent")
    
     $(".svg_all").css("background-color", "#0a0")
    
    $(".svg_all").css("fill", "#fff")
    
    $(".nav_all").css("box-shadow", "none")
    
    
    $(".p_all").animate({top: "70px"}, 300)
    
//for fe
 $("#svg_fe text").css("stroke", "url(#lgd_fe)")
    
    
    $("#svgTop").animate({top: "0px", opacity: 1},300)
    
    $("article").animate({height: "0px", top: "-120px"})
    
    $("#bottomBar").animate({bottom: "-45px"}, 200)
    
    $("#sec_overview").animate({height: "100vh"})
    
    $("section").css("display", "none")
    
    
    //The progress bars
    
    $(".prog").animate({ width: "0px", height: "0px", top: "59.5px", left: "-20px", opacity: 0},1)
    
    $("#trans_pr").animate({left: "-20px", opacity: 0},1)


$(".nav_all").animate({opacity: 1}, 100);
$(".nav_all").css("background-color", "transparent") 


//initializing articles...

if(ov){
        $(".artOver").animate({left: "+="+a*-100+"%"},1);
    }
 
if(bs){
        $(".artbs").animate({left: "+="+a*-100+"%"},1);
    }
if(p){
       $(".artp").animate({left: "+="+a*-100+"%"},1);
   }

if(t){
        $(".artt").animate({left: "+="+a*-100+"%"},1);
    }

if(oe){
        $(".artoe").animate({left: "+="+a*-100+"%"},1);
    }

if(gc){
        $(".artgc").animate({left: "+="+a*-100+"%"},1);
    }
    
if(fe){
        $(".artfe").animate({left: "+="+a*-100+"%"},1);
    }

if(anim){
        $(".artanim").animate({left: "+="+a*-100+"%"},1);
    }



$("#p_cHc_one").animate({top: "150vh", left: "-120vw", opacity: 0},1)
    
    
a = 0;
ab = 0;

};


//overview.
 
function overview(){
init();
ov = 4;
maxNe = -ov;
maxNeNum = 2;
Nomeh();
a = 0;
ab = 0;

$(".artOver").animate({opacity: 1},1);
$(".artOver").css("display", "block");
$("#sec_overview").css("display", "block");
 
$("#nav_overview").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artOver").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    //The progress bars
    
    $(".progress_overview, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-54 + "px", opacity: 1}, 100)
    
    
    $("#prog_over1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-54 + "px", opacity: 1}, 300)
    
    $("#prog_over2").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-22 + "px", opacity: 1}, 300)
    
    $("#prog_over3").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+10 + "px", opacity: 1}, 300)
    
    $("#prog_over4").delay(400).animate({ width: "10px", height: "10px", top: "54px", left: winW/2+42 + "px", opacity: 1}, 300)
    
    
};

//Basic Shapes.
function basicShapes(){
init();
bs = 9;
maxNe = -bs;
maxNeNum = 7;
Nomeh();
a = 0;
ab = 0;

$("#cBs, #eBs, #pBs, #rBs").css("stroke", "#247");

$(".artbs").animate({opacity: 1},1);
$(".artbs").css("display", "block");
$("#sec_bs").css("display", "block");
 
$("#nav_bs").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artbs").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    //The progress bars
    
    $(".progress_bs, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-132 + "px", opacity: 1}, 100)
    
    $("#prog_bs1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-132 + "px", opacity: 1}, 300)
    
      $("#prog_bs2").delay(150).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-100 + "px", opacity: 1}, 300)
    
    $("#prog_bs3").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-68 + "px", opacity: 1}, 300)
    
    $("#prog_bs4").delay(250).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-36 + "px", opacity: 1}, 300)
    
    $("#prog_bs5").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-6 + "px", opacity: 1}, 300)
    
      $("#prog_bs6").delay(350).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+26 + "px", opacity: 1}, 300)
    
    $("#prog_bs7").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+58 + "px", opacity: 1}, 300)
    
    $("#prog_bs8").delay(450).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+90 + "px", opacity: 1}, 300)
    
    $("#prog_bs9").delay(500).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+122 + "px", opacity: 1}, 300)
    
    
    
};




//Path.
function path(){
init();
p = 11;
maxNe = -p;
maxNeNum = 9;
Nomeh();
a = 0;
ab = 0;

$("#roadP").css("stroke", "#135");

$(".artp").animate({opacity: 1},1);
$(".artp").css("display", "block");
$("#sec_path").css("display", "block");
 
$("#nav_path").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artp").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    //progress indicators
    
    $(".progress_p, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-86 + "px", opacity: 1}, 100)
    
    $("#prog_p1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-86 + "px", opacity: 1}, 300)
    
      $("#prog_p2").delay(150).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-70 + "px", opacity: 1}, 300)
    
    $("#prog_p3").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-54 + "px", opacity: 1}, 300)
    
    $("#prog_p4").delay(250).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-38 + "px", opacity: 1}, 300)
    
    $("#prog_p5").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-22 + "px", opacity: 1}, 300)
    
      $("#prog_p6").delay(350).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-6 + "px", opacity: 1}, 300)
    
    $("#prog_p7").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+10 + "px", opacity: 1}, 300)
    
    $("#prog_p8").delay(450).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+26 + "px", opacity: 1}, 300)
    
    $("#prog_p9").delay(500).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+42 + "px", opacity: 1}, 300)
    
    $("#prog_p10").delay(500).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+58 + "px", opacity: 1}, 300)
    
    
    $("#prog_p11").delay(500).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+74 + "px", opacity: 1}, 300)
    
};





//Text.
function text(){
init();
t = 5;
maxNe = -t;
maxNeNum = 3;
Nomeh();
a = 0;
ab = 0;

$(".artt").animate({opacity: 1},1);
$(".artt").css("display", "block");
$("#sec_t").css("display", "block");
 
$("#nav_t").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artt").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    //progress indicators
    
    $(".progress_t, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-68 + "px", opacity: 1}, 100)
    
    $("#prog_t1").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-68 + "px", opacity: 1}, 300)
    
    $("#prog_t2").delay(250).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-36 + "px", opacity: 1}, 300)
    
    $("#prog_t3").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-6 + "px", opacity: 1}, 300)
    
      $("#prog_t4").delay(350).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+26 + "px", opacity: 1}, 300)
    
    $("#prog_t5").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+58 + "px", opacity: 1}, 300)
    
    
};






//Other Elements.
function otherElements(){
init();
oe = 7;
maxNe = -oe;
maxNeNum = 5;
Nomeh();
a = 0;
ab = 0;

$(".artoe").animate({opacity: 1},1);
$(".artoe").css("display", "block");
$("#sec_oe").css("display", "block");
 
$("#nav_oe").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artoe").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    // progress indicators
    
    $(".progress_oe, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-100 + "px", opacity: 1}, 100)
    
    
      $("#prog_oe1").delay(150).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-100 + "px", opacity: 1}, 300)
    
    $("#prog_oe2").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-68 + "px", opacity: 1}, 300)
    
    $("#prog_oe3").delay(250).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-36 + "px", opacity: 1}, 300)
    
    $("#prog_oe4").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-6 + "px", opacity: 1}, 300)
    
      $("#prog_oe5").delay(350).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+26 + "px", opacity: 1}, 300)
    
    $("#prog_oe6").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+58 + "px", opacity: 1}, 300)
    
    $("#prog_oe7").delay(450).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+90 + "px", opacity: 1}, 300)

    
    
};



//Gradient and CDATA.
function gradC(){
init();
gc = 6;
maxNe = -gc;
maxNeNum = 4;
Nomeh();
a = 0;
ab = 0;

$(".artgc").animate({opacity: 1},1);
$(".artgc").css("display", "block");
$("#sec_gc").css("display", "block");
 
$("#nav_gc").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artgc").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    //progress indicators
    
   $(".progress_gc, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-86 + "px", opacity: 1}, 100)
    
    
    $("#prog_gc1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-86 + "px", opacity: 1}, 300)
    
    $("#prog_gc2").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-54 + "px", opacity: 1}, 300)
    
    $("#prog_gc3").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-22 + "px", opacity: 1}, 300)
    
    $("#prog_gc4").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+10 + "px", opacity: 1}, 300)
    
    $("#prog_gc5").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+42 + "px", opacity: 1}, 300)
    
    $("#prog_gc6").delay(400).animate({ width: "10px", height: "10px", top: "54px", left: winW/2+74 + "px", opacity: 1}, 300)
    
    
    
    
};




//Filter Effects.
function filterE(){
init();
fe = 19;
maxNe = -fe;
maxNeNum = 17;
Nomeh();
a = 0;
ab = 0;

$(".artfe").animate({opacity: 1},1);
$(".artfe").css("display", "block");
$("#sec_fe").css("display", "block");
 
$("#nav_fe").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artfe").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    //progress indicators
    
    $(".progress_fe, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-150 + "px", opacity: 1}, 100)
    
    
    $("#prog_fe1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-150 + "px", opacity: 1}, 300)
    
    $("#prog_fe2").delay(120).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-134 + "px", opacity: 1}, 300)
    
      $("#prog_fe3").delay(140).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-118 + "px", opacity: 1}, 300)
    
    $("#prog_fe4").delay(160).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-102 + "px", opacity: 1}, 300)
    
    $("#prog_fe5").delay(180).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-86 + "px", opacity: 1}, 300)
    
      $("#prog_fe6").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-70 + "px", opacity: 1}, 300)
    
    $("#prog_fe7").delay(220).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-54 + "px", opacity: 1}, 300)
    
    $("#prog_fe8").delay(240).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-38 + "px", opacity: 1}, 300)
    
    $("#prog_fe9").delay(260).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-22 + "px", opacity: 1}, 300)
    
      $("#prog_fe10").delay(280).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-6 + "px", opacity: 1}, 300)
    
    $("#prog_fe11").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+10 + "px", opacity: 1}, 300)
    
    $("#prog_fe12").delay(320).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+26 + "px", opacity: 1}, 300)
    
    $("#prog_fe13").delay(340).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+42 + "px", opacity: 1}, 300)
    
    $("#prog_fe14").delay(360).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+58 + "px", opacity: 1}, 300)
    
    
    $("#prog_fe15").delay(380).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+74 + "px", opacity: 1}, 300)
    
    $("#prog_fe16").delay(400).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+90 + "px", opacity: 1}, 300)
    
      $("#prog_fe17").delay(420).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+106 + "px", opacity: 1}, 300)
    
    $("#prog_fe18").delay(440).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+122 + "px", opacity: 1}, 300)
    
    $("#prog_fe19").delay(460).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+138 + "px", opacity: 1}, 300)
    
    
};




//Animations.
function animation(){
init();
anim = 6;
maxNe = -anim;
maxNeNum = 4;
Nomeh();
a = 0;
ab = 0;

$(".artanim").animate({opacity: 1},1);
$(".artanim").css("display", "block");
$("#sec_anim").css("display", "block");
 
$("#nav_anim").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********
    
    $(".artanim").animate({height: "80vh", top: "40px", opacity: 1}, 300);
    
    $("#bottomBar").delay(1000).animate({bottom: "0px"}, 200)
    
    
    
    
    $(".progress_anim, #trans_pr").delay(1000).animate({opacity: 0}, 300);
    
    
    $("#trans_pr").delay(1000).animate({left: winW/2-86 + "px", opacity: 1}, 100)
    
    $("#prog_anim1").delay(100).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-86 + "px", opacity: 1}, 300)
    
      $("#prog_anim2").delay(150).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-54 + "px", opacity: 1}, 300)
    
    $("#prog_anim3").delay(200).animate({ width: "12px", height: "12px", top: "54px", left: winW/2-22 + "px", opacity: 1}, 300)
    
    $("#prog_anim4").delay(250).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+10 + "px", opacity: 1}, 300)
    
    $("#prog_anim5").delay(300).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+42 + "px", opacity: 1}, 300)
    
      $("#prog_anim6").delay(350).animate({ width: "12px", height: "12px", top: "54px", left: winW/2+74 + "px", opacity: 1}, 300)
    
};





//challenges.
function challenges(){
Nomeh();

$("#sec_cHc").css("display", "block");
 
$("#nav_cHc").animate({opacity: 1},1)

    //********
  $(".nav_all").animate({left: "0px", top: "0px", width: "100%", height: "50px"},300)  
    //********

$(".dch").delay(500).animate({top: "45vh", opacity: 1},300);

$("#cHc_home").delay(700).animate({bottom: "0px"})

$("#p_cHc_one").delay(600).animate({top: "65px", left: "5%", opacity: 1},300)

$(".chc_pr").animate({opacity: 0},1)


};

function cHc_home(){
    $(".dch").animate({top:"-60px",opacity: 0},100)
    
$("#cHc_home").animate({bottom: "-40px"},100)


    home()

}

function setter1(){
    setInterval(switch1, 10)
}

function setter2(){
    setInterval(switch2, 10)
}


function caller1(){
$(".no2, .no3").css("display", "none")

$("#cHc1").animate({top: "0px", opacity: 1},300)

$("#qSub_cHc1").delay(1000).animate({bottom: "5px", opacity: 1},200)
    
$(".chc_pr").delay(600).animate({opacity: 1},100)


}


function caller2(){
$(".no1, .no3").css("display", "none")
$("#cHc1").animate({top: "-100vh", opacity: 0},300)


$("#cHc2").animate({top: "0px", opacity: 1},300)

    $("#qSub_cHc2").css("display", "block")

$("#qSub_cHc2").delay(1000).animate({bottom: "5px", opacity: 1},200)
$(".chc_pr").delay(600).animate({opacity: 1},100)


}


function caller3(){
$(".no1, .no2").css("display", "none")
$("#cHc2").animate({top: "-100vh", opacity: 0},300)


$("#cHc3").animate({top: "0px", opacity: 1},300)

    $("#qSub_cHc3").css("display", "block")

$("#qSub_cHc3").delay(1000).animate({bottom: "40vh", opacity: 1},200)
$(".chc_pr").animate({opacity: 0},1)


}




function start(){

$("#nav_cHc, #j").css("display", "none")
$("#cHc_home").animate({bottom: "-40px"},100)

stable()
switch1()
illus()
}

function illus(){
    $(".dch").animate({width: "200vw", height: "200vh", opacity: 0, left: "-50vw", top: "-50vh"}, 300)
    
    $("#p_cHc_one").animate({top: "150vh"}, 300)
    
}



function stable(){
    setInterval(switch_main, 10)
}

function pr_stable(){
    clearInterval(switch1)
    clearInterval(switch2)
}





var sw = 2500;
function switch_main(){

if(sw < 0){
    clearInterval(switch_main)
}else{
    sw--;
}
    
    switch(sw){
        case 2495:
        
            $("#cTrans_r1, #cTrans_wait").animate({top: "40vh"},300)  
            $(".no1").css("display", "block")
            $("#cTrans_r1").delay(1000).animate({width: "40%", opacity: 1},300)
        break;
        case 2410:
            $("#cTrans_r1, #cTrans_wait").addClass("rotorB")
            $("#ctr").addClass("rotorA")
        break;
        case 2401:
            $("#cTrans_wait, #cTrans_r1").css("display", "none")
        break;
        case 2400:
            caller1()
            $("#cTrans_r1").css("display", "none")
            $("#chc2_pr").animate({opacity: 0},300) 
        break;
        case 2350:
            setter1()
        break;
        case 1745:
            $("#cTrans_r2").delay(1000).animate({width: "40%", opacity: 1},300)
        break;
        case 1615:
             $("#cTrans_r2, #cTrans_corr1, #cTrans_wr1").addClass("rotorB")
            $("#ctr2").addClass("rotorA")
        
        break;
        case 1601:
$("#cTrans_r2, #cTrans_corr1, #cTrans_wr1").css("display", "none")
        break;
        case 1600:                  
            caller2()
           
            $("#chc1_pr").animate({opacity: 0},300)
            $("#chc2_pr").animate({opacity: 1},300)
            $("#chc2_pr").css("display", "block")
        break;
        case 1400:
            setter2()
        break;
        case 800:
            $(".no3").css("display", "block")
            $("#cTrans_r3").delay(1000).animate({width: "40%", opacity: 1},300)
        break;
        case 665:
            $("#cTrans_r3, #cTrans_corr2, #cTrans_wr2").addClass("rotorB")
            $("#ctr3").addClass("rotorA")
        break;
        case 645:
$("#cTrans_r3, #cTrans_corr2, #cTrans_wr2").css("display", "none")
        break;
        case 640:
            caller3()
        break;
        case 0:
           cHome1()
        break;
    }
    
}




function CHC1(){
$("#chc1_pr").css("display", "none")
    var c1 = document.getElementById("chc_3a");

$("#qSub_cHc1").animate({bottom: "-50px", opacity: 0},200)

    if(c1.checked){
        $("#cHc1").animate({top: "-100vh", opacity: 0}, 300)
        $("#cTrans_r2, #cTrans_corr1").css("display", "block")
        $("#cTrans_r2, #cTrans_corr1").animate({top: "40vh"},300)
        
        
        $("#vR_r1_corr").css("display", "block")
    }
    else{
          $("#cHc1").animate({top: "-100vh", opacity: 0}, 300)
        $("#cTrans_r2, #cTrans_wr1").css("display", "block")
        $("#cTrans_r2, #cTrans_wr1").animate({top: "40vh"},300)
        if(navigator.vibrate){
            navigator.vibrate(500)
        }
        
        $("#vR_r1_wr").css("display", "block")
    }
    
    sw = 1750;
    sw1 = 0;
    pr_stable()
    
    
  if(document.getElementById("chc_3a").checked){
      $("#val_r1").html("Uniform Resource Identifier")
  }  
    
 else if(document.getElementById("chc_2a").checked){
      $("#val_r1").html("Unity Resource Identity")
  }   
  
 else if(document.getElementById("chc_1a").checked){
      $("#val_r1").html("Uniform Resource Locator")
  }   
  
  else{
      $("#val_r1").html("No Answer")
  }
}






function CHC2(){
$("#chc2_pr").css("display", "none")
    var c2 = document.getElementById("chc_1b");

$("#qSub_cHc2").animate({bottom: "-50px", opacity: 0},200)

$("#cHc2").animate({top: "-100vh", opacity: 0}, 300)
    if(c2.value == "feMorphology"){
     $("#cTrans_r3, #cTrans_corr2").css("display", "block")
        $("#cTrans_r3, #cTrans_corr2").animate({top: "40vh"},300)
        
        $("#vR_r2_corr").css("display", "block")
        
    }else{
    $("#cHc2").animate({top: "-100vh", opacity: 0}, 300)
        $("#cTrans_r3, #cTrans_wr2").css("display", "block")
        $("#cTrans_r3, #cTrans_wr2").animate({top: "40vh"},300)
        if(navigator.vibrate){
            navigator.vibrate(500)
        
    }
    
    $("#vR_r2_wr").css("display", "block")
}

if(c2.value.length > 0){
    $("#val_r2").html(c2.value)
}else{
    $("#val_r2").html("No Answer")
}

$("#chc_1b").blur();
sw = 801;
sw2 = 0;
pr_stable()
}










var sw1 = 600;

function switch1(){

if(sw1 < 0){
    clearInterval(switch1)
}else{
    sw1--;
}
    
    switch(sw1){
        case 1:
            CHC1()
        break;
    }
    
    
    
    
    var c1 = document.getElementById("chc1_pr");
    
    c1.style.width = sw1/6 + "%";
    
}



var sw2 = 600;

function switch2(){

if(sw2 < 0){
    clearInterval(switch2)
}else{
    sw2--;
}
    
    switch(sw2){
        case 1:
            CHC2()
        break;
    }
    
    
    
    
    var c2 = document.getElementById("chc2_pr");
    
    c2.style.width = sw2/6 + "%";
    
}



function cHome(){
    sw = 5;
}


function cHome1(){

    $(".no1, .no2, .no3").css("display", "none")
    $(".cTrans").animate({width: "0px", opacity: 0},1)


$("#cHc1, #cHc2, #cHc3").animate({top: "100vh", opacity: 0},300)

    $("#qSub_cHc1, #qSub_cHc2, #qSub_cHc3").css("display", "none")

$(".chc_pr").animate({opacity: 0},1)

    $("#nav_cHc, #j").css("display", "block")
$("#cHc_home").delay(700).animate({bottom: "0px"},100)
    
    $("#div_cHc0").css("z-index", "50000")
    
    $(".dch").animate({width: "80%", height: "60px", opacity: 1, left: "10%", top: "45vh"}, 300)
    $("#p_cHc_one").html("Challenge Completed!")
    $("#p_cHc_one").animate({top: "65px"}, 300)   

}


function result(){
    $(".dch").animate({top: "2vh", height: "96vh", left: "2vw", width: "96vw"}, 300)
    
    $("#vr_b_c, .vrh").css("display", "block")
    
    $(".dch").css("box-shadow", "0px 0px 4px 2px #ccc")
    
    $("#vR, #j").css("display", "none")
    
    $("#div_cHc0").css("background-color", "#fff")
    
    $("#div_cHc0").css("color", "#666")
    
    $(".dch").css("animation-play-state", "paused")
    
    $("#cHc_home").animate({bottom: "-40px"},100)
    
}


function _result(){
    $(".dch").animate({top: "45vh", height: "60px", left: "10%", width: "80%"}, 300)
    
    $("#vr_b_c, .vrh").css("display", "none")
    
    $(".dch").css("box-shadow", "0px 0px 4px 2px #ddd")
    
    $("#vR, #j").css("display", "block")
    
    $("#div_cHc0").css("background-color", "#135")
    
    $("#div_cHc0").css("color", "#fff")
    
    $(".dch").css("animation-play-state", "running")
    
    $("#cHc_home").delay(700).animate({bottom: "0px"},100)
}



function Qts(inp){ 
    if(inp.value.match(/\s/g)){ 
        inp.value=inp.value.replace(/\s/g,'');
        } 
    }
    
    
    
    
    
    
    
//window.onload.

window.onload = function(){

var j = document.getElementById("j");
var ab = 0;

$("#coinPop").delay(200).animate({top: winH/2-30 + "px"},300);
$("#coinPop").delay(2500).animate({top: "+=20px"},100);
$("#coinPop").animate({top: "-100px"},300)

$("#fCover").delay(200).animate({top:  "0px"},30)
$("#fCover").delay(3000).animate({top: "-150vh"},30)

$("#j").delay(200).animate({width: "50%", height: "80px", right: "25%", top: winH/2-110 + "px"},300)

$("#j").delay(2650).animate({width: "60px", height: "50px", right: "0px", top: "0px"},300)


$("#poea1").animate({left: winW/2-82+"px"});
$("#poea2").animate({left: winW/2+5+"px"});

$("#poea_svg").animate({left: winW/2-92.5+"px", width: "170px"});


Uchenna();
    
    
$("#form_t").submit(function(form_t){
    form_t.preventDefault();
    $("#Q_t1").blur();
})
 
$("#form_chc1").submit(function(form_cHc){
    form_cHc.preventDefault();
    $("#chc_1b").blur();
})


};

//End of window.onload.





function falsify(){
    var Qo1 = document.getElementById("Q_o1");
var Qo2 = document.getElementById("Q_o2");
var Qo3 = document.getElementById("Q_o3");
    Qo1.checked = false;
    Qo2.checked = false;
    Qo3.checked = false;
    
    
    //bs
    var Qbs1 = document.getElementById("Q_bs1");
var Qbs2 = document.getElementById("Q_bs2");
var Qbs3 = document.getElementById("Q_bs3");
    Qbs1.checked = false;
    Qbs2.checked = false;
    Qbs3.checked = false;
    
    //p
var Qp1 = document.getElementById("Q_p1");
var Qp2 = document.getElementById("Q_p2");
    Qp1.checked = false;
    Qp2.checked = false;   
    
    //t
    var Qt1 = document.getElementById("Q_t1");
    Qt1.value = "";
    
    //oe
if(poea1_now){
    $("#poea1").animate({bottom: "60px", left: winW/2-82+"px"},350);
        poea1_now = 0;
}

if(poea2_now){
    $("#poea2").animate({bottom: "60px", left: winW/2+5+"px"},350);
        poea1_now = 0;
}
    
//gc
var Qgc1 = document.getElementById("Q_gc1");
var Qgc2 = document.getElementById("Q_gc2");
    Qgc1.checked = false;
    Qgc2.checked = false;

//fe
var Qfe1 = document.getElementById("Q_fe1");
var Qfe2 = document.getElementById("Q_fe2");
var Qfe3 = document.getElementById("Q_fe3");
var Qfe4 = document.getElementById("Q_fe4");
    Qfe1.checked = false;
    Qfe2.checked = false;
    Qfe3.checked = false;
    Qfe4.checked = false;
    
    
    
    
//anim
var Qanim1 = document.getElementById("Q_anim1");
var Qanim2 = document.getElementById("Q_anim2");
var Qanim3 = document.getElementById("Q_anim3");

    Qanim1.checked = false;
    Qanim2.checked = false;
    Qanim3.checked = false;
    
    
};

var v = 0;
//overview.
function ovChall(){

var Qo1 = document.getElementById("Q_o1");
var Qo2 = document.getElementById("Q_o2");
var Qo3 = document.getElementById("Q_o3");

if(Qo2.checked){v+=val;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qo_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qo_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qo_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qo_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_o").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qo_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qo_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qo_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qo_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}





//basic shapes.

function bsChall(){

var Qbs1 = document.getElementById("Q_bs1");
var Qbs2 = document.getElementById("Q_bs2");
var Qbs3 = document.getElementById("Q_bs3");

if(Qbs1.checked){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qbs_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qbs_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qbs_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qbs_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_bs").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qbs_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qbs_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qbs_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qbs_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}


//path.

function pChall(){

var Qp1 = document.getElementById("Q_p1");
var Qp2 = document.getElementById("Q_p2");

if(Qp2.checked){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qp_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qp_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qp_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qp_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_p").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qp_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qp_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qp_try").animate({left: "57%", opacity: 1}, 300);
    ;$("#Qp_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}



//text.

function tChall(){

var Qt1 = document.getElementById("Q_t1");

if(Qt1.value.toLowerCase() == nomeh.ans_t){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qt_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qt_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qt_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qt_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_t").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qt_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qt_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qt_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qt_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}




//other Elements.

function oeChall(){

if(poea1_now){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qoe_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qoe_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qoe_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qoe_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_oe").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qoe_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qoe_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qoe_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qoe_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}

//oe
var poea1_now = 0;
function poea1(){

    if(!poea1_now){
        $("#poea1").animate({bottom: winH-249+"px", left: "30px"},350);
        poea1_now = 1;
    }
    else{
        $("#poea1").animate({bottom: "60px", left: winW/2-82+"px"},350);
        poea1_now = 0;
    };
    
    
    //2nd
    
    if(poea2_now){
        $("#poea2").animate({bottom: "60px", left: winW/2+5+"px"},350);
        poea2_now = 0;
    }
    
    
    
    
};


var poea2_now = 0;
function poea2(){

    if(!poea2_now){
        $("#poea2").animate({bottom: winH-249+"px", left: "30px"},350);
        poea2_now = 1;
    }
    else{
        $("#poea2").animate({bottom: "60px", left: winW/2+5+"px"},350);
        poea2_now = 0;
    };
    
    
    //2nd
    
    if(poea1_now){
        $("#poea1").animate({bottom: "60px", left: winW/2-82+"px"},350);
        poea1_now = 0;
    }
    
};



//gc

function gcChall(){

var Qgc1 = document.getElementById("Q_gc1");
var Qgc2 = document.getElementById("Q_gc2");

if(Qgc2.checked){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qgc_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qgc_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qgc_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qgc_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_gc").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qgc_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qgc_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qgc_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qgc_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}






//fe

function feChall(){

var Qfe1 = document.getElementById("Q_fe1");
var Qfe2 = document.getElementById("Q_fe2");
var Qfe3 = document.getElementById("Q_fe3");
var Qfe4 = document.getElementById("Q_fe4");

if(Qfe1.checked && Qfe3.checked && !Qfe2.checked && !Qfe4.checked){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qfe_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qfe_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qfe_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qfe_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_fe").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qfe_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qfe_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qfe_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qfe_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}




//anim

function animChall(){

var Qanim1 = document.getElementById("Q_anim1");
var Qanim2 = document.getElementById("Q_anim2");
var Qanim3 = document.getElementById("Q_anim3");


if(Qanim1.checked){v+=5;
    $("#chCover").animate({bottom: "0px"}, 1)
    $("#Qanim_cont").animate({left: "57%", opacity: 1}, 300);
    $("#Qanim_cont").delay(1000).animate({left: "3%", width: "94%", bottom: "5px"}, 300);
    
    
    $("#Qanim_corr").animate({left: "3%", opacity: 1}, 300);
    $("#Qanim_corr").delay(1000).animate({left: "-100%", opacity: 0}, 300);
    j.value = v + " Coins";

$("#qSub_anim").animate({bottom: "-65px", opacity: 0},200);

 $("#chCover").animate({bottom: "-150%"}, 0);

falsify();
}


else{
    $("#chCover").animate({bottom: "0px"}, 1);
    $("#Qanim_wr").animate({left: "3%", opacity: 1}, 300);
    $("#Qanim_wr").delay(1000).animate({left: "-100%"}, 300);
    $("#Qanim_try").animate({left: "57%", opacity: 1}, 300);
    $("#Qanim_try").delay(1000).animate({width: "94%", left: "3%"}, 300)
if(navigator.vibrate){
    navigator.vibrate(500);
    }
  }
}





/* Try Again All */
function tryAgain(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qo_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}


function tryAgain2(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qbs_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}


function tryAgain3(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qp_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}


function tryAgain4(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qt_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}



function tryAgain5(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qoe_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}



function tryAgain6(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qgc_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}


function tryAgain7(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qfe_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}


function tryAgain8(){if(val>1){val--};
falsify();

$("#chCover").animate({bottom: "-150%"}, 0);
$("#Qanim_try").animate({left: "150%", width: "40%", opacity: 0}, 300);


}




/* Continue All */
function cont(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qo_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont2(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qbs_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont3(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qp_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};



function cont4(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qt_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont5(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qoe_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont6(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qgc_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont7(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qfe_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};


function cont8(){
falsify();
home();
    $("#bottomBar").animate({bottom: "-45px", opacity: 1}, 300);
    
$("#Qanim_cont").animate({left: "150%", width: "40%", bottom: "60px", opacity: 0}, 1);


};




var nv_st = 0;
function navigate(){
    if(!nv_st){
        $("#j").css("background", "#fff")
        $("#j path").css("stroke", "#777")
        
        $("#j_nav").animate({width: "170px", height: "170px", opacity: 1}, 150)
        $("#fCover").animate({top: "0px"},1)
        
        
        
        $("#j").css("box-shadow", "0px 0px 6px 2px #777")
        $("#j").animate({width: "35px", height: "35px", top: "7.25px", right: "7.25px", borderRadius: "100%"}, 150)
        
        
        nv_st = 1;
    }
    
    
    else{
        $("#j").css("background", "#fff")
        $("#j path").css("stroke", "#777")
        
        $("#j_nav").animate({width: "50px", height: "50px", opacity: 0}, 150)
        $("#fCover").animate({top: "-150vh"},1)
        
        
        
        $("#j").css("box-shadow", "none")
        $("#j").animate({width: "50px", height: "50px", top: "0px", right: "0px", borderRadius: "0px"}, 150)
        
        nv_st = 0;
    }
}

function fcc(){
    $("#j").css("background", "#fff")
        $("#j path").css("stroke", "#777")
        
        $("#j_nav").animate({width: "50px", height: "50px", opacity: 0}, 150)
        $("#fCover").animate({top: "-150vh"},1)
        
        
        $("#j").css("box-shadow", "none")
        $("#j").animate({width: "50px", height: "50px", top: "0px", right: "0px", borderRadius: "0px"}, 150)
        
        nv_st = 0;
}

function info(){
    
    $("#_n1Div").animate({width: "96%", left: "2%", opacity: 1}, 300)
    
    $("#_n1Div").animate({height: "96vh"}, 100)
    
    $("#i_f").delay(400).animate({left: "0px", opacity: 1}, 300)
    
    $("#info").delay(600).animate({top: "65px", opacity: 1},300)
    
    
    
    $("#_cv_").css("display", "block")
    
}

function faq(){
    
    $("#_n2Div").animate({width: "96%", left: "2%", opacity: 1}, 300)
    
    $("#_n2Div").animate({height: "96vh"}, 100)
    
    $("#f_aq").delay(400).animate({left: "0px", opacity: 1}, 300)
    
     
    $("#faq").delay(600).animate({top: "65px", opacity: 1},300)
    
    
    $("#_cv_").css("display", "block")
    
}

function setting(){
    
    $("#_n3Div").animate({width: "96%", left: "2%", opacity: 1}, 300)
    
    $("#_n3Div").animate({height: "96vh"}, 100)
    
    $("#s_et").delay(400).animate({left: "0px", opacity: 1}, 300)
    
    
    $("#set").delay(600).animate({top: "65px", opacity: 1},300)
    
    $("#_cv_").css("display", "block")
    
}



// return nav

function _info(){


    $("#_n1Div").animate({width: "0%", left: "50%", opacity: 0}, 300)
     
    $("#_n1Div").animate({height: "0vh"}, 100)

    $("#i_f").animate({left: "-100vw", opacity: 0}, 300)
    
    $("#info").animate({top: "-100%", opacity: 0},300)
    
    
    
    $("#_cv_").css("display", "none")
    
}



function _faq(){


    $("#_n2Div").animate({width: "0%", left: "50%", opacity: 0}, 300)
     
    $("#_n2Div").animate({height: "0vh"}, 100)

    $("#f_aq").animate({left: "-100vw", opacity: 0}, 300)
    
    $("#faq").animate({top: "-100%", opacity: 0},300)
    
    
    
    $("#_cv_").css("display", "none")
    
}


function _setting(){


    $("#_n3Div").animate({width: "0%", left: "50%", opacity: 0}, 300)
     
    $("#_n3Div").animate({height: "0vh"}, 100)

    $("#s_et").animate({left: "-100vw", opacity: 0}, 300)
    
    $("#set").animate({top: "-100%", opacity: 0},300)
    
    
    
    $("#_cv_").css("display", "none")
    
}




function fs_sm(){
    $("article *").css("font-size", ".9em")
    
    $("article h2").css("font-size", "27px")
    
    $("#fs_sm").css("border", "2px dotted purple")
    $("#fs_bi").css("border","none")
    $("#fs_no").css("border", "none")
}

function fs_no(){
    $("article *").css("font-size", "1em")
    
    $("article h2").css("font-size", "27px")
    
    $("#fs_no").css("border", "2px dotted purple")
    $("#fs_sm").css("border","none")
    $("#fs_bi").css("border", "none")

}

function fs_bi(){
    $("article *").css("font-size", "1.1em")
    
    $("article h2").css("font-size", "27px")
    
    $("#fs_bi").css("border", "2px dotted purple")
    $("#fs_sm").css("border","none")
    $("#fs_no").css("border", "none")
}




function anim_en(){


    $("#anim_en").css("border", "2px dotted purple")
    $("#anim_di").css("border","none")
     
    $("#an_1a, .circ animateMotion, #tre animateMotion").attr("repeatCount", "indefinite")
    
    $("#p_anim0, #tre").css("animation-play-state", "running")
}



function anim_di(){

    $("#anim_di").css("border", "2px dotted purple")
    $("#anim_en").css("border","none")
     
    $("#an_1a, .circ animateMotion, #tre animateMotion").attr("repeatCount", "0")
    
    $("#p_anim0, #tre").css("animation-play-state", "paused")
}















