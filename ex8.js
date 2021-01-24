var  boom = "BOOM"
for (let i = 1; i <= 100; i++) {
    if ((i % 7 === 0) || (i.toString().indexOf('7') > -1) ){
        console.log(boom);
       
    }
    else
        console.log(i);
   
    }
