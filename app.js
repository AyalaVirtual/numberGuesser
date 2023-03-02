let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
};

function compareGuesses(userGuess, computerGuess, targetNum) {
  if (Math.abs(targetNum - userGuess) <= Math.abs(targetNum - computerGuess)) {
    return true;
  } else {
      return false;
  }
};


function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};


function advanceRound(currentRoundNumber) {
  return currentRoundNumber++;
};

