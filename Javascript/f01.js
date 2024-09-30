// p01
console.log("p01");
function laskeSumma(num1,num2) {
    return num1 + num2;
}
console.log(laskeSumma(3,5));
// p02
function laskeNelionPintaAla(sivu) {
    return sivu * sivu;
}
console.log("p02");
console.log(laskeNelionPintaAla(5));
// p03
console.log("p03");
function laskeYmpyranPintaAla(sade) {
    return Math.PI * sade ** 2;
}
console.log(laskeYmpyranPintaAla(5));
// p04
console.log("p04");

function laskeKeskiarvo(taulukko) {
    let summa = 0;
    for(var i = 0; i <= taulukko.length-1; i++)
    {
        
        summa += taulukko[i];
    }
    return summa / taulukko.length;
}

console.log(laskeKeskiarvo([1, 2, 3, 4, 5]));
console.log(laskeKeskiarvo([9, 2, 8, 14, 5]));
// p05
console.log("p05");

function onkoParillinen(num) {
    if (num % 2 == 0) {
        return true;
    } else {   
        return false;    
    }
}
console.log(onkoParillinen(4));
// p06
console.log("p06");

function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}
console.log(laskeMerkkijononPituus("aivan"));
// p07
console.log("p07");

function onkoMerkijonoTyhja(merkkijono) {
    if (merkkijono == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(onkoMerkijonoTyhja(""));
// p08
console.log("p08");


function laskeSuurin(taulukko) {
    return Math.max(...taulukko);

}
console.log(laskeSuurin([2,7,1,9,3]));
// p09
console.log("p09");

function laskePienin(taulukko) {
    return Math.min(...taulukko);

}
console.log(laskePienin([2,7,1,9,3]));
// p10
console.log("p10");

function laskeTaulukonSumma(taulukko) {
    let summa = 0;
    for (let e of taulukko) {
        summa += e;
    }
    return summa;
} console.log(laskeTaulukonSumma([1,2,3,4,5]));
// p11
console.log("p11");

function laskePotenssi(num1, num2) {
    
    return num1 ** num2;
}
console.log(laskePotenssi(5,5));
// p12
console.log("p12");

function laskeAlkuluku(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || luku % 3 === 0) return false;
    let i = 5;
    while (i * i)
} 
console.log(laskeAlkuluku())