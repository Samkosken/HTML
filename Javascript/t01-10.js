console.log("p01");
const kauppaLista = ["maito", "juusto", "leipä"];
console.log(kauppaLista);
// 
console.log("p02");
const etunimet = ["Sami", "Juuso", "Seppo", "Teppo", "Matti"];
console.log(etunimet);
// 
console.log("p03");
console.log(etunimet.length);
// 
console.log("p04");
etunimet.push("Matti2", "Anna", "Eeva");
console.log(etunimet);
// 
console.log("p05");
const taul1 = [1, 2, 3];
const taul2 = [4, 5, 6];
taul1.push(taul2);
console.log(taul1);
// 
console.log("p06");
const taul3 = [1,2,3,4,5,6,7,8,9,10];
parillisetNumerot = taul3.filter(taul3 => taul3 % 2 === 0);
console.log(parillisetNumerot);
// 
console.log("p07");
const taul4 = [5,2,9,1,5,8,3]
taul4.sort(function(a, b){return a - b});
console.log(taul4);
// 
console.log("p08");
const taul5 = [1,2,3,4,5];
taul5.sort(function (a, b){return b - a});
console.log(taul5);
// 
console.log("p09");
const taul6 = ["Matti", "Anna", "Eeva"];
const merkki = taul6.join(",");
console.log(merkki);
// 
console.log("p10");
