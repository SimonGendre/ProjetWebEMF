/*
   But :    exerice 10 : programmation orientée object - worker
   Auteur : Simon Gendre
   Date :   22.05.2023 / V1.0 
*/
class Worker {
personnes;
  constructor() {
    this.personnes = [
      new Personne("John", "Doe", 44),
      new Personne("Anna", "Smith", 32),
      new Personne("Peter", "Jones", 29),
    ];
    this.personnes.sort();
  }
  // définition du modèle de données, créé au chargement du js dans le index.html
 

  // premier tri de la liste de personnes

  // fonction privée pour retrouver l'index d'une personne dans le tableau, -1 autrement
  // il faut comparer avec toString()
  _trouverPersonne(p) {
    let idx = -1;

    for (let i = 0; i < this.personnes.length; i++) {
      if (p.toString() == this.personnes[i].toString()) {
        idx = i;
      }
    }

    return idx;
  }

  // ajouter une personne dans la liste des personnes si pas trouvée
  ajouterPersonne(p) {
    let idx = this._trouverPersonne(p);

    if (idx == -1) {
      this.personnes.push(p);
    }
  }

  // supprimer une personne dans la liste des personnes si trouvée
  supprimerPersonne(p) {
    let idx = this._trouverPersonne(p);
    if (idx > -1) {
      this.personnes.splice(idx, 1);
    }
  }
}
