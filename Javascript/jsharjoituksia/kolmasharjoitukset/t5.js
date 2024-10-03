function tulostaHip() {
    let x = 1
    let vastaus = "";
 while (x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
        vastaus += x + " hipheijjaa ";
        x++
    } else if (x % 3 == 0) {
        vastaus += x + " hip ";
        x++
        } else if (x % 5 == 0) {
            vastaus += x + " heijjaa ";
            x++
        } else { 
            vastaus += x + " ";
            x++;
        }
    } document.getElementById("vastaus").innerHTML = vastaus;
    event.preventDefault();
}