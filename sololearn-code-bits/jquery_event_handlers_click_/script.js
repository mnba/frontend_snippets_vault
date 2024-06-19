$(function() {
  $("#clickme-btn").click(function() {
    //let $divnew = "<p>"+Date()+"</p>"; //works OK
    let $divnew = $("<p>"+Date()+"</p>");//OK
    $("body").append( $divnew );
  });
});