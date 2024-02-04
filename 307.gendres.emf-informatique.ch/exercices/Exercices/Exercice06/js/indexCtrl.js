/*
But :    exerice 6 : La structure de contrôle switch
   Auteur : Simon Gendre
   Date :   16.05.2023 / V1.0 
*/

function afficherJourSemaine() {
  const d = new Date();
  let day = d.getDay();
  let jourStr = "";
  switch (day) {
    case 0:
      jourStr = "dimanche";
      break;
    case 1:
      jourStr = "lundi";
      break;
    case 2:
      jourStr = "mardi";
      break;

    case 3:
      jourStr = "mercredi";
      break;

    case 4:
      jourStr = "jeudi";
      break;

    case 5:
      jourStr = "vendredi";
      break;

    case 6:
      jourStr = "samedi";
      break;

    default:
      break;
  }
  document.getElementById("info").innerHTML = "On est " + jourStr;
}

function afficherJourSemaineTab() {
  const d = new Date();
  const jours = [
    "dimonche",
    "leindi",
    "mourdi",
    "mekredi",
    "joudi",
    "fentredi",
    "chômedi",
  ];
  let day = d.getDay();
  let jourStr = jours[day];

  document.getElementById("infoTab").innerHTML = "On est " + jourStr + " [Tab]";
}
