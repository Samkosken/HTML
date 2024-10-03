function lauseLuku() {
    let luku = parseInt(document.getElementById("luku").value);
    let lause ="";
    for (var i = 1; i <= 10; i++) {
        lause += luku + " x " + i + " = " + luku * i+"<br>";
    
    }
    document.getElementById("vastaus").innerHTML = lause;
    event.preventDefault();
}