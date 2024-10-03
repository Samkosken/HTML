function summaaNumerot() {
    let x = 1;
    let vastaus
    let summa = 0;
    while (x <= 10) {
        summa += x
        x++;
    } vastaus = summa 
    document.getElementById("vastaus").innerHTML = vastaus;
    event.preventDefault();
}