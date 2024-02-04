/*
      But :    exerice 15 : Première utilisation de jquery
   Auteur : Simon Gendre
   Date :   23.05.2023 / V1.0 
   */
/*
 * 1. DOM PRET : DEMARRAGE DE L'APPLICATION AVEC CLASSE CTRL
 */
$(document).ready(function () {
  ctrl = new Ctrl();
  let couleur = $("#couleurs").val();
  ctrl.changerCouleur(couleur);
});

class Ctrl {
  constructor() {}

  changerCouleur(couleur) {
    $("#container").fadeOut(
      500,
      ((function() {
        $("#container").slideToggle(500).css("background-color", couleur);
        if (couleur == "red" || couleur == "green" || couleur == "blue") {
          $("#container").css("color", "white");
        } else {
          $("#container").css("color", "black");
        }
      }))
    );
  }
}
