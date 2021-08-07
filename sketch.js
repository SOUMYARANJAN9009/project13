var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves,appleImg,leafImg;
var ApplesGroup,LeavesGroup;
var newImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leavesImg=loadImage("leaf.png","orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);

 
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //moving the rabbit with mouse
  rabbit.x=World.mouseX;

 
spawnapples();

spawnleaves();

  
drawSprites();
}

function spawnapples(){
  if(frameCount%80===0){
    apple=createSprite(200,10,10,10);
    apple.addImage(appleImg);
    apple.velocityY=6;
    apple.scale=0.1;
     apple.x=Math.round(random(50,300));
      }
    
    } 
  
    function spawnleaves(){
      
  if(frameCount%80===0){
    leaf=createSprite(10,-20,10,10);
    leaf.addImage(leavesImg);
    leaf.velocityY=5;
    leaf.scale=0.1;
    leaf.x=Math.round(random(100,400));
  }

  
    }


  
