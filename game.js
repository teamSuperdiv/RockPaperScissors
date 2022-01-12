// global variables
let pointsPlayer = 0;
let pointsComputer = 0;

// DOM elements in global scope
let feedback = document.querySelector('.feedback');
let questionmark = document.querySelector('#questionMark');

/**
 * decides which move the computer takes
 */
function computerPlay() {
    let random = Math.floor(Math.random()*3) +1;    
    switch (random) {
        case 1:
            questionmark.src = './img/rock_pixelart.png'
            return "rock";
        case 2:
            questionmark.src = './img/paper_pixelart.png'
            return "paper";
        case 3:
            questionmark.src = './img/scissors_pixelart.png'
            return "scissors";
    }
}

/**
 * Main method, gets triggered on button click
 * @param {*} playerSelection, checks what player has selected
 * @param {*} el, represents the button (this) that was clicked
 */
function playRound(playerSelection, el) {
    el.classList.toggle('selected');
    let computerSelection = computerPlay();
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        el.classList.toggle('success');
        pointsPlayer++;
        updateScore();
        feedback.textContent = "Congrats! You beat the system!";
    } else if (playerSelection === computerSelection) {
        el.classList.toggle('tie');
        updateScore();
        feedback.textContent = "Uhhhhh, it's a tie!";
    } else {
        el.classList.toggle('defeat');
        pointsComputer++;
        updateScore();
        feedback.textContent = "Sorry, you loose!";
    };
    setTimeout(clearCard, 700);
    setTimeout(checkIfGameOver, 700);
}

/**
 * removes all styling from the buttons/gamecards
 */
function clearCard() {
    const classes = ['tie', 'success', 'defeat'];
    const buttons = document.querySelectorAll('.playerBtn');
    buttons.forEach((btn) => {
       classes.forEach((cl) => {
        if (btn.classList.contains(cl)) btn.classList.remove(cl);
       })
    });
}

function updateScore() {
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    playerScore.textContent = `${pointsPlayer}`;
    computerScore.textContent = `${pointsComputer}`;
}

function checkIfGameOver() {
    if (pointsPlayer == 5 || pointsComputer == 5) {
        if (pointsPlayer > pointsComputer) {
            feedback.textContent = 'GAME OVER. You are the Winner!';
        } else if (pointsComputer == pointsPlayer) {
            feedback.textContent = 'GAME OVER. You are both equally good!';
        } else {
            feedback.textContent = 'GAME OVER. You lost...against a machine.';
        }
    
        const buttons = document.querySelectorAll('.playerBtn');
        buttons.forEach((btn) => {
           btn.disabled = true;
           btn.classList.toggle('playerBtn');
        });

        document.querySelector('#restart').style.display = 'block';
    }
}

function restartGame(btn) {
    feedback.textContent = "";
    pointsPlayer = 0;
    pointsComputer = 0;
    questionmark.src = './img/questionmark_pixelart.png'
    updateScore();

    const buttons = document.querySelectorAll('.btn');
        buttons.forEach((btn) => {
           btn.disabled = false;
           btn.classList.toggle('playerBtn');
    });

    btn.style.display = 'none';
}






