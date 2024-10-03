function tulostaNumerot() {
    let x = 1;
    let vastaus = "";
    while (x <= 10) {
        vastaus += x + " ";
        x++;
    } document.getElementById("vastaus").innerHTML = vastaus;
    event.preventDefault();
}