let computerChoiceArr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  computerSelection = computerChoiceArr[randomChoice];
  computerSelection = computerSelection.toLocaleLowerCase();

  return computerSelection;
}

let computerScore = 0;
let playerScore = 0;
let playerScoreBoard = document.getElementById("playerChange");
let computerScoreBoard = document.getElementById("computerChange");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie`;
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! Paper beats Rock`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return `You lose! Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win! Scissors beat Paper`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return `You lose! Scissors beat Paper`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win! Rock beats Scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return `You lose! Rock beats Scissors`;
  }
}

function updateScoreBoard() {
  playerScoreBoard.textContent = `${playerScore}`;
  computerScoreBoard.textContent = `${computerScore}`;
}

document.getElementById("rock").addEventListener("click", function () {
  document.getElementById("announce").textContent = playRound(
    "rock",
    getComputerChoice()
  );
  updateScoreBoard();
});
document.getElementById("paper").addEventListener("click", function () {
  document.getElementById("announce").textContent = playRound(
    "paper",
    getComputerChoice()
  );
  updateScoreBoard();
});
document.getElementById("scissor").addEventListener("click", function () {
  document.getElementById("announce").textContent = playRound(
    "scissors",
    getComputerChoice()
  );
  updateScoreBoard();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScoreBoard();
});
