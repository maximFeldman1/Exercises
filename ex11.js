var readlineSync = require('readline-sync');
var str = readlineSync.question('please enter your string to check if its poli or not \n');
console.log(palindrome(str));
function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}