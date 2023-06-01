function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

let playerPoints = 0;
let computerPoints = 0;

game();

//computer choice : 1 = rock, 2 = paper, 3 = scissors


function playRound() {
    let playerChoice = prompt("pick a move - rock / paper / scissors (lowercase)");
    let computerChoice = getComputerChoice();
  
      if (playerChoice == "rock" && computerChoice == 3 || 
        playerChoice == "paper"  && computerChoice == 1 || 
        playerChoice == "scissors" && computerChoice == 2) {
            playerPoints += 1;
            alert('1 point for you\nYou: ' + playerPoints + 
            '\nComputer: ' + computerPoints);
        }
      else if (playerChoice == "rock" && computerChoice == 2 || 
      playerChoice == "paper" && computerChoice == 3 || 
      playerChoice == "scissors" && computerChoice == 1) {
            computerPoints += 1;
            alert('1 point for computer\nYou: ' + playerPoints + 
            '\nComputer: ' + computerPoints);
      } 
      else if (playerChoice == "rock" && computerChoice == 1 || 
      playerChoice == "paper" && computerChoice == 2 || 
      playerChoice == "scissors" && computerChoice == 3) {
        playerPoints +=0;
        computerPoints +=0;
        alert('Draw\nYou: ' + playerPoints + 
        '\nComputer: ' + computerPoints)
      }
      else {
        computerPoints += 1;
        alert('1 point for computer\nYou: ' + playerPoints + 
        '\nComputer: ' + computerPoints);
      }
    
    
      
}

function game() {

    while (playerPoints < 3 && computerPoints < 3) {
    playRound();
}

    if (playerPoints > computerPoints) {
        alert('you won scumbag');
        console.log('player has ' + playerPoints + ' points')
        console.log('computer has ' + computerPoints + ' points')
    } else if (computerPoints > playerPoints){
        alert('you failed');
        console.log('player has ' + playerPoints + ' points')
        console.log('computer has ' + computerPoints + ' points')
    } 
}