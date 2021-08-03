var box;
var r=0,g=0,b=0;
var btn_green;
var btn_red;


function setup() {
  createCanvas(500,500);
  box = createSprite(200,200,30,30);
  
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_green = createButton("GREEN");
  btn_green.position(250,50);

}


function draw() 
{
   background(r,g,b);

   

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  
  btn_green.mousePressed(function ()
{
  
  r=0,
  g=255;
  b=0;
  background(r,g,b);

});
btn_red.mousePressed(function ()
{
  
  r=255,
  g=0;
  b=0;
  background(r,g,b);

});
  drawSprites();
}





