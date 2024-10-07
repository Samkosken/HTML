function muunnaTaulukko() {
    let taulukko = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    let vastaus = '<table border="1">';
    for (var i = 0; i < taulukko.length; i++) {
        vastaus += "<tr>"
        for(var k = 0; k < taulukko[i].length; k++)
            {
              vastaus += '<td>' + taulukko[i][k] + '</td>';
            }
            vastaus += '</tr>';
          }
        vastaus += '</table>';
        event.preventDefault();
        document.getElementById("vastaus").innerHTML = vastaus;
    }