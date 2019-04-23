let result;
var enemies = [];
var zombie, flower;
var isFiringUP = false;
var isFiringDOWN = false;
var isFiringLEFT = false;
var isFiringRIGHT = false;
var projectileY = 400
var projectileX = 450
var zombieX = 425
var zombieY = 0
var Lives = 3
var Score = 0
function preload()
{
    result = loadStrings('assets/enemy');
    flowerResult = loadStrings('assets/flower.txt');
}

function setup() 
{

    createCanvas(900, 800);
    fill(0,120,100);
    background(0);
    zombie = new Enemy(result[0], zombieX, zombieY, int(result[3]), int(result[4]));
    zombie.load();
    flower = new Flower(flowerResult[0], int(flowerResult[1]), int(flowerResult[2]), int(flowerResult[3]), int(flowerResult[4]));
    flower.load();
    

}

function draw() 
{

    background(0);

    // Life Counter
    textSize(32);
    text('Lives',620,30);
    text(Lives,750,30);
    fill(255,255,255);

    // Scoreboard
    text('Score:', 100,30);
    text(Score, 220,30);

    // Game Over Screen
    if(Lives < 1)
    {
        textSize(48);
        textAlign(CENTER);
        fill(255,0,0);
        text('GAME OVER', 400,300);
    }

    push();
    translate(400, 350);
    flower.display();
    pop();
    enemyChase(1);
    zombie.display();
    playerController();
    reduceLives();

   if(projectileCollided(zombie) == true)
   {
       if(Lives > 0)
       {
           Score++;
           resetProjectiles();
           resetZombie();
       }
   }
    
}

function playerController()
{
    if(Lives > 0)
    {
        fireProjectileUP();
        fireProjectileDOWN();
        fireProjectileLEFT();
        fireProjectileRIGHT();
    }
    
}

function fireProjectileUP()
{
    if(keyIsPressed)
    {
        if (key == "w") 
        {
            resetProjectiles();
            
            isFiringUP = true;
        }

    }
    
        if (isFiringUP){
            createProjectileUP();
        }
        
}

function fireProjectileDOWN()
{
    if(keyIsPressed)
    {
        if (key == "s") 
        {
            resetProjectiles();
            isFiringDOWN = true;
        }

    }
    
        if (isFiringDOWN){
            createProjectileDOWN();
        }
        
}

function fireProjectileLEFT()
{
    if(keyIsPressed)
    {
        if (key == "a") 
        {
            resetProjectiles();
            isFiringLEFT = true;
        }

    }
    
        if (isFiringLEFT){
            createProjectileLEFT();
        }
        
}

function fireProjectileRIGHT()
{
    if(keyIsPressed)
    {
        if (key == "d") 
        {
            resetProjectiles();
            isFiringRIGHT = true;
        }

    }
    
        if (isFiringRIGHT){
            createProjectileRIGHT();
        }
        
}

function createProjectileUP()
{
    fill(255);
    projectileY -=5;
    ellipse(projectileX,projectileY, 15,15);
}

function createProjectileDOWN()
{
    fill(255);
    projectileY +=5;
    ellipse(projectileX,projectileY, 15,15);
}

function createProjectileLEFT()
{
    fill(255);
    projectileX -=5;
    ellipse(projectileX,projectileY, 15,15);
}

function createProjectileRIGHT()
{
    fill(255);
    projectileX +=5;
    ellipse(projectileX,projectileY, 15,15);
}

function resetProjectiles()
{
    isFiringDOWN = false;
    isFiringLEFT = false;
    isFiringRIGHT = false;
    isFiringUP = false;
    projectileX = 450
    projectileY = 400
}

function resetZombie()
{
    zombie.setX(random(0,800));
    zombie.setY(random(0,700));
}
function enemyChase(speed)
{
  // if(hasCollided(flower,zombie) == false)
   // {
        if(zombie.X > 450)
    {
        zombie.addX =-speed;
    }
        if(zombieX < 450)
    {
        zombie.addX = speed;
    }
         if(zombie.Y > 400)
    {
        zombie.addY = -speed;
    }
        if(zombie.Y < 400)
    {
        zombie.addY =speed;
    }
  //  }
    
}

function reduceLives()
{
    if(zombieX == 425 && zombieY == 375)
    {
        if(Lives > 0)
        {
            Lives--;
            resetZombie();
        }
    } 
}


function hasCollided(object1, object2) {
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
}

function projectileCollided(object1) {
    return !(
        ((object1.Y + object1.H) < (projectileY)) ||
        (object1.Y > (projectileY + 15)) ||
        ((object1.X + object1.W) < projectileX) ||
        (object1.X > (projectileX + 15))
    );
}