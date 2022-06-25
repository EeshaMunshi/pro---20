var girlImg, girl;
var carsGroup, car1, car2;
var roadImg, road;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var invisibleGround;



function preload(){
girlImg = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png");
roadImg = loadImage("road.jpg");
car2 = loadImage("car2.png");
car3 = loadImage("car3.png");

}

function setup() {
 createCanvas(600,200);

 road = createSprite(300,100);
 road.addImage("road", roadImg);
 road.x = road.width /2;
 

 girl = createSprite(50,170,20,50);
 girl.addAnimation("running",girlImg);
girl.scale = 0.6;

 carsGroup = createGroup();

 girl.setCollider("circle",0,0,30);
girl.debug = false;

invisibleGround = createSprite(300, 190, 600, 20);
invisibleGround.visible = false;

}

function draw() {
    background(180);

   
  
  console.log("this is ",gameState)
  
  
  if(gameState === PLAY){

   road.velocityX = -4;
    
    
    
    if (road.x < 280){
     road.x = road.width/2;
    }

    if(keyDown("space")&& girl.y > 140) {
        girl.velocityY = -10;
    }

girl.velocityY +=0.8;
    
  
    spawnCars();

    drawSprites();
  }
    
    if(carsGroup.isTouching(girl)){
        gameState = END;
    }
  
   else if (gameState === END) {

    
     road.velocityX = 0;
     
     carsGroup.setVelocityXEach(0);
    

   carsGroup.setLifetimeEach(-1);
    

     girl.velocityY = 0;
     text("GAME OVER ", 300,100);
    
   }
   

girl.collide(invisibleGround);

}

function spawnCars(){
    if (frameCount % 60 === 0){
      var car = createSprite(400,185,10,40);
      car.velocityX = -7;
    
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: car.addImage(car2);
                 break;
        case 2: car.addImage(car3);
                break;
        
         
       }
       car.scale = 0.1;
       car.lifetime = 300;
      
     
      carsGroup.add(car);
    }
   }
    

