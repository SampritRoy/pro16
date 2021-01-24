
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
//creating monkey sprite 
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground = createSprite(400,350,900,10);
ground.addAnimation("moving",monkey_running);  
ground.X=ground.width/2;
console.log(ground.X);  

stroke("white");
textSize(20);
fill("white");
survivalTime=Math.ceil(FrameCount/frameRate())
text("SurvivalTime:"+survivalTime,100,50);
  
  
  
  
  
  
  
}


function draw() {
drawSprites();
  
}






