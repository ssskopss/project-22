var starImg,bgImg;
var star, starBody;
var f2;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy= loadImage("images/fairy.png")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

f = createSprite(30,450 )
f.addImage(fairy)
f.scale = 0.2;
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	f2 = Bodies.rectangle(30,450,25,25, {isStatic:true})
	
	World.add(world,f2)

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  f.x= f2.position.x 
  f.y= f2.position.y

 

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 

	}

	if (keyCode === RIGHT_ARROW) {

		f2.position.x=f2.position.x+220;

	}
	//writw code to move fairy left and right
	
}
