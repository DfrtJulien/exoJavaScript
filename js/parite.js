for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center"> ${i} est pair!</p>`)
    }
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        document.write(`<p style=" font-size:20px; background-color:blue; color:white; padding:20px; text-align:center"> ${i} est impair!</p>`)
    }
}


let userNum = parseInt(prompt('Entrez un nombe :'));

if(userNum % 2 === 0) {
    document.write(`<p style=" font-size:20px; background-color:green; color:white; padding:20px; text-align:center">${userNum} est pair!</p>`)
} else {
    document.write(`<p style=" font-size:20px; background-color:red; color:white; padding:20px; text-align:center">${userNum} est impair!</p>`)
}