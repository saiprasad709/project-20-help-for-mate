var cat,catImage, gardenImage, mouse,mouseImage,garden;


function preload() {
  bg = loadImage("images/garden.png");
  tomImg1= loadAnimation("images/cat1.png");
  tomImg2=loadAnimation("images/cat2png","images/cat3.png");
  tomImg3= loadAnimation("images/cat4.png");
  jerryImg1=loadAnimation("images/mouse1.png");
  jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
  jerryImg3=loadAnimation("images/mouse4.png");

}


  function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}



function draw() {

    background(255);
 if (cat.x - mouse.x <(cat.width - mouse.width)/2){
   cat.addAnimation("catLastImage", catImg3);
   cat.changeAnimation("catLastImage");

 }
 keyPressed

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning");

}

}

