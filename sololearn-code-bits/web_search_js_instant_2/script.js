// Created by Madhav

addEventListener("keydown", function(event) 
   { 
   event.preventDefault(); 
   
   if (event.keyCode === 13)         
 { search();
   window.location.href="#info";
 }      
         return null;
   }
);

//our so called database
var name1 = ["alice","john","stuart","adam","barry","oliver","davos","brandon","john","eminem","flash","superman","thor"];
var pro1  = ["designer","mechanic","constructor","painter","soldier","landlord","sailor","soldier","student","rap god","superhero","superhero","superhero"];
var age1  = ["27","33","19","45","35","53","29","32","16","45","immortal","immortal","immortal"];

//function to search database
function search()
{ 
//To get the clicking sound
document.getElementById("click").play();

//variable to find no. of element that match our keyword
var count = 0;

//to get the keyword inputed
var check1 = document.getElementById("keyword").value.toLowerCase();

//To remove any extra spacing
var check=check1.trim();

//declaring local array equal to global  
var name = name1;
var pro  = pro1;
var age  = age1;
var show = new Array ;
    
    //getting the keywords index in array if it is 
    var n = name.indexOf(check);
    var p = pro.indexOf(check);
    var a = age.indexOf(check);
    
    //If name is keyword
    if(n>-1&&p<0&&a<0)
    {  
       //To check how many times keyword has appeared on array and save output in show named array
       for(var j=0 ;j<name.length;j++)
       {
           if(check==name[j])
           {
               show[count] = "<div style='color:#fff;font-size:28px'>" + "<i>"+name[j]+"</i>" + "</div><b>Profession : </b>  " + "<i>"+pro[j]+"</i>" + "<br><b>Age : </b>" + age[j] ; count++;
           }
       }
     }
     
    //If profession is keyword 
   if(p>-1&&n<0&&a<0)
    {
    
    //To check how many times keyword has appeared on array and save output in show named array
     for(var j=0 ;j<pro.length;j++)
       {
           if(check==pro[j])
           {
               show[count] = "<div style='color:#fff;font-size:28px'>" +  "<i>"+name[j]+"</i>" + "</div><b>Profession : </b>  " + "<i>"+pro[j]+"</i>" + "<br><b>Age : </b>" + age[j] ; count++;
           }
       }
     }
     
     //If age is keyword
    if(a>-1&&p<0&&n<0)
    {  
    //To check how many times keyword has appeared on array and save output in show named array
       for(var j=0 ;j<age.length;j++)
       {
           if(check==age[j])
           {
               show[count] = "<div style='color:#fff;font-size:28px'>" + "<i>"+name[j]+"</i>" + "</div><b>Profession : </b>  " + "<i>"+pro[j]+"</i>" + "<br><b>Age : </b>" + age[j] ; count++;
           }
       }
    } 
    
   //If  keyword doesn't match to any
   if(n<0&&p<0&&a<0) 
   {
       for(let i=0;i<name.length;i++)
       {
          show[i] = "<div style='color:#fff;font-size:28px'>" + "<i>"+name[i]+"</i>" + "</div><b>Profession : </b>  " + "<i>"+pro[i]+"</i>" + "<br><b>Age : </b>" + age[i] ; 
       }        
}    

//To display output
document.getElementById("output").innerHTML="<center>" +"<b><u>" + count + "</u></b>"+ "<b><u> Match found....!</u></b></center><br>"+ show.join("<br><br>"); 
    
}

//to bring the add new form
function ad()
{ document.getElementById("ad").style.visibility="visible";
}

//the exit button funtion in add new form
function exit()
{ document.getElementById("ad").style.visibility="hidden";

//To display confirmation that you pressed exit 
document.getElementById("output").innerHTML="<center><b>!....NONE...ADDED....!</b></center>" + "<br>.....You Pressed EXIT...."; 
}

//to store the inputed value in global array
function enter()
{   
    n =document.getElementById("name").value.toLowerCase();
    var p =document.getElementById("pro").value.toLowerCase();
    var a =document.getElementById("age").value.toLowerCase();
    
    if(n.length===0||p.length===0||a.length===0)
    {
      //To display confirmation that it has not been added  
document.getElementById("output").innerHTML="<center><b>!....NONE...ADDED....!</b></center>" + "<br> Please read <b>instruction</b> on how to ADD..";  
    }
    else
    {
    name1.push(n);
    pro1.push(p);
    age1.push(a);
    
    //To display confirmation that it has been added  
document.getElementById("output").innerHTML="<center><b>!....ADDED....!</b></center>";
     }
    document.getElementById("ad").style.visibility="hidden";
    

}


//to delete searched element using splice function
//almost same functioning as search but just now deleting after getting index no.
function del()
{
   var check = document.getElementById("keyword").value.toLowerCase();
  
var name = name1;
var pro  = pro1;
var age  = age1;

    var n = name.indexOf(check);
    var p = pro.indexOf(check);
    var a = age.indexOf(check);
    
    //If name is keyword
    if(n>-1&&p<0&&a<0)
    {    tosplice(name,check);    }
     
    //If profession is keyword 
   if(p>-1&&n<0&&a<0)
    {    tosplice(pro,check);    }
    
     //If age is keyword
    if(a>-1&&p<0&&n<0)
    {    tosplice(age,check);    }
    
     //Warning that all database will be wiped...  
    if(n<0&&p<0&&a<0)
    {
        document.getElementById("output").innerHTML="<center><b>!...NONE...DELETED....!</b></center>" + "<br> Please read <b>instruction</b> on how to DELETE..";
    } 
    else
{ 
//To display confirmation that it has been deleted   
document.getElementById("output").innerHTML="<center><b>!....DELETED....!</b></center>";
    }  
   
}


//To perform the function splice 
function tosplice(num,check)
{
    for(var j=0 ;j<num.length;j++)
       {
           if(check==num[j])
           {
       name1.splice(j,1);
       pro1.splice(j,1);
       age1.splice(j,1);
           }
       }
}


function see()
{
   document.getElementById("hta").style.visibility="visible" ;
document.getElementById("nosee").style.visibility="visible" ;
document.getElementById("see").style.visibility="hidden" ;
}

function nosee()
{
   document.getElementById("hta").style.visibility="hidden" ; 
document.getElementById("nosee").style.visibility="hidden" ;
document.getElementById("see").style.visibility="visible" ;
}