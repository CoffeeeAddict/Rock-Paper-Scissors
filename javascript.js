console.log(getHumanChoice());

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
    if(choice == "rock" || choice == "paper" || choice == "scissors") {
        return true;
    } else {
        return false;
    }
}