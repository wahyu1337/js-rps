console.log('RPS Game!');

// Track score, and put outside function 
let humanScore = 0;
let computerScore = 0;

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

function playRound (humanChoice, botChoice) {
    let result;
    // Game logic (user = Rocks) & result saver
    if (humanChoice === 'rock' && botChoice === 'rock') {
        result = 'Tie';
    } else if (humanChoice === 'rock' && botChoice === 'paper') {
        result = 'Lose';
        computerScore++;
    } else if (humanChoice === 'rock' && botChoice === 'scissor') {
        result = 'Win'
        humanScore ++;
    }

    // Game logic (user = paper)
    if (humanChoice === 'paper' && botChoice === 'rock'){
        result = 'Win';
        humanScore++;
    } else if (humanChoice === 'paper' && botChoice === 'paper'){
        result = 'Tie';
    } else if (humanChoice === 'paper' && botChoice === 'scissor'){
        computerScore ++;
        result = 'Lose';        
    }

    // Gamelogic (user = scissor)
    if (humanChoice === 'scissor' && botChoice ==='rock'){
        result = 'Lose';
        computerScore++;
    } else if (humanChoice === 'scissor' && botChoice === 'paper'){
        result = 'Win';
        humanScore++;
    } else if (humanChoice === 'scissor' && botChoice === 'scissor'){
        result = 'Tie';
    }
    
    // Result Display in console and HTML
    console.log(result);
    console.log(`Score: Human ${humanScore} - ${computerScore} Computer`);
    console.log(`------------------------------------------`);

    const resultDisplay = document.querySelector('.resultDisplay');
    const resultPlayerChoose = document.createElement('p');
    const resultComputerChoose = document.createElement('p');
    const resultText = document.createElement('p');
    const resultScore = document.createElement('p');
    const marker = document.createElement('p');

    // text content result
    resultPlayerChoose.textContent = `You choose: ${humanChoice}`;
    resultComputerChoose.textContent = `Computer Choose: ${botChoice}`;
    resultText.textContent = `Result: ${result}`;
    resultScore.textContent = `You ${humanScore} - ${computerScore} Computer`;
    marker.textContent = `----------------------------------------------------`


    resultDisplay.appendChild(resultPlayerChoose);
    resultDisplay.appendChild(resultComputerChoose);
    resultDisplay.appendChild(resultText);
    resultDisplay.appendChild(resultScore);
    resultDisplay.appendChild(marker);
}  

function setupGame(){
    const rock = document.querySelector('.rocks');
    const paper = document.querySelector('.papers');
    const scissor = document.querySelector('.scissors');

    // THE KEY CHANGE: Call playRound() INSIDE each event listener
    // This way, the game happens WHEN the user clicks, not before!
    rock.addEventListener("click", () => {
        const userInput = 'rock';
        console.log(`You picked ${userInput}`)

        // play the game
        const botChoice = getComputerInput();
        playRound(userInput, botChoice)
    })

    paper.addEventListener("click", () => {
        const userInput = 'paper';
        console.log(`You picked ${userInput}`);

        // play the game
        const botChoice = getComputerInput();
        playRound(userInput, botChoice);
    })
    
    scissor.addEventListener("click", () => {
        const userInput = "scissor";
        console.log(`You picked ${userInput}`);

        // play the game
        const botChoice = getComputerInput();
        playRound(userInput, botChoice);
    })
}

setupGame();