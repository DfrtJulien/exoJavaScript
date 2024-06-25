let number1 = parseInt(prompt('Entrez un numéro'));
let number2 = parseInt(prompt('Entrez un deuxième numéro'));

if(!isNaN(number1) && !isNaN(number2)){
    if(number1 > number2){
        document.write("<p class='text'>" + number1 + " est supérieur a " + number2 +"</p>");
    } else if (number1 === number2){
        document.write("<p class='text'>" + number1 + " est égale a " + number2 +"</p>");
    } else{
        document.write("<p class='text'>" + number1 + " est inférieur a " + number2 +"</p>");
    }
}else {
    alert("Vous n'avez pas saisie de chiffres")
}
