let result;
let flower;
var enemies = [];
var zombie;
var isFiring = false;
var y = 400
function preload()
{
    result = loadStrings('assets/enemy');
    img = loadImage('assets/flower.png');
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
    push();
    translate(400, 350);
    //playerController();
    image(img,0,0,100,100);
    //rect(-25,-25,50,50);
    pop();
    zombie.display();
    fireProjectile();
    
}

function playerController()
{

    if(keyIsDown)
    {
        if (key == "a") {
            rotate(-90);
        }
        if (key == "w") {
            rotate();
        }
        if (key == "s") {
            rotate(180);
        }
        if (key == "d") {
            rotate(90);
        }
    }
    
}

function fireProjectile()
{
    if(keyIsPressed)
    {
        if (key == "w") 
        {
            
            isFiring = true;
        }

    }
    
        if (isFiring){
            createProjectile();
        }
        
}

function createProjectile()
{
    fill(255);
    y--;
    ellipse(450,y, 15,15);
}