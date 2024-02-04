/*
   But :    exerice 10 : programmation orientée object - worker
   Auteur : Simon Gendre
   Date :   22.05.2023 / V1.0 
*/
// définition du modèle de données, créé au chargement du js dans le index.html
let personnes = [
  new Personne("John", "Doe", 44),
  new Personne("Anna", "Smith", 32),
  new Personne("Peter", "Jones", 29),
];

// premier tri de la liste de personnes
personnes.sort();

// fonction privée pour retrouver l'index d'une personne dans le tableau, -1 autrement
// il faut comparer avec toString()
function _trouverPersonne(p) {
  let idx = -1;

  for (let i = 0; i < personnes.length; i++) {
    if (p.toString() == personnes[i].toString()) {
      idx = i;
    }
  }

  return idx;
}

// ajouter une personne dans la liste des personnes si pas trouvée
function ajouterPersonne(p) {
  let idx = _trouverPersonne(p);

  if (idx == -1) {
    personnes.push(p);
  }
}

// supprimer une personne dans la liste des personnes si trouvée
function supprimerPersonne(p) {
  let idx = _trouverPersonne(p);
  if (idx > -1) {
    personnes.splice(idx, 1);
  }
}
