var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  score = 0
  
  
  //MONKEY
  monkey = createSprite (50,334);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.2
  
  //GROUPS
  obstaclesGroup = new Group ()
  
  //GROUND
  ground = createSprite(400,400,400,20);
  ground.x = ground.width/2
  ground.velocityX = -3
  
  
}


function draw() {
  
background("lightgreen")
  
  score = score + Math.round(getFrameRate()/60);
  
  if (ground.x <200) {
   ground.x = ground.width/2
}
  
  if (keyDown("space")){
    monkey.velocityY = -6
  }

monkey.velocityY = monkey.velocityY + 0.5
  
monkey.collide(ground)
  
spawnBananas();
  
spawnObstacles();
  
drawSprites();
  
text("Survival Time: "+ score, 300,30);
fill("black")
  
}

function spawnObstacles() {
  
  if (frameCount % 100 === 0) {
    var obstacle = createSprite (100,355)
    obstacle.velocityX = -4
    
    var rand = Math.round(random(1,6));
    
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.lifetime = 450
    obstaclesGroup.add(obstacle)
    
    monkey.depth = obstacle.depth
    monkey.depth = monkey.depth + 1
    
  }
}
  
      
function spawnBananas(){

if (frameCount %100 === 0)  {
  banana = createSprite (400,Math.round(random(100,300)));
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX = -4
  
  
 }
}




