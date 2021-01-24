var readlineSync = require('readline-sync');
let str = readlineSync.question('please enter your string \n');
var replaced = str.split(' ').join('*');
console.log(replaced);