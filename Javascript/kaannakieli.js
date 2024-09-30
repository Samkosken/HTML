function kaantaja() {
    let kieli = document.getElementById("kieli").value;
    if (kieli == "eng") {
        document.getElementById("vastauss").innerHTML = "Hello World!";
    } else if (kieli == "suo") {
        document.getElementById("vastauss").innerHTML = "Hei Maailma!";
    } else {
        document.getElementById("vastauss").innerHTML = "Hej världen!";
    }
    event.preventDefault();
}