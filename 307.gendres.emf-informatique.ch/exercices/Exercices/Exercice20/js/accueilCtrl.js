/*
But :    mettre en place login et mdp
   Auteur : Simon Gendre
   Date :   06.05.2023 / V1.0 
*/
class AccueilCtrl {
  constructor(langue) {
    this.changeTitre(langue);
  }

  changeTitre(langue){
    if (langue === "en"){
      $("#bienvenue").text("Good morning Vietnam");
      // $("h3").css({"color":"red"});
    }
    if (langue === "de"){
      $("#bienvenue").text("Grüss Got");
    }
    if (langue === "fr"){
      $("#bienvenue").text("Tcho");
    }
  }


  
}
