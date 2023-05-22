function checkAnswer(expectedAnswer) {
  var answerInput = document.getElementById("answer");
  var userAnswer = answerInput.value.trim();

  if (userAnswer.toUpperCase() === expectedAnswer) {
    var nextPage = "puzzle2_b3f5b9b5-93ff-4e0b-a231-25bece3f706a.html"; // Remplacez par le nom du fichier de la page suivante
    window.location.href = nextPage;
  } else {
    alert("Mauvaise réponse. Essayez encore !");
  }
}