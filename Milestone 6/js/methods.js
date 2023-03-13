
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
// console.log(fiveTimes);

const fiveTimes2 = [1,22,35,44,5].filter(x => x > 20);
// console.log(fiveTimes2);

const numbers = [1,2,3,4,5];
const total = numbers.reduce((previous,current)=> previous+current,0);
// console.log(total);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// console.log(stuInfo.name);


// console.log(add(5,5));
// function add(a,b){
//     return a+b;
// }


// const mul = function(a,b){
//     return a*b;
// }
// console.log(mul(5,5));


// add(2, 3); // Uncaught ReferenceError: Cannot access 'add' before initialization

// const add = (a, b) => {
//   return a + b;
// };

// function sum(p, q) {
//   p + q;
//  }
//  const result = sum(2, 3);
//  console.log(result);