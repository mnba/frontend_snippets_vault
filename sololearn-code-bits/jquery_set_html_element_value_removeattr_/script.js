$(function() {
    $("#start").html("Replaced by JQuery:=> Go!");
    console.log("f1");
});

$(function() {
  console.log("f2");
  console.log($("#start[data-1]") ); //.val());
  $("table").removeAttr("border");
  $("table").removeAttr("class");
});