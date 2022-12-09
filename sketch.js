var ball;

function setup() {
  createCanvas(800, 800);
  ball=createSprite(400,400,20,20);
  ball.shapeColor="red";
 
}

function draw() {
  background(220);
if(keyDown(UP_ARROW)){
  ball.y-=2;
}
if(keyDown(DOWN_ARROW)){
  ball.y+=2;
}
if(keyDown(LEFT_ARROW)){
  ball.x-=2;
}
if(keyDown(RIGHT_ARROW)){
  ball.x+=2;
}
  drawSprites();
}