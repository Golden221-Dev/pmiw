let dirDER = [];
let dirIZQ = [];
let dirARR = [];
let dirABA = [];
let Escala = 8;
let velAnim = 10;
let movX = 400;
let movY = 300;
let velMov = 3;
let direccion = ["camDER", "camIZQ", "camARR", "camABA"]
let indiceDireccion = 0;


function preload(){
  cargarImagenes();
}
function setup(){
  createCanvas(800, 600);
  imageMode(CENTER);
}
function draw(){
  background(0);
  
  let estado = direccion[indiceDireccion]
  let arrFrames;
  
  switch(estado) {
    case 0: //camDER
      movX += velMov * velAct;
      arrFrames = dirDer;
      print("HEY!!");
      break;
    case 1: //camIZQ
      movX -= velMov * velAct;
      arrFrames = dirIZQ;
      break;
    case 2: //camARR
      movY -= velMov * (velAct / 2);
      arrFrames = dirARR;
      break;
    case 3: //camABA
      movY += velMov * (velAct / 2);
      arrFrames = dirABA;
      break;
  }
  
  let frame = F(arrFrames, velAnim);
  noSmooth();
  image(frame, movX, movY, frame.width * Escala, frame.height * Escala)
}

function mousePressed() {
  indiceDireccion = (indiceDireccion + 1) % direccion.length;
  print("funciono!!");
}
