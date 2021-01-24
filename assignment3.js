

var readline = require('readline');
function newline() {
  console.log('\n');
}

const welcomeMessage = 
`=== Welcome to Hangman ===
To start playing just follow the prompts.
To exit the game before the end press Control + c
Let's get started!`;

console.log(welcomeMessage);

const word = 'misty';
const wordArray = word.split('');

const maskedWord = wordArray.map(x => '_');


const guesses = [];



var terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('The word: ', maskedWord.join(' '));
terminal.setPrompt('Guess a letter: ');
terminal.prompt();

terminal.on('line', function(guess) {
  // this is the game loop or guess loop
  console.log('The word: ', maskedWord.join(' '));

  console.log(word.includes(guess));

  if (guess.length !== 1) {
    console.log('You can only enter one letter, try again');
    terminal.prompt();
  } else if (word.includes(guess)) {
    
    console.log('That is correct');

    console.log(guess);

    console.log('guesses', guesses);
    console.log('word', word);
    console.log('masked word', maskedWord);

    terminal.prompt();
  } else {
    console.log('Sorry, that is not in the word, guess again.');

    terminal.prompt();
  }
});