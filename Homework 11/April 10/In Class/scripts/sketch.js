let result;
var characters = [];
var myFont;
var count = 0;
var index = 0;
var character1, character2;
var direction = "";
var Lives = 3
function preload() {
  myFont = loadFont("assets/AvenirLTStd-Book.otf");
  result = loadStrings('assets/information.txt');
  
}
// set up the canvas for display
function setup() {
    createCanvas(800, 600);
    background(0);
    fill(255);
    character1 = new Character(result[0], int(result[1]), int(result[2]), int(result[3]), int(result[4]));
    character1.load();
    character2 = new Character(result[5], int(result[6]), int(result[7]), int(result[8]), int(result[9]));
    character2.load();

    
    //console.log(result.length);
   /* for(var i = 0; i < result.length; i++)
    {
      // console.log(result[i]);
        var moreStuff = split(result[i], ",");
        for(var j = 0; j < moreStuff.length; j++)
        {
            
            totalText.push(moreStuff[j]);
        }
       
    }*/
}

// draw everything to the canvas
function draw() {
    
    background(0);
    playerController();
    character1.display();
    character2.display();

    // Lives Display
    textSize(32);
    text('Lives:',630,45);
    text(Lives,725,45);
    fill(255,255,255);

    if(hasCollided(character1,character2))
    {
      Lives = Lives -1;
    }

    //reduceLives(character1,character2);

}


function playerController()
{
   // prevent them from going out of bounds...
    if(keyIsPressed)
    {
        if (key == "a") {
            moveLeft();
            direction = "left";
        } 
        if (key == "w") {
          moveUp();
          direction = "up";
        }
        if (key == "s") {
          moveDown();
          direction = "down";
        }
        if (key == "d") {
          console.log("Hi " + character1.X);
          moveRight();
          direction = "right";
        }
    
        if(hasCollided(character1, character2))
        {
           // make sure they don't over run each other
           if(direction == "up")
           {
             moveDown();
           }
           else if(direction == "down")
           {
             moveUp();
           }
           else if(direction == "right")
           {
             moveLeft();
           }
           else if(direction == "left")
           {
             moveRight();
           }
           
        }
    }
    
    function moveDown()
    {
      if(character1.Y < 600)
      {
        character1.addY = 5;
      }
      
    }
    function moveUp()
    {
      if(character1.Y > 0)
      {
        character1.addY = -5;
      }
      
    }
    function moveLeft()
    {
      if(character1.X > 0)
      {
        character1.addX = -5;
      }
      
    }
    function moveRight()
    {
      if(character1.X < 600)
      {
        character1.addX = 5;
      }
      
    }
    
}
function enemyChase(speed)
{
    if(character2.X > character1.X)
    {
      character2.addX = -speed;
    }
    if(character2.X < character1.x)
    {
      character2.addX = speed;
    }
    if(character2.Y > character1.y)
    {
      character2.addY = -speed;
    }
    if(character2.Y < character1.y)
    {
      character2.addY = speed;
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