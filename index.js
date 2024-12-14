let x = ["rock", "scissors"];
let y = ["paper", "scissors"];
let z = ["paper", "rock"];
let computerInput = ["rock", "paper", "scissors"];
let gameInput = [];
let mark = x.toString();
gameInput.push(prompt(" user: rock, paper or scissors"));

function runGame() {
  let computerPICK = computerInput[Math.floor(Math.random() * 3)];
  console.log(computerPICK);
  gameInput.push(computerPICK);

  if (
    gameInput.toString().includes(z[0].toString()) &&
    gameInput.toString().includes(z[1].toString())
  ) {
    alert("paper wins");
  } else if (
    gameInput.toString().includes(y[0].toString()) &&
    gameInput.toString().includes(y[1].toString())
  ) {
    alert("scissors wins");
  } else if (
    gameInput.toString().includes(x[0].toString()) &&
    gameInput.toString().includes(x[1].toString())
  ) {
    alert("rock wins");
  } else {
    alert("draw");
  }
}

runGame();

//to record the number of times the game have been played
