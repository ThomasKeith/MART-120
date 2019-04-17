let result;
var enemies = [];
var zombie;







function preload()
{
    result = loadStrings('assets/enemy.txt');
}

function setup() 
{

    createCanvas(900, 800);
    fill(0,120,100);
    background(0);
    zombie = new Enemy(result[0], int(result[1]), int(result[2]), int(result[3]), int(result[4]));
    zombie.load();

}

function draw() 
{

    background(0);
  //  push();
    translate(width/2, height/2);
    playerController();
    rect(-25,-25,50,50);
  //  pop();
    zombie.display();
    
    
}

// needs to rotate main character up
function faceUp() 
{

}

function rotate90()
{
    rotate(90);
}

function playerController()
{
    if(keyIsPressed)
    {
        if (key == "a") {
            
        }
        if (key == "w") {

        }
        if (key == "s") {

        }
        if (key == "d") {
            rotate90();
        }
    }
}

