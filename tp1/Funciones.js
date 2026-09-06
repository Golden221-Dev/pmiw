function fondo(bg) {
  background(0);
  if (bg == room) {
  imageMode(CORNERS);
  image(bg, 0, 0, 800, 600);
  print(bg);
  } else if (bg == balcony) {
    imageMode(CENTER);
    image(bg, width / 2, height / 2, 1800, 800);
    print(bg);
  }
}

function F(anim, velAnim) {
  let ind = floor(frameCount / velAnim) % anim.length;
  return anim[ind];
}

function unaVez(anim, velAnim) {
  let ind = floor(unaVezCount / velAnim)
  if (ind >= anim.length) {
    ind = anim.length - 1;
  }
  unaVezCount++;
  return anim[ind]
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
  if (temporizador < 20) {
    indiceDireccion = 3;
  } else if (temporizador > 20 && temporizador < 32) {
    indiceDireccion = 0;
  } else if (temporizador > 32 && temporizador < 40) {
    indiceDireccion = 3;
  } else if (temporizador > 40 && temporizador < 45) {
    indiceDireccion = 1;
  } else if (temporizador > 45 && temporizador < 50) {
    indiceDireccion = 3;
  } else if (temporizador > 50 && temporizador < 70) {
    indiceDireccion = 1;
  } else {
    indiceDireccion = 4;
  }
}

function nuevaPos() {
  if (!cambioAmbiente){
      movX = 440;
      movY = 300;
      cambioAmbiente = true;
    }
}
