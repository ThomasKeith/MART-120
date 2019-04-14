class myCube
{
    constructor(h, w, rotateSpeed)
    {
        this.h = h;
        this.w = w;
        this.rotateSpeed = rotateSpeed;
    }
    magicallySetup()
    {
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    magicallyAppear()
    {
        fill(this.r,this.g,this.b);
        rotateX(frameCount * this.rotateSpeed);
        rotateY(frameCount * this.rotateSpeed);
        box(this.w,this.h);

    }


}