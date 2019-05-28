var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var CountriesInAfrica = ["algeria", "benin", "cote divoire", "senegal", "mali", "guinee", "morroco", "togo", "mauritania", "congo"];

// Pick Random index from AfricanCountries array
var randomIndex = Math.floor(Math.random() * CountriesInAfrica.length);
var randomWord = CountriesInAfrica[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function knowledge() {

    // Generates new word for Word constructor if true
    if (requireNewWord) {
        // Selects random AfricanCountries array
        var randomIndex = Math.floor(Math.random() * CountriesInAfrica.length);
        var randomWord = CountriesInAfrica[randomIndex];

        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);

        
        requireNewWord = false;
    }