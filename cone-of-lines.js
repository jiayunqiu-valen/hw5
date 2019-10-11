function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  
  for (var i = 10; i <= width-10; i = i + 10) {
    
    line(width/2, 0, i,height)
  }
}
