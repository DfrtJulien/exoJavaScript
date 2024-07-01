let tour = 0;

while(tour < 10){
    tour++
    document.write(`<h1 p style=" font-size:20px; background-color:violet; color:white; padding:20px; text-align:center"> c'est le tour de manege numéro ${tour}</h1>`);
}


let tourNum = parseInt(prompt('Combien de tours voulez vous faire?'));
let compteur = 0;

while(compteur < tourNum) {
    compteur++
    document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center"> C'est le tour numéro ${compteur}!</p>`);
    if(compteur === tourNum){
        document.write(`<p style="font-size:20px; background-color:red; color:white; padding:20px; text-align:center"> C'est fini!</p>`);
    }
}
