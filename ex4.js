var readlineSync = require('readline-sync');
if(peopleFunction() === 0)
    return;
kosherFunction();
kindOfFood();

function peopleFunction() {
    try{
        let strNumber = readlineSync.question('How many people are you going with? ');
        let numberOfPeople = parseInt(strNumber);
        if(!Number.isInteger(numberOfPeople))
        {
            throw new Error
        }
    }
    catch(error){
        console.log('stop execution');
        return 0;
    
    }
    
}

function kosherFunction() {
        
    if (readlineSync.keyInYN('Should it be Kosher? '))
    {
        if(readlineSync.keyInYN('should it be Kashrut Lemehadrin? '))
        {
            
        }

    }
    
}

function kindOfFood() {
    foods = ['Soho', 'Gambrinus', 'Aramis'],
    index = readlineSync.keyInSelect(foods,'What kind of food do you want?');
    if (index === -1) {
        console.log('Goodbay')
    }
    else{
    console.log('Ok,today you gonna eat at ' + foods[index] );
    }
}



  
