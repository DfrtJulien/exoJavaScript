let hours = parseInt(prompt("Entrez une heure"));


if(hours >= 0 && hours < 25){
    let min = parseInt(prompt("Entrez les minute"));
    let seconds = parseInt(prompt("Entrez les secondes"));
    if(seconds === 59){
    seconds = 0;
    min++;
    if(min === 60){
        min = 0;
        hours++;
        if(hours === 24){
            hours = 0;
        }
    }
    }else if (seconds > 59){
        alert('Entrez correctement les seconde')
    }else {
        seconds++;
    }
    document.write("<p class='text'>" + "la réponse est " + hours + " h " + min +" m " + seconds + " s" + "</p>");
}else{
    alert('Entrez une heure valide');
}



// if(seconds === 59){
//     seconds = 0;
//     min++;
//     if(min === 60 && min < 60){
//         min = 0;
//         hours++;
//         if(hours === 24){
//             hours = 0;
//         }
//     }
// }else if (seconds > 59){
//     alert('Entrez correctement les seconde')
// }else {
//     seconds++;
// }

