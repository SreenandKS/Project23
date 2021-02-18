var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    box1 = createSprite(400,650,200,20);
	box1.shapeColor = color("red");
	box2 = createSprite(310,590,20,100);
	box2.shapeColor = color("red");
	box3 = createSprite(490,590,20,100);
	box3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;
    
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	
	b1Body = Bodies.rectangle(box1.x,box1.y,box1.height,box1.width,{isStatic:true});
	World.add(world,b1Body);

	b2Body = Bodies.rectangle(box2.x,box2.y,box2.height,box2.width,{isStatic:true});
	World.add(world,b2Body);

	b3Body = Bodies.rectangle(box3.x,box3.y,box3.height,box3.width,{isStatic:true});
	World.add(world,b3Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

  }
if(keyCode===RIGHT_ARROW){
     packageSprite.x = packageSprite.x=20;
     translation={x:-20,y:0};
     Matter.Body.translation(packageBody,translation);
}
if (keyCode===LEFT_ARROW){
    packageSprite.x = packageSprite.x+20;
    translation={x:20,y:0};
    Matter.Body.transalate(packageBody,translation);
}
}



