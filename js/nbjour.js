let month = parseInt(prompt('Entrez le numéro du mois'));

switch(month){
    case 1:
        document.write("<p class='text'>" + 'Il y a 31 jours en janvier!' + "</p>");
        break;
    case 2:
        document.write("<p class='text'>" + 'Il y a 28 jours en fevrier!' + "</p>");
        break;
    case 3:
        document.write("<p class='text'>" + 'Il y a 31 jours en mars!' + "</p>");
        break;
    case 4:
        document.write("<p class='text'>" + 'Il y a 30 jours en avril!' + "</p>");
        break;
    case 5:
        document.write("<p class='text'>" + 'Il y a 31 jours en mai!' + "</p>");
        break;
    case 6:
        document.write("<p class='text'>" + 'Il y a 30 jours en juin!' + "</p>");
        break;
    case 7:
        document.write("<p class='text'>" + 'Il y a 31 jours en juillet!' + "</p>");
        break;
    case 8:
        document.write("<p class='text'>" + 'Il y a 31 jours en aout!' + "</p>");
        break;
    case 9:
        document.write("<p class='text'>" + 'Il y a 30 jours en septembre!' + "</p>");
        break;
    case 10:
        document.write("<p class='text'>" + 'Il y a 31 jours en octobre!' + "</p>");
        break;
    case 11:
        document.write("<p class='text'>" + 'Il y a 30 jours en novembre!' + "</p>");
        break;
    case 12:
        document.write("<p class='text'>" + 'Il y a 31 jours en décembre!' + "</p>");
        break;
    default:
        document.write("<p class='text'>" + 'Entrez un numéro de mois valide!' + "</p>");
        break;
}