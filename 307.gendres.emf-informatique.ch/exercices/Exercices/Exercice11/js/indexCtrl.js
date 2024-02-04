/*
   But :    exerice 10 : programmation orientée object
   Auteur : Simon Gendre
   Date :   22.05.2023 / V1.0 
*/

/*
 * 1. DOM PRET : DEMARRAGE DE L'APPLICATION
 */
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    ctrl = new Ctrl();     
    ctrl._afficherPersonnes();
  }
};
class Ctrl {
  wrk;
  constructor() {
    this.wrk = new Worker();
    this._afficherPersonnes();
  }

  /*
   * 2. METHODES PRIVEES DE LECTURE/ECRITURE DANS LA VUE
   */

  // affiche la liste des données au bas de la vue (avec du HTML généré)
  _afficherPersonnes() {
    let txt = "<ul>";
    this.wrk.personnes.forEach((personne) => {
      txt +=
        '<li onclick="ctrl.selectionnerPersonne(' +
        this.wrk._trouverPersonne(personne) +
        ')" >';
      txt += personne.toString();
      txt += "</li>";
    });
    txt += "</ul>";
    document.getElementById("info").innerHTML = txt;
  }

  // affiche les infos d'une personne dans le formulaire
  _afficherInfosPersonne(p) {
    let nom = p.nom;
    let prenom = p.prenom;
    let age = p.age;
    document.getElementById("nom").value = nom;
    document.getElementById("prenom").value = prenom;
    document.getElementById("age").value = age;
  }

  // lit le contenu des masques de saisie pour en faire une personne
  _lireInfosPersonne() {
    let p = new Personne();
    p.nom = document.getElementById("nom").value;
    p.prenom = document.getElementById("prenom").value;
    p.age = document.getElementById("age").value;

    return p;
  }

  /*
   * 3. METHODES PUBLIQUES NECESSAIRES A LA VUE
   */

  // appelée depuis la vue pour afficher les données de la personne sélectionnné
  selectionnerPersonne(i) {
    return this._afficherInfosPersonne(this.personnes[i]);
  }

  // appelée depuis la vue pour ajouter une personne
  ajouter() {
    let p = this._lireInfosPersonne();
    this.wrk.ajouterPersonne(p);
    this._afficherPersonnes();
  }

  // appelée depuis la vue pour supprimer une personne
  supprimer() {
    let p = this._lireInfosPersonne();
    this.wrk.supprimerPersonne(p);
    this._afficherPersonnes();
  }
}
