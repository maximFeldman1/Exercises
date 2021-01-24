var readlineSync = require('readline-sync');
let strInput = readlineSync.question('please enter positive number ');
fuctorialNum = parseInt(strInput);
   if(!parseInt("0" + fuctorialNum, 10) > 0)
    {
        console.log("its illigel  number");
        return false;
    }
let total = 1;

for(let i = 1; i <= fuctorialNum; i++)
{
    total *= i;
}
console.log('The factorial is ' + total);