function tarkistaIka() {
    let ika = document.getElementById("ika").value;
    if (ika < 16) {
        document.getElementById("vast").innerHTML = "Saat ajaa polkupyörää";
    } else if (ika >= 16 && ika < 18) {
        document.getElementById("vast").innerHTML = "Saat ajaa mopoa";
    } else {
        document.getElementById("vast").innerHTML = "Saat ajaa auto";
    }
    event.preventDefault();
} 