let img, enemy, jessie, james;
var x = 500
var y = 100
var enemyX = 500
var enemyY = 600
var jessieX = 300
var jessieY = 600
var jamesX = 700
var jamesY = 600
var canvasWidth = 1200
var canvasHeight = 800

function preload() {
    img = loadImage('assets/pikachu.png');
    enemy = loadImage('assets/meowth.png');
    jessie = loadImage('assets/jessie.png');
    james = loadImage('assets/james.png');
}

function setup() {
    createCanvas(canvasWidth,canvasHeight);

}

function draw() {

    background(0,20,45);
    image(img,x,y,100,100);
    playerController(7);
    image(enemy,enemyX,enemyY,62,75);
    enemyChase(3);
    image(jessie,jessieX,jessieY,64,120);
    jessieChase(2);
    image(james,jamesX,jamesY,47,120);
    jamesChase(1);
    
}
// controlls with boundaries
function playerController(speed) {
    if(keyIsPressed){
        if(key =="a")
        {
            if(x > 0){
                 x-=speed;
            } 
        }
       else if(key == "d")
        {
           if(x < (canvasWidth - 100)){
                 x+=speed;
           } 
        }
       else if(key == "w")
        {
            if(y > 0){
                y-=speed;
            }
        }
       else if(key == "s")
        {
            if(y < (canvasHeight - 100)){
                y+=speed;
            }
        }
    }
}

function enemyChase(speed){
    //chase player
    if(enemyX > x){
        enemyX -= speed;
    }
    if(enemyX < x){
        enemyX += speed;
    }
    if(enemyY > y){
        enemyY -= speed;
    }
    if(enemyY < y){
        enemyY += speed;
    }
}

function jessieChase(speed){
    //chase player
    if(jessieX > x){
        jessieX -= speed;
    }
    if(jessieX < x){
        jessieX += speed;
    }
    if(jessieY > y){
        jessieY -= speed;
    }
    if(jessieY < y){
        jessieY += speed;
    }
}

function jamesChase(speed){
    //chase player
    if(jamesX > x){
        jamesX -= speed;
    }
    if(jamesX < x){
        jamesX += speed;
    }
    if(jamesY > y){
        jamesY -= speed;
    }
    if(jamesY < y){
        jamesY += speed;
    }
}