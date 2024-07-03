
 setInterval(function() {
    let date = new Date();
    let test = new Date("Jully 19, 2024 23:59:59");
    let timer = test - date;

    let day = Math.floor(timer / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(timer % (1000 * 60 * 60 ) / (1000 * 60));
    let seconds = Math.floor(timer % (1000 * 60) / 1000);

    let minuteur = document.getElementById('chrono').innerHTML = `${day} j ${hours} h ${min} m ${seconds} s`;
    console.log(minuteur);
    console.log(seconds);

    if(timer < 0){
        clearInterval(x)
    }
}, 1000)








