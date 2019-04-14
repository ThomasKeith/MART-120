var pug = new Character("assets/pug.jpg", 0,0,50,75); // created new object from the Character class
var cat = new Character("assets/cat.jpg", 600,300,60,100);
var trafficCone = new Character("assets/traffic cone.png", 200, 180, 50,50);
var trafficCone2 = new Character("assets/traffic cone.png", 500, 350, 50,50);
var trafficCone3 = new Character("assets/traffic cone.png", 600, 80, 50,50);
var Lives = 3

// preload our images
function preload() {
    pug.load();
    cat.load();
    trafficCone.load();
    trafficCone2.load();
    trafficCone3.load();
    
}

// set up the canvas for display
function setup() {
    createCanvas(800, 600);
    background(0);
}

// draw everything to the canvas
function draw() {
    
    background(0);

    // Life Counter
    textSize(32);
    text('Lives',620,30);
    text(Lives,750,30);
    fill(255,255,255);

    // Game Over Screen
    if(Lives < 1){
        textSize(48);
        textAlign(CENTER);
        fill(255,0,0);
        text('GAME OVER', 400,300);
    }

    playerController();
    enemyChase(1);
    pug.display();
    cat.display();
    trafficCone.display();
    trafficCone2.display();
    trafficCone3.display();
    
}

// this allows us to move with the keyboard
function playerController()
{
   if(Lives > 0){

    if(keyIsPressed)
    {
        if (key == "a") {

            if(pug.x > 0){
            pug.addX = -5;
            }
        } 
        if (key == "w") {

            if(pug.y > 0){
            pug.addY = -5;
            }
            
        }
        if (key == "s") {
            if(pug.y < 550){
            pug.addY = 5;
            }
        }
        if (key == "d") {
            if(pug.x < 725){
            pug.addX = 5;
            }
        }
    }
    
        if(hasCollided(pug, cat))
        {
           // make sure they don't over run each other
           if(Lives > 0)
           {
               Lives = Lives -1;
           }

           if(keyIsPressed)
    {
        if (key == "a") {

            if(pug.x > 0){
            pug.addX = 10;
            }
        } 
        if (key == "w") {

            if(pug.y > 0){
            pug.addY = 10;
            }
            
        }
        if (key == "s") {
            if(pug.y < 550){
            pug.addY = -10;
            }
        }
        if (key == "d") {
            if(pug.x < 725){
            pug.addX = -10;
            }
        }

    }
        }

        if(hasCollided(pug, trafficCone))
        {
           if(keyIsPressed)
        {
        if (key == "a") {

            if(pug.x > 0){
            pug.addX = 5;
            }
        } 
        if (key == "w") {

            if(pug.y > 0){
            pug.addY = 5;
            }
            
        }
        if (key == "s") {
            if(pug.y < 550){
            pug.addY = -5;
            }
        }
        if (key == "d") {
            if(pug.x < 725){
            pug.addX = -5;
            }
        }

    }
        }

        if(hasCollided(pug, trafficCone2))
        {
           if(keyIsPressed)
        {
        if (key == "a") {

            if(pug.x > 0){
            pug.addX = 5;
            }
        } 
        if (key == "w") {

            if(pug.y > 0){
            pug.addY = 5;
            }
            
        }
        if (key == "s") {
            if(pug.y < 550){
            pug.addY = -5;
            }
        }
        if (key == "d") {
            if(pug.x < 725){
            pug.addX = -5;
            }
        }

    }
        }

        if(hasCollided(pug, trafficCone3))
        {
           if(keyIsPressed)
        {
        if (key == "a") {

            if(pug.x > 0){
            pug.addX = 5;
            }
        } 
        if (key == "w") {

            if(pug.y > 0){
            pug.addY = 5;
            }
            
        }
        if (key == "s") {
            if(pug.y < 550){
            pug.addY = -5;
            }
        }
        if (key == "d") {
            if(pug.x < 725){
            pug.addX = -5;
            }
        }

    }
        }
    }
    
    
}

// this functions allows the enemy to chase the player
function enemyChase(speed)
{
    if(hasCollided(pug,cat) == false)
    {
        if(cat.X > pug.X)
    {
        cat.addX = -speed;
    }
        if(cat.X < pug.x)
    {
        cat.addX = speed;
    }
         if(cat.Y > pug.y)
    {
        cat.addY = -speed;
    }
        if(cat.Y < pug.y)
    {
        cat.addY = speed;
    }
    }
    
}

// this just checks collision
function hasCollided(object1, object2) {
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
}
