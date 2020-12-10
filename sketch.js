var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
 
  
  score=0
  survivalTime=0
  
  ground=createSprite(400,350,900,10);
  ground.x = ground.width/2;
  
  FoodGroup = new Group()

  obstacleGroup = new Group() 



}


function draw() {
createCanvas(600,600)
  
ground.velocityX = -4;
  
if (ground.x < 0)
{ 
  ground.x = ground.width/2; 
}

if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground); 


  spawnBananas();

  spawnObstacles()
   
  
    
    

    
  
    stroke("black");
    textSize(20);
    fill("black")
    text("Score : " + score,460,50)
  
  
  
    stroke("black");
    textSize(15);
    fill("black")
    survivalTime=Math.ceil(frameCount/50)
  text("Survival Time : " + survivalTime,100,50)
  
  
  
  
 
  
  
  
  
  if(monkey.isTouching(FoodGroup)){
    score=score+1;
  }

  
  if(monkey.isTouching(obstacleGroup)){
    score=score-1;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();

}

function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
  
    
  
  
  
  }
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,320,40,20)
    obstacle.addImage(obstaceImage)
    obstacle.velocityX = -4
    obstacle.scale=0.1
    obstacle.lifetime = 200;
    
   
    obstacleGroup.add(obstacle)
  
}

}