const choices = ['rock', 'paper', 'scissor'];

const playerDispaly= document.getElementById('playerDisplay');
const computerDispaly= document.getElementById('computerDisplay');
const resultDispaly= document.getElementById('resultDisplay');

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
    
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!'; 
    }
    else{
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissor') ? 'You win!' : 'You lose!';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You win!' : 'You lose!';
                break;
            case 'scissor':
                result = (computerChoice === 'paper') ? 'You win!' : 'You lose!';
                break;
        }
    }

    playerDispaly.textContent = `Player Choice: ${playerChoice}`;
    computerDispaly.textContent = `Computer Choice: ${computerChoice}`;
    resultDispaly.textContent = `Result: ${result}`;

    resultDispaly.classList.remove("greenText", "redText", "blueText");

    switch (result) {        
        case 'You win!':
            resultDispaly.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'You lose!':
            resultDispaly.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}