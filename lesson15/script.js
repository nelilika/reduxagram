// {} -> Object()

// [] -> Array() -> Object()
// function() {} -> Function() -> Object()

// 2 -> Number() -> Object()

const age = 18;
age.toFixed()

// __proto__ = наследование

const obj = {}; // new Object();
obj.__proto__ === Object.prototype;
// функция-конструктор -> new Func()

const arr = []; // new Array();
arr.__proto__ === Array.prototype;
arr.__proto__.__proto__ === Object.prototype;

const number = 18;
number.__proto__ === Number.prototype;
number.__proto__.__proto__ === Object.prototype;

const string = 'hello world'; // new String('hello world')
string.__proto__ === String.prototype;

const boolean = true;
boolean.__proto__ === Boolean.prototype;

const getName = function() {};
getName.__proto__ === Function.prototype;
getName.__proto__.__proto__ === Object.prototype;

// __proto__ у всех КРОМЕ 
// 1) Object.create(null); // {} без __proto__
// 2) Object.prototype.__proto__ === null

const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;
obj1 === obj2; // false !
obj3 === obj1; // true -> obj3 ссылается на obj1
obj1.__proto__ === obj2.__proto__; // true !! оба объекта ссылаются на одну и ту же
// функцию-конструктор Object!

/** *** Prototype ** ** **/
// prototype - обьект!
// prototype - это объект, который есть только (!) у любой функции
// (function declaration / function execpion),
// КРОМЕ стрелочной
// prototype всегда хранит ключ constructor благодаря которому создаются объекты
// { constructor: f() {} }

function Student(name, age, marks) {
  const account = 0;
  this.name = name;
  this.age = age;
  this.marks = marks;

  this.getAccount = function() {
    return account;
  }
}

Student.prototype.getAverageMark = function() {
  const sum = this.marks.reduce((acc, mark) => acc + mark.value, 0);
  return +(sum / this.marks.length).toFixed(2);
};

// > 75
Student.prototype.isGrandHolder = function() {
  const average = this.getAverageMark();
  return average > 75;
};

// const student = function(name, age) {
//   this.name = name;
//   this.age = age;
// } второй способ !!

const student1 = new Student('Anna', 18, [{
  name: 'Math',
  value: 95,
}, {
  name: 'English',
  value: 57,
}, {
  name: 'History of Ukraine',
  value: 100,
}]);

const student2 = new Student('Harry', 25, [{
  name: 'Math',
  value: 100,
}, {
  name: 'English',
  value: 100,
}, {
  name: 'History of Ukraine',
  value: 100,
}]);

const student3 = new Student('Victor', 30, [{
  name: 'Math',
  value: 75,
}, {
  name: 'English',
  value: 34,
}, {
  name: 'History of Ukraine',
  value: 58,
}]);
// { name: 'Anna', age: 18 };
// student.__proto__ === Student.prototype; // !!
// student.__proto__.__proto__ === Object.prototype;

// _______ //
// class !
// class синтаксический сахар от функции-конструктор

class StudentClass {
  constructor(name, age, marks) {
    // this === {}
    this.name = name;
    this.age = age;
    this.marks = marks;
    // return this
  }

  getAverageMark() {
    const sum = this.marks.reduce((acc, mark) => acc + mark.value, 0);
    return +(sum / this.marks.length).toFixed(2);
  }

  // 75+ 
  isGrandHolder() {
    const average = this.getAverageMark();
    return average > 75;
  }
}

const student4 = new StudentClass('Anna', 18, [{
  name: 'Math',
  value: 95,
}, {
  name: 'English',
  value: 57,
}, {
  name: 'History of Ukraine',
  value: 100,
}]);

const student5 = new StudentClass('Harry', 25, [{
  name: 'Math',
  value: 100,
}, {
  name: 'English',
  value: 100,
}, {
  name: 'History of Ukraine',
  value: 100,
}]);

const student6 = new StudentClass('Victor', 30, [{
  name: 'Math',
  value: 75,
}, {
  name: 'English',
  value: 34,
}, {
  name: 'History of Ukraine',
  value: 58,
}]);


for (let key in student1) {
  if (student1.hasOwnProperty(key) ) {
    console.log(key);
  }
} // !! цикл проходит по ключам объекта и его перебираемым прототипам!

for (let key of Object.keys(student1)) {
  console.log(key);
} // цикл проходит ТОЛЬКО по ключам объекта

// Наследование
function Aspirant(name, age, marks, topic, deadline) {
  Student.call(this, name, age, marks);
  this.topic = topic;
  this.deadline = deadline;
}

Aspirant.prototype = Student.prototype;
Aspirant.prototype.getInfo = function() {
  return `You should send your diploma with topic: ${this.topic} to ${this.deadline}`;
};

const aspirant1 = new Aspirant('Anna', 18, [{
  name: 'Math',
  value: 95,
}, {
  name: 'English',
  value: 57,
}, {
  name: 'History of Ukraine',
  value: 100,
}], 'Pink Floid', '11.10.2023');

class AspirantClass extends StudentClass {
  constructor(name, age, marks, topic, deadline, passDiplomaDate) {
    // this === {} - НЕ ПРОИСХОДИТ
    super(name, age, marks); // this {}
    this.topic = topic;
    this.deadline = deadline;
    this.passDiplomaDate = passDiplomaDate;
  }

  getInfo() {
    return `You should send your diploma with topic: ${this.topic} to ${this.deadline}`;
  }

  // 75+ и диплом сдан до дедлайна
  isGrandHolder() {
    return super.isGrandHolder() && (this.deadline - this.passDiplomaDate) > 0;
  }
}

const aspirant2 = new AspirantClass('Anna', 18, [{
  name: 'Math',
  value: 95,
}, {
  name: 'English',
  value: 57,
}, {
  name: 'History of Ukraine',
  value: 100,
}], 'Pink Floid', new Date('11-10-2023'), new Date('04-01-2023'));


aspirant1.__proto__ === Object.getPrototypeOf(aspirant1);
aspirant1.__proto__ = null;
Object.setPrototypeOf(aspirant1, AspirantClass.prototype); // установить новый прототип

// Object.create();
// вместо setPrototypeOf -> используем только Object.create();