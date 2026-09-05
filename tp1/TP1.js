let dirDER = [];
let dirIZQ = [];
let dirARR = [];
let dirABA = [];
let sentarse = [];
let room;

let temporizador = 0;

let Escala = 4;
let velAnim = 10;
let movX = 220;
let movY = 100;

let velMov = 3;
let velAct = 1;

let direccion = ["camDER", "camIZQ", "camARR", "camABA", "sentar"]
let indiceDireccion = 4;


function preload(){
  cargarImagenes();
  room = loadImage("data/roomBackground.png");
}
function setup(){
  createCanvas(800, 600);
  
}
function draw(){
  fondo();
  imageMode(CENTER);
  
  temporizador += floor(deltaTime) / 1000;
  print(temporizador);
  
  if(temporizador < 1) {
    indiceDireccion = 3
  } else if(temporizador < 2 && temporizador >1) {
    indiceDireccion = 0;
  } else if(temporizador < 3 && temporizador > 2) {
    indiceDireccion = 1;
  } else if(temporizador < 4 && temporizador > 3) {
    indiceDireccion = 2;
  } else if(temporizador > 4) {
    indiceDireccion = 4;
  } 
  
  let estado = direccion[indiceDireccion]
  let arrFrames;
  
  switch(estado) {
    case "camDER": 
      movX += velMov * velAct;
      arrFrames = dirDER; 
      break;
    case "camIZQ": 
      movX -= velMov * velAct;
      arrFrames = dirIZQ; 
      break;
    case "camARR": 
      movY -= velMov * (velAct * 0.75);
      arrFrames = dirARR; 
      break;
    case "camABA":
      movY += velMov * (velAct * 0.75);
      arrFrames = dirABA; 
      break;
    case "sentar":
      arrFrames = sentarse
      if (F == 4) {
        frame = 4;
      };
      break;
  }
  
  let frame = F(arrFrames, velAnim);
  noSmooth();
  image(frame, movX, movY, frame.width * Escala, frame.height * Escala)
}

function mousePressed() {
  indiceDireccion = (indiceDireccion + 1) % direccion.length;
}
