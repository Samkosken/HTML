function muutaTeksti() {
    var teksti = document.getElementById("muokattava");
    teksti.style.fontFamily = "Courier";
    teksti.style.color = "red";
    teksti.style.fontSize = "2em";
}
function haeTiedot() {
    let enimi = document.getElementById("etunimi").value;
    let snimi = document.getElementById("sukunimi").value;
    console.log("Etunimi on " + enimi + " ja sukunimi on " + snimi + ".");
}
function vari() {
    var teksti = document.getElementById("vari");
    teksti.style.backgroundColor = "green";
    event.preventDefault();
}