var indices = [];
var readlineSync = require('readline-sync');
console.log("HANG MAN");
var count = 0;
var asterisk = ''
var words = ["cat", "dog", "cow","amazing", "good", "reindeer"];
var currentWord = words[Math.floor(Math.random() * words.length)];
asterisk = currentWord.replace(/./g, '*');

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

var lives = 10;
guesses(lives,count)

function guesses(lives, count) {
    console.log("You have "+ lives + " guesses" + "\n" + "The word is: \n" + asterisk);
    var geussChar = readlineSync.question("What is your guess? \n");
    while (!(/^[a-zA-Z]$/g.test(geussChar))) {
        console.log("You enter invalid guess,please try again!");
        geussChar = readlineSync.question("What is your guess? \n");
    }
    checkTheGuess(geussChar, lives, count);   
}



function checkTheGuess(geussChar,lives,count) {

    for(var i = 0; i < currentWord.length; i++)
    {
         if(currentWord[i] === geussChar)
            {   
                asterisk = asterisk.replaceAt(i, geussChar);
            }
     
    }
    console.log(asterisk);
    if (!currentWord.includes(geussChar)) {
            lives -= 1
    }
    
    if (lives === 0) {
        console.log("The game is end,you dont have more attempts");
        return 0;
    }
    if (asterisk === currentWord) {
        console.log("You WIN!!!you guessed the word");
        return 1;
    }
    guesses(lives, count);

}




