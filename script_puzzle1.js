function checkAnswer(expectedAnswer) {
  var answerInput = document.getElementById("answer");
  var userAnswer = answerInput.value.trim();

  if (userAnswer.toUpperCase() === expectedAnswer) {
    var nextPage = "puzzle2.html"; // Remplacez par le nom du fichier de la page suivante
    window.location.href = nextPage;
  } else {
    alert("Mauvaise réponse. Essayez encore !");
  }
}