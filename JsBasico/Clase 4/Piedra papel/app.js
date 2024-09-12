let userScore = 0;
let computerScore = 0;

const userScore_element = document.getElementById('user-score');
const compScore_element = document.getElementById('comp-score');

const result = document.getElementById('result');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function play(userChoice){
    console.log(userChoice);
    //console.log(getComputerChoice());

    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    let message = "";

    switch(userChoice+'-'+computerChoice){
        case 'rock-paper':
            message = 'Perdiste Piedra[Usuario] pierde con papel[Comp]';
            //computerScore += 1;
            lose();
            break;
        case 'rock-scissors':
            message = 'Ganaste Piedra[Usuario] gana a tijeras[Comp]';
            //userScore += 1;
            win();
            break;
        case 'rock-rock':
            message = 'Empate Piedra[Usuario] = Piedra[Comp]';
            break;
        

        case 'paper-rock':
            message = 'Ganaste Papel[Usuario] gana con papel[Comp]';
            //userScore += 1;
            win();
            break;
        case 'paper-scissors':
            message = 'Perdista Papel[Usuario] pierde a tijeras[Comp]';
            //computerScore += 1;
            lose();
            break;
        case 'paper-paper':
            message = 'Empate Papel[Usuario] = Papel[Comp]';
            break;


        case 'scissors-rock':
            message = 'Perdiste Tijera[Usuario] pierde con piedra[Comp]';
            //computerScore += 1;
            lose();
            break;
        case 'scissors-paper':
            message = 'Ganaste Tijera[Usuario] gana a papel[Comp]';
            //userScore += 1;
            win();
            break;
        case 'scissors-scissors':
            message = 'Empate Tijera[Usuario] = Tijera[Comp]';
            break;
    };

    result.textContent = message;
    /*userScore_element.textContent = userScore;
    compScore_element.textContent = computerScore;*/

};

function main(){
rock.addEventListener('click', function(){
    play('rock');
});

paper.addEventListener('click', function(){
    play('paper');
});

scissors.addEventListener('click', function(){
    play('scissors');
});
}

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function win(){
    userScore += 1;
    userScore_element.textContent = userScore;
}

function lose(){
    computerScore += 1;
    compScore_element.textContent = computerScore;
}

main();