for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        document.write(`<p style=" font-size:20px; background-color:red; color:white; padding:20px; text-align:center">FizzBuzz !</p>`);
    } else if(i % 5 === 0) {
        document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Fizz !</p>`);
    }else if(i % 3 === 0){
        document.write(`<p style=" font-size:20px; background-color:green; color:white; padding:20px; text-align:center">Buzz !</p>`);
    }else{
        document.write(`<p style=" font-size:20px; background-color:violet; color:white; padding:20px; text-align:center"> ${i} !</p>`);
    }
}

secondNum = 0;
while(secondNum < 100){
    secondNum++
    if(secondNum % 3 === 0 || secondNum % 5 === 0) {
        document.write(`<p style=" font-size:20px; background-color:red; color:white; padding:20px; text-align:center">FizzBuzz !</p>`)
    }else {
        document.write(`<p style=" font-size:20px; background-color:black; color:white; padding:20px; text-align:center">${secondNum} </p>`)
    }
}