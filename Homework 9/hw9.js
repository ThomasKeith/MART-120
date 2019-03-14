var enemies
var x
var y
var enemyX
var enemyY





function setup() {
    createCanvas(1000,800);

}

function draw(){

    background(0,0,55);

    enemyChase(2);

    //boundaries (are with the player controlls)
    // in the controll function
    // if(x > 0)...etc for all variables
    // then this will allow the player to move in the appropriate boundaries

    }
}
//edit
function keyPressed(){

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
//edit
function playerController(){
    if(keyIsPressed)
}