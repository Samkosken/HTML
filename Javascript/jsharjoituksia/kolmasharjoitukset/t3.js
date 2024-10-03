function tarkistaKirjain() {
    var sana = document.getElementById("kirjain").value;
    var kirjain = /ö/i;
    var tarkistus = kirjain.test(sana);
}