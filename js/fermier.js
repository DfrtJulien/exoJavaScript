
let pouletNb = parseInt(prompt("Combien de Poulet avez vous ?"))
let vacheNb = parseInt(prompt("Combien de Vache avez vous ?"))
let chevalNb = parseInt(prompt("Combien de Cheveaux avez vous ?"))


function comptePatte(poulet, vache, cheval){
    if(poulet, vache,cheval){
    document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Vous avez ${poulet * 2} pattes de poulets,  ${vache * 4} pieds de vaches et ${cheval * 4} pieds de chevals pour un totale de ${poulet * 2 + vache * 4 + cheval * 4} pattes </p>`);
    }else {
        alert('Entrez des chiffres valides!')
    }
}

comptePatte(pouletNb, vacheNb, chevalNb);
