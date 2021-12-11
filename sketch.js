var space
var shuttle, shuttleImage

function setup() {
  createCanvas(windowWidth, windowHeight);
  shuttle= createSprite(100, windowHeight/2,20,20)
  shuttle.addImage(shuttleImage)
  shuttle.scale=0.15
}

function preload() {
space= loadImage("space.jpeg")   
shuttleImage= loadImage("cartoon-spaceship-pictures-14.png")
}

function draw() {
  background(space);
drawSprites()
}