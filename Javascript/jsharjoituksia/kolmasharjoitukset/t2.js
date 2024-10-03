function muunnaSalasana() {
    let sana = document.getElementById("salasana").value
    let salasana ="";
    for (var i = 0; i < sana.length; i++) {
        salasana += sana[i] + "Ö";
    }
    document.getElementById("vastaus").innerHTML = salasana;
    event.preventDefault();

}