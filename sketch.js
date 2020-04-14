const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var raindrop;
var raindrop1;
var raindrop2;
var raindrop3;
var raindrop4;
function setup() {
  createCanvas(750,450);
  
  raindrop=new Raindrop(100,100,70,50);
  raindrop=new Raindrop(200,200,70,50);
  raindrop=new Raindrop(300,300,70,50); 
  raindrop=new Raindrop(400,400,70,50);
  raindrop=new Raindrop(500,500,70,50);
}

function draw() {
  background(color(0,0,255));
  
  Engime.update(engine)
  //strokeWeight(4);
  raindrop.display();
  raindrop1.display();
  raindrop2.display();
  raindrop3.display();
  raindrop4.display();
}
function keyPressed(){
 if (keyCode===32){ 
raindrop.setVelocity(0,2);
}
  else{
    if (keyCode===UP_ARROW){ 
raindrop1.setVelocity(0,3);
}
   else{
     if (keyCode===LEFT_ARROW){ 
raindrop2.setVelocity(0,4);
} 
   else{
     if (keyCode===RIGHT_ARROW){ 
raindrop3.setVelocity(0,5);
}    
    else{
      if(keyCode===DOWN_ARROW){}
raindrop4.setVelocity(0,6)       
    } 
}
}
}
}    