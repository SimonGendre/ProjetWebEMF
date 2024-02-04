/*
      But :    exerice 15 : Première utilisation de jquery
   Auteur : Simon Gendre
   Date :   23.05.2023 / V1.0 
   */

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    ctrl = new Ctrl();
    let couleur = document.getElementById("couleurs").value;
    ctrl.changerCouleur(couleur);
  }
};

class Ctrl {
  constructor() {}

  changerCouleur(couleur) {
    document.getElementById("container").style.backgroundColor = couleur;
    if (couleur == "red" || couleur == "green" || couleur == "blue") {
      document.getElementById("container").style.color = "white";
    } else {
      document.getElementById("container").style.color = "black";
    }
  }
}
