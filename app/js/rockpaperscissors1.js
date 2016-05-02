////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	/* Your Expression */;
function getPlayerMove(move) {
    
	if (move === true){
		
	}
	else{
		move = getInput();
	}

    return move 
}
// Write an expression that operates on a variable called `move`   
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
 /* Your Expression */;
function getComputerMove(move) {
    
	if (move === true){
		
	}
	else{
		move = randomPlay();
	}
  
    return move
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
function getWinner(playerMove,computerMove) {
    var winner;

	if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors')
		||(playerMove === 'scissors' && computerMove === 'rock') ){
			win = 'computer';
			
		}
	else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors')
		||(playerMove === 'scissors' && computerMove === 'rock') ){
			win = 'player';
		}
	else if (playerMove===computerMove){
		win = 'tie';
	}
    return winner;
}
 // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
	var result;
	
	while (playerWins < 5 && computerWins < 5){
		result = getWinner(getPlayerMove(), getComputerMove());
	if (result ===  'player'){
		playerWins++
	}
	else if (result === 'computer'){
		computerWins++
	}
	else {
		console.log('tie!');
	}
	console.log("Score:" + playerWins + "to" + computerWins + "\n");
	}
	
    return [playerWins, computerWins];
}

