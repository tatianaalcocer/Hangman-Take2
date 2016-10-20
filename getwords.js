// MODULE FOR RANDOM WORD GENERATOR
var randomWords = require('random-words');


// CONSTRUCTOR FOR RANDOM WORDS
var GetWords = function() {
	
	var word = randomWords().toUpperCase();
	return word.split("");

};

module.exports = GetWords;