const user = {id: 1,name: 'amir',job: 'actor'}
console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);
const userObj = JSON.parse(stringified);
console.log(userObj);