var readlineSync = require('readline-sync');
numberInWord();

function numberInWord() {
    let map = new Map([
        [0 ,'Zero'],[1 , 'One'],[2 , 'Two'],[3 , 'Three'],[4 , 'Four'],[5 , 'Five'],[6 , 'Six'],[7 , 'Seven'],
        [8 , 'Eight'],[9 , 'Nine']
    ]);

    let strNumber = readlineSync.question('please enter the number between [0 - 9] ');
    let number = parseInt(strNumber);

    for (let num of map.keys()) {
        if (num === number) {
            console.log('The number is'+ " "+ map.get(number));
        }
    }


    
}