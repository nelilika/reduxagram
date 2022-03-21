"use strict";
// x = 3.14;   

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log('For', sum);

const numbers = new Array(100).fill(null).map(function(item, index) {
  return index;
});

let sumForEach = 0;
numbers.forEach(function(item, index) {
  sumForEach += item;
});
console.log('For Each', sumForEach);

const sumReducer = numbers.reduce((acc, item, index, arr) => {
  acc += item;
  return acc;
}, 0);

console.log('Reducer', sumReducer);

function getThisInfo() {
  console.log(this); // window
  // "use strict";
  // console.log(this); // undefined
}
getThisInfo();

const obj = {
  name: 'Kate',
};

const getName = function(str) {
  return 'Hello ' + this.name + str; // undefin
}

// getName('Novikova');

console.log(getName.apply(obj, ['Novikova'])); // Hello Kate