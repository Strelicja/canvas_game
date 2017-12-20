const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const ballSize = 20;// piłka


function table() {
  //boisko
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
  //podziaÅ‚ka

}
table()
