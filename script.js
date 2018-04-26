let userChoice = "Rock";
let compChoice;
let userWin = 0;
let userLoss = 0;
let userTie = 0;

function test() {
    document.getElementById("div").innerHTML = userChoice;
    document.getElementById("win").innerHTML = userWin;
    document.getElementById("loss").innerHTML = userLoss;
    document.getElementById("tie").innerHTML = userTie;
}

function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getCompChoice() {
	let x = getRndInt(1,3);
  if (x === 1) {
  	compChoice = "Rock";
  } else if (x === 2) {
  	compChoice = "Paper";
  } else {
  	compChoice = "Scissors";
  }
}

function getUserChoice() {
	userChoice = prompt("Choose Rock, Paper or Scissors");
  if (userChoice != "Paper" && userChoice != "Rock" && userChoice != "Scissors") {
  	alert("You're just going to go with Rock...");
    userChoice = "Rock";
  }
}

function playRound() {
	getUserChoice();
  getCompChoice();
  alert("Player Selects " + userChoice + " and Computer Selects " + compChoice + ".");
  if (userChoice === "Rock" && compChoice === "Paper") {
  	userLoss += 1;
  } else if (userChoice === "Rock" && compChoice === "Scissors") {
  	userWin += 1;
  } else if (userChoice === "Paper" && compChoice === "Rock") {
  	userWin +=1;
  } else if (userChoice === "Paper" && compChoice === "Scissors") {
  	userLoss += 1;
  } else if (userChoice === "Scissors" && compChoice === "Paper") {
  	userWin += 1;
  } else if (userChoice === "Scissors" && compChoice === "Rock") {
  	userLoss += 1;
  } else {
  	userTie += 1;
  }
  test();
  if (userWin === 5) {
  	alert("You Totally Won!");
    reset();
  } else if (userLoss === 5) {
  	alert("You Totally Lost!");
    reset();
  }

}

function reset() {
	userWin = 0;
  userLoss = 0;
  userTie = 0;
  userChoice = undefined;
  compChoice = undefined;
	test();
}