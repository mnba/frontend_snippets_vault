// Created by Coder

let player ;
let floor ;
let score=0;
let arrows = []; 
let arrowCoords = []; 
let showDragging = false; 
let arrowIsReleased = false; 
let playerOneTurn = true; 
let obj = [];
let game_over = false;
let leftBtn;
let restrt;
let lifes =[];
let ready = false;
let rightBtns;
let clouds =[];
let arrow_img;

var cloud_map = [
[2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,1,1,0,1,1,1,1,2,2,2,2,2],
[2,2,2,2,2,1,1,0,0,0,0,0,0,1,1,1,2,2,2],
[2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,2,2],
[2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2],
[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

function preload(){
  arrow_img = loadImage("https://image.ibb.co/epXKvL/arrow-bow-PNG1.png");
}

function setup(){
  var loader = select("#loaderbox");
  loader.hide();
createCanvas(windowWidth,windowHeight).position(0,0);
  background(0); 
 colorMode(HSB)
leftBtn = createButton("⬅").id("b1").position(20,height-80).touchStarted(leftM).touchEnded(stop); 
rightBtns = createButton("➡").id("b2").position(width-100,height-80).touchStarted(rightM).touchEnded(stop); 
restrt = createButton("Restart").id("b2").position(width/2-50,height-100).mouseClicked(restart).hide(); 

player =  new Player(width/2,height-140);
 floor = new Floor();
 obj.push(new Obj())
 for(var i=0;i<15;i++){
     lifes.push(new Life(10,i*20+10))
 }
 clouds.push(new Clouds())  
 setInterval(()=>{
   clouds.push(new Clouds())  
 },15000);
}

function draw(){
    background("lightblue");
    
    if(!game_over){
    textAlign(CENTER);
    textSize(30);
    fill("pink");
    stroke("green");
    strokeWeight(5)
text("Score : "+score,width/2,30);    
    floor.show();
    for(let c of clouds){
        c.show();
        c.update();
        }
    for(let c of clouds){
          
        if(c.x<-50){
            clouds.splice(0,1)
        }
    }
    
    for(let l of lifes){
        l.show()
    }
    player.show();
    player.update()
    
  if (showDragging && arrowCoords.length === 2) {
 stroke(255,255,255,100);
strokeWeight(1);
fill(0,255,0,0.6); ellipse(arrowCoords[0].x ,arrowCoords[0].y,100,100); ellipse(arrowCoords[1].x,arrowCoords[1].y,20,20);
strokeWeight(10);  line(arrowCoords[0].x ,arrowCoords[0].y,arrowCoords[1].x ,arrowCoords[1].y);                                                 } 

let gravity = createVector(0, 0.2);
                                                                                            if (arrows.length > 10) { 
                                               arrows.splice(0, 1);
     }
                                                    if (arrowIsReleased )                       {                                    
for(var i=0;i<arrows.length;i++){
                                                   let arrow = arrows[i];                                                                                        arrow.applyForce(gravity);                                                         arrow.update();                                                         arrow.edges(floor); arrow.show();                                                                                                         }            

    
        }
         
for(let o of obj ){
    o.show()
} 

}
for(var i =0;i<arrows.length;i++){
for(var j =0;j<obj.length;j++){
if(collision(arrows[i],obj[j])){
    obj.splice(j,1);
    arrows.splice(i,1);
    obj.push(new Obj());
    score++;
    collide = true;
}
}    
} 
for(var i =0;i<arrows.length;i++){
if(arrows[i].pos.y>height-floor.h-20){
    ready =true;
    arrows.splice(i,1);
}
}
if(ready) { 
ready=false;                                                                                                                lifes.splice(lifes.length-1,1); 
}
if(lifes.length==0){
   // console.log("game over")
  background("lightblue");
  fill(150)
  rect(0,height-100,width,100);
  strokeWeight(2);
   textAlign(CENTER);
   
   fill(255);
   stroke("lightblue");
   textSize(30);
   text("Score : "+score,width/2,height/2-50)
   textSize(40);
   stroke("lightgreen");
   fill(0)
   text("Game Over !!",width/2,height/2)
    frameRate(0);
    leftBtn.hide();
    rightBtns.hide();
    restrt.show();
}  
     
}
function Player(x,y){
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 40;
    this.left = false;
    this.right = false;
    this.show = function(){
        fill(50);
        rect(this.x,this.y,this.w,this.h);
        rect(this.x-this.h/2,this.y,this.h+this.h/2,this.w)
    }
    this.update = function(){
        if(this.left){
            this.x-=0.5;            
        }
        else if(this.right){
            this.x+=0.5;            
        }
        
        if(this.x<90){
            this.x =90;
        }
        else if(this.x>width-100){
            this.x = width-100;
        }
    }
}
function Arrow(coords, player, floor){
    
this.r = 20; 
this.player = player; 
this.floor = floor;
 this.pos = createVector(this.player.x, this.player.y);
  this.acc = createVector(); 
  this.vel = createVector();
try{  this.mag = coords.length === 2 ?dist(coords[0].x,coords[0].y,coords[1].x,coords[1].y):1; 
}
catch(err){}     
   this.landed = false;     
  
   this.show = function(){
         push(); translate(this.pos.x, this.pos.y);
               rotate(this.vel.heading()); imageMode(CENTER);
                image(arrow_img,0,0,this.r,this.r);
              
              pop();
                   
   }
   this.update = function(){             
    if (!this.landed) { 
    this.vel.add(this.acc); this.pos.add(this.vel); 
    this.acc.mult(0); 
    }
      
   }    
    this.shoot = function(f) {
       f.mult(this.mag); 
      f.limit(12); 
      this.applyForce(f);
         } 
       this.hits = function(player) {
           if ( this.pos.x > player.x && this.pos.x < player.x + player.w &&  this.pos.y > player.y && this.pos.y < player.y + player.h ) {
            return true;
             }
              return false;
               } 
  this.edges = function(floor) {
                   if (this.pos.y > height - floor.h - this.r / 2) {
                   this.landed = true;
                      } 
                      }
  this.applyForce = function(f){
      this.acc.add(f)
  }          
}
function Floor(){
    this.x = 0;
    this.y = height-100;
    this.w = width;
    this.h = 100;
    this.show = function() {
        fill(200);
        noStroke();
        rect(this.x,this.y,this.w,this.h);
    }
}
        
function mousePressed() {
 try{ 
if(mouseY <height-100) {                                            showDragging = true; 
                                                  arrowCoords[0] = {
x: mouseX, y: mouseY }; 
}
}
catch(e){}                                                  } 
                                                    function mouseDragged() {
 try{   
arrowCoords[1] = {
                                                                                                                                       x: mouseX, y: mouseY }; 
   }
   
catch(e) {}                                                 } 
                                                      function mouseReleased() { 
try{ 

if(arrowCoords[0].y<height-100) { 
let arrow = new Arrow(arrowCoords, player, floor );
                                                                                                                    let angle = arrowCoords.length === 2 ? angleFromTwoPoints(arrowCoords[0], arrowCoords[1]) : 0;                          let vFromAngle = p5.Vector.fromAngle(angle);                         arrow.shoot(vFromAngle);           
arrows.push(arrow); 

showDragging = false;
}                                                                                                                                arrowIsReleased = true;                                                          arrowCoords = [];                                                           



   }                                                                                                                 
                                                                                                                  catch(err)  {}                                                         } 
                                                            function angleFromTwoPoints(p1, p2){ 
try{                                                                                                                                                                                                                                    return atan2(p1.y - p2.y, p1.x - p2.x); 
}
catch(err){}                                                        }
                                  
function Obj(x,y){
    this.x = random(20,width-20);
    this.y = random(height-350,height-250);
    this.w = 40;
    this.h = 40;
    this.col =color(random(255),random(200),random(300))
    this.show = function(){
    fill(this.col);
   stroke(0);
    strokeWeight(0.5)
  ellipse(this.x,this.y,this.w,this.h);
    }
}


function collision(a,b){
  try{return dist(a.pos.x,a.pos.y,b.x,b.y)<30?true:false;
}
catch(err){}
}
function leftM(){
  
    player.left = true;;
}
function rightM(){
    player.right = true;
}
function stop(){
    player.left = false;
    player.right = false;
}
function Life(x,y){
    this.x =x;    
    this.y =y;
    this.w =20;
    this.h=20;
    this.show=function(){
image(arrow_img,this.x,this.y,this.w,this.h);
    }
}
function restart(){
   frameRate(200);
arrows.splice(0,arrows.length-1)   
  leftBtn.show();
   rightBtns.show();
   restrt.hide();
    player =  new Player(width/2,height-140);
    score =0;
    obj.splice(0,1);
    
 floor = new Floor();
 obj.push(new Obj())
 for(var i=0;i<15;i++){
     lifes.push(new Life(10,i*20+10))
 }
 
}
function Clouds(){
    this.x=width;
    this.y = random(50,height-100);
    this.w =random(1,3.5);
    this.h =this.w;
    this.maps =cloud_map;
    this.show=function(){
        for(var i =0;i<this.maps.length;i++){
     for(var j =0;j<this.maps[i].length;j++){
      if(this.maps[i][j]==1){
          fill(80);
          rect(j*this.w+this.x,i*this.h+this.y,this.w+1,this.h+1)
      }
      else if(this.maps[i][j]==0){
          fill("white");
          rect(j*this.w+this.x,i*this.h+this.y,this.w+1,this.h+1)
      }
     }   
            
        }
    }
    this.update =function(){
        this.x-=0.5;
    }
    
}