var r = 255;
var g = 255;
var b = 0;
var amount = 0;

function setup() {
    createCanvas(displayWidth,displayHeight,WEBGL);
    background(0);
}

function draw() {
    background(0,0,50);

    amount++;

    if(amount % 35 == 0)
    {
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }

    fill(r,g,b);

    for (let i = 0; i < 3; i++) {
        createTorus(0,0,0,"xDirection") //creates 3 of the same ring
    }
   
    createTorus(0,0,0,"yDirection");
    createSphere(0,0,0,"yDirection");

}

function createSphere(radius,translateX,translateY,rotateDirection){

    push();
    if (rotateDirection == "xDirection") {
        rotateX(millis()/1000);
    } else {
        rotateY(millis()/1000);
    }
    //rotateX(millis()/1000);
    translate(translateX,translateY)
    sphere(145,24,24);
    pop();
}

function createTorus(radius,translateX,translateY,rotateDirection){
    
    if (rotateDirection == "xDirection") {
        rotateX(millis()/1000);
    } else {
        rotateY(millis()/1000);
    }
    translate(translateX,translateY);
    torus(280);
}