const choices = ["rock", "paper", "scissors"];

const personDisplay = document.getElementById("personDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Loose!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Loose!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Loose!";
                break;
        }
    }

    personDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Loose!":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}