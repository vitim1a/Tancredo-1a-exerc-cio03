let cor;
let posicaoHorizontal;
let posicaoVertical;



function setup() {
 
  createCanvas(600,600);
   background("cyan");
cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 300;
  posicaoVertical = 300;
 
 
 }
 
 
 
 

function draw() {
  stroke(cor = color(random(0, 255), random(0, 255), random(0, 255)))
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);
 
 

  if(mouseX < posicaoHorizontal){
    posicaoHorizontal -= 1
  }
    if(mouseX > posicaoHorizontal){
  posicaoHorizontal += 1
   }
      if(mouseX < posicaoHorizontal){
    posicaoHorizontal -= 1
      }
      if(mouseY > posicaoVertical){
    posicaoVertical += 1
    }
    if(mouseY < posicaoVertical){
      posicaoVertical -= 1
    }
   if(mouseIsPressed){
     cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
   }
     
}