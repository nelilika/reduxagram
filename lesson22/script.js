// Number, String, Boolean, null, undefined, Symbol, BigInt, 
// Object

// Number(2); -> 2
// String('') > ''
// Boolean(false) > false
// BigInt(2n) -> 2n

// Object({}) -> {}


// Symbol
// Symbol() -> 

const symbol1 = Symbol();
const symbol2 = Symbol();
symbol1 === symbol2 // false

const symbol3 = Symbol('studentId');
const symbol4 = Symbol('studentId');
symbol1 === symbol4 // false

console.log(symbol1);
console.log(symbol2);
console.log(symbol3);
console.log(symbol4);

const studentSybmol = Symbol('studentId');
console.log(typeof studentSybmol);
const students = [
  {
    [Symbol('studentId')]: 1,
    name: 'Sofia',
  },
  {
    [Symbol('studentId')]: '1234-2345-2345-2345',
    name: 'Lily',
  },
  {
    [Symbol('studentId')]: 'fsje9832',
    name: 'Vasyl',
  }
];

Object.getOwnPropertySymbols(students[0]); // вернет массив символов у объекта

students[0].id = 2;
console.log(students[0][Symbol('studentId')]);

// символы игнорируются при итерации
for (let student of students) {
  for (let key in student) {
    // console.log('Key:', key);
    // console.log('Value: ', student[key]);
  }
}

// напрямую доступ к символу получить можно!
console.log(students[0][studentSybmol]);

// значение можно изменить
students[0][studentSybmol] = 2;

// Symbol.for() - создание одинаковым символов по параметру-описания
const linkedSymbol1 = Symbol.for('studentId');
const linkedSymbol2 = Symbol.for('studentId');

console.log(Symbol.keyFor(linkedSymbol1) === Symbol.keyFor(linkedSymbol2))


// Итераторы
const lesson = {
  name: 'lesson 22',
  students: 2,
  date: new Date(),
  teacher: 'Lili',
};

console.warn('FOR OF');
for (let key of Object.keys(lesson)) {
  console.log(key);
}

console.warn('FOR IN');
for (let key in lesson) {
  console.log(key);
}


lesson[Symbol.iterator] = function() {
  return {
    current: this.name,
    last: this.teacher,
    next: function() {
      if (this.current <= this.last) {
        return { done: false, value: this.current };
      }
      return { done: true };
    },
  }
}


console.warn('FOR OF');
console.log(lesson);
for (let value of lesson) {
  console.log(value);
}

// Генераторы
function* generator() {
  console.log('Log befor 1');
  yield { id: Symbol(), name: 'Milka' };
  console.log('Log befor 2');
  yield 2;
  console.log('Log befor 3');
  yield 3;
  console.log('Log before finish');

  return 4;
}
console.dir(generator);

const gen = generator(); // "Generator { }"
// gen.next(); // выполнит функцию до первого yield
// gen.return(value); // досрочный успешный выход из генератора, вернет done: true
// gen.throw(err); // досрочный выход из генератора c ошибкой, вернет done: true

// for (let value of gen) {
//   console.log(value);
// }

// Map() / Set()

// const lesson = {
//   name: 'lesson 22',
//   students: 2,
//   date: new Date(),
//   teacher: 'Lili',
// };

const map = new Map();
map.set('name', 'lesson 22');
map.set('students', 2);
map.set('date', new Date());
map.set('teacher', 'Lily');
map.set(true, 'Boolean');
// console.log(map);

// перебор по ключам
for (let key of map.keys()) {
  // console.log(key);
}

// перебор по значениям
for (let key of map.values()) {
  // console.log(key);
}

{
  const elements = 1e6;
  const arr = [];
  console.time('Create array');
  for (let i = 0; i <= elements; i++) {
    arr.push(i);
  }
  console.timeEnd('Create array');

  const set = new Set();
  console.time('Create set');
  for (let i = 0; i <= elements; i++) {
    set.add(i);
  }
  console.timeEnd('Create set');
  /** */

  console.time('Array check elemnt');
  const resultArr = arr.indexOf(34567) !== -1;
  console.timeEnd('Array check elemnt');
  console.log(resultArr);

  console.time('Set check elemnt');
  const resultSet = set.has(34567);
  console.timeEnd('Set check elemnt');
  console.log(resultSet);


  /** */
  console.time('Array add elemnt');
  const resultArr1 = arr.push('qwerty');
  console.timeEnd('Array add elemnt');
  console.log(resultArr1);

  console.time('Set add elemnt');
  const resultSet1 = set.add('qwerty');
  console.timeEnd('Set add elemnt');
  console.log(resultSet1);

  /** Удалить 11111 */
  console.time('Array remove elemnt');
  const index = arr.findIndex((item) => item === 11111);
  const resultArr2 = arr.splice(index, 1);
  console.timeEnd('Array remove elemnt');
  console.log(resultArr2);


  console.time('Set remove elemnt');
  const resultSet2 = set.delete(11111);
  console.timeEnd('Set remove elemnt');
  console.log(resultSet2);
}