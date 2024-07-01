let number1 = parseInt(prompt("Entrez un premier nombre pour une addition"));
let number2 = parseInt(prompt("Entrez un deuxieme nombre"));

function calc(nb1, nb2){
    document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">${nb1} + ${nb2} = ${nb1 + nb2}</p>`)
}

calc(number1, number2);