const submitButton = document.getElementById('submit-button');
const answerInput = document.getElementById('answer-input');
const responseMessage = document.getElementById('response-message');

submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
  const answer = answerInput.value;

  if (answer === '5HXp5HLB4rIE6KUwBX7DTx') {
    responseMessage.textContent = 'Écouter, ça change tout.';
  } else if (answer === '17vbhyxUnnCPvlhbKtSjw01U3oj47om2ns2WBVMDe1Kg') {
    responseMessage.textContent = 'Lire le document sera un pas en avant...';
  } else if (answer === '19102002') {
    // Rediriger vers le puzzle 4
    window.location.href = 'puzzle4_fa6d105e-e8ff-4f19-adea-c502f98a8777.html';
  } else {
    responseMessage.textContent = 'Réponse incorrecte. Réessayez.';
  }

  // Réinitialiser l'entrée
  answerInput.value = '';
}
