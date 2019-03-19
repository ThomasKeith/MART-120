var myCircle, myCircle2, myCircle3;



function setup()
{

    createCanvas(800,600);
    background(0,0,55);
    myCircle = new Circle(400,300,50);
}

function draw()
{
    background(0,0,55);
    myCircle.display();
}