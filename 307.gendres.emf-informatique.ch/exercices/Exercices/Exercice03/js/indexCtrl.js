/*
   But :    exerice 1 : tester JS
   Auteur : Simon Gendre
   Date :   15.05.2023 / V1.0 
*/

function initCtrl() {
  // Ecouteur du bouton "Testez-moi..."
  // document.getElementById("testez").addEventListener("click", testez);
}

function login() {
  var login = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (login == "admin" && password == "emf1234") {
    console.log("OK");
    window.alert("Login réussit");
  } else if (login == "gendres" && password == "passwort"){
   window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    console.log("NOK");
    window.alert("Login échoué");
  }
}
