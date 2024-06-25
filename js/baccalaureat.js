let number = parseFloat(prompt('Quel est votre moyenne ?'))


if(number < 10){
    document.write("<h1 class='text'>" + "Avec une moyenne de " + number + " " + "vous êtes recalé" + "</h1>");
}else if ( number >= 10 && number < 12){
    document.write("<h1 class='text'>" + "Avec une moyenne de " + number + " " + "vous êtes reçu" + "</h1>");
}else if (number >= 12 && number <= 20) {
    document.write("<h1 class='text'>" + "Avec une moyenne de " + number + " " + "vous êtes reçu avec mention !" + "</h1>");
} else {
    document.write("<h1 class='text'>" + "Entrez une moyenne correcte" + "</h1>");
    console.log(number);
}