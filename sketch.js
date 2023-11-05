

var box1, box2, box3,box4,box5,box6,box7,box8, ground;
var ball;


function setup() 
{
  createCanvas(400, 400);
  ground = new Box (0,270,1000,1000,"black")

  box8 = new Box(100,130,70,70,"magenta")
box7 = new Box(100,60,70,70,"purple")
  box6 = new Box(170,60,70,70,"blue")
  box5 = new Box(240,60,70,70,"turquoise")
  box4 = new Box(240,130,70,70,"green")
  box3 = new Box( 240,200,70,70,"yellow")
box2 = new Box(170,200,70,70,"orange")
  box1 = new Box(100, 200, 70, 70, "red");

  ball = new Ball(205, 165, 40, "gray");
}

function draw() 
{
  background("");
  ground.display()

box8.display()
box7.display()
box6.display()
box5.display()
 box4.display()
  box3.display()
  box2 .display()
  box1.display();
  
  ball.display();

}







