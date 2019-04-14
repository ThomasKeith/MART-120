let bug; // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  bug = new Jitter(100,200);
}

function draw() {
  background(50, 89, 100);
  bug.move();
  bug.display();
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 70);
    this.change = 2;
  }

  move() {
    
  }

  display() {
    
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}