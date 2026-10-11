let titularImg;
let megamanFont;

let megamanCorre = [];
let pisoTile;
let bajoPisoTile;
let cieloTile;
let pastoTile;

let posXmegaman;
let posXsuelo;
let temporizador;


function preload() {
  titularImg = loadImage("data/megamanTitle.png");
  megamanFont = loadFont("data/MMRock9.otf");
  cargarAssets();
}
function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}
function draw() {
  background(0);
  noSmooth();
  fondoMapa();
  
  let fotograma = animFrame(megamanCorre, 8);
  
  image(fotograma, width / 2, (height / 2) + 16, 
        fotograma.width * 3, fotograma.height * 3);
  fill(252, 116, 96, 0); //use imageColorPicket.com
  rect(0, 0, 800, 450);
  //pantallaFinal();
}
