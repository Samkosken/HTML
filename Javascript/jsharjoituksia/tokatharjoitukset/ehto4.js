function laskeSumma() {
    let taulukkko = [];
    let summa = 0;
    taulukkko[0] = parseInt(document.getElementById("luku1").value);
    taulukkko[1] = parseInt(document.getElementById("luku2").value);
    taulukkko[2] = parseInt(document.getElementById("luku3").value);
    taulukkko[3] = parseInt(document.getElementById("luku4").value);
    taulukkko[4] = parseInt(document.getElementById("luku5").value);

    for (var i in taulukkko) {
        summa += taulukkko[i];
        keskiarvo = summa / taulukkko.length-1;
      }
    document.getElementById("vastaus1").innerHTML = "Lukujen summa on " + summa + " ja lukujen keskiarvo on " + keskiarvo;
    event.preventDefault();
}