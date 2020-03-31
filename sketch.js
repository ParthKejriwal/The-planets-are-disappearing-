var sun;

var mercury,venus,earth,mars,jupiter,saturn;
function setup() {
  createCanvas(1000,600);
  sun=createSprite(500,300,50,50);
  mercury=createSprite(15,300,100,100);
  venus=createSprite(165,300,100,100);
  earth=createSprite(315,300,100,100);
  mars=createSprite(650,300,100,100);
  jupiter=createSprite(800,300,100,100);
  saturn=createSprite(950,300,100,100);
 
}

function draw() {
  background(255,255,255); 
  text("Sun",480,250);
  text("Mercury",5,230);
  text("Venus",145,230);
  text("Earth",295,230);
  text("Mars",630,230);
  text("Jupiter",780,230);
  text("Saturn",930,230);
  sun.shapeColor="yellow"
  mercury.shapeColor="red" 
  venus.shapeColor="red" 
  earth.shapeColor="red" 
  mars.shapeColor="red" 
  jupiter.shapeColor="red" 
  saturn.shapeColor="red" 
  
  if (isTouching(sun,mercury)) {
    mercury.remove();
   }
   if (isTouching(sun,venus)) {
    venus.remove();
   }
   if (isTouching(sun,earth)) {
   earth.remove();
   }
   if (isTouching(sun,mars)) {
    mars.remove();
   }
   if (isTouching(sun,jupiter)) {
    jupiter.remove();
   }
   if (isTouching(sun,saturn)) {
    saturn.remove();
   }
   if (frameCount%60===0) {
    sun.width=sun.width+25;
    sun.height=sun.height+15;
  }
  
  drawSprites();
}