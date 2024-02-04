class HttpServ  {
 
    constructor(){
    }
   
    celcius2Fahrenheit(degres, successCallback, errorCallback) {
      let url = "https://gendres.emf-informatique.ch/Module_307/Exercices/Exercice18/js/convert-temp_g_json.php";
      let param = "Temperature=" + degres + "&FromUnit=C&ToUnit=F";
   
      // envoi de la requête
      $.ajax(url, {
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: param,
        success: successCallback,
        error: errorCallback
      });
    }
  }