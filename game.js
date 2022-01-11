// global variables
let rounds = 5;
let pointsPlayer = 0;
let pointsComputer = 0;
// let gameStart = false;

let feedback = document.querySelector('.feedback');


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

function playRound(playerSelection, el) {
    pointsPlayer, pointsComputer = 0;
    el.classList.toggle('selected');
    let computerSelection = computerPlay();
    setTimeout(() => {
        if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
            el.classList.toggle('selected');
            el.classList.toggle('success');
            pointsPlayer++;
            displayScore();
            feedback.textContent = "Congrats! You beat the system!";
        } else if (playerSelection === computerSelection) {
            feedback.textContent = "Uhhhhh, it's a tie!";
        } else {
            el.classList.toggle('selected');
            el.classList.toggle('defeat');
            pointsComputer++;
            displayScore();
            feedback.textContent = "Sorry, you loose!";
        };
        setTimeout(clearCard, 1000);
        rounds--;
        checkIfGameOver();
    }, 2000)
}

function clearCard() {
    const classes = ['selected', 'success', 'defeat'];
    const buttons = document.querySelectorAll('.playerBtn');
    buttons.forEach((btn) => {
       classes.forEach((cl) => {
        if (btn.classList.contains(cl)) btn.classList.remove(cl);
       })
    });
    
}

function displayScore() {
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    playerScore.textContent = `Player: ${pointsPlayer}`;
    computerScore.textContent = `Computer: ${pointsComputer}`;
}

function checkIfGameOver() {
    if (rounds == 0 && pointsPlayer > pointsComputer) {
        feedback.textContent = 'GAME OVER. You are the Winner!';
    } else if (rounds == 0 && pointsComputer == pointsPlayer) {
        feedback.textContent = 'GAME OVER. You are both equally good!';
    } else if (rounds == 0) {
        feedback.textContent = 'GAME OVER. You lost...against a machine.';
    }
}






