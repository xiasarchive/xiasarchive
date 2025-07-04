let capture1;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  capture1 = createCapture(VIDEO);
  capture1.size(100,100);
  capture1.hide();
  imageMode(CENTER);
  

  
}

function draw() {
  background(0);
  tint(mouseX,mouseY,0)
  image(capture1, windowWidth/2, windowHeight/2, 500, 500)
  
}