let computerChoiceArr = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    computerSelection = computerChoiceArr[randomChoice];
    computerSelection = computerSelection.toLocaleLowerCase();

    return computerSelection;
}

function getPlayerChoice () {
    playerSelect = prompt("Enter a choice [rock, paper, scissors]: ");
    playerSelect = playerSelect.toLocaleLowerCase();
    return playerSelect;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie`
    }

    if (playerSelection === "paper" && computerSelection === "rock"){
        return `You win! Paper beats Rock`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! Paper beats Rock`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors beat Paper`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! Scissors beat Paper`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {f
        return `You win! Rock beats Scissors`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! Rock beats Scissors`
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
    }
}

game();

