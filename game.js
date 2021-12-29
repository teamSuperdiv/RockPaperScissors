// global variables
let rounds = 5;
let pointsPlayer = 0;
let pointsComputer = 0;

function computerPlay() {
    let random = Math.floor(Math.random()*3) +1;
    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        pointsPlayer++;
        return "Congrats! You beat the system!"
    } else if (playerSelection === computerSelection) {
        return "Uhhhhh, it's a tie!"
    } else {
        pointsComputer++;
        return "Sorry, you loose!" 
    } 
}


function game() {
    // points get resettes for every new game
    pointsPlayer, pointsComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Rock, Paper or Scissors? Choose wisely. You've got ${rounds} round(s)!`).toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${pointsPlayer}` + "\n" + `Computer: ${pointsComputer}`)
     }
}

game();

// console.log("Player: " + playerSelection + "\n" + "Computer: " + computerSelection)






