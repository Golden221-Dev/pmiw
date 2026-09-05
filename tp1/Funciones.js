function fondo() {
  background(0);
  imageMode(CORNERS);
  image(room, 0, 0, 800, 600);
}

function F(anim, velAnim) {
  let ind = floor(frameCount / velAnim) % anim.length;
  return anim[ind];
}

function cargarImagenes() {
  for(i = 0; i < 3; i++){
    dirDER.push(loadImage("data/caminarDerecha-" + (i + 1) + ".png"));
  }
  for(i = 0; i < 3; i++){
    dirIZQ.push(loadImage("data/caminarIzquierda-" + (i + 1) + ".png"));
  }
  for(i = 0; i < 3; i++){
    dirARR.push(loadImage("data/caminarArriba-" + (i + 1) + ".png"));
  }
  for(i = 0; i < 3; i++){
    dirABA.push(loadImage("data/caminarAbajo-" + (i + 1) + ".png"));
  }
  for(i = 0; i < 4; i++) {
    sentarse.push(loadImage("data/sentarse-" + (i + 1) + ".png"))
  }
}
