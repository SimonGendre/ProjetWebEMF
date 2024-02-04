/*
 * exerice 12 : Fonctions et IIFE
 * @author Simon Gendre
 * @version 1.0 / 22.05.2023
 */

// Ajout de l'écouteur du bouton "Testez-moi" via programmation
function initCtrl() {
  // Déclaration d’une fonction
  function a() {
    let val = 1;
    console.log(val);
  }
  a(); // => exécution de la méthode et affichage de 1 dans la console
  // si on écrit a(); avant la déclaration de la fonction, cela fonctionne !

  // Déclaration d’une expression fonction (fonction anonyme)
  let b = function () {
    let val = 2;
    console.log(val);
  };
  b(); // => exécution de la méthode et affichage de 2 dans la console

  // Déclaration d’une fonction flèche (arrow function) ; 3 cas de figure
  let c = (a, b) => a + b;
  console.log(c(2, 5)); // = 7

  let d = (val) => val * val; // avec un paramètre
  console.log(d(5)); // = 25

  let e = (a, b) => {
    // avec plusieurs instructions
    let somme = a + b;
    return somme;
  };
  console.log(e(5, 7)); // = 12


  (function() {
    let val = 3;
    console.log(val) ;
 })() ;    // => exécution et affichage de 3 dans la console
  
  
 (() => {
    let val = 4;
    console.log(val) ;
 })() ;  // => exécution et affichage de 4 dans la console via une fonction flèche
}
