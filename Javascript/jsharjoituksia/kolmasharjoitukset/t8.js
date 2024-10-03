function laskePotenssi() {
    let luku = parseInt(document.getElementById("luku").value);
    let potenssi = parseInt(document.getElementById("potenssi").value);
    let vastaus = 0;
    for (var i = 1; i >= 0; i--) {
        vastaus = luku ** potenssi;
    }    
    document.getElementById("vastaus").innerHTML = vastaus;
    event.preventDefault();
}