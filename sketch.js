const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var paperobject;
var x;
var y;
function preload()
{
	
}

function setup() {
	
createCanvas(1800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	paper1 = new Paper(300,300,90,90)
	ground1 = new Ground(390,670,2900,40)
	dustbin1 = new Dustbin(950,400,250,250)
	sling=new Slingshot(paper1.body,{x:150,y:150})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paper1.display();
  sling.display(); 
  ground1.display();
  dustbin1.display();

  drawSprites();

  

}
function mouseReleased(){
	sling.fly();
  }

function keyPressed() {
	if (keyCode===UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:405,y:-405});
  
	}
}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
  }
  function keyPressed(){
	if(keyCode===32){
   sling.attach(paper1.body);
  }
}
 