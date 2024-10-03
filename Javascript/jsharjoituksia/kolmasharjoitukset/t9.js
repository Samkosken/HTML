function pieninJaSuurin() {
    let taulukko = [];
    taulukko[0] = document.getElementById("luku1").value;
    taulukko[1] = document.getElementById("luku2").value;
    taulukko[2] = document.getElementById("luku3").value;
    taulukko[3] = document.getElementById("luku4").value;
    taulukko[4] = document.getElementById("luku5").value;
    document.getElementById("vastaus").innerHTML = "Pienin luku on " + Math.min(...taulukko) + " ja suurin on " + Math.max(...taulukko)
    event.preventDefault();
}
