let result;
var totalText = "";
var myFont;
function preload() {
  myFont = loadFont("assets/AvenirLTStd-Book.otf");
  result = loadStrings('assets/information.txt');
}
// set up the canvas for display
function setup() {
    createCanvas(800, 600, WEBGL);
    background(0);
    fill(255);
    textFont(myFont);
    textSize(25);
    
    //console.log(result.length);
    for(var i = 0; i < result.length; i++)
    {
        console.log(result[i]);
        totalText += result[i] + " ";
    }
}

// draw everything to the canvas
function draw() {
    
    background(0);
    rotateX(millis()/1000);
    rotateZ(millis()/1345);
    text(totalText, 100, 100, 100, 100);
    
}


