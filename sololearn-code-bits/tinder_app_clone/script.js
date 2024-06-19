// Created by shubham28




i=0;
function go()
{
const startScreen= document.querySelector(".start");
const contentDisplay= document.querySelector("#content");

  startScreen.classList.add("hide");
    contentDisplay.classList.remove("hide");
}

function slide1(){

 var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];
 
document.getElementById(arr[i]).classList.add("trans1"); 
 
 
 i++;
 
    
}

function slide2(){

 var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];
 
document.getElementById(arr[i]).classList.add("trans2"); 
 
 
 i++;
 
    
}



    function like1(){
        document.getElementById("like").classList.add("visi");
     document.getElementById("like").onanimationend = () => {
         document.getElementById("like").classList.remove("visi");
     } 
    }
    
    
    function nope1(){
        document.getElementById("nope").classList.add("visi");
      document.getElementById("nope").onanimationend = () => {
         document.getElementById("nope").classList.remove("visi");  
        }
    }
     

function showPro(){
    document.getElementById("profile").classList.remove("hide");
 document.getElementById("user").style.color="#ff0066";
 
 document.getElementById("mess").classList.add("hide");
 
 document.getElementById("mess1").style.color="#d9d9d9";
 document.getElementById("starFunc").classList.add("hide");
 
}

function message(){
   document.getElementById("profile").classList.add("hide");
    document.getElementById("mess1").style.color="#ff0066";
    
    document.getElementById("mess").classList.remove("hide");
    document.getElementById("user").style.color="#d9d9d9";
    
    document.getElementById("starFunc").classList.add("hide");
    
}


function myFunction() {
  var checkBox = document.getElementById("inp");
 
  if (checkBox.checked == true){
  
    mid5= document.querySelector("#mid");
   foot5= document.querySelector("#foot");
  mid5.classList.add("hide");
    foot5.classList.add("hide");
    pro12= document.querySelector("#profile");
   mes12= document.querySelector("#mess");
  user55= document.querySelector("#user");
    
   pro12.classList.add("hide"); 
   user55.style.color="#d9d9d9";
   mes12.classList.add("hide");
   
   document.getElementById("mess1").style.color="#d9d9d9";
   
  document.getElementById("starFunc").classList.remove("hide");
   
   
  } 
  else{
    foot5.classList.remove("hide");
       mid5.classList.remove("hide");
      pro12.classList.add("hide");
      mes12.classList.add("hide");
      document.getElementById("mess1").style.color="#d9d9d9";
      document.getElementById("starFunc").classList.add("hide");
      
  }
  
}



alert("Its a clone so not every functionality works ...😅");

alert("Hope you like it....");



