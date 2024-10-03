function paritonParillinenSumma () {
    let pieni = document.getElementById("pieni").value;
    let suuri = document.getElementById("suuri").value;
    let x = suuri;
    let y = pieni;
    let vastaus = "";
    while (x > y) {
        if (suuri % 2 != 0) {
            x--;
        } else {
            vastaus += x;
        }
    }
}