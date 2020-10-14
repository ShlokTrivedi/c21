var anotherRectangle, movingRect;

function setup() {
  createCanvas(1200,800);
anotherRectangle = createSprite(400, 100, 50, 80);
anotherRectangle.shapeColor = "green" ;
anotherRectangle.debug = true;

movingRect = createSprite(400, 800, 80, 30);
movingRect.shapeColor = "green" ;
movingRect.debug = true;

movingRect.velocityY = -5;
anotherRectangle.velocityY = 5;

}

function draw() {
  background(0,0,0); 
  bounceOff(movingRect, anotherRectangle);

  drawSprites();
}

