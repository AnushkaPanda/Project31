const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

   for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for(var j = 40; j <= width; j=j+50){
     plinko.push(new Plinko(j,75));
   }
   for(var j = 15; j <= width-10; j=j+50){
    plinko.push(new Plinko(j,175));
  }
  
  
   
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  for(var j = 0; j < particle.length ; j++){
    particle[j].display();
  }
  for(var k = 0; k < divisions.length ; k++){
    divisions[k].display();
  }
    
  
}

