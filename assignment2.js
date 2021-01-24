const readlineSync = require('readline-sync');
let ILS = 50;
console.log('Welcome to the Game');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello',username,", you currently have", ILS, "dollars \n");

betForNextRound(ILS);

function betForNextRound(ILS) {
    if (ILS > 50) {
        let betOfUser = readlineSync.question("Place your bet for the next round: 1 to 50 and now you have "+ILS+ "\n");
        var betOfUserInteger = parseInt(betOfUser);
        
    }
    else {
         betOfUser = readlineSync.question("Place your bet for the next round: 1 to " + ILS +"\n");
         betOfUserInteger = parseInt(betOfUser);
    }
    if((betOfUserInteger < 1) || (betOfUserInteger > 50))
    {
        console.log("I said between 1 to 50 and you typed",betOfUserInteger,"!!! \nI don`t play with liars!!! Bye");
        return;
    }

    
    game(ILS, betOfUserInteger);
}


function game(ILS, betOfUserInteger) 
{
    
        let randomofUser = Math.floor(Math.random() * 12) + 1;
        let randomofComputer = Math.floor(Math.random() * 12) + 1;
        console.log("Your card is",randomofUser,"And my card is",randomofComputer);
        if(randomofComputer > randomofUser) 
        {
            ILS = ILS - betOfUserInteger;
            console.log("You lost",betOfUserInteger,"And now you have",ILS,"\n");
            if (ILS === 0) {
                console.log("You are broke...bye bye");
                return 0;
                
            }
            menu(ILS);
            
            
        }
        else if (randomofComputer < randomofUser)
        {  
            ILS = ILS + betOfUserInteger;
            console.log("You won",betOfUserInteger,"!!And now you have",ILS,"\n");
            menu(ILS);

        }
        else if(randomofComputer === randomofUser) 
        {
            console.log("Draw \n");
            menu(ILS);

        }
    
}

function menu(ILS) {
    option = ['Play another round', 'Leave with my money -)'],
    index = readlineSync.keyInSelect(option,'What would you like to do?');
    if ((index === -1) ||(index === 1)){
       console.log("You got",ILS,"good bye!!")
    }
    else if(index === 0) {
         betForNextRound(ILS);
    }
}





