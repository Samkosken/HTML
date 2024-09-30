function onkoParillinen() {
    let num = document.getElementById("luku").value;
    if (num % 2 == 0) {
        document.getElementById("vas1").innerHTML = "Luku " + num + " on parillinen";
    } else {
        document.getElementById("vas1").innerHTML = "Luku " + num + " on pariton";
    }
event.preventDefault();
}