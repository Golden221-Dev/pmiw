function animFrame(anim, velAnim) {
  let ind = floor(frameCount / velAnim) % anim.length;
  return anim[ind];
}
function cargarAssets() {
  for (let i = 0; i < 3; i++) {
    megamanCorre.push(loadImage("data/megamanCorre" + (i + 1) + ".png"));
  }
  pisoTile = loadImage("data/pisoTile.png");
  bajoPisoTile = loadImage("data/bajoPisoTile.png");
  cieloTile = loadImage("data/cieloTile.png");
  pastoTile = loadImage("data/pastoTile.png");
}
function fondoMapa() {
  for(let j = 0; j < 18; j++) {
    for(let l = 0; l < 6; l++) {
      image(cieloTile, j * 48, l * 48, 
            cieloTile.width * 3, cieloTile.height * 3);
    }
    for(let y = 0; y < 4; y++) {
      image(bajoPisoTile, j * 48, (height / 2) + (y * 48) + 96,
            bajoPisoTile.width * 3, bajoPisoTile.height * 3);
    }
    image(pastoTile, j * 48, (height / 2) + 16,
          pastoTile.width * 3, pastoTile.height * 3);
    image(pisoTile, j * 48, (height / 2) + 48,
          pisoTile.width * 3, pisoTile.height * 3);
  }
}

function pantallaFinal() {
  image(titularImg, width / 2, height / 3,
        titularImg.width * 2, titularImg.height * 2);
  fill(255);
  textFont(megamanFont);
  textAlign(CENTER);
  text("PRESS START!!", width / 2, height / 2);
}
