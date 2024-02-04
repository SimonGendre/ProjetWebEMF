/*
But :    exerice 8 : JSON
   Auteur : Simon Gendre
   Date :   16.05.2023 / V1.0 
*/

function parcourirUnTableauJSON() {
  // définition d'un objet avec un tableau de personnes (A) A utiliser dans l’exercice

  const json = {
    personnes: [
      { prenom: "John", nom: "Doe", age: 44 },
      { prenom: "Anna", nom: "Smith", age: 32 },
      { prenom: "Peter", nom: "Jones", age: 29 },
    ],
  };
  let out = "";
  let i = 0;
  //boucle pour chaque personne du JSON
  json.personnes.forEach((personne) => {
    let infoPersonne = "";
    //remplit une variable temp avec les info de la personne actuelle
    for (let f in personne) {
      infoPersonne += `${personne[f]} `;
    }
    out += `${i}. ${infoPersonne} <br>`;
    i++;
  });
  document.getElementById("info").innerHTML = out;
}
