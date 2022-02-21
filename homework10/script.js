// // const empolyee = [
// //   {
// //     id: 1,
// //     name: 'Karan',
// //     surname: 'Duffy',
// //     salary: 1010,
// //     workExperience: 10,
// //     isPrivileges: false,
// //     gender: 'male',
// //   },
// //   {
// //     id: 2,
// //     name: 'Brax',
// //     surname: 'Dalton',
// //     salary: 1200,
// //     workExperience: 12,
// //     isPrivileges: false,
// //     gender: 'male',
// //   },
// //   {
// //     id: 3,
// //     name: 'Jody',
// //     surname: 'Lam',
// //     salary: 480,
// //     workExperience: 3,
// //     isPrivileges: true,
// //     gender: 'female',
// //   },
// //   {
// //     id: 4,
// //     name: 'Ceara',
// //     surname: 'Zuniga',
// //     salary: 2430,
// //     workExperience: 20,
// //     isPrivileges: false,
// //     gender: 'female',
// //   },
// //   {
// //     id: 5,
// //     name: 'Walid',
// //     surname: 'Hulme',
// //     salary: 3150,
// //     workExperience: 30,
// //     isPrivileges: true,
// //     gender: 'female',
// //   },
// // ];

// // empolyee.map(function(element, index, arr) {
// //   return element.name + ' ' + element.surname;
// // });

// // empolyee.map((element, index, arr) => element.name + ' ' + element.surname);

// console.log(empolyee);

// const salaryArr = [];

// for (let i = 0; i < empolyee.length; i++) {
//   salaryArr[i] = empolyee[i].salary;
// }

// console.log(salaryArr);
// let maxValueEmployee = empolyee[0];

// for (let i = 0; i < salaryArr.length; i++) {
//   if (maxValueEmployee.salary < empolyee[i].salary) {
//     maxValueEmployee = { ...empolyee[i] };
//   }
// }

// console.log(maxValueEmployee);

// let secondMaxValue = 0;

// for (let i = 0; i < salaryArr.length; i++) {
//   if (secondMaxValue < salaryArr[i] && salaryArr[i] !== maxValueEmployee.salary) {
//     secondMaxValue = salaryArr[i];
//   }
// }

// console.log(maxValue, secondMaxValue);


// // for (let i = 0, endI = salaryArr.length - 1; i < salaryArr.length; i++) {
// //   for(let j = 0, endJ = endI - i; j < endJ; j++) {
// //     if (salaryArr[i] < salaryArr[j]) {
// //       let swap = salaryArr[j];
// //       newArray[j] = salaryArr[j + 1];
// //       newArray[j + 1] = swap;
// //     }
// //   }
// // }

// // console.log(newArray)



// let sum = 0;
// for (let i = 0; i < empolyee.length; i++) {
//   sum += empolyee[i].salary;
// }

// empolyee.forEach(function(empolyeeItem) {
//   sum += empolyeeItem.salary;
// })

const result = empolyee.reduce(function(sum, empolyeeItem) {
  sum += empolyeeItem.salary;
  return sum;
}, 0);

// const result = empolyee
//   .reduce((sum, empolyeeItem)  => sum += empolyeeItem.salary, 0);

// console.log(result);


// { 'Karan Duffy': 10100 }  - reduce

const resultReduce = empolyee.reduce(function(sum, empolyeeItem) {
  // sum = {}
  const key = empolyeeItem.name + ' ' + empolyeeItem.surname;
  sum[key] = empolyeeItem.workExperience * empolyeeItem.salary;


  return sum;
}, {});


// setInterval, setTimeout

// const id = setInterval(function() {
//   console.log('After setTimeout: ');
//   console.log(resultReduce);
// }, 2000);

// console.log(id);


// setTimeout(function() {
//   console.log('TIME TO CLEAR');
//   clearInterval(id);
// }, 10000);

// console.log(resultReduce);
// let, const и var
function name() {
  console.log(qwerty);
  var qwerty = 'qw';
};
console.log('New', newNumer);
let i = 0;
while(i <= 1) {
  var newNumer = 345;
  console.log(newNumer);
  i++
}
{
  // console.log(someStudentName);
  const someStudentName = '1234';
  
}
{
  const someStudentName = '5678';
  console.log(someStudentName);
}

// var - всплывает до ближайшей ФУНКЦИИ. 
// let/const - НЕ всплывают, ограничиваются фигурными скобками (БЛОК КОДА)


// func1();
// console.log(func2);

// function func1 () {
//   console.log(func1);
// }

// var func2 = function () {
//   console.log(func2);
// }

// x = '';
// console.log(y);
// if (x > 0) {
//   var y = 0;
// } else {
//   var y = 5;
// }

// console.log(y);

(function () {
  console.log(k);
  for (var k = 0; k < 5; k++) {
    console.log(k); // 0 1 2 3 4
  }
})() 
// самовызывающая функция IIFE

console.log(k);
