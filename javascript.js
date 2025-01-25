
playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        console.log(`Current Scores: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if(computerScore > humanScore) {
        console.log(`Computer wins!`);
    } else if(humanScore > computerScore) {
        console.log(`Human wins!`)
    } else {
        console.log(`It's a tie!`);
    }

    function playRound(humanChoice, computerChoice) {
        let outcome = findOutcome(humanChoice, computerChoice);
    
        switch(outcome) {
            case "tie":
                console.log(`It's a tie between your ${humanChoice} and the computer's ${computerChoice}!`);
                break;
            case "win":
                console.log(`You win! Your ${humanChoice} beats the computer's ${computerChoice}!`);
                humanScore++;
                break;
            case "lose":
                console.log(`You lose! The computer's ${computerChoice} beats your ${humanChoice}!`);
                computerScore++;
        }
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

function getHumanChoice() {
    let choice = "";

    while(!(isValidChoice(choice))) {
        choice = prompt("Type your choice: rock, paper, or scissors");

        choice = choice.toLowerCase();
    }

    return choice;
}

function isValidChoice(choice) {
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    } else {
        return false;
    }
}