/*
But :    mettre en place login et mdp
   Auteur : Simon Gendre
   Date :   06.05.2023 / V1.0 
*/
class CompteCtrl {
  constructor() {
    // Ajouter un écouteur par bouton. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    $("#compte-valider").click(() => {
      this.validerCompte();
    });
    $("#compte-retour").click(() => {
      this.retourLogin();
    });
  }

  validerCompte() {
    // récupère les 5 valeurs de l'interface graphique via JQuery
    let identifiant = {
      username: $("#username").val(),
      password: $("#password").val(),
      domaine: $("#domaine").val(),
      mail: $("#mail").val(),
      langue: $("input[type='radio'][name='langues']:checked").val(),
    };

    //service.login(identifiant, this.OKCompte);
    http.login(identifiant, (data) => {
      this.OKCompte(data);
    });
  }


  OKCompte(data) {
    if (data.includes("KO")) {
      alert("Vos identifications sont incorrectes !!!\nVeuillez réessayer...");
    } else {
      alert(`Enregistrement OK:  ${data}`);
      indexCtrl.loadLogin();
    }
  }

  retourLogin() {
    indexCtrl.loadLogin();
  }
}
