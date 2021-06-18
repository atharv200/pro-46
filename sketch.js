var backgroundImg
var manImg, man
var ground,groundImg, shadowImg, shadow

function preload(){
  groundImg = loadImage("Images/platform.png")
  shadowImg = loadImage("Images/shadow.png")
  backgroundImg = loadImage("Images/background.jpg")
  manImg = loadAnimation("Images/man1.png","Images/man2.png","Images/man3.png","Images/man4.png","Images/man5.png","Images/man6.png","Images/man7.png","Images/man8.png","Images/man9.png","Images/man10.png")
  manImg.frameDelay = 3
 
}

function setup() {

  createCanvas(800,600);
  

  ground = createSprite(400,500)
  ground.scale = 1.5
  ground.addImage(groundImg)
  ground.debug = true
  ground.setCollider("rectangle",10,0,390,70)
 

  shadow = createSprite(100,100)
  shadow.addImage(shadowImg)
  shadow.scale = 0.05

  man = createSprite(200,410)
  man.addAnimation("running",manImg)
  man.velocityX = 5
  
  man.debug = true
  man.setCollider("circle",0,0,150)

  man.scale = 0.2
  

  


}

function draw() {

  man.velocityY = 15
  man.collide(ground)

  shadow.x = man.x-20
  shadow.y = man.y+60

  background(backgroundImg);  

  
  drawSprites();
}