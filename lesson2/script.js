// Типы данных
/* number,
string,
boolean,
null,
undefined,
bigInt,
sybmol,
object*/

// Название переменных
// !$ не можем начинать с числа

// Number
/* целое, дробные, +Infinity -Infinity, 0, */
/* NaN, e */
console.log(typeof NaN);
//1000000 - 1e6
console.log(typeof 1e6);

// Дробное число
// 0.1 + 0.2 === 0.3
let number1 = 0.1;
let number2 = 0.2;
let result = number1 + number2;
console.log(result.toFixed(2));

// String
// кавычки ', '', ``
const name = 'Lily';
console.log(`Hello ${name}`);
console.log(`a.ksdjfasdlfkjhasfakdjlaksjdfh\nkl    jdfhaskljdfh\n\n\t`);

console.log("Caffe 'World'");
console.log("Caffe 'World'");

// Boolean
// true - false

// Null - Undefined
let username;
console.log(username);
username = 'Strudent';
console.log(username);
username = undefined; // wrong
username = null;
console.log(username);
console.log(typeof username);

console.log('Typeof of null:', typeof null); // !!!!

// bigInt
const bigNumber = 27n;
console.log(bigNumber);
console.log(typeof bigNumber);

// Операторы
// + - / * =

// ++/-- Инкремент / декримент
let num = 3;
// num++; // num + 1;
console.log('Increment');
console.log(num++); // 3 - постфиксная форма
console.log(num); // 4
console.log(++num); // 4  - префиксная форма
console.log(num); // 4

// ! - инверсия
const value = true;
console.log(!value);
// !!
console.log(!!value);

// = - оператор присвоения
let a1 = (b1 = c1 = 3);

// Операторы сравнения

// == - ===
// оператор несторого (==) и строгого (===) сравнения
// строгое сравние сравнивает БЕЗ приведения типов, только по значению

// > >= < <=
'3' > 5;

// Явное преобразование данных

// Number() Boolean() String()
parseInt('3px'); // 3 - number
parseFloat('3.3px'); // 3.3 - number
parseFloat('3.e3'); // 3000

const numFloat = 10 / 3;
numFloat.toFixed(2); // '3.33' - string (!)

const notANumber = '34';
Number(notANumber) === +notANumber;
Boolean(notANumber) === !!notANumber;

// +
3 + 4 + 5 + '7'; // 127

// Null / Undefined
NaN === NaN; // false
null === null; // true, все остальное false
undefined === undefined; // true, все остальное false
null == undefined; // true;
null === undefined; // false
// ___

null > 0; // false
null < 0; // false -
null >= 0; // true

// Логические операторы
// &&  - ||
// && - оператор И
const sideA = null;
const sideB = 15;

console.log(sideA && sideB);

// && - первое ложное значение
// если ВСЕ true - вернет последнее правдивое

// || - первое правдивое значение
// если ВСЕ false - вернет последнее ложное
