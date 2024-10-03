function parillisetLuvut() {
    var luku = parseInt(document.getElementById("luku").value);
    let j = luku;
    parilliset ="";
    if (luku % 2 == 0) {
        while (j > 2) {
            j -= 2;
            parilliset += " " + j;
        }
         document.getElementById("vastaus").innerHTML = parilliset;  
    } else {
        document.getElementById("vastaus").innerHTML = "Luku ei ole parillinen";
    } 
event.preventDefault();
}