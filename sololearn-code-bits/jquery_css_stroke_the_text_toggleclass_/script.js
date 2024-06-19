$(function() {
  $(".toggle-btn").click(function() {
    $("p").toggleClass("less-focused");
  });
  
  $(".toggle-stroke-btn").click(function() {
    $("p").toggleClass("text-stroke")
          .css("background-color", "#dde8ff");
  });
  
  $(".off-bg-btn").click( ()=>
  {
    $("p").css("background-color", "white");
  });
});

