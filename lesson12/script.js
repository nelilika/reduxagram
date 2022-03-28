const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "green";
// ctx.fillRect(10, 0, 50, 50); // прямоугольник залитый цветом green

// ctx.strokeStyle = "red";
// ctx.strokeRect(50, 50, 50, 50) // прямоугольник с краями green и прозрачный внутри

// const height = 50;
// const width = 50;
const space = 20;

// for (let i = 0; i < canvas.width; i += width + space) {
//   if (canvas.width - i > width) {
//     ctx.fillRect(i + space, space, width, height);
//   }
// }

// const y = 100;

// Рисуем треугольник
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.moveTo(75, 350);
// ctx.lineTo(75, 175);
// ctx.lineTo(250, 175);
// ctx.closePath();
// ctx.stroke();

// смайлик
// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
// ctx.moveTo(65,65);
// ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
// ctx.moveTo(95,65);
// ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
// ctx.stroke();

// ctx.fillStyle = "green";
// ctx.beginPath();
// ctx.arc(75, y + 75, 50, 0, Math.PI * 2);
// ctx.fill();
// ctx.stroke();

let isMouseDown = false;

canvas.addEventListener('mousedown', function() {
  isMouseDown = true;
});

canvas.addEventListener('mouseup', function() {
  ctx.beginPath();
  isMouseDown = false;
});


canvas.addEventListener('mousemove', function(event) {
  if (isMouseDown) {
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  }
});

const button = document.querySelector('.btn-square');

let widthSquare = 50;
let x = 0;

button.addEventListener('click', function(event) {
  const timerId = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += widthSquare / 4;
    ctx.fillStyle = getRandomColorHEX();
    ctx.fillRect(x, getRandomInt(0, 550), widthSquare, widthSquare);

    if (x > canvas.width) {
      clearInterval(timerId);
    }
  }, 100);
});

function getRandomColorRGB() {
  let color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  return color;
}

function getRandomColorHEX() {
  const values = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += values[getRandomInt(0, 16)];
  }
  return color;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



// /// **** ///
// function getRandomInt(v1, v2, v3, v4, v5, v6) {

// } // function declaration

// const getRandomIntVoid = function(v1, v2, v3, v4, v5, v6) {
//  console.log('hello world');
// }  // function declaration


// const getRandomIntReturn = function(v1, v2, v3, v4, v5, v6) {
//   console.log('hello world');
//   return v1 + v2 / v3;
// };

// const getRandomIntReturnArrow = (v1, v2, v3, v4, v5, v6) => {
//   console.log('hello world');
//   return v1 + v2 / v3;
// };

// const getRandomIntReturnArrowShort = (v1, v2, v3, v4, v5, v6) => v1 + v2 / v3;

// const result = getRandomIntReturn(1, 2, 3); // 1 