var maincar,maincarimage,car2Group,car2,car2image,car3,car3Group,car3image;
var road,roadimage;
play=1;
end=0;
var gamestate=play;
var gameover,gameoverimage;
var score;

function preload(){
maincarimage=loadImage("car_black.png")
car2image=loadImage("car_blue.png")
car3image=loadImage("car_yellow.png")
roadimage=loadImage("ggg.jpg")
 gameoverimage=loadImage("gameover.jpg") 
}

function setup() {
  createCanvas(800,800)
road=createSprite(330,180,20,80);
  road.addImage("road",roadimage)
  road.scale=2
  road.velocityY=3
 spawncars();
  car2Group=createGroup();
  car3Group=createGroup();
  maincar.setCollider("rectangle",0,0,maincar.width,maincar.height);
  maincar.debug=false;
  gameover=createSprite(290,200,30,30);
  gameover.addImage("gameover",gameoverimage);
  gameover.scale=0.3;
 score=0;
}

function draw() {
  background("grey");
  textSize(40);
  fill("yellow")
  text("score:"+score,300,200);
  if(gamestate===play){
    if(road.y>400){
     road.y=200;
  }
if(keyDown("space")){
    maincar.velocityY=-1;
}
  if(keyDown("right")){
    maincar.x=maincar.x+20
  }
  if(keyDown("left")){
    maincar.x=maincar.x-20
  }
  if(keyDown("up")){
    maincar.y=maincar.y-5
  }
  if(keyDown("down")){
    maincar.y=maincar.y+5
  }
      gameover.visible=false;
  }
  
  if(maincar.isTouching(car2)||maincar.isTouching(car3)){
    car3Group.destroyEach(); 
    car2Group.destroyEach();
    gamestate=end;
}
 else if(gamestate===end){
  
   gameover.visible=true;
   road.velocityY=0;
   maincar.velocityY=0;
 }
   drawSprites();

  
}
function spawncars(){
  maincar=createSprite(300,450,40,40);
  maincar.addImage("car",maincarimage);
  maincar.scale=1;

  if(frameCount%60===0){
    car2=createSprite(250,30,40,40);
  car2.y=Math.round(random(200,500),40,10,10);
  car2.lifetime=100;
  car2.addImage("car",car2image);
  car2.scale=1;
   car3=createSprite(340,250,40,40);
  car3.y=Math.round(random(200,550),40,10,10)
  car3.lifetime=120;
  car3.addImage("car",car3image);
  car3.scale=1;
   
}

}
