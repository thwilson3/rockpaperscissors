//create a variable the will randomly generate number
let randomNumber = Math.floor(Math.random() * 3)

//assign number to selection
function computerPlay() {
    if (randomNumber === 0) {
   return "rock"
     } else if (randomNumber === 1) {
        return "paper"
   } else if (randomNumber === 2) {
    return "scissors"
   } else {
    return "error"
   }  
}

let computerSelection = computerPlay();
let playerSelection = "ROck"

function playGame (computerSelection, playerSelection) {

    if (computerSelection === playerSelection.toLowerCase()) {
        return "draw"
    } else if (computerSelection == "rock") {
        if (playerSelection.toLowerCase() == "scissors") {
            return "you lose!"
        } else if (playerSelection.toLowerCase() == "paper") {
            return "you win!"
        } } else if (computerSelection == "paper") {
            if (playerSelection.toLowerCase() == "scissors") {
                return "you win!" 
            } else if (playerSelection.toLowerCase() == "rock") {
                return "you lose!"
            }
        }   else if (computerSelection == "scissors") {
            if (playerSelection.toLowerCase() == "paper") {
                return "you lose!"
            } else if (playerSelection.toLowerCase() == "rock") {
                return "you win!"
            }
        }
    }

function fullGame () {
    for (let i=0; i<=5; i++) {

    }

}


console.log(playGame(computerSelection, playerSelection));
//get string from user with their selection

