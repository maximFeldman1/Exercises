var vowels = 'aeiouy';
var readlineSync = require('readline-sync');
let text = readlineSync.question('please enter your string ' + '\n');

var res = text.split('').map(function(c){
    return (vowels.indexOf(c) > -1) ? c.toUpperCase() : c;
});
console.log(res.join(''));