/*
But :    exerice 6 : La structure de contrôle switch
   Auteur : Simon Gendre
   Date :   16.05.2023 / V1.0 
*/

function init() {
  document.getElementById("for").addEventListener("click", testerFor);
  document.getElementById("while").addEventListener("click", testerWhile);
  document.getElementById("do").addEventListener("click", testerDo);
}

function testerFor() {
  let out = "for (let i = 0; i > 5; i++){...}";

  for (let i = 0; i < 5; i++) {
    out += `<br>${i}`;
  }
  out += `<br> --> À utiliser si on sait que l'on veut itérer x fois (x connu avant de commencer la boucle)`;
  document.getElementById("info").innerHTML = out;
}
function testerWhile() {
  let out = " while (i < 5) {...}";
  let i = 0;
  while (i < 5) {
    out += `<br>${i}`;
    i++;
  }
  out += `<br> --> À utiliser si on ne sait pas le nombre d'itérations au démarrage de la boucle`;
  document.getElementById("info").innerHTML = out;
}
function testerDo() {
  let out = "  do {...} while (i < 5)";
  let i = 0;
  do {
    out += `<br>${i}`;
    i++;
  } while (i < 5);
  out += `<br> --> À utiliser si on ne sait pas le nombre d'itérations au démarrage de la boucle mais avec un passage obligatoire`;
  document.getElementById("info").innerHTML = out;
}
