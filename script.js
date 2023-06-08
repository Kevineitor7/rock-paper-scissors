function getComputerChoice() {
    let move = Math.floor(Math.random() * 3) + 1;
    let choice = (move == 1) ? "Rock" : (move == 2) ? "Paper" : "Scissors";
    return choice; 
}

let playerPoints = 0;
let computerPoints = 0;
let playerGamesWon = 0 
let compGamesWon = 0
let playerChoice 
let pName

askName()

function askName() {
  pName = prompt('Whats your name')
  welcome()
}

function welcome() {
  const welcomeMessage = document.querySelector('.welcome');
  welcomeMessage.textContent = "Welcome " + pName
}


const buttons = document.querySelector('.buttons')
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors')
const result = document.querySelector('.result')
const pick = document.querySelector('.pick')
const points = document.querySelector('.points')
const wins = document.querySelector('.games-won')


buttonRock.addEventListener('click', () => {
  playerChoice = "Rock";
  playRound();
});
buttonPaper.addEventListener('click', () => {
  playerChoice = "Paper"
  playRound()
});
buttonScissors.addEventListener('click', () => {
  playerChoice = "Paper"
  playRound()
});


function playRound() {
    
    let computerChoice = getComputerChoice();
  
      if (playerChoice == "Rock" && computerChoice == "Scissors" || 
        playerChoice == "Paper"  && computerChoice == "Rock" || 
        playerChoice == "Scissors" && computerChoice == "Paper") {
            playerPoints += 1;
            pick.textContent = playerChoice + ' beats ' + computerChoice 
            points.textContent = pName + ': ' + playerPoints + 
            ' | \nComputer: ' + computerPoints
        }
      else if (playerChoice == "Rock" && computerChoice == "Paper" || 
      playerChoice == "Paper" && computerChoice == "Scissors" || 
      playerChoice == "Scissors" && computerChoice == "Rock") {
            computerPoints += 1;
            pick.textContent = computerChoice + ' beats ' + playerChoice  
            points.textContent = pName + ': ' + playerPoints + 
            ' | \nComputer: ' + computerPoints
      } 
      else if (playerChoice == "Rock" && computerChoice == "Rock" || 
      playerChoice == "Paper" && computerChoice == "Paper" || 
      playerChoice == "Scissors" && computerChoice == "Scissors") {
            playerPoints += 0;
            computerPoints += 0;
            pick.textContent = 'Draw'  
            points.textContent = pName + ': ' + playerPoints + ' | \nComputer: ' + computerPoints
      }
    
    check();
}

function check() {


    if (playerPoints == 5) {
        reset();
        pick.textContent = "Good job " + pName;
        playerGamesWon += 1
        wins.textContent = 'Wins: ' + pName + " " + playerGamesWon  + " | Computer " + compGamesWon
    } else if (computerPoints == 5){
        reset();
        pick.textContent = "Thanks for participating";
        compGamesWon += 1
        wins.textContent = 'Wins: ' + pName + " " + playerGamesWon  + " | Computer " + compGamesWon
    } 
}

function reset() {
  playerPoints = 0
  computerPoints = 0
}