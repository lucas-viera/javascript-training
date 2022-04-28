const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //beware not to create more buttons

//Globals
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    calculateWinner()
}))

function generateComputerChoice()  {
    const randomNum = Math.floor(Math.random()*3) + 1
    if (randomNum == 1){
        computerChoice = 'rock'
        console.log(computerChoice)
    }
    if (randomNum == 2){
        computerChoice = 'sissors'
        console.log(computerChoice)
    }
    if (randomNum == 3){
        computerChoice = 'paper'
        console.log(computerChoice)
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function calculateWinner(){
    if(computerChoice === userChoice){
        result = 'Draw'
    }
    else if(computerChoice === 'rock' && userChoice === 'paper' || computerChoice === 'paper' && userChoice === 'sissors' || computerChoice === 'sissors' && userChoice ==='rock'){
        result = 'You Won'
    }
    else {
        result = 'You Lost'
    }
    resultDisplay.innerHTML = result

}