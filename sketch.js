var canvas;
var music;
var surface1, surface2, surface3, surface4, box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    createCanvas(1200,800);
    surface1 = createSprite(600, 400, 50, 80);
    surface1.shapeColor = "blue";
    surface1.debug = true;
    surface2 = createSprite(400,200,80,30);
    surface2.shapeColor = "orange";
    surface2.debug = true;
    surface3=createSprite(100,100,50,50);
    surface3.shapeColor="red";
    surface4=createSprite(250,250,50,50);
    surface4.shapeColor="green";
    box=createSprite(250,250,50,50);
    box.shapeColor="white";
  }


    //create box sprite and give velocity



function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    background(0,0,0);  
  surface1.x = World.mouse
  surface1.y = World.mouseY;
  surface2.x = World.mouse
  surface2.y = World.mouseY;
  surface3.x = World.mouse
  surface3.y = World.mouseY;
  surface4.x = World.mouse
  surface4.y = World.mouseY;

 if(isTouching(movingRect,gameObject1)){
  surface1.shapeColor = "blue";
  box.shapeColor = "white";
  surface2.shapeColor = "orange";
  box.shapeColor = "white";
  surface3.shapeColor = "red";
  box.shapeColor = "white";
  surface4.shapeColor = "green";
  box.shapeColor = "white";
 }
 //add condition to check if box touching surface and make it box
 if(surface1.isTouching(box) && box.bounceOff(surface1)){
  (surface2.isTouching(box) && box.bounceOff(surface2))
  (surface3.isTouching(box) && box.bounceOff(surface3))
  (surface4.isTouching(box) && box.bounceOff(surface4))
}


    


 drawSprites();   
}
