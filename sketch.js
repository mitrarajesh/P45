var canvas;
var bgimg;
var snake;

function preload() {
  //bgimg = loadImage("grass.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  snake = createSprite(20,20, 30, 30);
}

function draw() {
  //background(bgimg);
  snake.shapeColor  = "purple";
  if (keyDown("left")){
    console.log("left");
    snake.velocityX = -5;
    console.log("left2")
  }
  if (keyIsDown(RIGHT_ARROW)){
    snake.velocityX = 5;
  }
  if (keyIsDown(UP_ARROW)){
    snake.velocityY = -5;
  }
  if (keyIsDown(DOWN_ARROW)){
    snake.velocityY = 5;
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
