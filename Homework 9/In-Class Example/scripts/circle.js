class Circle
{
    // constructor --- builds the object
    constructor(x,y,diameter, speed)
    {
        // properties
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = speed;
    }

    // method/function - does stuff
    display()
    {
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, this.diameter);
    }

    move()
    {
        this.x+= this.speed;
      
        if(this.x >= width-this.diameter *.5 || this.x < this.diameter /2)
        {
            this.speed *=-1;
        }
        //ellipse(this.x, this.y, this.radius);
    }
}