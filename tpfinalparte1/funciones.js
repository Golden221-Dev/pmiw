function animFrame(anim, velAnim) { 
  let ind = floor(frameCount / velAnim) % anim.length;
  return anim[ind];
} //Creo que la vez pasada no le gusto que llame a la funcion "F"
//----

function cargarAssets() {
  for (let i = 0; i < 3; i++) {
    megamanCorre.push(loadImage("data/megamanCorre" + (i + 1) + ".png"));
  }
  titularImg = loadImage("data/megamanTitle.png");
  megamanFont = loadFont("data/MMRock9.otf");
  pisoTile = loadImage("data/pisoTile.png");
  bajoPisoTile = loadImage("data/bajoPisoTile.png");
  cieloTile = loadImage("data/cieloTile.png");
  pastoTile = loadImage("data/pastoTile.png");
}
//un for loop para la animacion, y cargas individuales
//----

function fondoMapa() {
  for(let j = 0; j < 20; j++) {
    for(let l = 0; l < 6; l++) {
      image(cieloTile, (j * 48), (l * 48) + posYescenario, 
            cieloTile.width * 3, cieloTile.height * 3);
    }
    image(pastoTile, (j * 48) + (posXsuelo * 2),
          (height / 2) + 16 + posYescenario,
          pastoTile.width * 3, pastoTile.height * 3);
    for(let y = 0; y < 4; y++) {
      image(bajoPisoTile, (j * 48) + posXsuelo, 
            (height / 2) + (y * 48) + 96 + posYescenario,
            bajoPisoTile.width * 3, bajoPisoTile.height * 3);
    }
    image(pisoTile, (j * 48) + posXsuelo - 48,
          (height / 2) + 48 + posYescenario,
          pisoTile.width * 3, pisoTile.height * 3);
    //?? por qué falla tanto el tiling
  }
}
//un ciclo for horizontal y uno vertical según texturas repetidas
//el resto solo se acomodan horizontalmente
//----

function pantallaFinal() {
  if(titularPosY < height / 3) {
    titularPosY += 4;
  }
  image(titularImg, width / 2, titularPosY,
        titularImg.width * 2, titularImg.height * 2);
  if(temporizador > 625) {
    fill(0);
    textFont(megamanFont);
    textAlign(CENTER);
    text("PRESS START!!", width / 2, (height / 2) + 48);
    text("TRABAJO PRACTICO FINAL", width / 2, (height / 1.5) + 32);
    text("PARTE 1", width / 2, (height / 1.5) + 48);
    text("VALENTIN PASSARO & JOAQUIN LABANDA", width / 2,
        height - 48)
  }
}
