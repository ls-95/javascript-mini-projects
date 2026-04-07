let resultInput = document.getElementById("result");

function computerMove() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomNumber === 0) {
    computerChoice = "Rock";
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}
computerMove();

// function guess() {
//   let computer = computerMove();
//   console.log(computer);
// }
// guess();

function handleGame(choice) {
  resultInput.textContent = choice;
}
