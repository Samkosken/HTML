console.log("p01");
function laskeSumma(num1,num2) {
    return num1 + num2;
}
console.log(laskeSumma(3,5));
// 
function laskeNelionPintaAla(sivu) {
    return sivu * sivu;
}
console.log("p02");
console.log(laskeNelionPintaAla(5));
// 
console.log("p03");
function laskeYmpyranPintaAla(sade) {
    return Math.PI * sade ** 2;
}
console.log(laskeYmpyranPintaAla(5));
// 
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
//
console.log("p05");

function onkoParillinen(num) {
    if (num % 2 == 0) {
        return true;
    } else {   
        return false;    
    }
}
console.log(onkoParillinen(4));
//
console.log("p06");

function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}
console.log(laskeMerkkijononPituus("aivan"));
// 
console.log("p07");

function onkoMerkijonoTyhja(merkkijono) {
    if (merkkijono == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(onkoMerkijonoTyhja(""));
