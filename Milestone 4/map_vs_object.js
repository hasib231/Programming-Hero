//using map
const list = ["Key1", "Key2", "Key3"];
const arr = [10, 20, 30];

const map = new Map();

for (let i = 0; i < list.length; i++) {
  map.set(list[i], arr[i]);
}

console.log(map); 



// //using object
// const list = ["Key1", "Key2", "Key3"];
// const arr = [100, 200, 300];

// const obj = {};

// for (let i = 0; i < list.length; i++) {
//   obj[list[i]] = arr[i];
// }

// console.log(obj.Key1); 


