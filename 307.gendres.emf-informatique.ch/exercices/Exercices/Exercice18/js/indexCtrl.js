/*
   But :    exerice 18 : Webservice
   Auteur : Simon Gendre
   Date :   05.06.2023 / V1.0 
*/

// Attend la fin du chargement de la page
$().ready(function () {
  ctrl = new Ctrl();
  httpServ = new HttpServ();
});

class Ctrl {
  constructor() {}

  celsius2Fahrenheit() {
    // Lire les degrés du formulaire

    let degres = $("#celsius1").val();

    httpServ.celcius2Fahrenheit(
      degres,
      this.OKCelsius2Fahrenheit,
      this.KOCelsius2Fahrenheit
    );
  }

  KOCelsius2Fahrenheit(xhr) {
    let erreur = xhr.status + ": " + xhr.statusText;
    alert("Erreur - " + erreur);
  }

  OKCelsius2Fahrenheit(data) {
    let temp = $(data).find("temperature").text();
    let affiche = temp !== "NaN" ? temp : "";
    // Afficher les degrés dans le formulaire
    $("#fahrenheit1").val(affiche);
  }
}
