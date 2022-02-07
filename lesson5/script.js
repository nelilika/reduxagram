const obj = { a: 1 };
const obj2 = { a: 1 };

console.log(obj === obj2); // false

const equalObj = obj;
console.log(equalObj === obj); // true

equalObj.name = 'Odin';
console.log(equalObj);
console.log(obj);

// Копировать объекты
const student = { name: 'John ' };
const equalStudent = { ...student };
equalStudent.name = 'Odin';
console.log(student);
console.log(equalStudent);

const deepStudent = {
  name: 'John',
  mark: {
    math: 12,
    english: 8,
  },
};

const equalDeepStudent = { ...deepStudent, mark: { ...deepStudent.mark } };
equalDeepStudent.name = 'Victor';
equalDeepStudent.mark.english = 12;
// console.log(deepStudent);
// console.log(equalDeepStudent);

// JSON.parse();
// JSON.stringify();

const equalDeepJSONStudent = JSON.stringify(deepStudent);
const parsedStudent = JSON.parse(equalDeepJSONStudent);
parsedStudent.name = 'Victor';
parsedStudent.mark.english = 12;

console.log(deepStudent);
console.log(parsedStudent);

// for ... in для объектов и для объектов

const arr = ['1', '2', '3'];
for (let key in deepStudent) {
  console.log(`Key: ${key}, Value: ${deepStudent[key]}`);
}

// for ... of для массивов только
for (let value of arr) {
  console.log(value);
}

// for of Объектов
for (let value of Object.keys(deepStudent)) {
  console.log(deepStudent[value]);
}

// Преобразование объектов и массивов

// Object/Array -> Boolean
const obj1 = {};
const arr1 = [];
Boolean(obj1); // true
Boolean(arr1); // true

// Object -> String
String(obj); // '[object Object]'

// Object -> String -> Number
Number(obj); // NaN

// Array -> String
String(['hello', ',', 'it', 'Lily']); // 'hello,,,it,Lily'

// Array -> String -> Number
Number([1]); //  Number('1') -> 1
Number([1, 2]); // Number('1,2') -> NaN

//
const students = [
  {
    name: 'Vasiok',
    age: 18,
    mark: {
      english: 7,
      math: 6,
    },
  },
  {
    name: 'Ector',
    age: 34,
    mark: {
      english: 12,
      math: 12,
    },
  },
  {
    name: 'Qwerty',
    age: 23,
    mark: {
      english: 1,
      math: 1,
    },
  },
  {
    name: 'Alisa',
    age: 20,
    mark: {
      english: 11,
      math: 10,
    },
  },
];
const passedArr = [];
const passedAverageMark = 7;

for (let i = 0; i < students.length; i++) {
  let sum = 0;

  for (let key in students[i].mark) {
    sum += students[i].mark[key];
  }

  const numberOfMark = Object.keys(students[i].mark).length;

  const average = sum / numberOfMark;

  console.log(average);
  if (average >= passedAverageMark) {
    passedArr.push(students[i]);
  }
}

console.log('passedArray', passedArr);
