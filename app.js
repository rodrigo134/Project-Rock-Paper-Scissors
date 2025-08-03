// inside here: code that will run only after the page is ready
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttons button');
  const message = document.querySelector('.message');
  const score = document.querySelector('.score');
  const choices = document.querySelector('.choices');

  let scoreHuman = 0;
  let scorePc = 0;

  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }

  function playRound(humanSelected, computerSelected) {
    choices.textContent = `Choice human: ${humanSelected} | Choice PC: ${computerSelected}`;

    if (humanSelected === computerSelected) {
      message.textContent = "Empate";
    } else if (
      (humanSelected === 'rock' && computerSelected === 'scissors') ||
      (humanSelected === 'scissors' && computerSelected === 'paper') ||
      (humanSelected === 'paper' && computerSelected === 'rock')
    ) {
      scoreHuman++;
      message.textContent = "Human wins";
    } else {
      scorePc++;
      message.textContent = "PC wins";
    }

    score.textContent = `Score human: ${scoreHuman} | Score PC: ${scorePc}`;

    if (scoreHuman === 5) {
      message.textContent = "🎉 Human Wins the Game! 🎉";
      disableButtons();
    } else if (scorePc === 5) {
      message.textContent = "💻 PC Wins the Game! 💻";
      disableButtons();
    }
  }

  function disableButtons() {
    buttons.forEach(button => button.disabled = true);
  }

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    });
  });
});
