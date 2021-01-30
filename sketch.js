const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, polygonImg;
var box1;
var ground;
var slingshot;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon  = new Polygon(50,200,50,50)
   // World.add(world, polygon)

    ground1 = new Ground(410,370,240,10);
    ground2 = new Ground(790,200,180,10)
    ground3 = new Ground(300,390,100000,10)
    box1 = new Box(350,345,30,40)
    box2 = new Box(320,345,30,40)
    box3 = new Box(380,345,30,40)

    box4 = new Box(410,345,30,40)
    box5 = new Box(440,345,30,40)
    box6 = new Box(470,345,30,40)
    box7 = new Box(500,345,30,40)
    box8 = new Box(350,305,30,40)
    box9 = new Box(380,305,30,40)
    box10 = new Box(410,305,30,40)
    box11 = new Box(440,305,30,40)
    box12 = new Box(470,305,30,40)
    box13 = new Box(380,265,30,40)
    box14 = new Box(410,265,30,40)
    box15 = new Box(440,265,30,40)
    box16 = new Box(410,225,30,40)
    box17 = new Box(730,175,30,40)
    box18 = new Box(760,175,30,40)
    box19 = new Box(790,175,30,40)
    box20 = new Box(820,175,30,40)
    box21 = new Box(850,175,30,40)
    box22 = new Box(760,135,30,40)
    box23 = new Box(790,135,30,40)
    box24 = new Box(820,135,30,40)
    box25 = new Box(790,95,30,40)


    slingshot = new SlingShot(polygon.body,{x:150, y:200});


    


}

function draw(){
    background(25,25,25);
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    ground3.display();
    polygon.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    slingshot.display();
    //imageMode(CENTER)
    //image(polygonImage,polygon.position.x,polygon.position.y,40,40)
    
    
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}