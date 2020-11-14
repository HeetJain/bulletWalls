var bullet,wall;
var speed,weight,thicknes;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thicknes=random(22,83)

  bullet = createSprite(50, 200,50, 10);
  bullet.shapeColor=color("white");
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thicknes,height/2);
  wall.shapeColor=color(80,80,80);

  border1 = createSprite(800,310,1600,5);
  border1.shapeColor=color("white");

 
 
}

function draw() { 
  background("black");

  if(hasCollided(bullet,wall)){

         bullet .velocityX = 0
        
         var damage=0.5 * weight * speed  * speed/(thicknes * thicknes * thicknes);

         if(damage>10){
            wall.shapeColor=color(255,0,0);
         }

         if(damage<10){
           wall.shapeColor=color(0,255,0);
         } 
 
      }

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){

    return true;

  }

  return false;

}