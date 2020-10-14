var fx1, fx2, mv;

function setup() {
  createCanvas(1200,800);
fx1 = createSprite(200, 400, 50, 80);
fx1.shapeColor = "green" ;
fx1.debug = true;

fx2 = createSprite(600, 400, 50, 80);
fx2.shapeColor = "green" ;
fx2.debug = true;

mv = createSprite(400, 200, 80, 30);
mv.shapeColor = "green" ;
mv.debug = true;
}

function draw() {
  background(0,0,0); 
  
  mv.x = World.mouseX;
  mv.y = World.mouseY;

  if(isTouching(mv, fx2)){ 
  mv.shapeColor = "red";
  fx2.shapeColor = "red";
}
  else {
    mv.shapeColor = "green";
    fx2.shapeColor = "green";
  }
  drawSprites();
}
