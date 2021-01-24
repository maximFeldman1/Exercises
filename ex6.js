var readlineSync = require('readline-sync');
let numInput = 0;

while (numInput <= 10) {
    let strInput = readlineSync.question('please choose a number larger than 10 -->');
    numInput = parseInt(strInput);
    if(!parseInt("0" + numInput, 10) > 0)
    {
        console.log("its illigel  number");
        return false;
    }
}

console.log('thank you!');
