

function randomUser() {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);
      document.getElementById("t1").innerHTML = "Nimi: " + data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("t2").innerHTML = "Osoite: " + data.results[0].location.city + "<br /> " + data.results[0].location.state +  "<br /> " + data.results[0].location.street.name + " " + data.results[0].location.street.number;
      document.getElementById("t3").innerHTML = "Puhelin: " + data.results[0].phone;
      document.getElementById("t5").innerHTML = "Maa: " + data.results[0].location.country;
      document.getElementById("t6").innerHTML = "Käyttäjätunnus + salasana: " + data.results[0].login.username + " " + data.results[0].login.password;
      document.getElementById("t7").innerHTML = "Syntymäaika: " + data.results[0].dob.date;
      document.getElementById("t8").innerHTML = "Sähköposti: " + data.results[0].email;
      document.getElementById("t9").innerHTML = "<img src=\'" + data.results[0].picture.large + "\'>";
    } );
}
