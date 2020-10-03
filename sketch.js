const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(280,100,70,70);
    box2 = new Box(240,300,70,120);
    ground = new Ground(200,390,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("blue");
    box1.display();
    fill("green");
    box2.display();
    ground.display();
}