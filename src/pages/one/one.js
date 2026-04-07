const resultInput = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
// const rockBtn = document.getElementById("rock-btn");
// const paperBtn = document.getElementById("paper-btn");
// const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const winInput = document.getElementById("win");
const menu = document.getElementById("page-links");
const gameBtns = [
  document.getElementById("rock-btn"),
  document.getElementById("paper-btn"),
  document.getElementById("scissors-btn"),
];

let choices = ["Rock", "Paper", "Scissors"];

function computerMove() {
  return choices[Math.floor(Math.random() * 3)];
  // let randomNumber = Math.floor(Math.random() * 3);
  // let computerChoice = "";
  // if (randomNumber === 0) {
  //   computerChoice = "Rock";
  // } else if (randomNumber === 1) {
  //   computerChoice = "Paper";
  // } else {
  //   computerChoice = "Scissors";
  // }
  // return computerChoice;
}

let computerPoints = 0;
let userPoints = 0;

function setGameButtons(disabled) {
  gameBtns.forEach((btn) => (btn.disabled = disabled));
}

function handleGame(userChoice) {
  let computerChoice = computerMove();

  if (computerChoice === userChoice) {
    resultInput.textContent = `It's a tie! You both chose '${userChoice}'`;
  } else if (
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    userPoints++;
    userScore.textContent = userPoints;
    resultInput.textContent = `You win! You chose '${userChoice}' and the computer chose '${computerChoice}'`;
  } else {
    computerPoints++;
    computerScore.textContent = computerPoints;
    resultInput.textContent = `You lose! You chose '${userChoice}' and the computer chose '${computerChoice}'`;
  }

  if (computerPoints === 3 || userPoints === 3) {
    let win = computerPoints === 3 ? "Computer wins!!" : "You win!!";
    winInput.textContent = win;
    resetBtn.style.display = "block";
    setGameButtons(true);
    // rockBtn.disabled = true;
    // paperBtn.disabled = true;
    // scissorsBtn.disabled = true;
  }
}

function handleReset() {
  computerScore.textContent = "0";
  userScore.textContent = "0";
  resultInput.textContent = "";
  winInput.textContent = "";
  computerPoints = 0;
  userPoints = 0;
  resetBtn.style.display = "none";
  setGameButtons(false);
  // rockBtn.disabled = false;
  // paperBtn.disabled = false;
  // scissorsBtn.disabled = false;
}

function handleMenuToggle() {
  menu.classList.toggle("is-open");
}
