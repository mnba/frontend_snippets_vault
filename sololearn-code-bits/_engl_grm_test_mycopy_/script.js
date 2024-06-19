// Created by Priyangshu Narayan Deb

alert("You will get 1 min 30 sec ⏱ for the game.  \n\nCorrect answer will give you 3 sec \n\nWrong answer will reduce 2 sec \n\nSkipping a question will reduce 1 sec");

alert("Earn as many points as you can before time hits 0 \n\nCorrect answer will give you 10 points \n\nWrong answer will decrease 3 points \n\nSkipping a question won't affect your score\n\nGood luck 👍 and let me know your score in the comment");

var minute = 1
var second = 30
var time = 0
var turn = 1
var correct;
var ans = "";
var score = 0

setInterval(function(){
document.getElementById("t").innerHTML = minute + ":" + second

second--

  
if (second == 0 && minute == 0) {

alert("Which one is better- Displaying the score at the end of the game or Displaying the score all the time \n\nYour opinion will be really helpful")    

document.getElementById("result").innerHTML = "GAME OVER" + "<br>" + "Score: " + score 
 
turn = 0
     
document.getElementById("t").style.display = "none"     
document.getElementById("time").style.display = "none"     
document.getElementById("ques").style.display = "none"  
document.getElementById("a1").style.display = "none"     
document.getElementById("a2").style.display = "none"     
document.getElementById("a3").style.display = "none"     
document.getElementById("a4").style.display = "none"     
document.getElementById("check").style.display = "none"          
     
  }
  if (second == 0 && minute > 0) {
      second = 60
      minute = minute - 1
  }  
  if (second > 60) {
      second = second - 60
      minute = minute + 1
  }
  if (second < 10) {
   document.getElementById("t").innerHTML = minute + ":" + "0" + second   
  }
  if (minute < 10) {
   document.getElementById("t").innerHTML = "0" + minute + ":" + second   
  }
  if (second < 10 && minute < 10) {
   document.getElementById("t").innerHTML = "0" + minute + ":" + "0" + second   
  }
},1000)


setInterval(function() {
if (time == 0 && turn == 1) {
document.getElementById("check").disabled = false
ans = ""

document.getElementById("a1").style.backgroundColor = "white"  
document.getElementById("a2").style.backgroundColor = "white"  
 document.getElementById("a3").style.backgroundColor = "white"  
 document.getElementById("a4").style.backgroundColor = "white"     
 
document.getElementById("result").innerHTML  = ""
document.getElementById("time").innerHTML  = "Click on 'CHECK' to proceed to next question"
    

 
var list = ["He ____ when I entered his room", "He ____ studying for the exam since morning", "They ____ living in USA for ten years", "He jumped off the bus while it ____", "I wish I ____ a king","The other day I ____ a magician in the market","The train ____ before I reached the station","The prisoner was accused ____ murder","The poor man died ____ cancer","Flour is made ____ wheat","Father is not home. He ____ out","He ____ teacher since 2010","I warned him ____ driving fast","He often suffers ____ illness","There is an exception ____ every rule","Reading is ____ useful hobby","He gave away ____ money he had to the beggar","This is ____ European lady","He will come back within ____ hour","I am satisfied ____ your work","The teacher was annoyed ____ me","Always beware ____ false friends"]

var ques = list[Math.floor(Math.random() * list.length)]

document.getElementById("ques").innerHTML = ques


if(ques == "He ____ when I entered his room") {
 document.getElementById("a1").innerHTML = "was studying"
 document.getElementById("a2").innerHTML = "studies"
 document.getElementById("a3").innerHTML = "is studying"
 document.getElementById("a4").innerHTML = "had studied"
  correct = "was studying"
}
else if(ques == "He ____ studying for the exam since morning") {
 document.getElementById("a1").innerHTML = "had been"
 document.getElementById("a2").innerHTML = "has been"
 document.getElementById("a3").innerHTML = "is"
 document.getElementById("a4").innerHTML = "was"
 correct = "has been"
  
}
else if(ques == "They ____ living in USA for ten years") {
 document.getElementById("a1").innerHTML = "had been"
 document.getElementById("a2").innerHTML = "has been"
 document.getElementById("a3").innerHTML = "have been"
 document.getElementById("a4").innerHTML = "were"
  correct = "have been"
}

else if(ques == "He jumped off the bus while it ____") {
 document.getElementById("a1").innerHTML = "had been moving"
 document.getElementById("a2").innerHTML = "has been moving"
 document.getElementById("a3").innerHTML = "moved"
 document.getElementById("a4").innerHTML = "was moving"
  correct = "was moving"
}
else if(ques == "I wish I ____ a king") {
 document.getElementById("a1").innerHTML = "was"
 document.getElementById("a2").innerHTML = "were"
 document.getElementById("a3").innerHTML = "am"
 document.getElementById("a4").innerHTML = "have been"
  correct = "were"
}
else if(ques == "The other day I ____ a magician in the market") {
 document.getElementById("a1").innerHTML = "met"
 document.getElementById("a2").innerHTML = "meet"
 document.getElementById("a3").innerHTML = "will meet"
 document.getElementById("a4").innerHTML = "had met"
  correct = "met"
}
else if(ques == "The train ____ before I reached the station") {
 document.getElementById("a1").innerHTML = "had left"
 document.getElementById("a2").innerHTML = "left"
 document.getElementById("a3").innerHTML = "will leave"
 document.getElementById("a4").innerHTML = "has left"
  correct = "had left"
}
else if(ques == "The prisoner was accused ____ murder") {
 document.getElementById("a1").innerHTML = "for"
 document.getElementById("a2").innerHTML = "of"
 document.getElementById("a3").innerHTML = "on"
 document.getElementById("a4").innerHTML = "with"
  correct = "of"
}
else if(ques == "The poor man died ____ cancer") {
 document.getElementById("a1").innerHTML = "of"
 document.getElementById("a2").innerHTML = "from"
 document.getElementById("a3").innerHTML = "in"
 document.getElementById("a4").innerHTML = "for"
  correct = "of"
}
else if(ques == "Flour is made ____ wheat") {
 document.getElementById("a1").innerHTML = "of"
 document.getElementById("a2").innerHTML = "by"
 document.getElementById("a3").innerHTML = "with"
 document.getElementById("a4").innerHTML = "from"
  correct = "from"
}
else if(ques == "Father is not home. He ____ out") {
 document.getElementById("a1").innerHTML = "went"
 document.getElementById("a2").innerHTML = "had gone"
 document.getElementById("a3").innerHTML = "has gone"
 document.getElementById("a4").innerHTML = "goes"
  correct = "has gone"
}
else if(ques == "He ____ teacher since 2010") {
 document.getElementById("a1").innerHTML = "is"
 document.getElementById("a2").innerHTML = "was"
 document.getElementById("a3").innerHTML = "has been"
 document.getElementById("a4").innerHTML = "had been"
  correct = "has been"
}
else if(ques == "I warned him ____ driving fast") {
 document.getElementById("a1").innerHTML = "for"
 document.getElementById("a2").innerHTML = "on"
 document.getElementById("a3").innerHTML = "against"
 document.getElementById("a4").innerHTML = "of"
  correct = "against"
}
else if(ques == "He often suffers ____ illness") {
 document.getElementById("a1").innerHTML = "in"
 document.getElementById("a2").innerHTML = "from"
 document.getElementById("a3").innerHTML = "with"
 document.getElementById("a4").innerHTML = "of"
  correct = "from"
}
else if(ques == "There is an exception ____ every rule") {
 document.getElementById("a1").innerHTML = "on"
 document.getElementById("a2").innerHTML = "to"
 document.getElementById("a3").innerHTML = "in"
 document.getElementById("a4").innerHTML = "of"
  correct = "to"
}
else if(ques == "Reading is ____ useful hobby") {
 document.getElementById("a1").innerHTML = "a"
 document.getElementById("a2").innerHTML = "an"
 document.getElementById("a3").innerHTML = "the"
 document.getElementById("a4").innerHTML = "None of these"
  correct = "an"
}
else if(ques == "He gave away ____ money he had to the beggar") {
 document.getElementById("a1").innerHTML = "little"
 document.getElementById("a2").innerHTML = "a little"
 document.getElementById("a3").innerHTML = "the little"
 document.getElementById("a4").innerHTML = "None of these"
  correct = "the little"
}
else if(ques == "This is ____ European lady") {
 document.getElementById("a1").innerHTML = "a"
 document.getElementById("a2").innerHTML = "an"
 document.getElementById("a3").innerHTML = "the"
 document.getElementById("a4").innerHTML = "None of these"
  correct = "an"
}
else if(ques == "He will come back within ____ hour") {
 document.getElementById("a1").innerHTML = "a"
 document.getElementById("a2").innerHTML = "an"
 document.getElementById("a3").innerHTML = "the"
 document.getElementById("a4").innerHTML = "None of these"
  correct = "an"
}
else if(ques == "I am satisfied ____ your work") {
 document.getElementById("a1").innerHTML = "by"
 document.getElementById("a2").innerHTML = "with"
 document.getElementById("a3").innerHTML = "at"
 document.getElementById("a4").innerHTML = "of"
  correct = "at"
}
else if(ques == "The teacher was annoyed ____ me") {
 document.getElementById("a1").innerHTML = "at"
 document.getElementById("a2").innerHTML = "from"
 document.getElementById("a3").innerHTML = "of"
 document.getElementById("a4").innerHTML = "with"
  correct = "with"
}
else if(ques == "Always beware ____ false friends") {
 document.getElementById("a1").innerHTML = "from"
 document.getElementById("a2").innerHTML = "at"
 document.getElementById("a3").innerHTML = "of"
 document.getElementById("a4").innerHTML = "with"
  correct = "of"
}
else if(ques == "") {
 document.getElementById("a1").innerHTML = ""
 document.getElementById("a2").innerHTML = ""
 document.getElementById("a3").innerHTML = ""
 document.getElementById("a4").innerHTML = ""
  correct = ""
}
else if(ques == "") {
 document.getElementById("a1").innerHTML = ""
 document.getElementById("a2").innerHTML = ""
 document.getElementById("a3").innerHTML = ""
 document.getElementById("a4").innerHTML = ""
  correct = ""
}
else if(ques == "") {
 document.getElementById("a1").innerHTML = ""
 document.getElementById("a2").innerHTML = ""
 document.getElementById("a3").innerHTML = ""
 document.getElementById("a4").innerHTML = ""
  correct = ""
}






}
}, 1000)

function a1() {
    ans = document.getElementById("a1").innerHTML
 document.getElementById("a1").style.backgroundColor = "lightGreen"  
document.getElementById("a2").style.backgroundColor = "white"  
 document.getElementById("a3").style.backgroundColor = "white"  
 document.getElementById("a4").style.backgroundColor = "white"    
    }
function a2() {
    ans = document.getElementById("a2").innerHTML
 document.getElementById("a1").style.backgroundColor = "white"  
document.getElementById("a2").style.backgroundColor = "lightGreen"  
 document.getElementById("a3").style.backgroundColor = "white"  
 document.getElementById("a4").style.backgroundColor = "white"        
    }
function a3() {
    ans = document.getElementById("a3").innerHTML 
    document.getElementById("a1").style.backgroundColor = "white"  
document.getElementById("a2").style.backgroundColor = "white"  
 document.getElementById("a3").style.backgroundColor = "lightGreen"  
 document.getElementById("a4").style.backgroundColor = "white"    
    }
function a4() {
    ans = document.getElementById("a4").innerHTML 
   document.getElementById("a1").style.backgroundColor = "white"  
document.getElementById("a2").style.backgroundColor = "white"  
 document.getElementById("a3").style.backgroundColor = "white"  
 document.getElementById("a4").style.backgroundColor = "lightGreen"     
    }

function check() {
  time = 3
  document.getElementById("check").disabled = true
  if(correct == ans) {
   document.getElementById("result").innerHTML  = "Correct ✔"
  second = second + 3
  score = score + 10
  }
  else if (ans == "") {
   document.getElementById("result").innerHTML  = "No answer selected" + "<br><br>" + "Answer is '" + correct + "'"
   second = second - 1
  
  }
  else {
  document.getElementById("result").innerHTML  = "Wrong ❌" + "<br><br>" + "Answer is '" + correct + "'"
  second = second - 2
  score = score - 3
  }
}

setInterval(function() {
 time--
 if (time > 0) {
     document.getElementById("time").innerHTML = "Next question will appear in " + time + " second"    
 }  
}, 1000)



