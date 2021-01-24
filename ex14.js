const readlineSync = require('readline-sync');
let strInput = readlineSync.question('please choose integer as a parameter \n');
intParam = parseInt(strInput);
var arr = [];
for (var i = 0; i < intParam ; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1);
}
console.log(arr)
console.log("The maximum number in array is:",Math.max.apply(Math, arr));
console.log("The minimum number in array is:",Math.min.apply(Math, arr));