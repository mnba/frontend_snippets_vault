// Created by ChillPill
// Edited my M.A.: 
/* M.A.-version: better size, changed H 
  to become better fit on my mobile, 
  line 352.
  Added better formatting. ";"-s and explanations in comments.
*/
const {abs,sin,cos,atan2,hypot,floor,PI} = Math;

let imageData;
let bg;
let wallTexture;
let enemyTexture;
let xorTexture;
let textureMap = {
    "0": ()=>undefined,
    "1": ()=>wallTexture,
    "2": ()=>xorTexture
};
let canvas, ctx;
let W, H;
let touchEvent = 0;

// The Plan of the floor, level-1 (only one level)
const level = [
"11111111111111111111",
"10000000000000000001",
"10000000000000000001",
"10001111111111100001",
"10000000001000000001",
"10000000000000000001",
"10000000000000000001",
"10000000100010000001",
"10000000100010000001",
"11111111100011110001",
"10000000000000010001",
"10000000000000010001",
"10000111100000010001",
"10000000100000010001",
"10000000100000000001",
"10000000100000000001",
"10001111100001110001",
"10001000000000000001",
"10001000000000000001",
"11111111111111111111",
]

let enemies = [];

/** Player and Game functionality */
let player = {
    // initial position,angle; health and ammos of player
    x: 5.5,
    y: 17.5,
    a: 0,
    health: 100,
    ammo:100,
    
    rayHit : function(distance, angle){
        const x = this.x + distance * cos(angle)
        const y = this.y + distance * sin(angle)
        return level[floor(y)][floor(x)] != "0"
    },
    
    rayTrace : function(angle) {
        let d = 0
        while(!this.rayHit(d, angle)) d += W / 10000
            const x = this.x + d * cos(angle)
            const y = this.y + d * sin(angle)
            const type = level[floor(y)][floor(x)]
            const ux =(() => {
                const z = x - floor(x)
                if (z <= 0.01 || z >= 0.99) return y - floor(y)
                return z
            })()
         return [d,type,ux]
    },
}

/** Enemy behaviour */
class Enemy{
    constructor(x,y){
        this.x = x
        this.y = y
        this.health = 100
        this.waken = false
    }
    distanceToPlayer(){
        return hypot(this.x-player.x,this.y-player.y)
    }
    angleToPlayer(){
        return atan2(player.y-this.y,player.x-this.x)
    }
    angleFromPlayer(){
        return atan2(this.y-player.y,this.x-player.x)
    }
    isVisibleToPlayer(){
        const a = abs(player.a-this.angleFromPlayer())
        const v = a>PI?abs(2*PI-a):a
        return v < 0.2
    }
    advanceTowardsPlayer(){
        const angle = this.angleToPlayer()
        this.x += W/10000*cos(angle)
        this.y += W/10000*sin(angle)
    }
    update(){
        if(this.isSeeingPlayer()){
            this.advanceTowardsPlayer()
            if(this.distanceToPlayer() < 3){
                player.health -= 0.1
            }
        }
    }
    
    rayHit(distance, angle){
        const x = this.x + distance * cos(angle)
        const y = this.y + distance * sin(angle)
        return level[floor(y)][floor(x)] != "0"
    }
    isSeeingPlayer() {
        let d = 0
        const angle = this.angleToPlayer()
        const dtp = this.distanceToPlayer()
        if(dtp > 5 && !this.waken) return false
        while(!this.rayHit(d, angle) && d < dtp) d += W / 10000
        if(d > dtp){
            this.waken = true;
            return true;
        }else 
          return false;
    }
}

/************************************
    Drawing
*************************************/

const setPixel = (x,y,r,g,b) => {
    imageData.data[(y*W+x)*4] = r;
    imageData.data[(y*W+x)*4+1] = g;
    imageData.data[(y*W+x)*4+2] = b;
    imageData.data[(y*W+x)*4+3] = 255;
}

const draw = () => {
    ctx.putImageData(bg,0,0)
    imageData = ctx.getImageData(0,0,W,H)
    
    const deltaA = 0.4 / W
    const walk =  (touchEvent == up || touchEvent == down)*5*sin(Date.now()/100)
    const distances = new Array(W)
    
    //draw walls
    for(let angle = -0.2, i = 0; angle<0.2; angle+=deltaA){
        const [distance,objectType,ux] = player.rayTrace(angle + player.a)
        distances[i] = distance
        if(distance < 0.5) continue
        const columnHeight = H / distance
        for(let y=0,j=0;y<=columnHeight;y+=1){
        let r = g = b = 100
        const texture = textureMap[objectType]()
        if(objectType != "0"){
            const light = 10 / (distance**2)
            const tx = floor(ux*W)
            const ty = floor(H*y/columnHeight)
            r =  texture.data[(ty*W+tx)*4]*light
            g =  texture.data[(ty*W+tx)*4+1]*light
            b =  texture.data[(ty*W+tx)*4+2]*light
        }
        setPixel(i,floor(y+(H-columnHeight)/2+ walk),r,g,b);
        }
        i++;
    }
    
    //draw enemies
    for(let i=0;i<enemies.length;++i){
        const enemy = enemies[i]
        if(enemy.isVisibleToPlayer()){
        const angle = player.a -  atan2(enemy.y-player.y,enemy.x-player.x)
        const x = W-floor(((angle+0.2) / 0.4) * W)
        const d = enemy.distanceToPlayer()
        if(d < 0.5) continue
        if(d < distances[x]){
            //draw enemy
            const columnHeight = H / d;
            const width = columnHeight / 1.6;
            for(let z=0;z<width;++z){
            for(let j=0;j<columnHeight;++j){
                if(z+x-width/2<0||z+x-width/2>=W) continue;
                const textureIndex = floor(j/columnHeight*H)*W*4+floor(z/width*W)*4;
                const alpha = enemyTexture.data[textureIndex+3];
                if(!alpha) continue;
                const y = floor(j+(H-columnHeight)/2+ walk);
                const imgDataIndex = floor(y*W*4)+floor(z+x-width/2)*4;
                imageData.data[imgDataIndex] = 
                enemyTexture.data[textureIndex]/(d/2)
                imageData.data[imgDataIndex+1] = 
                enemyTexture.data[textureIndex+1]/(d/2)
                imageData.data[imgDataIndex+2] = 
                enemyTexture.data[textureIndex+2]/(d/2)
            }
            }
        }
        }
    }
    ctx.putImageData(imageData,0,0);
}

const drawMap = () => {
    ctx.strokeStyle = "white"
    ctx.strokeRect(0,0,W/4,W/4)
    ctx.fillStyle = "red"
    ctx.fillRect((player.x-0.5)*W/4/20,(player.y-0.5)*W/4/20,W/4/20,W/4/20)
    ctx.beginPath()
    ctx.moveTo(player.x*W/4/20,player.y*W/4/20)
    ctx.lineTo(player.x*W/4/20+(W/40)*cos(player.a),player.y*W/4/20+(W/40)*sin(player.a));
    ctx.stroke();
}

const drawHealth = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(W/3,H/16,W/3,H/16);
    ctx.fillStyle = "green";
    ctx.fillRect(W/3,H/16,W/3 * player.health / 100, H/16);
    ctx.strokeStyle = "cyan";
    ctx.strokeRect(W/3,H/16,W/3,H/16);
}

const drawAmmo = () => {
    ctx.font = `${W/10}px courier`
    ctx.fillStyle = "yellow"
    ctx.fillText(`${player.ammo}💊`,2*W/3,H/16)
}

const drawStatus = () => {
    let status
    if(player.health > 90){
        status = "😎"
    }else if(player.health > 65){
        status = "🤧"
    }else if(player.health > 30){
        status = "🤢"
    }else{
        status = "🤮"
    }
    ctx.font = `${W/10}px courier`
    ctx.fillText(status,W*7/8,H/8)
}

/*********************
    Controls
********************/

const up = () => {
    if(player.rayTrace(player.a)[0] < 1) return
    player.x += cos(player.a)*(W/2000)
    player.y += sin(player.a)*(W/2000)
}

const down = () => {
    player.a += PI
    if(player.rayTrace(player.a)[0] < 1){
        player.a -= PI
        return
    }
    player.a -= PI
    player.x -= cos(player.a)*(W/2000)
    player.y -= sin(player.a)*(W/2000)
}

const left = () => {
    player.a -= 0.01
    if(player.a < -PI) player.a += 2*PI
}

const right = () => {
    player.a += 0.01
    if(player.a > PI) player.a-= 2*PI
}

const shoot = () => {
    touchEvent = 0
    if(player.ammo <= 0) return;
    player.ammo -= 1
    for(let enemy of enemies){
        if(enemy.isVisibleToPlayer()){
            const accuracy = (0.2-abs(player.a - enemy.angleFromPlayer()))/0.2
            enemy.health -= accuracy*8
            enemy.waken = true;
            return;
        }
    }
}

const touchstart = (ev) => {
    const x = ev.touches[0].pageX/3
    const y = ev.touches[0].pageY/3
    if(x>W/3&&x<W*2/3&&y>H/3&&y<H*2/3){
        touchEvent = shoot
        return
    }
    const angle = (atan2(y-H/2,x-W/2) + 2*PI)%(2*PI) 
    if(angle < PI/4) touchEvent = right
    else if(angle < 3 * PI/4) touchEvent = down
    else if(angle < 5 * PI/4) touchEvent = left
    else if(angle < 7 * PI/4) touchEvent = up
    else touchEvent = right
    ev.preventDefault()
}

const touchend = (ev) => {
    touchEvent = 0
}

/**************************
    setup functions
**************************/

const setupTextures = () => {
    //wallTexture
    ctx.drawImage(document.querySelector("#wallTexture"),0,0,W,H)
    wallTexture = ctx.getImageData(0,0,W,H)
    
    //background (illuminated floor)
    ctx.fillStyle = "rgb(0,0,10)"
    ctx.fillRect(0,0,W,H)
    for(let i=H/2;i>0;i-=1){
        let c = H /2 - ((i**2/(H/2)))
        ctx.fillStyle = `rgb(${0},${0},${c})`
        ctx.beginPath()
        ctx.arc(W/2,H,i,0,PI*2)
        ctx.fill()
    }
    bg = ctx.getImageData(0,0,W,H)
    
    //enemyTexture
    ctx.clearRect(0,0,W,H)
    ctx.drawImage(document.querySelector("#enemy"),0,0,W,H)
    enemyTexture = ctx.getImageData(0,0,W,H)
    
    //xorTexture
    for(let y=0;y<H;++y){
      for(let x=0;x<W;++x){
        const c = ((255*x/W)^(255*y/H))
        ctx.fillStyle = `rgba(${c},${c},${c},1.0)`
        ctx.fillRect(x,y,2,2)
      }
    }
    xorTexture = ctx.getImageData(0,0,W,H)
}

const setupCanvas = () => {
    canvas = document.querySelector("canvas");
    
    W = floor(innerWidth/3);
    canvas.width = W;
    //H = floor(W * 1.6);//?!
    H = floor(W * 1.4);//Better size for Sololearn ! :like:
    canvas.height = H;
    
    ctx = canvas.getContext("2d");
    canvas.addEventListener("touchstart",touchstart)
    canvas.addEventListener("touchend",touchend)
}

const setupEnemies = () => {
    enemies.push(new Enemy(2,2)); //the furthest enemy
    enemies.push(new Enemy(6,6));
    enemies.push(new Enemy(17,6));
    enemies.push(new Enemy(2,17));
    enemies.push(new Enemy(18,18));
}

const removeDeadEnemies = () => {
    for(let i=enemies.length-1;i>=0;i--){
        const enemy = enemies[i]
        if(enemy.health <= 0){
            enemies.splice(i,1)
        }
    }
}

const won = () => {
    return !enemies.length
}

const lost = () => {
    return player.health <= 0
}

const loop = () => {
    draw();
    drawMap();
    drawHealth();
    drawAmmo();
    drawStatus();
    if(touchEvent) touchEvent();
    for(let enemy of enemies)
      enemy.update();
    removeDeadEnemies();
    
    if( won()) 
      alert("you won");
    else 
    if( lost()) 
      alert("you lost");
    else 
      requestAnimationFrame(loop);
}


const start = () => {
    alert(`
Kill all corona viruses
=======================

3D world, floor with corona-virus "beasts".
You fight against beasts with pills.

Controls:
=========
Touch screen LEFT to turn left
Touch screen RIGHT to turn right
Touch screen UP to go forward
Touch screen DOWN to go backwards
Touch CENTER to shoot (spends armors of pills)
    `);
    
    setupCanvas();
    setupTextures();
    setupEnemies();
    loop();
}


onload = start;

