// DOM01
function muutaTeksti() {
    var teksti = document.getElementById("muokattava");
    teksti.style.fontFamily = "Courier";
    teksti.style.color = "red";
    teksti.style.fontSize = "2em";
}
// DOM02
function haeTiedot() {
    let enimi = document.getElementById("etunimi").value;
    let snimi = document.getElementById("sukunimi").value;
    console.log("Etunimi on " + enimi + " ja sukunimi on " + snimi + ".");
}
// DOM03
function vari() {
    var teksti = document.getElementById("vari");
    teksti.style.backgroundColor = "green";
    event.preventDefault();
}
// DOM04
function haeTiedotLinkista() {
    var a = document.getElementById("w3r").href;
    alert("href tiedot on : " + a);
    var s = document.getElementById("w3r").hreflang;
    alert("hreflang on : " + s);
    var d = document.getElementById("w3r").rel;
    alert("rel on : " + d);
    var f = document.getElementById("w3r").target;
    alert("target on : " + f);
    var g = document.getElementById("w3r").type;
    alert("type on : " + g);
}
// DOM05
function lisaaRivi() {
    var x = document.getElementById("taulukko").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "Solu 1";
    z.innerHTML = "Solu 2";
}
// DOM06
function muutaSolua() {
    var rivi = document.getElementById("rivi").value;
    var solu = document.getElementById("solu").value;
    var muutos = document.getElementById("arvo").value;
    document.getElementById("taulukko1").rows[rivi].cells[solu].innerHTML = muutos;
}
// DOM07
function lisaaTaulukkoon() {
    var rivit = parseInt(document.getElementById("rivimaara").value);
    var sarakkeet = parseInt(document.getElementById("sarakemaara").value);
    for (var i = 0; i < rivit; i++) {
        var x = document.getElementById("taulukko2").insertRow(i);
        var riviarvo = "Rivi" + i;
        for (var k = 0; k < sarakkeet; k++) {
           var y = x.insertCell();
           var soluarvo = " Sarake" + k;
           document.getElementById("taulukko2").rows[i].cells[k].innerHTML = riviarvo + soluarvo;
        }
   }
}
// DOM08
function poistaValinta() {
    var valinta = document.getElementById("age");
    valinta.remove(valinta.selectedIndex);
}
// DOM09
function muutaLinkkiLause() {
    var linkki = document.getElementById("linkkilause");
    linkki.style.overscrollBehavio = "green"
}