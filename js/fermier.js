
let pouletNb = parseInt(prompt("Combien de Poulets avez vous ?"))
let vacheNb = parseInt(prompt("Combien de Vaches avez vous ?"))
let chevalNb = parseInt(prompt("Combien de Cheveaux avez vous ?"))
let spiderlNb = parseInt(prompt("Combien d'Arraignées avez vous ?"))


function comptePatte(poulet, vache, cheval, spider){
    if(poulet, vache,cheval, spider){
    document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center">Vous avez ${poulet * 2} pattes de poulets,  ${vache * 4} pieds de vaches, ${cheval * 4} pieds de chevaux et ${spider * 8} pattes d'Arraignées pour un totale de ${poulet * 2 + vache * 4 + cheval * 4 + spider * 8} pattes </p>`);
    }else {
        alert('Entrez des chiffres valides!')
    }
}

comptePatte(pouletNb, vacheNb, chevalNb, spiderlNb);
