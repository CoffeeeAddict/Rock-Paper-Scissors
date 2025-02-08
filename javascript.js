
const playButtons = document.querySelectorAll(".playButton");
const humanScoreText = document.createElement("span");
const computerScoreText = document.createElement("span");
const resultText = document.querySelector(".results");
document.querySelector(".playerScore").append(humanScoreText);
document.querySelector(".computerScore").append(computerScoreText);

let humanScore = 0;
let computerScore = 0;

humanScoreText.textContent = humanScore;
computerScoreText.textContent = computerScore;

playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e);
    })
})


function playRound(event) {
    classes = event.target.classList;
    let humanChoice = getHumanChoice(classes);
    let computerChoice = getComputerChoice();
    let outcome = findOutcome(humanChoice, computerChoice);
    displayOutcome(humanChoice, computerChoice, outcome);
    if(humanScore == 5 || computerScore == 5) {
        gameFinish();
        return;
    }
}

function gameFinish() {
    finalText = document.createElement("div");
    finalText.classList.add("finalText");
    if(humanScore > computerScore) {
        finalText.textContent = "Player won!";
    } else if(computerScore > humanScore) {
        finalText.textContent = "Computer won!";
    } else {
        finalText.textContent = "It's a tie!";
    }
    resultText.append(finalText);
    playButtons.forEach((button) => {
        button.removeEventListener("click", (e) => {
            playRound(e);
        })
    })
}

function getHumanChoice(classes) {
    if(classes.contains("rock")) {
        return "rock";
    } else if(classes.contains("paper")) {
        return "paper";
    } else if(classes.contains("scissors")) {
        return "scissors;"
    }
}



function displayOutcome(humanChoice, computerChoice, outcome) {
    switch(outcome) {
        case "tie":
            resultText.textContent = `It's a tie between your ${humanChoice} and the computer's ${computerChoice}!`;
            break;
        case "win":
            resultText.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}!`;
            humanScore++;
            humanScoreText.textContent = humanScore;
            break;
        case "lose":
            resultText.textContent = `You lose! The computer's ${computerChoice} beats your ${humanChoice}!`;
            computerScore++;
            computerScoreText.textContent = computerScore;
    }
}

function findOutcome(humanAnswer, computerAnswer) {
    if(humanAnswer === computerAnswer) {
        return "tie";
    }

    if(humanAnswer === "rock" && computerAnswer === "paper") {
        return "lose";
    }

    if(humanAnswer === "paper" && computerAnswer === "scissors") {
        return "lose";
    }

    if(humanAnswer === "scissors" && computerAnswer === "rock") {
        return "lose";
    }

    return "win";
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function isValidChoice(choice) {
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    } else {
        return false;
    }
}