function concatStr(sybmol, ...strings) {
  return strings.join(sybmol);
}

concatStr('@', 'q'); // q
concatStr('@', 'q', 'qq'); //q@qq
concatStr('@', 'q', 'qq', 'qqqq'); //q@@qq@qqq

function concatStr(start, sybmol, end) {
  return start + sybmol + end;
}

const checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'

const hello = concatStr.bind(null, ['Hello', ' ']);


let language = localStorage.getItem('language');
console.log(language);

localStorage.setItem('language', 'de');

language = localStorage.getItem('language');
// console.log(language);

// localStorage.removeItem('language');

// localStorage.clear();

sessionStorage.setItem('email', 'no email');

const obj = {
  name: 'Lily',
  email: 'hello@gmail.com',
};

const str = JSON.stringify(obj);
localStorage.setItem('userInfo', str);

const buttom = document.querySelector('.back-button');

buttom.addEventListener('click', () => {
  // history.back();
  window.open("https://www.w3schools.com");
});

const success = function(data) {
  console.log(data);
}

const error = function(err) {
  console.log(err);
}

const geo = document.querySelector('.geo-button');
geo.addEventListener('click', () => {
  console.log('ere');
  navigator.geolocation.getCurrentPosition(success, error);
});

// WINDOW

// alert / confirm / prompt
// console.
// history
// open()
// navigator
// localStorage / sessionStorage / cookies
// setTimeout / setInterval / clearTimeout / clearInterval
// document
// fetch
// location

// setTimeout

const maxValue = 5;
// let i = 0;
// const timerIntervalId = setInterval(() => {
//   const date = new Date();
//   // console.log(date.getTime());
//   i++;
//   if (i === maxValue) {
//     clearInterval(timerId);
//   }
// }, 1000);

const date = new Date();
console.log(date.getTime());
let timer = 0;

setTimeout(function setNewDate() {
  timer++;
  const date = new Date();
  console.log(date.getTime());

  if (timer < maxValue) {
    setTimeout(setNewDate, 1000);
  }
}, 1000);