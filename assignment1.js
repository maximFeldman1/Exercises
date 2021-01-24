const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');

var mcqList = [

  {
    array : ["JavaScript", "HTML","CSS", "HTML"],
    question : 'Hyper Text Markup Language Stand For? ',
    answer : 'HTML'
  },
  {
    array :  ["HTML", "JQuery", "CSS", "XML"],
    question : 'Which language is used for styling web pages? ',
    answer : 'CSS'
  },
  {
    array : ["Python Script", "JQuery","Django", "NodeJS"],
    question :'Which is not a JavaScript Framework? ',
    answer : 'Django'
  },
  {
    array : ["PHP", "HTML", "JS", "All"],
    question : 'Which is used for Connect To Database? ',
    answer : 'PHP'
  },
  {
    array :  ["Web Design", "Graphic Design", "SEO & Development", "All"],
    question : 'www.geeksforgeeks.org is about..',
    answer : 'All'
  },
];

let score = 0;

function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 20;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
  }

  console.log('Score is: ',score);
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,',username,'your Total Score is: ',score);