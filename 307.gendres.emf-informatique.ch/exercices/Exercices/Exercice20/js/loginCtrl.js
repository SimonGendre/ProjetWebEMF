/*
But :    mettre en place login et mdp
   Auteur : Simon Gendre
   Date :   06.05.2023 / V1.0 
*/
class LoginCtrl {
  constructor() {
    // Ajouter un écouteur. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    $("#login-valider").click(() => {
      this.validerUtilisateur();
    });
  }

  // JS standard
  validerUtilisateur() {

    // récupère les objets InputText du formulaire HTML
    let userComp = document.getElementById("username");
    let pswComp = document.getElementById("password");
    let domComp = document.getElementById("domaine");

    // récupère les valeurs de ces objets
    let identifiant = {
      username: userComp.value,
      password: pswComp.value,
      domaine: domComp.value,
      mail: "x",
      langue: "x",
    };

    // MET 2022-03-17  la function flèche est obligatoire car si on met une simple méthode callback avec son this, 
    // le this reveient "undefined" 
    http.login(identifiant, (data) => {
      if (data.includes("KO")) {
        this.displayKO();
      } else {
        this.displayOK(data);
      }
    });
  }

  // Même chose mais avec du JQuery
  validerUtilisateurJQ() {

    // récupère les valeurs de ces objets
    let identifiant = {
      username: $("#username").val(),
      password: $("#password").val(),
      domaine: $("#domaine").val(),
      mail: "x",
      langue: "x",
    };

    // MET 2022-03-17  la function flèche est obligatoire car si on met une simple méthode callback avec son this, 
    // le this revient "undefined" 
    service.login(identifiant, (data) => {
      if (data.includes("KO")) {
        this.displayKO();
      } else {
        this.displayOK(data);
      }
    });
  }

  displayOK(langue){
    indexCtrl.loadAccueil(langue);
    console.log("fin login: "+langue);
  }

  displayKO(){
    alert("Vos identifications sont incorrectes !!!\nVeuillez réessayer...");
  }
}
