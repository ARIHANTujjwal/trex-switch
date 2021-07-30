var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var o1
var o2
var o3
var o4
var o5
var o6

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  o1 = loadImage('obsticale1.png');
  o2 = loadImage('obsticale2.png');
  o3 = loadImage('obsticale3.png');
  o4 = loadImage('obsticale4.png');
  o5 = loadImage('obsticale5.png');
  o6 = loadImage('obsticale6.png');

 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnO();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
}

function spawnO(){
  if(frameCount % 60 === 0){
    var ob = createSprite(600,165,10,40);
    ob.velocityX = -6;
    var num = Math.round(random(1,6));
    switch(num){
      case 1: ob.addImage(o1);
      break;
      case 2:ob.addImage(o2);
      break;
      case 3: ob.addImage(o3);
      break;
      case 4:ob.addImage(o4);
      break;
      case 5: ob.addImage(o5);
      break;
      case 6:ob.addImage(o6);
      break;
      default: 
      break;
    }
  }
}