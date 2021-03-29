var BG 
var ninja 
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17
var border1,border2,border3,border4
var diamond1,diamond2,diamond3,diamond4

function preload(){
BGimage=loadImage("images/soil.jpg");
ninjaimage=loadImage("images/ninja.png");
guardimage=loadImage("images/guard.png");
diamondimage=loadImage("images/diamond.png");
bulletimage=loadImage("images/bullet.png");
}

function setup() {
  createCanvas(900,900)
  ninja = createSprite(70,height-50,20,20);
  ninja.addImage("ninjaimage",ninjaimage);
  ninja.scale=(0.23)

  diamond1 = createSprite(50,730,1,1)
  diamond1.addImage(diamondimage)
  diamond1.scale=(0.1)

  diamond2 = createSprite(50,50,1,1)
  diamond2.addImage(diamondimage)
  diamond2.scale=(0.1)

  diamond3 = createSprite(460,470,1,1)
  diamond3.addImage(diamondimage)
  diamond3.scale=(0.1)

  diamond4 = createSprite(550,50,1,1)
  diamond4.addImage(diamondimage)
  diamond4.scale=(0.1)

  border1 = createSprite(900,0,30,1800)
  border1.shapeColor=("black")

  border2 = createSprite(0,900,30,1800)
  border2.shapeColor=("black")

  border3 = createSprite(900,900,1800,30)
  border3.shapeColor=("black")

  border4 = createSprite(0,0,1800,30)
  border4.shapeColor=("black")


  wall1 = createSprite(10,770,170,10)
  wall1.shapeColor=("black");

  wall2 = createSprite(170,900,10,590)
  wall2.shapeColor=("black");

  wall3 = createSprite(90,725,10,80)
  wall3.shapeColor=("black");

  wall4 = createSprite(130,600,90,10)
  wall4.shapeColor=("black");

  wall5 = createSprite(10,770,170,10)
  wall5.shapeColor=("black");

  wall6 = createSprite(10,500,170,10)
  wall6.shapeColor=("black");
  
  wall7 = createSprite(260,750,10,300)
  wall7.shapeColor=("black");

  wall8 = createSprite(300,605,80,10)
  wall8.shapColor=("black");

  wall9 = createSprite(500,680,300,10)
  wall9.shapeColor=("black");

  wall10 = createSprite(450,720,10,80)
  wall10.shapeColor=("black");

  wall11 = createSprite(445,870,10,80)
  wall11.shapeColor=("black");

  wall12 = createSprite(345,718,10,85)
  wall12.shapeColor=("black");

  wall13 = createSprite(170,395,10,215)
  wall13.shapeColor=("black");

  wall14 = createSprite(130,355,70,10)
  wall14.shapeColor=("black");

  wall15 = createSprite(90,725,10,80)
  wall15.shapeColor=("black")

  wall16 = createSprite(300,605,90,10)
  wall16.shapeColor=("black")

  wall17 = createSprite(90,35,10,80)
  wall17.shapeColor=("black")
 
  wall18 = createSprite(260,395,10,215)
  wall18.shapeColor=("black")

  wall19 = createSprite(380,500,250,10)
  wall19.shapeColor=("black")

  wall20 = createSprite(430,540,10,85)
  wall20.shapeColor=("black")

  wall21 = createSprite(500,395,10,215)
  wall21.shapeColor=("black")

  wall22 = createSprite(260,395,10,215)
  wall22.shapeColor=("black")

  wall23 = createSprite(430,292,145,10)
  wall23.shapeColor=("black")

  wall24 = createSprite(260,395,10,215)
  wall24.shapeColor=("black")

  wall25 = createSprite(260,395,10,215)
  wall25.shapeColor=("black")

  wall26 = createSprite(430,200,145,10)
  wall26.shapeColor=("black")

  wall27 = createSprite(500,105,10,200)
  wall27.shapeColor=("black")

  wall28 = createSprite(260,395,10,215)
  wall28.shapeColor=("black")

  wall29 = createSprite(600,95,10,220)
  wall29.shapeColor=("black")

  wall30 = createSprite(600,395,10,215)
  wall30.shapeColor=("black")

  wall31 = createSprite(690,290,180,10)
  wall31.shapeColor=("black")

  wall32 = createSprite(690,290,180,10)
  wall32.shapeColor=("black")

}


function draw() {
  background(BGimage);  
  drawSprites()

  if(keyDown(UP_ARROW)){
    ninja.y=ninja.y-5
   }

   if(keyDown(DOWN_ARROW)){
    ninja.y=ninja.y+5
   }

   if(keyDown(RIGHT_ARROW)){
    ninja.x=ninja.x+5
   }

   if(keyDown(LEFT_ARROW)){
    ninja.x=ninja.x-5
   }

   ninja.bounceOff(wall1)
   ninja.bounceOff(wall2)
   ninja.bounceOff(wall3)
   ninja.bounceOff(wall4)
   ninja.bounceOff(wall5)
   ninja.bounceOff(wall6)
   ninja.bounceOff(wall6)
   ninja.bounceOff(wall7)
   ninja.bounceOff(wall8)
   ninja.bounceOff(wall9)
   ninja.bounceOff(wall10)
   ninja.bounceOff(wall11)
   ninja.bounceOff(wall12)
   ninja.bounceOff(wall13)
   ninja.bounceOff(wall14)
   ninja.bounceOff(wall15)
   ninja.bounceOff(wall16)
   ninja.bounceOff(wall17)
   ninja.bounceOff(wall18)
   ninja.bounceOff(wall19)
   ninja.bounceOff(wall20)
   ninja.bounceOff(wall21)
   ninja.bounceOff(wall22)
   ninja.bounceOff(wall23)
   ninja.bounceOff(wall24)
   ninja.bounceOff(wall25)
   ninja.bounceOff(wall26)
   ninja.bounceOff(wall27)
   ninja.bounceOff(wall28)
   ninja.bounceOff(wall29)
   ninja.bounceOff(wall30)
   ninja.bounceOff(wall31)
   ninja.bounceOff(wall32)

   ninja.bounceOff(border1)
   ninja.bounceOff(border2)
   ninja.bounceOff(border3)
   ninja.bounceOff(border4)
}
