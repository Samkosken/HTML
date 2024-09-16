// P01
console.log
console.log("Hei maailma!");
// p02
var num1 = 5;
var num2 = 7;
summa = num1 + num2;
console.log(summa);
// p03
erotus = num1 - num2;
console.log(erotus);
// p04
tulo = num1 * num2;
console.log(tulo);
// p05
jako = num1 / num2;
console.log(jako);
// p06 ja p07
var fahrenheit = 10;
var celcius = 10;
var ftoc = (celcius * 1.8) + 32;
var ctof = (fahrenheit -32) * 5 / 9;
console.log(celcius = ftoc);
console.log(fahrenheit = ctof);
// p08 ja p09
var mtokm = 0.62137;
var kmtom = 1.609344;
var kilometri = 100;
var maili = 100;
console.log(maili * mtokm);
console.log(kilometri * kmtom);
//  p10 ja p11
var intocm = 2.53999863
var cmtoin = 0.393701
console.log(num1 * intocm)
console.log(num1 * cmtoin)
// p12 ja 13
var yardtom = 0.91441112
var mtoyard = 1.0936
console.log(num1 * yardtom)
console.log(num1 * mtoyard)
// p14

// let arvo = prompt("Anna arvo. Muunnan fahrenheitin celciukseksi");
// console.log(arvo = ctof)
//

let arvo1 = prompt("Anna luku")
let arvo2 = prompt("Anna toinen luku")
summa1 = parseInt(arvo1) + parseInt(arvo2)
erotus1 = arvo1 - arvo2
tulo1 = arvo1 * arvo2
jako1 = arvo1 / arvo2
console.log(summa1)
console.log(erotus1)
console.log(tulo1)
console.log(jako1)
 
// p15


 let sade = prompt("Anna säde");
function laskeala(sade) {
    return sade * sade * Math.PI;   
}
let ala = laskeala(sade)
console.log(ala)

 //p16

var nelioSivu = prompt("Anna neliön sivun, lasken pinta-alan");
 function nelioPintaAla(nelioSivu) {
    return nelioSivu * nelioSivu;
}
let pintaala = nelioPintaAla(nelioSivu);
console.log(pintaala);

 // p17
 var suoraKulmioSivuA = prompt("Anna sivu a");
var suoraKulmioSivuB = prompt("Anna sivu b");
function suoraKulmioSivu(suoraKulmioSivuA, suoraKulmioSivuB) {
    return suoraKulmioSivuA * suoraKulmioSivuB;
}
let suoraKulmioAla = suoraKulmioSivu(suoraKulmioSivuA,suoraKulmioSivuB);
console.log(suoraKulmioAla);
// p18 

function paivatvuosiksi(paivat) {
    let vuodet = paivat / 365
    let kuukaudet = ((paivat % 365) / paivat / 365)
    let 
    
}