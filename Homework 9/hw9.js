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
    image(jessie,jessieX,jessieY,64,120);
    image(james,jamesX,jamesY,47,120);
    enemyChase(3,2,1);
    
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

function enemyChase(mSpeed,jsSpeed,jmSpeed){
    //Meowth
    if(enemyX > x){
        enemyX -= mSpeed;
    }
    if(enemyX < x){
        enemyX += mSpeed;
    }
    if(enemyY > y){
        enemyY -= mSpeed;
    }
    if(enemyY < y){
        enemyY += mSpeed;
    }
    //Jessie
    if(jessieX > x){
        jessieX -= jsSpeed;
    }
    if(jessieX < x){
        jessieX += jsSpeed;
    }
    if(jessieY > y){
        jessieY -= jsSpeed;
    }
    if(jessieY < y){
        jessieY += jsSpeed;
    }
    //James
    if(jamesX > x){
        jamesX -= jmSpeed;
    }
    if(jamesX < x){
        jamesX += jmSpeed;
    }
    if(jamesY > y){
        jamesY -= jmSpeed;
    }
    if(jamesY < y){
        jamesY += jmSpeed;
    }
}



// enemyChase now covers these two chase functions
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