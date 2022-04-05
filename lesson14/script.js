// Revision  - повторение
const obj = {};
const obj1 = new Object();
const obj2 = Object.create({});

const arr = [];
const arr1 = new Array(2); // [empty, empty]
// console.log(arr1.length);

// String()
// Number()
// Boolean()

function getName(name) {
  console.log(name);
}
// {
//   name: 'getName',
//   argument: [],
//   call()/bind()/apply()
//   length: 1
// }
const getNameAnon = function (name) {
  console.log(name);
};

const getNameArrow = (name) => {
  console.log(name);
}; // нет своего this (контекст)

// string -> object { text: string, length: number, isCapitalise: boolean }
// word -> Word 
// Word -> Word
function getTestInfo(text) {
  
  function isCapitalise(text) {
    return text.trim().split(' ').every((word) => word[0].toUpperCase() === word[0]);
  }

  const obj = {
    text, // text: text
    length: text.length,
    isCapitalise: isCapitalise(text),
  };

  return obj;
}

// console.log('SIMPLE FUNCTION');
// const str = '    hello world!    ';
// console.log(getTestInfo(str));

// const newObj = getTestInfo('rty');
// console.log(getTestInfo('rtadfy'));
// getTestInfo('rtsd  agsdfgy');

// const loopObj = getTestInfo('rt345 44[9 Ase;lkfj elky');
// for (let value in loopObj) {
//   console.log(loopObj[value]);
// }

// Функция-конструктор
function WordInfo(text) {
  // console.log(this); // {}
  this.text = text; // { text: 'hello' }
  this.length = text.length; // { text: 'hello', length: 5 }
  this.isCapitalize = this.isCapitalizeText(); // { text: 'hello', length: 5, isCapitalize: false }

  this.getDoubleText = function() {
    return this.text + this.text;
  }
}

WordInfo.prototype.isCapitalizeText = function() {
  return this.text.trim().split(' ').every((word) => word[0].toUpperCase() === word[0]);
}

WordInfo.prototype.logInfo = function(value) {
  console.log(value);
}

// const newObj1 = WordInfo('    hello world!    ');
const newObj2 = new WordInfo('   Hello World! '); // new === Object.contstructor()
// console.log(newObj1);
console.log(newObj2);


const newObj3 = new WordInfo('New obj');
newObj3.logInfo(newObj3);


function WordDetailedInfo(text) {
  WordInfo.call(this, text);
  console.log(this); // {} -> WordDetailedInfo -> WordInfo -> Object
  this.detailed = 'qwertyu';
}

WordDetailedInfo.prototype = Object.create(WordInfo.prototype);

console.log('_____________*****______');
const detailedInfo = new WordDetailedInfo(' Qwerty Poiuyt');
detailedInfo.logInfo(detailedInfo);

const props = Object.create(null);
console.log(Object.prototype.__proto__); // самый самый пра родитель объекта - его наследник null
console.log(props.__proto__);
console.log(Object.prototype.__proto__ === props.__proto__); // false