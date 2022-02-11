// calculate(1,2);
// calculate(4,5);
// calculate(4,5);
// calculate(4,5);
// calculate(4,5, undefined, {}, null);


// function calculate(number1, number2) {
//   const result = number1 + number2;
//   console.log(result);
// }

//
calculate(1,2,35,345,456,456);
calculate(4,5);
calculate(4,5);
calculate(4,5);
calculate(4,5, undefined, {}, null);

// arguments - псевдо массив
function calculate(num1) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      sum += arguments[i];
    }
  }
  console.log(sum);
}

// rest operator - в массив
function calculate(num1, ...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      sum += args[i];
    }
  }
  console.log(sum);
}

const getValue = function() {
  console.log(arguments);
}

const getValue = () => {
  console.log(arguments); // не существует
}

// return 

function calculate(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      sum += args[i];
    }
  }
  return sum;
}

function calculate(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      sum += args[i];
    }
  }

  if (sum > 0) {
    return sum;
  }
  return 'Zero value';
}


const sum = calculate(1,2,3);
console.log(sum);

