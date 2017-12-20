const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const ballSize = 20;
let ballX = canvasWidth / 2 - ballSize / 2; //wyśrodkowanie piłki w poziomie
let ballY = canvasHeight / 2 - ballSize / 2; //wyśrodkowanie piłki w pionie

const paddelHeight = 100;
const paddelWidht = 20;

const playerX = 70;  // paletka lewa, pozycja statowa,
const aiX = 910;    // paletka prawa, odległość paletki liczona od lewej strony,
const playerY = 200;  // paletka lewa, pozycja statowa od góry
const aiY = 200;    // paletka prawa, pozycja statowa od góry

const lineWidht = 6;
const lineHeight = 16;

// paletka lewa
function player() {
  ctx.fillStyle = 'green';
  ctx.fillRect(playerX, playerY, paddelWidht, paddelHeight);
}
//AI - paletka prawa
function ai() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(aiX, aiY, paddelWidht, paddelHeight);
}
// piłka
function ball() {
  ctx.fillStyle = 'white';
  ctx.fillRect(ballX, ballY, ballSize, ballSize); // pozycja startowa piłki
}
//boisko
function table() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
// pętla rysuje podziałkę boiska od 20 px od góry i rysuje do konca wysokosci canvasu , każda kreska kolejna będzie w odstępie 30px
  for (let linePosition = 20; linePosition < canvasHeight; linePosition+=30) {
    ctx.fillStyle = "gray";
    ctx.fillRect(canvasWidth / 2 - lineWidht / 2,linePosition,lineWidht,lineHeight)
  }
}
table() // najpierw rysuje tę warstwę
ball() // na niej wywołuje kolejną warstwę
player()
ai()
