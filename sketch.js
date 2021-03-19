var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

ground_option={
	isStatic:true
}

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
var ball_options={
	restitution:0.1
}
ground = Bodies.circle(200,390,200,20);
  World.add(world,ground);

}


function draw() {
  background(bgImg);
  if(star.y > 470 && starBody.position.y > 470 ){ Matter.Body.setStatic(starBody,true); }


  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyCode===LEFT_ARROW){
   fairy.velocityX = -2
   fairy.velocityY = 0;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.velocityX = 2;
		fairy.velocityY = 0;
	}

if (keyCode === DOWN_ARROW){
star.velocityY = 10;
star.velocityX = 0;
}

}
