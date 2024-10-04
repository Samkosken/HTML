function paritonParillinenSumma () {
    let pieni = parseInt(document.getElementById("pieni").value);
    let suuri = parseInt(document.getElementById("suuri").value);
    let summaPariton = 0;
    let summaParillinen = 0;
    let taulukko = [];
    let x = suuri;
    let y = pieni;
    let vastaus = ""
    while (y <= x) {
        if (y % 2 == 0) {
            taulukko.push(y)
            summaParillinen += y;
            y++;
        } else {
            taulukko.push(y)
            summaPariton += y;
            y++
        }
    } 
    document.getElementById("vastaus").innerHTML = "Parilliset luvut ovat " + taulukko.filter(taulukko => taulukko % 2 == 0) + " ja niiden summa on " + summaParillinen + "<br>"
    + "Parittomat luvut ovat " + taulukko.filter(taulukko => taulukko % 2 != 0) + " ja niiden summa on " + summaPariton;
    event.preventDefault();
}