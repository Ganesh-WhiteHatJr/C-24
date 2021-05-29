var ground, paper, bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200, 450, 20);
    ground = new Ground(width/2, 670, width, 20);
    bin = new Bin(1200, 650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  bin.display();
  drawSprites();
 
}
function keyPressed()  {
 if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position, {x:70, y:-70 })
 }

}



