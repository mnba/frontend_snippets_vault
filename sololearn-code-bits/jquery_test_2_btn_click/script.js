$(function() {
    $("a").attr("href", "http://www.jquery.com");
});

// https://api.jquery.com/click/ 
$("#btn").click( function(){
  console.log("aaa");
  $("p").hide();     // hides all <p> elements
  $("a").hide();
  /*$(".demo").hide() // hides all elements with class="demo"
  $("#demo").hide() // hides the element with id="demo"
  */
 });

console.log($("#btn") );//.attr("value"), ">>")