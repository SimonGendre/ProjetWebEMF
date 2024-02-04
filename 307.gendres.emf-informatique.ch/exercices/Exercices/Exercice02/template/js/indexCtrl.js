/*
 * Contrôleur de la vue "index.html".
 * @author P-A Mettraux
 * @version 1.0 / 10.05.2020
 *
 */

// Ajout de l'écouteur du bouton "Testez-moi" via programmation
function initCtrl() {
  document.getElementById("testez").addEventListener("click", testez);
}

// Appel de cette méthode par la ligne ci-dessus, via un écouteur.
function testez() {
  document.getElementById("info").innerHTML = "Qui a pressé le bouton !";
}

// Appel de cette méthode par le code écrit comme propriété du bouton (html)
function testezBis() {
  document.getElementById("info").innerHTML = "Qui a pressé le bouton bis !";
}
