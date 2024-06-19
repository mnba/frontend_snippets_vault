//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var parent = document
    .getElementById("demo");
    var child = document
    .getElementById("p1");
    let p3 = document.getElementById("p3");
    parent.removeChild(child);
    parent.removeChild(p3);
};