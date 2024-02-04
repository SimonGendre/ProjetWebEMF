/*
   But :    exerice 10 : programmation orientée object - bean
   Auteur : Simon Gendre
   Date :   22.05.2023 / V1.0 
*/
function Personne(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }
 Personne.prototype.toString = function () {
      return this.prenom + " " + this.nom + " (" + this.age + ")";
    };