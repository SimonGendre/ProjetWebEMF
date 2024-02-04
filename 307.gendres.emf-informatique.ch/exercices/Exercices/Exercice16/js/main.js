/*
        Author: Simon Gendre
        Date: 30.05.2023
        Description: Exercice 16, fonctions jquery
*/

$(document).ready(function () {
  // div_1
  $("#btnShow").click(function onClick() {
    $("#div_1").show();
  });

  $("#btnHide").click(function () {
    $("#div_1").hide();
  });

  $("#btnToggle").click(() => {
    $("#div_1").toggle();
  });

  //div_2
  $("#btnPlier").click(function onClick() {
    $("#div_2").slideUp();
  });

  $("#btnDeplier").click(function () {
    $("#div_2").slideDown();
  });

  //div_3
  $("#btnFonduShow").click(function onClick() {
    $("#div_3").fadeIn();
  });

  $("#btnFonduHide").click(function () {
    $("#div_3").fadeOut();
  });

  //div_4
  $("#btnSetClass").click(function () {
    $("ol").children("li").eq(0).addClass("boldBlueText");
  });
  $("#btnRemoveClass").click(function () {
    $("ol").children("li").eq(0).removeClass("boldBlueText");
  });
  $("#btnToggleClass").click(function () {
    $("ol").children("li").last().toggleClass("boldBlueText");
  });
  $("#btnPairesClass").click(function () {
    $("ol").children("li").even().toggleClass("underlineClass");
  });

  //div_5
  $("#btnInsertText").click(function () {
    let texte = "<p>" + $("#textToInsert").val() + "</p>";

    if ($("#textBold").is(":checked")) {
      $("#textes").append(texte).children().last().addClass("boldBlueText");
    } else {
      $("#textes").append(texte);
    }
  });

  //div_6
  $(".personne").click(function (event) {
    let pk = "";
    pk = event.target.id;
    alert("La clé primaire de la personne selectionnée est : " + pk);
  });
});
