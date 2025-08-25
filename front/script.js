function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').textContent = `Your choice: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;

  let result = '';
  let playerScore = parseInt(document.getElementById('player-score').textContent.split(': ')[1]) || 0;
  let computerScore = parseInt(document.getElementById('computer-score').textContent.split(': ')[1]) || 0;

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } 
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    playerScore++;
    document.getElementById('player-score').textContent = `Your Score: ${playerScore}`;
  } else {
    result = "You lose!";
    computerScore++;
    document.getElementById('computer-score').textContent = `Computer's Score: ${computerScore}`;
  }

  document.getElementById('result-message').textContent = result;
}
