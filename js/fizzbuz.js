let num = 0;

while(num < 100){
    num++
    if(num % 3 === 0){      
        document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Fizz!</p>`)
    }else if (num % 5 === 0){
        document.write(`<p style=" font-size:20px; background-color:red; color:white; padding:20px; text-align:center">Buzz !</p>`)
    }else {
        document.write(`<p style=" font-size:20px; background-color:violet; color:white; padding:20px; text-align:center">${num} </p>`)
    }
}

while(num < 100){
    num++
    if(num % 3 === 0 || num % 5 === 0) {
        document.write(`<p style=" font-size:20px; background-color:red; color:white; padding:20px; text-align:center">FizzBuzz !</p>`)
    }else {
        document.write(`<p style=" font-size:20px; background-color:violet; color:white; padding:20px; text-align:center">${num} </p>`)
    }
}