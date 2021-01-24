var readlineSync = require('readline-sync');
let strInput = readlineSync.question('please enter your string ' + "\n");
console.log(findLongestWord(strInput));
function findLongestWord(str) {
  var strSplit = str.match(/[a-z]+/gi);
  
  var longestWord = 0;
  var stri = null;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length; 
    stri = strSplit[i];
     }
  }
   return stri;
}

