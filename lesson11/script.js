const div = document.createElement('div');
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'red';
div.style.padding = '1px';
document.body.prepend(div);

console.dir(div);

// так писать не надо bad practice
// div.onclick = () => {
//   console.log('click 1');
// }

// div.onclick = () => {
//   console.log('click 2');
// }

// good practice
div.addEventListener('click', function() {
  console.log('you clicked the div');
});

div.addEventListener('click', function(event) {
  console.log(event);
  console.log('you clicked the div 2');
}, {
  capture: true,
  once: true,
});

const p = document.createElement('p');
p.textContent = 'Hello World';
div.prepend(p);

p.addEventListener('click', (event) => {
  // event.stopImmediatePropagation();
  console.log('Hello World from p tag');
});

// p.addEventListener('click', (event) => {
//   event.stopImmediatePropagation();
//   console.log('Hello World from p tag 2');
// });

const ul = document.querySelector('.number-list');
ul.addEventListener('click', (event) => {
  if (event.target.localName === 'li') {
    console.log(event.target.textContent);
  } else {
    console.log('ul');
  }
});

const outInput = document.querySelector('.out-input');
outInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(loginForm.username.value);
  console.log(loginForm.password.value);
  console.log(event);
});
