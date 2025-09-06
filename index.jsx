console.log('RPS Game!');
function getUserInput (){
    let humanInput = prompt('Pick one: Rock, Paper, Scissor', '').toLowerCase();
    console.log(`you picked ${humanInput}`);
    return humanInput;
}

function getComputerInput(){
    let bot = (Math.floor(Math.random() * 3));
    // bot picks betwwen rock, paper, and scissor
    if ( bot === 0 ) {
        bot = "rock";
        console.log(`bot picked ${bot}`);
        return bot;
    } else if ( bot === 1 ) {
        bot = "paper";
        console.log(`bot picked ${bot}`);
        return bot;
    } else {
        bot = "scissor";
        console.log(`bot picked ${bot}`);
        return bot;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, botChoice) {
        let result;
        // Game logic (user = Rocks) & result saver
        if (humanChoice === 'rock' && botChoice === 'rock') {
            result = 'Tie';
            console.log(result)
            console.log('------------------------------------------')
        } else if (humanChoice === 'rock' && botChoice === 'paper') {
            result = 'Lose';
            computerScore++;
            console.log(result);
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return computerScore;  
        } else if (humanChoice === 'rock' && botChoice === 'scissor') {
            result = 'Win'
            humanScore ++;
            console.log(result)
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return humanScore;
        }

        // Game logic (user = paper)
        if (humanChoice === 'paper' && botChoice === 'rock'){
            result = 'Win';
            humanScore++;
            console.log(result);
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return humanScore;
        } else if (humanChoice === 'paper' && botChoice === 'paper'){
            result = 'Tie';
            console.log(result);
            console.log('------------------------------------------')
        } else if (humanChoice === 'paper' && botChoice === 'scissor'){
            computerScore ++;
            result = 'Lose';
            console.log(result);
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return computerScore;
        }

        // Gamelogic (user = scissor)
        if (humanChoice === 'scissor' && botChoice ==='rock'){
            result = 'Lose';
            computerScore++;
            console.log(result);
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return computerScore;
        } else if (humanChoice === 'scissor' && botChoice === 'paper'){
            result = 'Win';
            humanScore++;
            console.log(result);
            console.log(`score: human ${humanScore} - ${computerScore} computer`)
            console.log('------------------------------------------')
            return humanScore;
        } else if (humanChoice === 'scissor' && botChoice === 'scissor'){
            result = 'Tie';
            console.log(result);
            console.log('------------------------------------------')
        }
    }
   
    let humanSelect = getUserInput();
    let botSelect = getComputerInput();
    //play round until 5
    playRound(humanSelect, botSelect);
    humanSelect = getUserInput();
    botSelect = getComputerInput();
    playRound(humanSelect, botSelect);
    humanSelect = getUserInput();
    botSelect = getComputerInput();
    playRound(humanSelect, botSelect);
    humanSelect = getUserInput();
    botSelect = getComputerInput();
    playRound(humanSelect, botSelect);
    humanSelect = getUserInput();
    botSelect = getComputerInput();
    playRound(humanSelect, botSelect);

    // winner declare
    if (humanScore > computerScore) {
        console.log(`Congratulations you are the winner!`)
    } else {
        console.log(`You are losing, nice try!`)
    }
}  

playGame();
//playRound(humanSelect, botSelect);
// getComputerInput();
// getUserInput();

