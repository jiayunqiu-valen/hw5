function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  
  for (var i = 5; i <= width; i = i + 10) {
    
    ellipse (width/2,height/2, i);
  }
}
