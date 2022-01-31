// switch case

const color = 'black';

switch (color) {
  case 'black':
  case 'white':
    console.log('Zebra');
    break;
  case 'green':
    console.log('Not a zebra');
    break;
  default:
    console.log('WTF');
}

// const color = 'black';

switch (color) {
  case 'black':
  case 'white':
    console.log('Zebra');
    break;
  case 'green':
    console.log('Not a zebra');
    break;
  default:
    console.log('WTF');
}

if (color === 'black' || color === 'white') {
  console.log('Zebra');
}

// switch / case, if/ else, тернарный оператор

// while и do while
let mark = 0;
while (true) {
  if (mark < 5) {
    mark++;
    console.log(mark);
  } else {
    console.log('Finish');
    break; // выходит из цикла
  }
}

let age = 0;
while (age < 5) {
  age++;
  console.log(age);
  if (age === 3) {
    break;
  }
}

// continue

let number = 0;
while (number < 5) {
  number++;
  if (number === 3) {
    continue;
  }
  console.log('Number', number);
}

let number = 0;
while (number < 5) {
  number++;
  if (number === 3) {
    break;
  }
  console.log('Number', number);
}

// for

for (;;) {} // пример бесконечного цикла

let i = 1;
for (;;) {
  if (i <= 5) {
    console.log(i);
    i++;
  } else {
    break;
  }
}

for (let i = 0; i < 10; i = i * 2, console.log('outside for', i)) {
  console.log('inside for', i);
}

1 && 3 && 5; // 5
parseFloat('14.4%') || 34; // 14.4
null === undefined; // false
Boolean('0') / 12; // 1 / 12
Number('0') / 12; // 0
(0 && true && 'qwert') || 2; // 2
typeof null && '23'; // '23'

// сравнение строк

'23' > '125';
'a', 'A', '0-9', '^&$#..'; // по убыванию
