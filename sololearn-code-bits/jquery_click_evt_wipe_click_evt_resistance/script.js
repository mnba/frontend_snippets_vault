$(function() {
    $("div").on("click", function() { 
        alert('Hi there!');
        
        $("div").off("click");
    }); 
});