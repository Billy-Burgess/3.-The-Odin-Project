const choices = ["rock", "paper", "scissors"]
const winners = [];

function game() {
    playRound();
    for (let i = 1; i <= 4; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt("Type Rock, Paper or Scissors. Spelling needs to correct!");
        while (input == null) {
            input = prompt("Type Rock, Paper or Scissors");
        }
        input = input.toLowerCase()
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "tie";
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "player").length;
    let computerWins = winners.filter((item) => item == "computer").length;
    let ties = winners.filter((item) => item == "tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("round:", round)
    console.log("Player chose:", playerChoice)
    console.log("Computer chose:", computerChoice)
    console.log(winner, "won the round")
    console.log("--------------------------------------------")
}

game();