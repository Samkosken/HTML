function viikonpva() {
    let viikonpv = parseInt(document.getElementById("viikonpv").value);
    switch(viikonpv) {
        case 1:
            document.getElementById("vastaus").innerHTML = "maanantai";
            break;
        case 2:
            document.getElementById("vastaus").innerHTML = "tiistai";
            break;
        case 3:
            document.getElementById("vastaus").innerHTML = "keskiviikko";
            break;
        case 4:
            document.getElementById("vastaus").innerHTML = "torstai";
            break;
        case 5:
            document.getElementById("vastaus").innerHTML = "perjantai";
            break;
        case 6:
            document.getElementById("vastaus").innerHTML = "lauantai";
            break;
        case 7:
            document.getElementById("vastaus").innerHTML = "sunnuntai"
            break;                         
        }
    event.preventDefault();
}