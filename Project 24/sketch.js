
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(300,350,30);
    ground = new Ground(400,600,800,20);
    box1 = new Box(510,540,20,100);
    box2 = new Box(600,580,200,20);
    box3 = new Box(690,540,20,100);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  paper.display();
  ground.display();
  box2.display();
  box1.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.positionx,{x:85,y:-120});
  }
}



