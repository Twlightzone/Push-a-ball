const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


var bH,bV;
var title;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  let ball_options={
        restitution: 1,
    frictionAir:0.01,
    friction:0.02,
  }
title=createElement('h2');
title.html("PUSH-A-BALL");


bV=createImg("up.png");
bV.size(50,50);
bV.position(70,30);
bV.mouseClicked(Vforce);



  bH=createImg('right.png')
  bH.size(50,50);
  bH.position(330,30);
bH.mouseClicked(Hforce)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);


  ground.show();
  top_wall.show();
  ellipse(ball.position.x,ball.position.y,20);

  left.show();
  right.show();
  Engine.update(engine);
}

function Hforce() {

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  
}

function Vforce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
}








