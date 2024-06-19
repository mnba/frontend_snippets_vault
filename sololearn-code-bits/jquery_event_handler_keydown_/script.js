$(function() {
  $("#name").keydown(function() {
    $("#msg").html($("#name").val());
  });
  
  let cnt=0;
  //$("#bigbox")
  $(window).scroll( function(){
     if(cnt>230) return;
     console.log("scrolled");
     $("#bigbox").append(`scrolled<br> scrolled ${cnt}<br>`);
     cnt+=2;
  });
});