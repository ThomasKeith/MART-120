var circleY = 200;
var circleChange = 5;
var rectangleX = 0;
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


    background(r, g, b);
    amount = amount + 1;
    
    if(amount % 60 == 0)
    {
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    // Why does this Fill only change the rectangle?
    fill(0,100,255);
    
    rectangleX += rectangleChange;
    
    if(rectangleX > displayWidth - 360 || rectangleX < 0)
    {
        rectangleChange = rectangleChange * -1;
    }

    rect(rectangleX, 300, 300, 100);

    // Why does this Fill change the text and ellipse?
    fill(0, 255, 0);

    //move the circle
    circleY += circleChange;
    // when it hits the bottom, take away from the circleY
    if(circleY > displayHeight - 75 || circleY < 135)
    {
        circleChange = circleChange * -1;
    }
    ellipse(200, circleY, 75);

    fill(248, 81, 0);
    textFont('Guardians');
    textSize(25);
    text("Thomas Keith", 850,700);

}