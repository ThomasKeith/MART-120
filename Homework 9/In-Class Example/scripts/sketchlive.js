
var myCircle;
var myCircle2;
var myCircle3;

function setup()
{
    createCanvas(800,600);
    background(0);
    myCircle = new Circle(100,100,50,1);
    myCircle2 = new Circle(400,200,100,2);
    myCircle3 = new Circle(300,300,25,7);
}

function draw()
{
    background(0);
    myCircle.move();
    myCircle.display();
    myCircle2.move();
    myCircle2.display();
    myCircle3.move();
    myCircle3.display();
}



