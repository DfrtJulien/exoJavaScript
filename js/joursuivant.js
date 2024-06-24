let userDay = prompt('Entrez le jour de la semaine').toLowerCase();

if(userDay === "samedi"){
    alert('demain sera Dimanche');
}else if (userDay === "dimanche"){
    alert('demain sera lundi');
}else if (userDay === "lundi"){
    alert('demain sera mardi');
}else if (userDay === "mardi"){
    alert('demain sera Mercredi');
}else if (userDay === "mercredi"){
    alert('demain sera Jeudi');
}else if (userDay === "jeudi"){
    alert('demain sera Vendredi');
}else if (userDay === "vendredi"){
    alert('demain sera samedi');
}else {
    alert('Entre un jours de la semaine valide');
}

switch(userDay){
    case 'samedi':
        alert('demain sera Dimanche');
        break;
    case 'dimanche':
        alert('demain sera Lundi');
        break;
    case 'lundi':
        alert('demain sera Mardi');
        break;
    case 'mardi':
        alert('demain sera Mercredi');
        break;
    case 'mercredi':
        alert('demain sera Jeudi');
        break;
    case 'Jeudi':
        alert('demain sera Vendredi');
        break;
    case 'Vendredi':
        alert('demain sera Samedi');
        break;
    default:
        alert('Entre un jours de la semaine valide');
}