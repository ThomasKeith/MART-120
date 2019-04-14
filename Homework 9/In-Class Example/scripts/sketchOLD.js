var circleY = 0;
var rectangleX = 0;
var circleChange = 5;
var rectangleChange = 10;
var r = 0;
var g = 0;
var b = 0;
var amount = 0;
function setup() {
   
    createCanvas(displayWidth, displayHeight);
    background(0);
}

function draw() {
    
    background(r,g,b); // r = red, g = green, b= blue
    amount = amount + 1;
    if(amount % 50 == 0)
    {
        print(amount);
        changeColor();
        
    }
    
    fill(13,223,28);
    rectangleX += rectangleChange;
    // same as rectangleX = retangleX + rectangleChange;
    // when it hits the right side, go back to the left
    // when it hits the left side, go back to the right
    if(rectangleX > displayWidth || rectangleX < 0)
    {
        rectangleChange *=-1; // short hand
        //r = random(0,255);
        //g = random(0,255);
        //b = random(0, 255);
    }
    rect(rectangleX, circleY, 300, 100);
   
    fill(133,23,128);
    // move the circle.... 
    circleY += circleChange;
    // when it hits the bottom, take away from the circleY
    // when it hits the top, I need to add a positive number to the circleY
    if(circleY > displayHeight || circleY < 0)
    {
        circleChange = circleChange * -1;
    }
   
    ellipse(200, circleY, 75);
}

function changeColor()
{
    r = random(0,255);
    g = random(0,255);
    b = random(0, 255);
}

