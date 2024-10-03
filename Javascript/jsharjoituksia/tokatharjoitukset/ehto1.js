function muuttuja() {
    let luku = document.getElementById("luku").value;
    if (luku >= 0) {
        document.getElementById("vastaus").innerHTML = "Luku on posiitiven";
    }  else {
        document.getElementById("vastaus").innerHTML = "Luku on negatiivinen";
    }
    event.preventDefault();
}