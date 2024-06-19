//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    //x.style.width = '130px';
    x.style.border = "4px groove green";
    
    var l = document.getElementsByTagName("div");
    //var l2= Array.from(l);
    //l2 = l2.slice(1, undefined);
    var l2= Array.from(l).slice(1, undefined);
    //alert ("l2="+l2);
    for (e of l2) {
    e.style.color = '#22ee88';
    e.style.border = "4px groove darkblue";
    }
};