var bg,sleep,brush;
var gym,eat,bath,drink;
var move,astronaut;

function preload() {
bg= loadImage("images/iss.png");
brush=loadImage("images/brush.png");
sleep=loadImage("images/sleep.png");
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
drink=loadAnimation("images/drink1.png","images/drink2.png")
move=loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400,200);
    astronaut.addAnimaion("sleeping",sleep) ;
    astronaut.scale=0.1;
}

function draw() {
  background(bg);  
  textSize(20);
  fill("white");
  text("Instructions:",20,35);
   textSize(15);
    text("Up Arrow = Brushing",20,55);
    text("Down Arrow = Gymming",20,70);
    text("Left Arrow = Bathing",20,100);
    text("Right Arrow = Eating",20,85);
    text("m key .= Moving",20,115);

edges=createEdgeSprites();
astronaut.bounceoff(edges);












  
  drawSprites();
}