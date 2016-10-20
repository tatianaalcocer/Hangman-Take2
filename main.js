// MODULES: 
var inquirer = require("inquirer");
var game = require("./game.js");

var currentGame;



// USER GUESS COMMAND LINE INPUT FUNCTION
var userGuess = function() {
	inquirer.prompt([{

		type: "input",
		name: "guess",
		message: "Pick a letter!",

		validate: function(letter) {
			return letter.length === 1;
		}

	}]).then(function(letter) {

		if (currentGame.guess(letter.guess)) {
			currentGame.printGame("win");

		} else if (currentGame.guessCount === 0) {
			currentGame.printGame("lose");

		} else {

			userGuess();
		}
	});
};

currentGame = new game();
userGuess();




