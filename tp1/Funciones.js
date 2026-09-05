function fondo(bg) {
  background(0);
  if (bg == room) {
  imageMode(CORNERS);
  image(bg, 0, 0, 800, 600);
  print(bg);
  } else if (bg == balcony) {
    imageMode(CENTER);
    image(bg, width / 2, height / 2, 1800, 8 00);
    print(bg);
  }
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

function path() {
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
}
