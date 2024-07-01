let userMove = prompt("Entrez Pierre, Feuille ou Ciseaux").toLowerCase();


let computerMove = "";

function computer(){
    let randomNum = Math.random();
    if(randomNum < 1/3){
        computerMove = "Pierre";
    }else if (randomNum > 1/3 && randomNum < 3/4){
        computerMove = "Feuille";
    } else if(randomNum > 3/4) {
        computerMove = "Ciseaux";
    }
}

computer()

function chiffoumi(userMove){
    if(userMove === 'pierre'){
        if(computerMove === 'Pierre'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} égalité!</p>`)
        }else if(computerMove === 'Feuille'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu perds!</p>`)
        }else {
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu gagne!</p>`)
        }
    }else if (userMove === 'feuille'){
        if(computerMove === 'Pierre'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu gagne!</p>`)
        }else if(computerMove === 'Feuille'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} égalité!</p>`)
        }else {
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu perds!</p>`)
        }
    }else if (userMove === 'ciseaux'){
        if(computerMove === 'Pierre'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu perds!</p>`)
        }else if(computerMove === 'Feuille'){
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} tu gagne!</p>`)
        }else {
            document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Tu a choisis ${userMove} L'IA a choisis ${computerMove} égalité!</p>`)
        }
    }else {
        document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">écrivez correctement Pierre Feuille ou Ciseaux!</p>`)
    }
}

console.log(userMove);
console.log(computerMove);
chiffoumi(userMove);

