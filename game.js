// MODULES/FILE LINKS: 
var letterGuess = require("./letterguess.js");
var GetWords = require("./getwords.js");

var checkGuess = new letterGuess();

// CONSTRUCTOR FOR NEW GAME:
var game = function() {

	this.guessCount = 10;
	this.word = GetWords();
	// console.log(this.word)

	// CHECKING USER GUESSES:
	this.guess = function(guess) {

		guess = guess.toUpperCase();

		var right = checkGuess.correctGuesses;
		var wrong = checkGuess.incorrectGuesses;

		// IF LETTER HASN'T ALREADY BEEN GUESSED...
		if (right.indexOf(guess) === -1 && wrong.indexOf(guess) === -1) {
			var i = this.word.indexOf(guess);

			// INCORRECT GUESS
			if (i === -1) {
				this.guessCount--;
				checkGuess.letters.push(guess);
				wrong.push(guess);
				this.printGame('guess');
			}

			// CORRECT GUESS 
			while (i != -1) {
				checkGuess.letters.push(guess);
				right.push(guess);
				i = this.word.indexOf(guess, i + 1);
			}

			// CHECK WIN
			var checkWin = true;
			for (var i in this.word) {
				if (right.indexOf(this.word[i]) === -1) {
					checkWin = false;
				}
			}
			return checkWin;

		// IF LETTER HAS ALREADY BEEN GUESSED...
		} else {

			console.log("You already guessed that letter. Try again!");
		}

		return false;
	};


	// DISPLAYING GAME IN COMMAND LINE
	this.printGame = function(gamestate) {

		// clear();
		switch (gamestate) {
			case "guess":
				console.log("You have " + this.guessCount + " guesses left!\n");
			break;
			
			case "win":
				console.log("YOU WIN!" + "\n");
			break;
			
			case "lose":
				console.log("YOU LOSE!" + "\n");
				console.log("Answer: " + this.word.join("")+"\n");
			break;
			
			default:
				console.log("Uh oh... You broke it.");
		}

	};
};

module.exports = game;




