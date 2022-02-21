'use strict';

const student = {
  name: 'Oleh',
  lastName: 'Petrov',
  age: 25,
  course: 2,
  mark: {
    english: 8,
    math: 12,
  },
  getName: function() {
    // return `Hello, ${student.name}`;
    return `Hello, ${student.name}`;
  },
  getNameArrow: (name) => {
    console.log(this);
  },
  getAverageMarks: function() {
    setTimeout(() => {
      const markValues = Object.values(this.mark);

      const average = markValues.reduce(function(sum, item) {
        return sum + item 
      }, 0) / markValues.length;

      console.log(average);
    }, 2000);
  },
  getAverageMarksBind: function() {
    console.log(this);
    const timeoutFunc = function() {
      const markValues = Object.values(this.mark);
      const average = markValues.reduce(function(sum, item) {
        return sum + item 
      }, 0) / markValues.length;
      console.log(average);
    };

    setTimeout(timeoutFunc.bind(this), 2000);
  },
  // getName(name) {
  //   return `Hello, ${name}`;
  // },
}
student.getNameArrow();
console.dir(student.getNameArrow);
console.log(student.getAverageMarksBind());

let number = 10;

const getName = function(surname) {
  console.log(arguments);
  return `Hello, ${this.name} ${surname}`;
};

console.log(getName('Lily'));
console.log(student.getName('Lily'));

console.log(student);
console.log(getName);
console.dir(getName);

console.log(getName.name);
console.log(getName.length);

// const arr = [1,2,3,4];
// arr.length = 0;
// console.log(arr)

// bind - метод функции
// СОЗДАЕТ (!) новую функцию с новым контекстом

const lector = {
  name: 'Anatolii Ivanovich',
  age: 45,
}

const getLectorName = getName.bind(lector);
// console.log(getLectorName('Vera','Hope', 'Love'));

// apply/call - метод функции
// ВЫЗЫВАЕТ (!) функцию с новым контекстом
console.log(getName.call(lector, 'Poplavskiy'));
console.log(getName.apply(lector, ['Poplavskiy']));


// const maxArr = [1,2,3,444,5];
// console.log(Math.max.apply(null, maxArr));

function getFullName(name) {
  return this.name;
};

const newFuncWithRina = getFullName.bind({ name: 'Rina' });
console.log(newFuncWithRina());

const newFuncWithAlina =  newFuncWithRina.bind({ name: 'Alina' });
console.log(newFuncWithAlina());

// bind работает только единожды !
getFullName.bind({ name: 'Rina' }).bind({ name: 'Alina' })();