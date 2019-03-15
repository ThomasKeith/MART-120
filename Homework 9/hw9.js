let img, enemy, jessie, james;
var x = 500
var y = 100
var enemyX = 500
var enemyY = 600
var jessieX = 300
var jessieY = 600
var jamesX = 700
var jamesY = 600
var canvasWidth = 1000
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
    enemyChase(1);
    //rect(x,y,50,50);
    

    //enemyChase(2);

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
           if(x < (canvasWidth - 50)){
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
            if(y < (canvasHeight - 50)){
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
