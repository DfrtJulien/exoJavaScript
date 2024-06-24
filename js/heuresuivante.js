let hours = parseInt(prompt("Entrez une heure"));


if(hours > 0 && hours < 25){
    let min = parseInt(prompt("Entrez une minute"));
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
    }else {
        seconds++;
    }
    document.write("<p class='text'>" + "il est " + hours + " h " + min +" m " + seconds + " s" + "</p>");
}else{
    alert('Entrez une heure valide');
}





