var readlineSync = require('readline-sync');
receiveTwoParam();

function receiveTwoParam() {

    var strNumber1 = readlineSync.question('please enter your first number ');
    let number1 = parseInt(strNumber1);
    var strNumber2 = readlineSync.question('please enter your second number ');
    let number2 = parseInt(strNumber2);

    if(number1 + number2 === 10)
    {
        console.log("makes 10");
    }
    else
    {
        console.log("nope");
    }


}
