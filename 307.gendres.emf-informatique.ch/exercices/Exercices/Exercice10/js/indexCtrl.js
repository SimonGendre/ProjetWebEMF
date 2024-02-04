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
    _afficherPersonnes();
  }
};

/*
 * 2. METHODES PRIVEES DE LECTURE/ECRITURE DANS LA VUE
 */

// affiche la liste des données au bas de la vue (avec du HTML généré)
function _afficherPersonnes() {
  let txt = "<ul>";
  personnes.forEach((personne) => {
    txt +=
      '<li onclick="selectionnerPersonne(' +
      _trouverPersonne(personne) +
      ')" >';
    txt += personne.toString();
    txt += "</li>";
  });
  txt += "</ul>";
  document.getElementById("info").innerHTML = txt;
}

// affiche les infos d'une personne dans le formulaire
function _afficherInfosPersonne(p) {
  let nom = p.nom;
  let prenom = p.prenom;
  let age = p.age;
  document.getElementById("nom").value = nom;
  document.getElementById("prenom").value = prenom;
  document.getElementById("age").value = age;
}

// lit le contenu des masques de saisie pour en faire une personne
function _lireInfosPersonne() {
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
function selectionnerPersonne(i) {
  return _afficherInfosPersonne(personnes[i]);
}

// appelée depuis la vue pour ajouter une personne
function ajouter() {
  let p = _lireInfosPersonne();
  ajouterPersonne(p);
  _afficherPersonnes();
}

// appelée depuis la vue pour supprimer une personne
function supprimer() {
  let p = _lireInfosPersonne();
  supprimerPersonne(p);
  _afficherPersonnes();
}
