var jaxon, jaxon_animation;
var road, road_image;

var wall_right, wall_left;


function preload(){
  road_image = loadImage ("path.png");
  jaxon_animation = loadAnimation ("Runner-1.png", "Runner-2.png");

}
 
function setup(){
  createCanvas(400,400);
  
  //criar a estrada
  road = createSprite(200,200);
  road.addImage(road_image);

  //criar o menino;
  jaxon = createSprite(180,220);
  jaxon.addAnimation("correndo", jaxon_animation);
  jaxon.scale = 0.05;
  
}

function draw() {
  background("darkgreen");

  //fazer o jaxon mover conforme o mouseX;

  //fazer a estrada se mexer
  road.velocityY = 5;

  //criar uma ilusão de ótica -> fazer a 
  //estrada infinita

  if(road.y>400){
    road.y = height/2;
  }
  
  drawSprites();
  
}
