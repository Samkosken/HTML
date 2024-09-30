function suurin() {
    let tau = [];
    tau[0] = document.getElementById("yksi").value;
    tau[1] = document.getElementById("kaksi").value;
    tau[2] = document.getElementById("kolme").value;
    tau[3] = document.getElementById("nelja").value;
    tau[4] = document.getElementById("viisi").value;
 
    document.getElementById("v1").innerHTML = "Annoit luvut " + tau[0] + " " + tau[1] + " " + tau[2] + " " + tau[3] + " " + tau[4];
    document.getElementById("v2").innerHTML = "Suurin luku on " + Math.max(...tau);
    event.preventDefault();
}