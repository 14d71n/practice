// let a = '5';
// let b = 4;
// let string = 'hi';

// a = +a;
// console.log(typeof(a));

// let c  = a - b;
// console.log(typeof(c));

// a = Number(a);
// console.log(typeof(a));

// const object = {
//   name: 'John',
//   lastname: 'Johnson',
//   midlename: 'u',
// }

// console.log(object + string);
// console.log(object.toString());

// let nul = 1;

// if (massiv) {
//   console.log(true);
// } else {
//   console.log(false)
// }

// const massiv = [1, object, 3];

// console.log(a + massiv);

// let num1 = 21;
// let num2 = 4;

// console.log(num1%num2);

// console.log(~~(num1/num2));

// let increment = num1++ + ++num2;
// console.log(increment);
// console.log(increment);

// let nul = 0;

// console.log(!nul);
// let t = true;
// let f = false;

// let a = f;
// let b = t;

// console.log(!a && b || !b && a);

// console.log(a ^ b);

// 0 right solution

import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// let age = null;

// while(!age) {
//   const answer = await rl.question(`What ur age, dawg?`);
//   if(parseInt(answer, 10)!== NaN) {
//     age = parseInt(answer, 10);
//   } else {
//      rl.write(`a net net net, pasha biyot po gubam`);
//   }
// }

// rl.write(`wow! ur age is ${age} so lame`);
// rl.close();

//1

// function askAge(question) {
//   rl.question(question, (answer) => {
//     rl.write(`answer is: ${answer}`);

//     askAge(answer);
//   })
// }

// askAge(question);
//2

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// let question = `Сколько вам лет?`;

// function askAge(question) {
//   rl.question(question, (answer) => {
//     while (answer) {
//       if (Math.parceInt(answer) == NaN || Math.parceInt(answer) < 2) {
//       askAge(question);
//       } else {
//         rl.write(`Your age is ${answer}, wow!`);
//       }
//     }
//   })
//   rl.close();
// }

// ///////////     Objects and this keyword

// let object = {
//   name: 'john',
//   lastname: 'sena',
//   sayName: function() {
//     console.log(this.name);
//   },
// }

// let obj = {
//   name: 'jon',
// }

// let fu = () => {
//   console.log(this.name);
// }

// function sayMyName() {
//   let naming = () => {
//     console.log(this.name);
//   };
//   naming();
// }

// object.sayMyName = sayMyName;
// obj.sayMyName = sayMyName;

// object.sayMyName();
// obj.sayMyName();

// class Car {
//   type;
//   year;
//   mass;
//   manufac;
//   model;
//   printInfo() {
//     console.log(this.type, this.year, this.mass, this.manufac, this.model);
//   }
// }

// let pejo = new Car();

// pejo.type = 'sruSobaka';
// pejo.year = 228;
// pejo.mass = 1488;
// pejo.manufac = 'pejo';
// pejo.model = 'kadet';

// pejo.printInfo();

// /////////////////////     Closures

// function fun1() {
//   let name = 'privet';
//   function fun2() {
//     console.log(name);
//   }
//   return fun2;
// }

// fun1()(); //???????????

// /////////////////    замыкания и фабрики

// function getSum(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// let add5 = getSum(5);
// let add10 = getSum(10);

// console.log(add5(8));
// console.log(add10(5));

/////////// циклы и замыкания

// let start = 5;
// let sum = 0;
// let i = 5;


// while(sum >= 0) {
//   i--;
//   sum = start + i;
//   console.log(sum);
// }

// for(let i = 4, sum = 0, start = 5; sum >=0; --i) {
//   sum = start + i;
//   console.log(sum);
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let age;

// for(age = null; !age; ) {
//   const answer = await rl.question(`What ur age, dawg?`);
//   if(parseInt(answer, 10)!== NaN) {
//     age = parseInt(answer, 10);
//   } else {
//      rl.write(`a net net net, pasha biyot po gubam`);
//   }
// }

// rl.write(`wow! ur age is ${age} so lame`);
// rl.close();

// for(let i = 4, sum = 0; sum >=0; --i) {
//   function fSum() {
//     let start = 5;
//     return i + start;
//   }

//   sum = fSum();
//   console.log(sum);
// }

/////////////////call/bind/apply

let cat = {
  name: 'marla',
  favWord: 'mew',
  color: 'turtule-like',
  weight: 4.5,
  height: 0.5,
};

let car = {
  manufac: 'toyota',
  model: 'silvia',
  color: 'purple',
  weight: 1500,
  height: 1.4,
};

function getColor() {
  return this.color;
};

let getColorCat = getColor.bind(cat);

console.log(getColorCat());

let getColorCar = getColor.bind(car);

console.log(getColorCar());

function getCheck(price, quantity) {
  return {
    totalHeight: quantity * this.height,
    totalWeight: quantity * this.weight,
    totalPrice: quantity * price,
  }
}

let getCheckCat = getCheck.bind(cat, 1000);
let getCheckCar = getCheck.bind(car, 10000);


console.log(getCheckCat(10));
console.log(getCheckCar(100));

let checkCat = getCheck.call(cat, 1000, 4);

console.log(checkCat);

let checkCatApply = getCheck.apply(cat, [1000, 4]);

console.log(checkCatApply);

///////chaining and decorators

let phone = {
  camera: 50,
  processor: 3,
  battery: 4000,
  display: 6,
  setCamera(megapixels) {
    this.camera = megapixels;
    return this;
  },
  setProcessor(gigaherz) {
    this.processor = gigaherz;
    return this;
  },
  setBattery(mAh) {
    this.battery = mAh;
    return this;
  },
  setDisplay(inchiz) {
    this.display = inchiz;
    return this;
  },
};

phone.setCamera(100).setProcessor(3.5).setBattery(5000).setDisplay(5.5).setCamera(200);

console.log(phone);

function findingFibonachchi(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return findingFibonachchi(n - 1) + findingFibonachchi(n - 2);
}

console.log(findingFibonachchi(3));
console.log(findingFibonachchi(3));

function cacheDecorator(func) {
  let newFunc = (...args) => {
    func.cache = func.cache || new Map();
    if (!func.cache.has(JSON.stringify(args))) {
      func.cache.set(JSON.stringify(args), func(...args));
    }
    return func.cache.get(JSON.stringify(args));
  };
  return newFunc;
}

let cachingFibonachchi = cacheDecorator(findingFibonachchi);

console.log(cachingFibonachchi(3));
console.log(cachingFibonachchi(3));

function addTimer(func) {
  let newFunc = (...args) => {
    let startTime = Date.now();
    let returnValue = func(...args);
    let endTime = Date.now();
    console.log(`${func.name} execution time is: ${endTime - startTime} ms`);
    return returnValue;
  };
  return newFunc;
}

let fibonachchiTimer = addTimer(findingFibonachchi);

console.log(fibonachchiTimer(4));

let fibonachchiCacheTimer = addTimer(cachingFibonachchi);

console.log(fibonachchiCacheTimer(4));
console.log(fibonachchiCacheTimer(4));
console.log(fibonachchiCacheTimer(4));

///////////scheduller & setTimeout

setTimeout(() => {console.log(`Timeout 400ms:${findingFibonachchi(30)}`)}, 400);

setInterval(() => {console.log(findingFibonachchi(4))}, 100);