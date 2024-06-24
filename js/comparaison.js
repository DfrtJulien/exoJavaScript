let number1 = parseInt(prompt('Entrez un numéro'));
let number2 = parseInt(prompt('Entrez un deuxième numéro'));

if(number1 > number2){
    document.write("<p>" + number1 + " est supérieur a " + number2 +"</p>");
} else if (number1 === number2){
    document.write("<p>" + number1 + " est égale a " + number2 +"</p>");
} else{
    document.write("<p>" + number1 + " est inférieur a " + number2 +"</p>");
}