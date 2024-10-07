function arvoNumerot() {
    let numero = "";
    let vastaus = []; 
    for (var i = 0; i < 7; i++) {
        numero = Math.floor(Math.random() * 48) + 1;
        if (vastaus.includes(numero)) {
            i--;
        } else {
            vastaus.push(numero)
        }
    }
    document.getElementById("vastaus").innerHTML = vastaus.sort(function(a,b){return a-b});
}