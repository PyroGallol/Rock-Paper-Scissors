function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);

  let compChoice = computerChoice[randomChoice];
  return compChoice;
}

let won = 0;
let lost = 0;

function oneRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Input your selection here:").toLowerCase();

  if (playerSelection == computerSelection) {
    alert("It's a tie!");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      lost++;
      alert("Computer chose Paper, you lost!");
    } else {
      won++;
      alert("Computer chose Scissors, you won!");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      lost++;
      alert("Computer chose Scissors, you lost!");
    } else {
      won++;
      alert("Computer chose Rock, you won!");
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      lost++;
      alert("Computer chose Rock, you lost!");
    } else {
      won++;
      alert("Computer chose Paper, you won!");
    }
  }
}

function game() {
  // this is used temporarily instead of a loop
  console.log(oneRound());
  alert("You won " + won + " and lost " + lost);
  console.log(oneRound());
  alert("You won " + won + " and lost " + lost);
  console.log(oneRound());
  alert("You won " + won + " and lost " + lost);
  console.log(oneRound());
  alert("You won " + won + " and lost " + lost);
  console.log(oneRound());
  alert("You won " + won + " and lost " + lost);
  // concludes the winner
  if (won > lost) {
    alert("Congratulation you beat the computer");
  } else if (won == lost) {
    alert("Game over, it's a tie");
  } else {
    alert("Game over, the computer won!");
  }
}
