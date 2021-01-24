const readlineSync = require('readline-sync');

var array1 = [];
array1 = readlineSync.question('please enter your integer \n');
array1 = array1.split(" ");


console.log(array1.reverse());
