
const users = require('./Q1_user');
const hello = require('./Q1_hello');

console.log(users);
hello(users.user3);
console.log("---------------------")

console.log(users.person);
console.log("name>> ", users.person.name);
console.log("age>> ", users.person.age);
console.log("tel>> ", users.person.tel);
