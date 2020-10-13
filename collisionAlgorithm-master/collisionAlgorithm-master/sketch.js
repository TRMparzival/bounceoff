var fixedRect, movingRect,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(300,200,125,50)
  ob2=createSprite(200,600,50,150)
  ob3=createSprite(600,600,100,50)
  ob2.velocityX=6;
  ob3.velocityX=-6;
  ob4=createSprite(800,200,50,100)
    
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(istouching(movingRect,ob1))
  {
   movingRect.shapeColor = "red";
    
  }
   else
   movingRect.shapeColor = "green";
  
 bounceOff(ob2,ob3)
  
  
  drawSprites();
}
