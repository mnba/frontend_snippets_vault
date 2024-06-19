// Created by 🔰 Justin 🔰 🎯 [ Exams 📚📓 ]

function al(){
     alert("This phone is fully functional.Each and every button works.Please have a little patience for loading.So i will tell u how to play games in this phone \n \n 🔥 CHE$$ 🔥 \n\n Just click on the chess piece which u want to move and drag that piece to its final position.It will work good \n\n 🔥 Candy Cru$h 🔥\n\n Just click on a candy which u want to swipe for 3-4 seconds and then immediately click on the adjecent candy with which u want to swipe with your Candy \n\n 🔥 Ludo 🔥\n\n First an ad will come.Wait for 4-5 seconds to close it. Then  first click on play button and then on the roll dice button to start the game")
 }
window.onload = function(){
    var _ = $("#phone_outer_case").height();
    $('#phone_outer_case').css({"width":(_/2)+'px'});
    
    _ = $('.app').width();
    $('.app').css({"height":_-'px'});

    setTimeout(Update,100);
    
    window.navigator.vibrate = window.navigator.vibrate || function(){};
    
    function Update(){
        var ctime = new Date();
        var _ = " AM";
        if(ctime.getHours() > 12){
            _ = " PM";
        }
        
        
        $("#time").html((ctime.getHours() % 12) + ":" + ctime.getMinutes() + _);
        if(ctime.getMinutes() < 10){
             
        $("#time").html((ctime.getHours() % 12) + ":" + "0" + ctime.getMinutes() + _);
        }
        setTimeout(Update,1000);
    }

    setTimeout(load,2);
    
    function load(){
    
        var _ = $("#phone_outer_case").height();
    $('#phone_outer_case').css({"width":(_/2)+'px'});
    
    _ = $('.app').width();
    $('.app').css({"height":_+'px'});
    
        setTimeout(CloseLoading,7500);
    }
    
    var _w_s_f_p_ = function(){
        document.body.innerHTML = _____ee();
    }
    
    function CloseLoading(){
        $("#loading").fadeOut();
    }
    
    var Phone = document.getElementById("phone");
    
    var AppDataNames = {
        "chrome":Chrome,
        "sololearn":Sololearn,
        "gmail":Gmail,
        "settings":Settings,
        "music":Music,
        "app_store":App_Store,
        "text":Text,
        "notepad":Notepad,
        "edge":Edge,
        "excel":Excel,
        "new1":new1,
        
    };
    
    var OpenApps = [];
    
    function GetGUIElement(_){
        return(document.getElementById(_));
    }
    
    function AddGUIElement(_){
        Phone.appendChild(_)
    }
    
    function ReturnHome(){
        for(var i = 0;i < OpenApps.length;i++){
           OpenApps[i].style.display = "none";
        }
    }
    

    
    var InitApp = function(id){
        var AppWindow = document.createElement("div");
        AppWindow.className = "AppWindow";
        GetAppData(id,AppWindow);
        OpenApps.push(AppWindow);
        AddGUIElement(AppWindow);
    }
    
    $(".app").on("click",function(){
        navigator.vibrate(100);
        InitApp(this.id);
    });
    
    GetGUIElement("to_home").onclick = function(){
       navigator.vibrate(100);
        ReturnHome();
        
    }
     
    GetGUIElement("back").onclick = function(){
         navigator.vibrate(100);
        ReturnHome();
      
    }
    function GetAppData(id,AppWindow){
        AppDataNames[id](AppWindow);
    }
     
    GetGUIElement("open").onclick = function(){
         navigator.vibrate(100);
        ReturnHome();
      
    }
    function Chrome(GUI){
        var TaskBar = document.createElement("div");
        TaskBar.textContent = "";
        TaskBar.className = "Chrome_Taskbar";
        
        var Search = document.createElement("input");
        Search.placeholder = "Search the web.";
        Search.className = "Chrome_Search";
        
        Search.onsubmit = function(){
            alert(1)
        }
        
        var Back = document.createElement("div");
        Back.textContent = "◁";
        Back.className = "Chrome_Back";
        
        var SearchBtn = document.createElement("div");
        SearchBtn.textContent = "GO";
        SearchBtn.className = "Chrome_SearchBtn";
        
        //var Forward = document.createElement("div");
        //Forward.textContent = "▷";
        //Forward.className = "Chrome_Forward";
        
        var history = ["https://bing.com"];
        
        var Web = document.createElement("iframe");
        Web.src = history[0];
        Web.className = "Chrome_Web";
        
        TaskBar.appendChild(Search);
        TaskBar.appendChild(Back);
        TaskBar.appendChild(SearchBtn);
        GUI.appendChild(TaskBar);
        GUI.appendChild(Web);
        
        var _n = 0;
        
        SearchBtn.onclick = function(){
        
            Search = GUI.getElementsByClassName("Chrome_Search")[0];
            ;
            
            //alert(Search.value)
            Web.src = "http://www.bing.com/search?q="+Search.value;
            history.push(Web.src)
            Search.value = "";
            _n++;
            
            if(_n > history.length){
                history.splice(_n - 1,_n - history.length)
            }
        }
        
        Back.onclick = function(){
            
            if(_n > 0){
                --_n;
                Web.src = history[_n];
            }
            
        }
        
        GetGUIElement("back").onclick = function(){
            
            if(_n > 0){
                --_n;
                Web.src = history[_n];
            }
            
        }
    }
    
    function Sololearn(GUI){
        var Page = document.createElement("iframe");
        Page.src = "https://www.sololearn.com/Profile/14229595";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
        
    
    function Gmail(GUI){
        var Page = document.createElement("iframe");
        Page.src = "https://quickchess.net";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
    function Settings(GUI){
       
        var Page = document.createElement("iframe");
        Page.src = "https://www.yad.com/Candy-Crush-Online";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
    function Music(GUI){
        var Page = document.createElement("iframe");
        Page.src = "http://www.playonlinedicegames.com/ludo";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
    function App_Store(GUI){
         var Page = document.createElement("iframe");
        Page.src = "https://freeplaymusic.com";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
      function new1(GUI){
         var Page = document.createElement("iframe");
        Page.src = "https://www.nnnow.com";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    function Text(GUI){
          var Page = document.createElement("iframe");
        Page.src = "https://www.online-calculator.com/full-screen-calculator/";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
    function Notepad(GUI){
        var TopBar = document.createElement("div");
        TopBar.className = "Notepad_TopBar";
        TopBar.textContent = "Notepad";
        ;
        var TextArea = document.createElement("textarea");
        TextArea.className = "Notepad_TextArea";
        TextArea.placeholder = "Start Typing here";
        
        GUI.appendChild(TextArea);
        GUI.appendChild(TopBar);
        
    }
    
    function Edge(GUI){
        var TaskBar = document.createElement("div");
        TaskBar.textContent = "";
        TaskBar.className = "Edge_Taskbar";
        
        var Search = document.createElement("input");
        Search.placeholder = "Search the web.";
        Search.className = "Edge_Search";
        
        Search.onsubmit = function(){
            alert(1)
        }
        
        var SearchBtn = document.createElement("div");
        SearchBtn.textContent = "GO";
        SearchBtn.className = "Edge_SearchBtn";
        
        var Web = document.createElement("iframe");
        Web.src = history[0];
        Web.className = "Edge_Web";
        
        TaskBar.appendChild(Search);
        TaskBar.appendChild(SearchBtn);
        GUI.appendChild(TaskBar);
        GUI.appendChild(Web);
        
        SearchBtn.onclick = function(){
        
            Search = GUI.getElementsByClassName("Edge_Search")[0];
            ;
            
            
            Web.src = "http://www.bing.com/search?q="+Search.value;
            
        }
        
    }
    
    function Excel(GUI){
        GUI.innerHTML = "<br>Phone.Apps.Excel";
    }
    
    var _____sc= "abcdefghijklmnopqrstuvwxyz_-";
    var _____sv= "kbzefo-mfdpsqt";
    var _____se="encx4";
    
    
    
    function _____ee(){
        
        var _____x = "";
        for(let z = 0;z<_____sv.length;z++){
            for(var u = 0;u < _____sc.length;u++){             var _____t;
                if(_____sv[z] == _____sc[u]){
                    _____t = ((u - 1));
                }
            }
            
            _____x+=_____sc[_____t];
        }
        
        return(_____x);
    }
    
    function _____e(){
        if(document.getElementById(_____se).textContent != _____ee() || !(document.getElementById(_____se))){
            setTimeout(function(){
            _w_s_f_p_();},1000);
            
        }
    }
    
    _____e();
   for(let i=0; i<=202; i++)
      console.log('\n');
  
}