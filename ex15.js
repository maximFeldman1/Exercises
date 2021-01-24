const readlineSync = require('readline-sync');

var array1 = [];
var array2 = [];
var array1 = readlineSync.question('please enter your first string \n');
var array2 = readlineSync.question('please enter your second string \n');
array1 = array1.split(" ");
array2 = array2.split(" ");

console.log(Array.from(new Set(array1.concat(array2))))
