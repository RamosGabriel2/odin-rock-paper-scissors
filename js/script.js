function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    
    return choice;
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    let computerSelectionString = stringChoice(computerSelection);
    let playerSelectionString = stringChoice(playerSelection);

    console.log(`You play ${playerSelectionString} and computer play ${computerSelectionString} \n\n`)

    let winner = 0;
    switch (computerSelection){
        case 0:
            switch(playerSelection){
                case 0:
                    console.log('Draw, both chose Rock!')
                    break;
                case 1:
                    console.log('You win, Paper beats Rock!')
                    winner = 1;
                    break;
                default:
                    console.log('You lose, Rock beats Scissors!')
                    winner = 2;
                    break;
            }
            break;
        case 1:
            switch(playerSelection){
                case 0:
                    console.log('You lose, Paper beats Rock!')
                    winner = 2;
                    break;
                case 1:
                    console.log('Draw, both chose Paper!')
                    break;
                default:
                    console.log('You win, Scissors beats Paper!')
                    winner = 1;
                    break;
            }
            break;
        default:
            switch(playerSelection){
                case 0:
                    console.log('You win, Rock beats Scissors!')
                    winner = 1;
                    break;
                case 1:
                    console.log('You lose, Scissors beats!')
                    winner = 2;
                    break;
                default:
                    console.log('Draw, both chose Scissors')
                    break;
            }
            break;
    }
    return winner;
}

(function game(){

    let value = 2;
    let scoreComputer = 0;
    let scorePlayer = 0;

    // plays 5 rounds

    for(i=0; i<5; i++){

        let aux = 0;
        do{
            let choice = window.prompt('Choose (Rock, Paper or Scissors):');
            choice = choice.toLowerCase();

            switch(choice){
                case 'rock':
                    value = 0
                    aux = 1;
                    break;
                case 'paper':
                    value = 1
                    aux = 1;
                    break;
                case 'scissors':
                    aux = 1;
                    break;
                default:
                    break;
            }

        }while(aux!=1)

        let result = playRound(value);
        if(result === 1){
            scorePlayer++;
        }else if(result === 2){
            scoreComputer++;
        }
    }

    // best of 5

    // for(i=5, j=5; i>0 && j>0;){

    //     let aux = 0;
    //     do{
    //         let choice = window.prompt('Choose (Rock, Paper or Scissors):');
    //         choice = choice.toLowerCase();

    //         switch(choice){
    //             case 'rock':
    //                 value = 0
    //                 aux = 1;
    //                 break;
    //             case 'paper':
    //                 value = 1
    //                 aux = 1;
    //                 break;
    //             case 'scissors':
    //                 aux = 1;
    //                 break;
    //             default:
    //                 break;
    //         }

    //     }while(aux!=1)

    //     let result = playRound(value);
    //     if(result === 1){
    //         scorePlayer++;
    //         i--;
    //     }else if(result === 2){
    //         scoreComputer++;
    //         j--;
    //     }
    // }

    console.log(`\n Score: \n Player = ${scorePlayer} , Computer = ${scoreComputer}`);
})()

function stringChoice(choice){
    let aux = ""

    switch(choice){
        case 0:
            aux = "rock"
            break;
        case 1:
            aux = "paper"
            break;
        default:
            aux = "scissors"
            break;
    }
    return aux;
}