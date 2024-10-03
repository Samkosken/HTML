function tarkistaKirjain() {
    var sana = document.getElementById("kirjain").value;
    var vastaus = "ei ole";
    for (var i = 0; i < sana.length; i++) {
        if (sana[i] == "ö" || sana[i == "Ö"]) {
            vastaus = "On";
        }
    } document.getElementById("vastaus").innerHTML = vastaus;
    event.preventDefault();
}