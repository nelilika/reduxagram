// let array = [1, 2, {}, 3, 4, 5, null, 'qwe', NaN];


// function formatArray(arr) {
//   let x = 10;
//   // const filteredArray = arr.filter(function(item)  {
//   //   return !isNaN(item)
//   // });
//   // return filteredArray.join('%');

//   arr
//   .filter((item)  => !isNaN(item))
//   .join('%');
// }

// formatArray(array);




const name = 'Alina';


// // v1
// function getFullName(name) {
//   //let name = 'Lina';
//   return `Dear, ${name};`
// }

// getFullName('Lina'); // Dear, Lina

// // v2
// function getFullName() {
//   return `Dear, ${name};`
// }

// getFullName(); // Dear, Alina 









/* GlobalLE {
  array,
  formatArray,
  name,
} 
*/

function changeArray(arr) {
  /*
  changeArrayLocalLE {
    arr,
    filterArray,
    mapArray,
    filteredArr,
    mapArray,
    x,
    GlobalLE
  }
   */
  const x = '123';

  function filterArray(array) {
    /*
    filterArrayLocalLE
      arr,
      changeArrayLocalLE,
     */
    console.log(x);
    // debugger;
    // return array.filter(item => !!item);
  }
  filterArray([]);

  const filteredArr = filterArray(arr);
  // const mapArray = mapArray(filteredArr);
  return mapArray;
}

changeArray();


//filterArray([]);

function mapArray(arr) {
    /*
  mapArrayLocalLE
    arr,
    GlobalLE,
   */
  return arr.map((item, index) => ({ item, index }));
}



function getValue() {
  bar = 1;
  return bar;
}

let value = getValue(); // 1
console.log(bar + value); // 2


// Замыкание
function getArrayInfo() {
  /*
  arr,
  function,
  globalLE
  */
  const x = 10;
  // debugger;
  const arr = ['qwerty', 3455, null, undefined, {}, true];
  return function (index) {
    /*
    LocalLE {
      index,
      arr,

    }
    */
    return arr[index];
  }
}

const getArr = getArrayInfo();

{
  const arr = [1,2,3,4];
  const getArr = function(index) {
    const x = 10;
    console.log(x);
    return arr[index];
  }
  getArr(1); // 2
}

console.log(typeof getArr);
getArr(1);
getArr(2);
getArr(3);



console.log(getArrayInfo(1));
console.log(getArr(1));
console.log(getArr(5));
console.log(getArr(100));

function counterWrapper() {
  let number = 0;
  return function name() {
    console.log(number++);
  }
}

const counter = counterWrapper();
counter();
counter();
counter();
counter();
counter();

alert(1);


// reduce
const arr = [1,2,3,4];
const newArr = arr.push(5);

const arr = [1,2,3];
delete arr[1]; // НЕ ПОЛЬЗОВАТЬ


arr.reduce(function(acc, item) {
  console.log(acc);
  return acc;
});