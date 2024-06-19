//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pnew = document.createElement("p");
    var node = document.createTextNode("This is new <p> node");
    pnew.appendChild(node);

    var parent = document.getElementById("demo");
    var p1 = document.getElementById("p1");
    parent.replaceChild(pnew, p1);
};