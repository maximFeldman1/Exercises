var readlineSync = require('readline-sync');
let strNumber = readlineSync.question('please enter number -->');
primeNumber = parseInt(strNumber);
allPrimeNumbers(primeNumber);
    function allPrimeNumbers(primeNumber) {
        for (var counter = 0; counter <= primeNumber; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            console.log(counter);       
        }
    }
    
}
