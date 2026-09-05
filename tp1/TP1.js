let dirDER = [];
let dirIZQ = [];
let dirARR = [];
let dirABA = [];
let sentarse = [];
let room;
let balcony;

let temporizador = 0;

let bgX = 0;
let bgEscalaX;
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
  balcony = loadImage("data/balconyBackground.png");
}
function setup(){
  createCanvas(800, 600);
  
}
function draw(){
  temporizador += floor(deltaTime) / 1000;
  
  let fondoActual;
  
  if (temporizador < 2) {
    fondoActual = balcony;
  } else if (temporizador > 2) {
    fondoActual = room;
  }
  
  fondo(fondoActual);
  imageMode(CENTER);
  
  path();
  
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
