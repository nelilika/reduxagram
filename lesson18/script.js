/* Работа с асинхроннным кодом через калбеки */

function getServerResponce(params, callback) {
  console.log('started getting data from server');
  setTimeout(() => {
    const student = {
      id: '1234-5678-9012',
      name: 'Anna',
      age: 25,
    }
    callback(student);
  }, 5000);
}

const id = '1234-5678-9012';

function callbackFn(responce) {
  console.log('got data from server');
  console.log(responce);
}

console.log('call async function');
getServerResponce(id, callbackFn);

// Создание промиса (new Promise)
// String, RegExp, Promise

const isAlarm = confirm('Выключили ли вы вовремя будильник?');

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (isAlarm) {
      resolve('Поздравляю, вы не проспали');
    } else {
      reject('Извините, вы проспали');
    }
  }, 1000);
});

console.log(promise);

promise
  .then((res) => console.log(res))
  .then(() => console.log('собирайся на работу'))
  .catch((error) => console.error(error))
  .then(() => console.log('вызывай такси, чтобы успеть'))
  .finally(() => console.log('я в конце-концов работаю'));


let promise1 = new Promise(resolve => setTimeout(() => resolve(1), 500));

promise1
  .then(function (result) {
   console.log(result++);
   return new Promise(resolve => setTimeout(() => resolve(result), 500));
 })
 .then(function (result) {
   console.log(result++);
   return new Promise(resolve => setTimeout(() => resolve(result), 500));
 })
 .then((result) => console.log(result))
 .then(res => console.log('finished'));


function generatePromise(time, isSucces, message) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.warn('From function', message);
      if (isSucces) {
        resolve(message);
      } else {
        reject(message);
      }
    }, time);
  });
}

// all() ждет УСПЕШНЫЕ результаты всех промисов или возвращает ошибку первого НЕ УСПЕШНОГО
 Promise.all([
  generatePromise(500, true, 'First promise'),
  generatePromise(1000, true, 'Second promise'),
  generatePromise(100, false, 'Third promise'),
 ])
 .then(res => console.log(res))
 .catch(error => console.error(error));


// race() ждет САМЫЙ БЫСТРЫЙ промис (неважно успешный он или нет)
 Promise.race([
  generatePromise(500, true, 'First promise'),
  generatePromise(1000, true, 'Second promise'),
  generatePromise(100, false, 'Third promise'),
  generatePromise(700, true, 'Fourth promise'),
 ])
 .then(res => console.log(res))
 .catch(error => console.error(error));


 Promise.resolve('First promise'); // === new Promise((resolve) => { resolve('First promise') })
 Promise.reject('Error Second promise'); // === new Promise((, reject) => { reject('Error Second promise') })


 // allSettled() возвращает статус и результат всех промисов не зависимо от того успешные они или нет
 Promise.allSettled([
  generatePromise(500, true, 'First promise'),
  generatePromise(1000, true, 'Second promise'),
  generatePromise(100, false, 'Third promise'),
  generatePromise(700, true, 'Fourth promise'),
 ])
 .then(res => console.log(res));



// Задачка 1

const p1 = Promise.resolve()  // res == undefined
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4));

const p2 = Promise.resolve()
  .then(() => console.log(5))
  .then(() => console.log(6));


Promise.all([p1, p2]).then(() => console.log('final')); // 1 3 2 4

// Задачка 2

Promise.resolve()
  .then(() => Promise.reject(1))
  .then(() => console.log(5))
  .catch((err) => console.error(err))
  .finally(() => console.log('Finally Log'))
  .then(() => console.log(6)); // 1 (error) Finally Log 6

