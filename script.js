function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);

  let compChoice = computerChoice[randomChoice];
  return compChoice;
}

function oneRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  //  if playerSelection equals computerSelection
  // return "It's a tie!"
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  // else if playerSelection is rock :
  //  if computer selection is paper then return "lost"
  // else  return "you won"
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "You lost, Paper beats Rock";
    } else {
      return "You won!, Rock beats Scissors";
    }
  }
  // else if playerSelection is paper :
  //  if computer selection is scissors then return "lost"
  // else  return "you won"
  else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "You lost, Scissors beats Paper";
    } else {
      return "You won!, Paper beats rock";
    }
  }

  // else if playerSelection is scissors :
  //  if computer selection is rock then return "lost"
  // else  return "you won"
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You lost, Rock beats Scissors";
    } else {
      return "You Won!, Scissors beats Paper";
    }
  }
}
