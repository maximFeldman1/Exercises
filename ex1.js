
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
 var currentWord = "good"
var str = "****";
   for(var i = 0; i < currentWord.length; i++)
    {
        if(currentWord[i] === 'o')
       {
            str = str.replaceAt(i, 'z');
            
        }
     
    }

console.log(str);