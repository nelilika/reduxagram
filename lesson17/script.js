// Создание регулярного выражения

const reg1 = new RegExp('world'); // /test/
const reg2 = /world/;

// Работа с регулярным выражением

// RegExp.prototype.test(str);

/world/.test('Hello world'); // true === 'Hello world'..includes('world');
/world/.test('Hello, darling'); // false === 'Hello, darling'..includes('world');

// String.prototype.match(regexp);

const str =  'Hello world';
str.match(/world/); // ['world', index: 6, input: 'Hello world'] - кортеж / массив разных типов данных

// String.prototype.replace(regexp);

str.replace(/world/, 'darling'); // Hello darling === str.replace('world', 'darling');

const fish = `LorUN ipsum dolor sit amet, \n

consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
const result = fish.match(/un/gi);
console.log(result); // ['UN', 'un', 'un', 'un'];

// Флаги в конце регулярной строки
// i g m s (.)

// Символьные классы

// \d \w \s
// \D \W \S - всего КРОМЕ

// Якоря ^ (начало) $ (конец) ---- /b.../b - обозначает границу слова

// \d === [0-9] === [0123456789]

// Квантификаторы