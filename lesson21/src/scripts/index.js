import { data } from './data';
import logData from './data';
import '../styles/style.scss';

logData();

const someAwesomeObject = {
  sex: 'male',
  name: 'Ivan',
  surname: 'Kowtun'
};

console.log(someAwesomeObject);

const someNewAweomeObject = {
  ...someAwesomeObject,
  age: 25
};

console.log(someNewAweomeObject);

async function getData() {
  const result = await Promise.resolve('Hello, dude!');
  console.log(result);
}

getData();