function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    
    return choice;
}

function playRound(playerSelection){

    let winner = 0;
    let computerSelection = computerPlay();
    let computerSelectionString = stringChoice(computerSelection);
    let playerSelectionString = stringChoice(playerSelection);
    const roundText = document.querySelector('#result');

    // console.log(`You play ${playerSelectionString} and computer play ${computerSelectionString} \n\n`)

    switch (computerSelection){
        case 0:
            switch(playerSelection){
                case 0:
                    roundText.textContent = 'Draw, both chose Rock!'
                    break;
                case 1:
                    roundText.textContent = 'You win, Paper beats Rock!'
                    winner = 1;
                    break;
                default:
                    roundText.textContent = 'You lose, Rock beats Scissors!'
                    winner = 2;
                    break;
            }
            break;
        case 1:
            switch(playerSelection){
                case 0:
                    roundText.textContent = 'You lose, Paper beats Rock!'
                    winner = 2;
                    break;
                case 1:
                    roundText.textContent = 'Draw, both chose Paper!'
                    break;
                default:
                    roundText.textContent = 'You win, Scissors beats Paper!'
                    winner = 1;
                    break;
            }
            break;
        default:
            switch(playerSelection){
                case 0:
                    roundText.textContent = 'You win, Rock beats Scissors!'
                    winner = 1;
                    break;
                case 1:
                    roundText.textContent = 'You lose, Scissors beats Paper!'
                    winner = 2;
                    break;
                default:
                    roundText.textContent = 'Draw, both chose Scissors'
                    break;
            }
            break;
    }
    return winner;
}

(function game(){

    let result = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;

    let scoreP = document.querySelector('#scoreP')
    let scoreC = document.querySelector('#scoreC')
    const btnChoice = document.querySelectorAll('button')

    btnChoice.forEach(choice => choice.addEventListener('click', (event) => {
        let playerChoice = Number(event.target.value)
        result = playRound(playerChoice)
        
        switch(result){
            case 1:
                scorePlayer++;
                break;
            case 2:
                scoreComputer++;
                break;
            default:
                break;
        }

        scoreP.textContent = scorePlayer;
        scoreC.textContent = scoreComputer;

        if(scoreComputer>4 || scorePlayer>4){
            btnChoice.forEach(choice => choice.disabled = true)
        }
    }))

})()

function stringChoice(selection){
    let aux = ''

    switch(selection){
        case 0:
            aux = 'rock'
            break;
        case 1:
            aux = 'paper'
            break;
        default:
            aux = 'scissors'
            break;
    }
    return aux;
}