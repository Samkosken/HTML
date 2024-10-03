function onkoKarkausVuosi() {
    let vuosi = parseInt(document.getElementById("karkausvuosi").value);
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        document.getElementById("vastaus").innerHTML = "Luku on karkausvuosi";
    } else if (vuosi % 400 == 0) {
        document.getElementById("vastaus").innerHTML = "Luku on karkausvuosi";
    } else {
        document.getElementById("vastaus").innerHTML = "Luku on ei ole karkausvuosi";
    }
    event.preventDefault();
}
    
