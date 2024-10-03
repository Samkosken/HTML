function tarkasta() {

    let enimi = document.getElementById("enimi").value;
    let snimi = document.getElementById("snimi").value;
    let losoite = document.getElementById("losoite").value;
    let posnumero = document.getElementById	("posnumero").value;
    let kaupunki = document.getElementById("kaupunki").value;
    let puhnumero = document.getElementById("puhnumero").value;

    if (enimi.trim() == "") {
        alert("Anna etunimi!");

    } else if (snimi.trim() == "") {
        alert("Anna sukunimi!");

    } else if (losoite.trim() == "") {
        alert("Anna lähiosoite!");

    } else if (posnumero.trim() == "") {
        alert("Anna postinumero!");

    } else if (kaupunki.trim() == "") {
        alert("Anna kaupunki!");

    } else if (puhnumero.trim() == "") {
        alert("Anna puhelinnumero!");
    } else {
        alert("Kiitos!");
    }
    event.preventDefault();
}