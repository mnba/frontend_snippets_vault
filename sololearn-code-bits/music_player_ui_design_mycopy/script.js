// Created by ‎Ashwin Maurya

alert("Hi! \n This is an UI Design of an Music player which has been designed my me.\n Though some features may be similar to other music player apps ,but I have given my best");
alert("Please explore it ,due to some time shortage I have made this much only but I will soon post its updated version with more features\n Dont Forget the ⚪Light Mode⚫")

window.onload= function(){
document.querySelector("#lo")
.style.display ="block";
document.getElementById("main").style.display="none";
         }

function f1(){
document.getElementById("main").style.display="block";
document.querySelector("#lo").style.display ="none";
ScrollReveal().reveal('#main', {delay: 300});
      } 
     /*
function menu(){
document.getElementById("menu").style.width="80%";

document.getElementById("menu").style.boxShadow="0 0 10px 5px grey"; 
document.getElementById("main").style.filter="blur(1.5px)"; 
      }
function back(){
document.getElementById("menu").style.width="0%";
document.getElementById("main").style.filter="blur(0px)";  
document.getElementById("menu").style.boxShadow="0 0 0px 0px grey"; 
      }

*/
function feed(){
    alert("Maybe next time😅")
}
function language(){
   document.getElementById("lang").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("menu").style.display="none";
    
}
function langm(){
    document.getElementById("lang").style.display="none";
document.getElementById("menu").style.display="block";
document.getElementById("main").style.display="block";
}
function don(){
   document.getElementById("downloads").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("menu").style.display="none";
    
}
function back2(){
    document.getElementById("downloads").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("menu").style.display="block";
}
    
function really(){
    alert("Really!🥴")
}
function sett(){
    //document.getElementById("set").style.display="block";
//document.getElementById("hide").style.display="block";
document.getElementById("hide").style.transition = ".2s";
    document.getElementById("hide").style.width = "100vw";
    document.getElementById("hide").style.height = "100vh";
}
function st(){
    document.getElementById("downloads").style.display="none";
    document.getElementById("msetting").style.display="block";


}

function hide(){
document.getElementById("hide").style.transition = "0.2s";
    document.getElementById("hide").style.width = "0";
    document.getElementById("hide").style.height = "0";
}
function sett1(){
    //document.getElementById("set").style.display="block";
//document.getElementById("hide").style.display="block";
document.getElementById("hid").style.transition = ".2s";
    document.getElementById("hid").style.width = "100vw";
    document.getElementById("hid").style.height = "100vh";
}
function hid(){
document.getElementById("hid").style.transition = "0.2s";
    document.getElementById("hid").style.width = "0";
    document.getElementById("hid").style.height = "0";
}
function stt(){
    document.getElementById("fmusic").style.display="none";
    document.getElementById("msetting").style.display="block";

document.getElementById("main").style.display="none";
}

function mset(){
    document.getElementById("msetting").style.display="none";
document.getElementById("menu").style.display="block";
document.getElementById("main").style.display="block";
}
function settings(){
    
    document.getElementById("msetting").style.display="block";

document.getElementById("main").style.display="none";
document.getElementById("menu").style.display="none";
}



function red1(){
document.querySelector(".red1").style.color="red";
document.querySelector(".red2").style.color="grey";
document.querySelector(".red3").style.color="grey";
document.querySelector(".red4").style.color="grey";

document.querySelector("#yel1").style.color="red";
document.querySelector("#yel2").style.color="grey";
document.querySelector("#yel3").style.color="grey";
document.querySelector("#yel4").style.color="grey";

}
function red2(){
    document.querySelector(".red1").style.color="grey";
document.querySelector(".red2").style.color="red";
document.querySelector(".red3").style.color="grey";
document.querySelector(".red4").style.color="grey";

document.querySelector("#yel1").style.color="grey";
document.querySelector("#yel2").style.color="red";
document.querySelector("#yel3").style.color="grey";
document.querySelector("#yel4").style.color="grey";

}
   
function red3(){
    document.querySelector(".red1").style.color="grey";
document.querySelector(".red2").style.color="grey";
document.querySelector(".red3").style.color="red";
document.querySelector(".red4").style.color="grey";

document.querySelector("#yel1").style.color="grey";
document.querySelector("#yel2").style.color="grey";
document.querySelector("#yel3").style.color="red";
document.querySelector("#yel4").style.color="grey";


}
    
function red4(){
    document.querySelector(".red1").style.color="grey";
document.querySelector(".red2").style.color="grey";
document.querySelector(".red3").style.color="grey";
document.querySelector(".red4").style.color="red";

document.querySelector("#yel1").style.color="grey";
document.querySelector("#yel2").style.color="grey";
document.querySelector("#yel3").style.color="grey";
document.querySelector("#yel4").style.color="red";


}


function dark() {
   document.getElementById("card5").style.display="none";
document.getElementById("card6").style.display="block"; //document.querySelector("#word1").innerHTML= 'Light Mode';
document.getElementById("main").style.backgroundColor="white";

document.getElementById("songlist").style.color="black";
document.getElementById("head1").style.color="black";
document.getElementById("head2").style.color="black";
document.getElementById("menu").style.backgroundColor="white";
document.getElementById("msetting").style.backgroundColor="white";
document.getElementById("shufflebox").style.backgroundColor="white";
document.querySelector("body").style.backgroundColor="white";

document.getElementById("onli").style.backgroundColor="white";
document.getElementById("se").style.backgroundColor="white";
document.getElementById("li").style.backgroundColor="white";
document.getElementById("search").style.backgroundColor="white";
document.getElementById("search").style.color="black";
document.querySelector(".search").style.fill="#000";
document.querySelector("#downloads").style.backgroundColor="white";
document.querySelector("#fmusic").style.backgroundColor="white";
document.getElementById("player").style.color="black";
document.getElementById("menu").style.color="black";
document.getElementById("ar").style.color="black";
document.getElementById("ar1").style.color="black";
document.getElementById("ar2").style.color="black";
document.getElementById("ar3").style.color="black";
document.getElementById("ar4").style.color="black";
document.getElementById("ar5").style.color="black";

document.getElementById("hh1").style.border=".1px solid black";
document.getElementById("hh2").style.border=".1px solid black";
document.getElementById("hh3").style.border=".1px solid black";
document.getElementById("hh4").style.border=".1px solid black"; 
document.getElementById("hh5").style.border=".1px solid black";

document.querySelector("#info").style.color="black";
document.querySelector("#info1").style.color="black";
document.querySelector("#info2").style.color="black";
document.querySelector("#info3").style.color="black";
document.querySelector("#info3-4").style.color="black";
document.querySelector("#info4").style.color="black";
document.querySelector("#info5").style.color="black";
document.querySelector("#info6").style.color="black";
document.querySelector("#info7").style.color="black";
document.querySelector("#info8").style.color="black";
document.querySelector("#info9").style.color="black";
document.querySelector("#info10").style.color="black";
document.querySelector("#info11").style.color="black";
document.querySelector("#info12").style.color="black";
document.querySelector("#info13").style.color="black";
document.querySelector("#info14").style.color="black";


document.getElementById("img1").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img2").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img3").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img3-4").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img4").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img5").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img6").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img7").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img8").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img9").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img10").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img11").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img12").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img13").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img14").style.boxShadow="4px 4px 1px #212f3d";
document.getElementById("img15").style.boxShadow="4px 4px 1px #212f3d";

document.getElementById("img1").style.border="1px solid grey";
document.getElementById("img2").style.border="1px solid grey";
document.getElementById("img3").style.border="1px solid grey";
document.getElementById("img3-4").style.border="1px solid grey";
document.getElementById("img4").style.border="1px solid grey";
document.getElementById("img5").style.border="1px solid grey";
document.getElementById("img6").style.border="1px solid grey";
document.getElementById("img7").style.border="1px solid grey";
document.getElementById("img8").style.border="1px solid grey";
document.getElementById("img9").style.border="1px solid grey";
document.getElementById("img10").style.border="1px solid grey";
document.getElementById("img11").style.border="1px solid grey";
document.getElementById("img12").style.border="1px solid grey";
document.getElementById("img13").style.border="1px solid grey";
document.getElementById("img14").style.border="1px solid grey";
document.getElementById("img15").style.border="1px solid grey";

document.getElementById("plus").style.boxShadow="0 0 10px 1px #000";

document.getElementById("h3p1").style.color="black";
document.getElementById("h3p2").style.color="black";
document.getElementById("h3p3").style.color="black";
document.getElementById("h3p4").style.color="black";
document.getElementById("h3p5").style.color="black";

document.getElementById("g").style.backgroundColor="white";

document.getElementById("r1").style.color="black";
document.getElementById("arti").style.color="black";
document.getElementById("albu").style.color="black";
document.getElementById("playl").style.color="black";

document.getElementById("lang").style.backgroundColor="white";
document.getElementById("pa").style.color="black";

}


function light() {
   document.getElementById("card5").style.display="block";
document.getElementById("card6").style.display="none";

document.getElementById("main").style.backgroundColor="black";

document.getElementById("songlist").style.color="white";
document.getElementById("head1").style.color="white";
document.getElementById("head2").style.color="white";
document.getElementById("menu").style.backgroundColor="#212f3d";
document.getElementById("msetting").style.backgroundColor="#000";
document.getElementById("shufflebox").style.backgroundColor="black";
document.querySelector("body").style.backgroundColor="black";
document.getElementById("search").style.backgroundColor="#4a4a4a";
document.getElementById("search").style.color="white";
document.querySelector(".search").style.fill="white";
document.getElementById("onli").style.backgroundColor="black";
document.getElementById("se").style.backgroundColor="black";
document.getElementById("li").style.backgroundColor="black";

document.querySelector("#downloads").style.backgroundColor="black";
document.querySelector("#fmusic").style.backgroundColor="#000";
document.getElementById("player").style.color="white";
document.getElementById("menu").style.color="white";
document.getElementById("ar").style.color="white";
document.getElementById("ar1").style.color="white";
document.getElementById("ar2").style.color="white";
document.getElementById("ar3").style.color="white";
document.getElementById("ar4").style.color="white";
document.getElementById("ar5").style.color="white";

document.getElementById("hh1").style.border=".1px solid white";
document.getElementById("hh2").style.border=".1px solid white";
document.getElementById("hh3").style.border=".1px solid white";
document.getElementById("hh4").style.border=".1px solid white";
document.getElementById("hh5").style.border=".1px solid white";

document.querySelector("#info").style.color="white";
document.querySelector("#info1").style.color="white";
document.querySelector("#info2").style.color="white";
document.querySelector("#info3").style.color="white";
document.querySelector("#info3-4").style.color="white";
document.querySelector("#info4").style.color="white";
document.querySelector("#info5").style.color="white";
document.querySelector("#info6").style.color="white";
document.querySelector("#info7").style.color="white";
document.querySelector("#info8").style.color="white";
document.querySelector("#info9").style.color="white";
document.querySelector("#info10").style.color="white";
document.querySelector("#info11").style.color="white";
document.querySelector("#info12").style.color="white";
document.querySelector("#info13").style.color="white";
document.querySelector("#info14").style.color="white";

document.getElementById("img1").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img2").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img3").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img3-4").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img4").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img5").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img6").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img7").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img8").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img9").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img10").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img11").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img12").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img13").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img14").style.boxShadow="4px 4px 1px #fff";
document.getElementById("img15").style.boxShadow="4px 4px 1px #fff";

document.getElementById("img1").style.border="1px solid #212f3d";
document.getElementById("img2").style.border="1px solid #212f3d";
document.getElementById("img3").style.border="1px solid #212f3d";
document.getElementById("img3-4").style.border="1px solid #212f3d";
document.getElementById("img4").style.border="1px solid #212f3d";
document.getElementById("img5").style.border="1px solid #212f3d";
document.getElementById("img6").style.border="1px solid #212f3d";
document.getElementById("img7").style.border="1px solid #212f3d";
document.getElementById("img8").style.border="1px solid #212f3d";
document.getElementById("img9").style.border="1px solid #212f3d";
document.getElementById("img10").style.border="1px solid #212f3d";
document.getElementById("img11").style.border="1px solid #212f3d";
document.getElementById("img12").style.border="1px solid #212f3d";
document.getElementById("img13").style.border="1px solid #212f3d";
document.getElementById("img14").style.border="1px solid #212f3d";
document.getElementById("img15").style.border="1px solid #212f3d";

document.getElementById("plus").style.boxShadow="0 0 10px 1px #fff";

document.getElementById("h3p1").style.color="white";
document.getElementById("h3p2").style.color="white";
document.getElementById("h3p3").style.color="white";
document.getElementById("h3p4").style.color="white";
document.getElementById("h3p5").style.color="white";

document.getElementById("g").style.backgroundColor="black";

document.getElementById("r1").style.color="white";
document.getElementById("arti").style.color="white";
document.getElementById("albu").style.color="white";
document.getElementById("playl").style.color="white";

document.getElementById("lang").style.backgroundColor="black";
document.getElementById("pa").style.color="white";
}

    
    
    function mymusic(){
    document.querySelector("#mymusic").style.color="black";
document.querySelector("#online").style.color="white";
document.querySelector("#sea").style.color="white";
document.querySelector("#library").style.color="white";
document.querySelector("#mm").style.color="black";
document.querySelector("#on").style.color="white";
document.querySelector("#sear").style.color="white";
document.querySelector("#chart").style.color="white";


document.getElementById("main2").style.display="block"
document.getElementById("header").style.display="block";
document.getElementById("search").style.display="block";
document.querySelector(".search").style.display="block";
document.querySelector("#search").placeholder= 'Search for artists,albums,songs,playlis..';
document.getElementById("search").style.width="80%";
document.querySelector(".search").style.right="20px";
document.getElementById("search").style.left="52px";
document.querySelector(".mic").style.display="none";
document.querySelector("#do4").style.display="none";
document.getElementById("onli").style.display="none";
document.getElementById("se").style.display="none";
document.getElementById("li").style.display="none";
;
   
}
function online(){
document.querySelector("#mymusic").style.color="white";
document.querySelector("#online").style.color="black";
document.querySelector("#sea").style.color="white";
document.querySelector("#library").style.color="white";
document.querySelector("#mm").style.color="white";
document.querySelector("#on").style.color="black";
document.querySelector("#sear").style.color="white";
document.querySelector("#chart").style.color="white";


document.getElementById("main2").style.display="none";
document.getElementById("header").style.display="block";
document.getElementById("search").style.display="none";
document.querySelector(".search").style.display="none";
document.querySelector(".mic").style.display="none";
document.querySelector("#do4").style.display="block";
document.getElementById("onli").style.display="block";
document.getElementById("se").style.display="none";
document.getElementById("li").style.display="none";
}
   
function sea(){
    document.querySelector("#mymusic").style.color="white";
document.querySelector("#online").style.color="white";
document.querySelector("#sea").style.color="black";
document.querySelector("#library").style.color="white";
document.querySelector("#mm").style.color="white";
document.querySelector("#on").style.color="white";
document.querySelector("#sear").style.color="black";
document.querySelector("#chart").style.color="white";

document.getElementById("main2").style.display="none";
document.getElementById("header").style.display="block";
document.getElementById("search").style.display="block";
document.getElementById("search").style.width="82%";
document.getElementById("search").style.left="15px";
document.querySelector(".search").style.right="49px";
document.querySelector(".search").style.display="block";
document.querySelector(".mic").style.display="block";
document.querySelector("#search").placeholder= 'Search for artists, albums, songs, playlists...';
document.querySelector("#do4").style.display="none";
document.getElementById("onli").style.display="none";
document.getElementById("se").style.display="block";
document.getElementById("li").style.display="none" 
}
    
function library(){
    document.querySelector("#mymusic").style.color="white";
document.querySelector("#online").style.color="white";
document.querySelector("#sea").style.color="white";
document.querySelector("#library").style.color="black";
document.querySelector("#mm").style.color="white";
document.querySelector("#on").style.color="white";
document.querySelector("#sear").style.color="white";
document.querySelector("#chart").style.color="black";

document.getElementById("main2").style.display="none";
document.getElementById("header").style.display="none";


document.getElementById("onli").style.display="none";
document.getElementById("se").style.display="none";
document.getElementById("li").style.display="block" 

}

function csong(){
    document.getElementById("fmusic").style.height="100vh";
    document.getElementById("fmusic").style.position="fixed";
document.getElementById("fmusic").style.display="block";
document.getElementById("main").style.display="block";
}
function fbmusic(){
document.getElementById("main").style.display="block"; document.getElementById("fmusic").style.height="0";
}



function art(){
    document.getElementById("art").style.borderBottom="3px solid #f00";
    document.getElementById("alb").style.borderBottom="0px solid #f00";
    document.getElementById("play").style.borderBottom="0px solid #f00";
    document.getElementById("arti").style.display="block";     document.getElementById("albu").style.display="none";     document.getElementById("playl").style.display="none";
}

function alb(){
    document.getElementById("art").style.borderBottom="0px solid #f00";
    document.getElementById("alb").style.borderBottom="3px solid #f00";
    document.getElementById("play").style.borderBottom="0px solid #f00";
    
     document.getElementById("arti").style.display="none";     document.getElementById("albu").style.display="block";     document.getElementById("playl").style.display="none";
}

function play(){
    document.getElementById("art").style.borderBottom="0px solid #f00";
    document.getElementById("alb").style.borderBottom="0px solid #f00";
    document.getElementById("play").style.borderBottom="3px solid #f00";
    
    document.getElementById("arti").style.display="none";     document.getElementById("albu").style.display="none";     document.getElementById("playl").style.display="block";
}



  
