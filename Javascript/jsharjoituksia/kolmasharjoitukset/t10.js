function muunnaSalasana() {
    let sana = document.getElementById("salasana").value
    let salasana ="";
    let kirjaimet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < sana.length; i++) {
        salasana += sana[i] + kirjaimet[Math.floor(Math.random() * kirjaimet.length)]
    }
    document.getElementById("vastaus").innerHTML = salasana;
    event.preventDefault();

}