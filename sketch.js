var wall,thickness
var bullet,speed,weight

function setup() {
 createCanvas(800,400);

 bullet = createSprite(100, 200, 90, 10);
wall = createSprite(600,200,60,150)
speed = random(223,321)
weight = random(30,52)
thickness = random(22,83);
bullet.velocityX = speed
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (thickness.width+wall.width)/2)
{  bullet.velocityX = 0;
   var deformation = 0.5 * weight* speed* speed/22509;
   if(deformation,180)
{

bullet.shapecolor = color(0,225,0);

}

if(deformation<180 && deormation>100)
{
   bullet.shapecolor = color(230,230,0)

}
if(deformation<100)
{
   bullet.shapecolor = color(0,255,0);


}

}


function hasCollided (bullet,wall){

bulletRightEdge = bullet.x + bullet.width
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge){

return  true

}
return false;

}

if(hasCollided(bullet,wall)){

bullet.velocityX = 0;
var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness)

if(damage>10){

wall.shapecolor = color(225,0,0);

}

if(damage<10){

wall.shapecolor = color(0,225,0)

}


}



  drawSprites();
}