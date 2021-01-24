var sword,swordImg,score,fruit1,fruit2,fruit3,fruit4,fruit,monster,monsterImg;
var PLAY = 1;
var END = 0;
var gameState = 1;
var gameoverImg,gameoversound;
var swordSound;


function preload(){
  swordImg = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImg = loadImage("alien1.png");
 gameoverImg=loadImage("gameover.png");
  swordSound=loadSound("knifeSwooshSound.mp3");
gameoversound=loadSound("gameover.mp3");
  
}
function setup(){
  createCanvas(500,500);
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImg);
  sword.scale = 0.7;
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  score =0;

}
var position =0; 
function draw(){
  background("white");
  text("Score: "+ score, 50,50);
  
  if(gameState===PLAY){
    
  sword.x=World.mouseX;
  sword.y=World.mouseY;
  fruits();
  enemy();
      
  if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
     swordSound.play();
     score = score+2;
  }
    else if(enemyGroup.isTouching(sword)){
    gameState=END;
    sword.addImage(gameoverImg);
    gameoversound.play(); 
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
    enemyGroup.setVelocityEach(0);
    fruitGroup.setVelocityEach(0);
    
    sword.x=250;
    sword.y=250;
    sword.addImage(gameoverImg);
   
    sword.scale=1.25;
    score=0;
            }
  
  
     
  

}  

  

  
drawSprites();
   
}


 function fruits(){
if (World.frameCount%80===0){
   fruit = createSprite(400,200,20,20);
   fruit.scale = 0.2;
  //fruit.debug = true;
  position = Math.round(random(1,2));
  r = Math.round(random(1,4));
  if (r == 1) {
    fruit.addImage(fruit1);
  } else if (r == 2) {
    fruit.addImage(fruit2);
  } else if (r == 3) {
    fruit.addImage(fruit3)
  }else {
   fruit.addImage(fruit4);
  }
   fruit.y=Math.round(random(50,340));
  
  // fruit.velocityX =-7;
   fruit.setLifetime= 100;
  fruitGroup.add(fruit);
   
    if(position==1)
     {
       fruit.x = 400;
       fruit.velocityX= -(7+(score/4));
       
     }
       else
         {
           if (position==2){
             fruit.x = 0;
             fruit.velocityX= (7+(score/4));
           }
         }
 }
 
} 
 
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImg);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.setLifetime=50;
    enemyGroup.add(monster);
  }
}



    
    
    
  

