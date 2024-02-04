/*
  But :     Exerice 9 
  Auteur : Gendre Simon
  Date :   22.05.2023 / V1.0
*/

//
//  ****************** JSON **************************************************
// 
function creerDesObjetsJSON() {
  console.log("---------------JSON-------------------------");
  // créer un objet en JSON
  let p1 = {
    prenom: "Jules",
    nom: "Tartampion",
    age: 25,
  };
  console.log(p1);

  // ajouter deux méthodes
  p1.toString = function () {
    return this.prenom + " " + this.nom;
  };

  p1["toStringAge"] = function () {
    return this.prenom + " " + this.nom + " (" + this.age + ")";
  };
  console.log(p1);

  // let txt = p1.toString() + "<br>" + p1.toStringAge();
  let txt = p1 + "<br>" + p1.toStringAge();
  document.getElementById("info").innerHTML = txt;
}


//
//  ****************** Object *************************************************
// 
function creerDesObjetsObject() {
  console.log("-----------------Object----------------------");

  // créer un objet avec la fonction Object
  const p1 = new Object();
  p1.prenom = "Juliette";
  p1.nom = "Tartampion";
  p1.age = 23;
  console.log(p1);

  // ajouter deux méthodes
  p1.toString = function () {
    return this.prenom + " " + this.nom;
  };

  p1["toStringAge"] = function () {
    return this.prenom + " " + this.nom + " (" + this.age + ")";
  };
  console.log(p1);

  //        var txt = p1.toString() + "<br>" + p1.toStringAge();
  let txt = p1 + "<br>" + p1.toStringAge();
  document.getElementById("info").innerHTML = txt;
}



//
//  ****************** Objet fonction **********************************
// 
function Personne(prenom, nom, age) {
  this.prenom = prenom;
  this.nom = nom;
  this.age = age;

  this.toString = function () {
    return this.prenom + " " + this.nom + " (" + this.age + ")";
  };
}


function creerDesObjetsFonction() {
  console.log("-----------------objet fonction------------------");
  let p1 = new Personne("JuJu", "Tartampion", 40);
  console.log(p1);
  let p2 = new Personne("Julie", "Tartampion", 32);
  console.log(p2);
  let txt = p1 + "<br>" + p2;
  document.getElementById("info").innerHTML = txt;
}


//
//  ************Function pseudo-classe => fonction-prototype **********************************
// 
function Professeur(prenom, nom, age) {
  this.prenom = prenom;
  this.nom = nom;
  this.age = age;
}

Professeur.prototype.toString = function () {
  return this.prenom + " " + this.nom + " (" + this.age + ")";
};

function creerDesObjetsClassePrototype() {
  console.log("-----------------prototype----------------------");
  let p1 = new Professeur("De Ju", "Tartampion", 25);
  console.log(p1);
  let p2 = new Professeur("De Jiette", "Tartampion", 24);
  console.log(p2);
  let txt = p1 + "<br>" + p2;
  document.getElementById("info").innerHTML = txt;
}


//
//  ************************* Class ****************************************
// 
class Eleve {
  constructor(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }

  toString() {
    return this.prenom + " " + this.nom + " (" + this.age + ")";
  }
}

function creerDesObjetsClasse() {
  console.log("-----------------Class----------------------");
  let p1 = new Eleve("Julien", "Tartampion", 18);
  console.log(p1.toString);
  let p2 = new Eleve("Julia", "Tartampion", 22);
  console.log(p2);
  let txt = p1 + "<br>" + p2;
  document.getElementById("info").innerHTML = txt;
}
