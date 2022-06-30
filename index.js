//create a variable the will randomly generate number
let randomNumber = Math.floor(Math.random() * 3)

//assign number to selection
function computerPlay() {
    if (randomNumber === 0) {
   return "Rock"
     } else if (randomNumber === 1) {
        return "Paper"
   } else if (randomNumber === 2) {
    return "Scissors"
   } else {
    return "Error"
   }  
}
console.log(computerPlay())
//get string from user with their selection

//if that selection beats user selection
//comp wins
//print comp wins
//if that selection equals user
//draw
//print draw
//if that selection loses to user selection
//user wins
//print user wins