/*
        Author: Simon Gendre
        Date: 22.05.2023
        Description: utiliser les fonctionnalités liées aux cookies
*/
document.onreadystatechange = function () {
  // Code exécuté lorsque la page a terminé d'être chargée.
  if (document.readyState === "complete") {
    // Chargement de l'éventuelle cookie.
    getCookie();
    // Ajout d'un écouteur "click" sur le bouton "enregistrer".
    document.getElementById("enregistrer").addEventListener("click", saveData);
  }
};

function saveData() {
  // Récupérer les valeurs contenues dans les champs "prenom" et "nom".
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  //
  // Créer un objet json "personneJson" contenant le prénom et le "nom".
  let personneJson = {
    nom: nom,
    prenom: prenom,
  };
  //
  // Convertir l'objet json "personneJson" en chaine de caractère.
  //

  let personneJsonStr = `nom:${personneJson.nom}-prenom:${personneJson.prenom}`;
  // Appeler la méthode "setCookie" en passant en paramètre l'objet "personneJson" converti et en précisant le délai de 3 minutes.
  setCookie(personneJsonStr, 3);
  //
}

function setCookie(contenu, minutes) {
  // Générer une date d'expiration. Il doit s'agir de la date et l'heure actuelle + le nombre de minute passé en paramètre.
  //
  //crée une date avec minutes d'avance sur la date actuelle 
  let expiration  = new Date((new Date()).getTime() + minutes*60000);
 
  // Créer le cookie.
  document.cookie = "cookie_exercice_13=" + contenu + "; expires=" + expiration.toUTCString() + "; path=/";
  console.log("Data saved in cookie");
}

function getCookie() {
  // Tester la présence du cookie. Pour cela, il faut tester si la taille du cookie est supérieure à 0.
  if (document.cookie.length > 0) {
    // Récupérer le contenu du cookie et en extraire la partie qui se situe après le "="; Vous pouvez utiliser la méthode "split"
    // liée aux chaînes de caractères.
    let contenu = document.cookie.split("=")[1];
    let nom = contenu.split("-")[0].split(":")[1];
    let prenom = contenu.split("-")[1].split(":")[1];
    //
    // Convertir la chaîne de caractères en objet Json.
    let personneJson = {
      nom: nom,
      prenom: prenom,
    };
    //
    // Charger les deux champs avec la valeur du prénom et du du nom contenu dans l'objet json.
    document.getElementById("nom").value = personneJson.nom;
    document.getElementById("prenom").value = personneJson.prenom;
    //
    console.log("Data retrieved from cookie");
  }
}
