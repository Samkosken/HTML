function arvoKortit() {
    var kortit = [];
    var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    var numerot = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    var kortti =[];
    for (var i = 0; i < 5; i++) {
        kortti = maat[Math.floor(Math.random() * 3)] + numerot[Math.floor(Math.random() * 13)];
        if (kortit.includes(kortti)) {
            i--
        } else {
            kortit.push(kortti);
        }
        

   
    }
    document.getElementById("vastaus").innerHTML = kortit;
    event.preventDefault();

}