var groundObj,dustbinObj,world
var paperObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(600,650)
	 paperObject= new paper (200,450,50)
	 groundObj = new Ground(width/2,670,width,20)
	 
	//bottomWallBody= new Dustbin(560,630,190,20)
	 //leftWallBody= new Dustbin(505,610,20,100)
	 //rightWallBody = new Dustbin(555,610,20,100)

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:(
			width=800,
			height=700,
			wireframe=false
		)
	})

	

	
	
	 
	 
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperObject.display();
  groundObj.display();
  dustbinObj.display();
 // bottomWallBody.display();
  //leftWallBody.display();
 //rightWallBody.display();
  
  drawSprites();


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:30,y:-30})
	}
}


