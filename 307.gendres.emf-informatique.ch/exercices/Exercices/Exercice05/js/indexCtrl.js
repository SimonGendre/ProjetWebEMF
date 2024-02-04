/*
 * exerice 5 : test de variables
 * @author Simon Gendre
 * @version 1.0 / 16.05.2023
 *
 */

// Ajout de l'écouteur du bouton "Testez-moi" via programmation
function initCtrl() {
  // 1. Effacer le contenu de la console avec « console.clear() » ;
  console.clear;
  //2. Créer une variable nommée « a » ;
  let a;
  //3. Afficher le contenu de « a » avec console.log;
  console.log(a);
  //4. Stocker la valeur 15 dans cette variable ;
  a = 15;
  //5. Afficher le contenu de cette variable dans la console sous la forme « Ma variable a = ? »
  console.log("Ma variable a = " + a);
  //6. Créer une variable nommée « b » et lui assigner directement la valeur 9 ;
  let b = 9;
  //7. Afficher le contenu de cette variable dans la console sous la forme « Ma variable b = ? »
  console.log("Ma variable b = " + b);
  //8. Faire l’addition de ces 2 variables en affichant directement le résultat dans la console sous cette forme : « 15 + 9 = ? » ; (essayer d’utiliser un littéral avec `…${…}…`)
  console.log("15 + 9 =" + (a + b));
  //9. Compléter en faisant de même pour une soustraction, une multiplication et une division des deux variables ;
  console.log("15 - 9 =" + (a - b));
  console.log("15 * 9 =" + a * b);
  console.log(`${a} / ${b} =  ${a / b}`);
  //10. Stocker « Bonjour » dans la variable a ;
  a = "bonjour";
  //11. Stocker « les amis » dans la variable b ;
  b = "les amis";
  //12. Afficher « bonjour les amis » dans la console en concaténant les variables ;
  console.log(a + " " + b);
  //13. Faites la même chose en utilisant un littéral avec `…${…}…`;
  console.log(`${a} ${b}`);
  //14. Stocker « true » dans la variable a ;
  a = true;
  //15. Stocker « false » dans la variable b ;
  b = false;
  //16. Effectuer une opération AND entre les 2 variables et afficher le résultat sous cette forme « true AND false = ? » ;
  console.log(`${a} AND ${b} = ${a && b}`);
  //17. Effectuer une opération OR entre les 2 variables et afficher le résultat sous cette forme « true OR false = ? » ;
  console.log(`${a} OR ${b} = ${a || b}`);
  //18. Stocker la date du jour dans la variable a avec new Date();
  a = new Date();
  //19. Calculer une nouvelle date dans la variable b qui est 61 jours avant la date courante (utilisation getDate, setDate)
  b = new Date();
  b.setDate(b.getDate() - 61);
  //20. Afficher les dates contenues dans les variables a et b en vous aidant de « toLocaleString(), toLocaleDateString() et toLocaleTimeString()» . Afficher la date et l'heure, la date uniquement et l'heure uniquement.
  console.log(
    `a = ${a.toLocaleDateString("ch-fr")}, b = ${b.toLocaleDateString("ch-fr")}`
  );
  //21. Le mot réservé « typeof » permet de connaitre le type utilisé momentanément pour une variable.
  //Stocker la valeur de Math.PIdans a
  //« bonjour » dans b
  //créer et assigner true dans c
  //créer, assigner la date courante dans d
  //déclarez la variable e sans rien lui affectez, puis afficher le type pour les 5 variables :
  a = Math.PIdans;
  b = "bonjour";
  let c = true;
  let d = new Date();
  let e;
  console.log(`a = ${typeof a}`);
  console.log(`b = ${typeof b}`);
  console.log(`c = ${typeof c}`);
  console.log(`d = ${typeof d}`);
  console.log(`e = ${typeof e}`);
}
