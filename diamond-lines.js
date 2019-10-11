function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (var i = 5; i<= height/2; i =i + 10) {
    
    line (width/2-i, i, width/2+i, i)
    
  }
  
    for (var i = 5 ; i< height; i =i + 10) {
    
    line (i, height/2+i, width-i, height/2 +i)
    
  }
}
