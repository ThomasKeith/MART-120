class Character
{
    // this sets our properties
    constructor(imagePath, x, y, h, w)
    {
        this.imagePath = imagePath;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    // these are getters and allow us to get information out of the object
    get X()
    {
        return this.x;
    }

    get Y()
    {
        return this.y;
    }

    // these are setters so we can change information in our object
    set addX(value)
    {
        this.x += value;
    }

    set addY(value)
    {
        this.y += value;
    }

    get H()
    {
        return this.h;
    }

    get W()
    {
        return this.w;
    }

    get theImage()
    {
        return this.image;
    }

    // this function just loads the image from the file path
    load()
    {
        this.image = loadImage(this.imagePath);
    }
    // this function displays our images based on the image, the x,y, and height and width
    display()
    {
        image(this.image,this.x, this.y, this.w,this.h);
    }
}