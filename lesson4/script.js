/*
1) Написать программу, которая посчитает в какой четверти
находится указаное пользователем число.
Результат вывести в консоль.

Если number = 48; // returns 4
Если number = 150; // returns 0 or Error
Если number = 15; // returns 2
Если number = 60; // returns 4
*/
const number = +prompt();
if (typeof number === 'number' && number >= 0 && number <= 60) {
  if (number >= 0 && number < 15) {
    console.log(1);
  } else if (number >= 15 && number < 30) {
    console.log(2);
  } else if (number >= 30 && number < 45) {
    console.log(3);
  } else {
    console.log(4);
  }
} else {
  console.log('Error');
}

/* 
2) Напишите программу, которая спрашивает у пользователя число
и выводит в консоль следующую информацию о нем:
 - положиельное оно или отрицательное;
 - сколько цифр в этом числе;

 Если number = 0; // return 0, lenght: 1
 Если hour = 100500; // return positive, length: 6
 Если hour = -50; // return negative, length: 2


upd: Если число положительное, вывести сумму его цифр.
 Если number = 0; // return 0, lenght: 1
 Если hour = 100500; // return positive, length: 6, sum: 6
 Если hour = -50; // return negative, length: 2
*/
const number = +prompt();
if (isNaN(num)) {
  console.log('Error');
} else if (number > 0) {
  console.log('positive');
  const numberStr = number + '';
  console.log(numberStr.length);
} else if (number < 0) {
  console.log('negative');
  const numberStr = number.toString();
  console.log(numberStr.length - 1);
} else {
  console.log(0);
}

/*
3) Известно, что путешествие на Мальдивы стоит 3000$.
А купить новые AirPods 300$.
Напишите программу, которая спрашивает у пользователя число (в $)
и выводить инфорацию в консоль, что он за эти деньги может купить.

Если money = 200$ // You can't do anything. I'm sorry :(
Если money = 300$ // You can buy AirPods
Если money = 3200.50$ // You can go on vacation! 
What are you waiting for?
Если money = 4300.53 // You have enough money for everything. WOW!
*/
const money = parseFloat(prompt()); // '110$'
const maldives = 3000;
const airPods = 300;

if (isNaN(money)) {
  console.log('Error');
} else {
  switch (money) {
    case money < airPods:
      console.log("You can't do anything. I'm sorry ");
      break;
    case money >= airPods && money < maldives:
      console.log('You can buy AirPods');
      break;
    case money > maldives && money < maldives + airPods:
      console.log('You can go on vacation! What are you waiting for?');
      break;
    default:
      console.log('You have enough money for everything. WOW!');
      break;
  }
}

/*
4) Напишите программу, которая спрашивает у пользователя число,
выводит на экран все числа от 1 и до этого числа 
и возводит в степерь 2 каждое ЧЕТНОЕ его число

Если number = 5; // returns 1 4 3 16 5
*/

const number = +prompt();
let str = '';
const square = 2;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    // if (!(i % 2)) {}
    str += Math.pow(i, square) + ' ';
  } else {
    str += i + ' ';
  }
}
console.log(str);

/*
5) Напишите программу, которая спрашивает у пользователя число
и выводит на экран ряд Фибоначи, который содержит в себе столько чисел,
сколько попросил ввести пользователь.

upd: Решить эту же задачу через цикл с пустым телом.
*/

/*
6) Напишите программу, которая спрашивает у пользователя число
от 1 до 9 и выводит таблицу умножения для этого числа.

Если number = 5 // returns
1 x 5 = 5;
2 x 5 = 10;
2 x 5 = 15;
...
9 x 5 = 45;

upd: Вывести всю таблицу умножения одним циклом.
(для этого нужно воспользоваться возможностью запускать цикл внутри цикла).
*/

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    i * j;
  }
}

/* 
7) Напишите программу, которая спрашивает у пользователя два числа 
1 - само число, 2 - степерь в которую его нужно возвести.
В консоль выведите результат возведения этого числа в степень.

Если 2 и 5 // returns 32
Если 4 и 10 // returns 1048576

upd: Вывести все степени введенного числа от 1 до 10.
*/

/*
8) Напишите програму, которая спрашивает у пользователя символ и выводит его 5 раз в консоль, увеличивая каждый раз на 1 их колличество.
(тут можно не делать никаких проверок на валидность, так как даже
если пользователь введет не 1 символ, а более - их все можно будет тоже
скопировать)

Если # // returns
#
##
###
####
#####

Если % // returns
%
%%
%%%
%%%%
%%%%%
*/

/*
9) Напишите цикл, который заполнит строку value числами от 1000 до 2000
и добавьте к каждому числу символы &#. Результат проверьте в браузере,
запустим index.html файл

Формат ответа:
console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000

upd: проверьте код для значений от 7000 до 10000

*/
let result = document.getElementById('result');
let value = '';

// your code should be here

result.innerHTML = value;

/*
10) Напишите программу, которая спрашивает у пользователя положительное число и возвращает
его же в перевернутом виде.

Если number = 5678 // returns 8765
Если number = 8 // returns 8


upd: Обновите программу так, чтобы она работала и для отрицательных чисел

Если number = -98463 // returns -36489
*/
