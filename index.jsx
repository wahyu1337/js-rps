console.log('hello world!');

// var declare
let result;

const userInput = prompt('Picks: Rock, Paper, Scissor?', '').toLowerCase();
console.log(`users pick ${userInput}`);

function botChoice() {

    bot = Math.floor(Math.random() * 3);

    bot === 0 ? bot = 'rock' : bot === 1 ? bot ='paper' : bot === 2 ? bot = 'scissor' : console.error();
    
    console.log(`bot picks: ${bot}`);
    return bot;
}

botChoice();

function playRound(userInput, bot){

    // user input = rock
    (userInput === 'rock' && bot === 'rock') ? alert('tie') :
    (userInput === 'rock' && bot === 'paper') ? alert('lose') :
    (userInput === 'rock' && bot === 'scissor') ? alert('win') : console.error();

    // user input = paper
    (userInput === 'paper' && bot === 'rock') ? alert('win') :
    (userInput === 'paper' && bot === 'paper') ? alert('tie') :
    (userInput === 'paper' && bot === 'scissor') ? alert('lose') : console.error();

    // user input = scissor
    (userInput === 'scissor' && bot === 'rock') ? alert('lose') : 
    (userInput === 'scissor' && bot === 'paper') ? alert('win') : 
    (userInput === 'scissor' && bot === 'scissor') ? alert('tie') : console.error();

    // --------------------------------------------------------------------------------//

    // console result ( user as rock)
    (userInput === 'rock' && bot === 'rock') ? result = 'tie' :
    (userInput === 'rock' && bot === 'paper') ? result = 'lose' :
    (userInput === 'rock' && bot === 'scissor') ? result = 'win' : console.error();

    // console result (user as paper)
    (userInput === 'paper' && bot === 'rock') ? result = 'win' :
    (userInput === 'paper' && bot === 'paper') ? result = 'tie' :
    (userInput === 'paper' && bot === 'scissor') ? result = 'lose' : console.error();

    // console result (user as scissor)
    (userInput === 'scissor' && bot === 'rock') ? result = 'lose' :
    (userInput === 'scissor' && bot === 'paper') ? result = 'win' :
    (userInput === 'scissor' && bot === 'scissor') ? result = 'tie' : console.error();
    console.log(`user: ${result}`);

    console.log(`
        user pick: ${userInput} 
        bot pick: ${bot} 
        result: user's ${result}
        `);
    return result;
};

playRound(userInput, bot);