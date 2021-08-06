var boy,run;
var path,way;
var points,coins;
var wall0,wall1,wall2;
var boster,drink;
var boomd,die;
function preload(){
  //pre-load images
  way = loadImage("path.png");
  run = loadAnimation("Runner-1.png","Runner-2.png");
  points = loadImage("coin.png");
  drink = loadImage("energyDrink.png");
  die = loadImage("bomb.png");
  
}

function setup(){
  createCanvas(400,600);
  path=createSprite(200,200,400,200)
  path.addImage("moving",way)
  path.velocityY=4
  boy=createSprite(200,500,10,10)
  boy.addAnimation("running",run);
  boy.scale=0.06
  coins=createSprite(200,200,5,5)
  coins.addImage("taking",points)
  coins.scale=0.3
  coins.velocityY=4
  wall0=createSprite(50,300,5,600)
  wall1=createSprite(350,300,5,600)
  wall0.visible=false
  wall1.visible=false
  boster = createSprite(100,-200,5,5)
  boster.addImage("drinking",drink);
  boster.velocityY=4;
  boster.scale=0.1;
  bomb = createSprite(100,-280,5,5)
  bomb.addImage("boom",die)
  bomb.velocityY=4;
  bomb.scale=0.1
  wall2=createSprite(200,600,400,5);
  wall2.visible=false
}

function draw() {
   drawSprites();
   if (path.y > 400) {
    path.y = 300;
  }
  if(boy.isTouching(coins)){
    coins.x=300
    coins.y=50
  }
  if(boy.isTouching(boster)){
    boster.x=200
    boster.y=-800
    bomb.y=-650
     bomb.x=200
  }
  if(boy.isTouching(bomb)){
    path.velocityY=0
    coins.velocityY=0
    boster.velocityY=0
    bomb.velocityY=0
  }
  if (coins.isTouching(wall2)){
    coins.y=-100
    coins.x=90
  }
   if(boster.isTouching(wall2)){
    boster.y=-500
    boster.x=100
   }
     if(bomb.isTouching(wall2)){
      bomb.y=-700
      bomb.x=300
     }


  if(keyDown("d")){
    boy.x=boy.x+4;
  }
  if(keyDown("a")){
    boy.x=boy.x-4;
  }
  boy.collide(wall0)
  boy.collide(wall1)
}
