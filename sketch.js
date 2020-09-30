var trex, trexrun;
var ground, groundimg; 
function preload(){
  trexrun = loadAnimation("trex1.png", "trex3.png", "trex4.png"); 
  groundimg=loadImage("ground2.png");
}

function setup() {
  createCanvas(600,200);
  trex=createSprite(40,180,20,30);
  trex.addAnimation("run",trexrun);
  trex.scale=0.6;
  ground=createSprite(200,190,600,15);
  ground.addImage(groundimg);
  ground.velocityX=-4;
  ground.x=ground.width/2
}

function draw() {
  background(220);
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    trex.velocityY=-10;
  }    
  trex.velocityY=trex.velocityY+0.8; 
  trex.collide(ground);
  
 drawSprites(); 
}