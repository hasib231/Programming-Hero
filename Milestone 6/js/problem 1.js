const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Shuci', age: 22}  
];

sum = 0;
// for(i=0;i<people.length;i++){
//     // console.log(people[i].age);
//     sum = sum + people[i].age;
// }
// console.log(sum);

const total=people.reduce((sum,people)=>sum+people.age,0);
// console.log(total);

for(let n of people){
    sum = sum + n.age;
}
// for(let n in people){
//     sum = sum + people[n].age;
// }
// console.log(sum);
 

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));