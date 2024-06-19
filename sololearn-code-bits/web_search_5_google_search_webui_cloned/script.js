// Created by VEDANG

function search(){
  var x = document.getElementById("main").value;
  var y = x.replace(/[\s]/,"+");
  var a = document.getElementById("a");
  var z = "https://www.google.com/search?q="+y;
  a.href=z;
  a.click();
}

//Made By VEDANG