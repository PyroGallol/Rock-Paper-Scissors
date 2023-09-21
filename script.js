function getComputerChoice() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);

  let compChoice = computerChoice[randomChoice];
  return compChoice;
}
