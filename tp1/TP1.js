let dirDER = [];
let dirIZQ = [];
let dirARR = [];
let dirABA = [];
let sentarse = [];
let room;
let balcony;

let unaVezCount = 0; 
//no me voy a tomar el tiempo de ver en que frame exacto empieza

let temporizador = 0;
let cambioAmbiente = false;

let Escala = 4;
let velAnim = 10;
let movX = 220;
let movY = 100;

let velMov = 3;
let velAct = 1;

let indiceDireccion = 4;
let direccion = ["camDER", "camIZQ", "camARR", "camABA", "sentar"]

function preload(){
  cargarImagenes();
  room = loadImage("data/roomBackground.png");
  balcony = loadImage("data/balconyBackground.png");
}
function setup(){
  createCanvas(800, 600);
  
}
function draw(){
  temporizador += floor(deltaTime) / 100;
  
  let fondoActual;
  
  if (temporizador < 35.5) {
    fondoActual = room;
  } else if (temporizador > 35.5) {
    nuevaPos();
    Escala = 3;
    velMov = 2;
    fondoActual = balcony;
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
      arrFrames = sentarse;
      break;
  }
    
  let frame = F(arrFrames, velAnim);
  if (estado == "sentar") {
    velAnim = 16;
    frame = unaVez(arrFrames, velAnim);
  } else {
    frame = F(arrFrames, velAnim);
  }
  noSmooth();
  image(frame, movX, movY, frame.width * Escala, frame.height * Escala)
}

function mousePressed() {
  unaVezCount = 0;
  temporizador = 0;
  cambioAmbiente = false;

  Escala = 4;
  velAnim = 10;
  movX = 220;
  movY = 100;

  velMov = 3;
  velAct = 1;
}
