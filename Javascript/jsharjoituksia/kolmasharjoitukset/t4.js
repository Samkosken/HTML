function laskuKaava() {
    let luku = document.getElementById("luku").value;
    let x = luku - 1;
    let vastaus = "Luvun kertoma on ";
    let summa = luku;
    while (x > 0) {
        summa *= x
        x--;
         
    } document.getElementById("vastaus").innerHTML = vastaus + summa;
event.preventDefault();
}