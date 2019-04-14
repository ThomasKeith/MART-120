var cube1;
var cube2;
var cubes = [];
function setup()
{
    createCanvas(800,600,WEBGL);
    background(0);
    cube1 = new myCube(20,40, .01);
    cube2 = new myCube(50,40, .04);


    cubes.push(cube1);
    cubes.push(cube2);

    for(var i = 0; i < cubes.length; i++)
    {
        cubes[i].magicallySetup();
    }
}

function draw()
{
    background(0);

    for(var i = 0; i < cubes.length; i++)
    {
        cubes[i].magicallyAppear();
        cubes[i].translate(50,50);
    }

}