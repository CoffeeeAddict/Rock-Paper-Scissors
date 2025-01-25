for(let i=0; i<10; i++) {
    console.log(GetComputerChoice());
}

function GetComputerChoice() {
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