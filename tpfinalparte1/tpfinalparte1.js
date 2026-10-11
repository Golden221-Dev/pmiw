let titularImg;
let megamanFont;

let megamanCorre = [];
let pisoTile;
let bajoPisoTile;
let cieloTile;
let pastoTile;

let posXmegaman;
let posXsuelo = -42;
let posYescenario = 0;
let temporizador = 0;


function preload() {
  titularImg = loadImage("data/megamanTitle.png");
  megamanFont = loadFont("data/MMRock9.otf");
  cargarAssets();
}
function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
  posXmegaman = 848;
}
function draw() {
  background(0);
  noSmooth();
  fondoMapa();
  temporizador++;
  
  if(posXmegaman > width/2) {
    posXmegaman -= 2 ;
  } else {
    posXmegaman = width/2;
    if(posXsuelo <= 0) {
    posXsuelo += 2;
    if (posXsuelo == 0) {
      posXsuelo = -48;
    }
  } 
  }
  if(temporizador > 350 && posYescenario < 450) {
    posYescenario ++;
  }
  let fotograma = animFrame(megamanCorre, 8);
  image(fotograma, posXmegaman, (height / 2) + 16 + posYescenario, 
        fotograma.width * 3, fotograma.height * 3);
  fill(252, 116, 96, 0); //use imageColorPicket.com
  rect(0, 0, 800, 450);
  if (temporizador < 350) {
    fill(0);
  } else {
    fill(255)
  }
  text(temporizador, 20, 20);
  
  //pantallaFinal();
}
