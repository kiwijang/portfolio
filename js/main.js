const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var imageArray = [];

function padZero(num, size) {
  var s = num.toString();
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
}

for (var i = 0; i <= 75; i++) {
  var img = new Image();
  img.src = 'img/flag/flag_' + padZero(i, 5) + '.png';
  imageArray.push(img);
}
ctx.drawImage(imageArray[0], 0, 0);

let currentFrame = 0;

setInterval(function () {
  currentFrame++;
  // 小到大
  if (currentFrame == imageArray.length) {
    currentFrame = 0;
    imageArray.reverse();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageArray[currentFrame], 0, 0);
}, 100);
