$(function() {
    $("div").click(function () {
        alert("Clicked!");
    });
    $("div").trigger("click");
});