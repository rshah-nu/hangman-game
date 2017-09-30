// Global Variable Declarations

// Variable to store random words to guess in an array
var wordArray = ["Sample", "Double", "Length", "Drops", "Elton", "Dog", "Table", "Awning", "Jeans", "Chalk", "Plants", "Ozone"];
// Maximum guesses available
var guessesRemaining = 12;
// User wins total
var userWins;
// Store random word from randomChoice fxn
var randomWord = randomChoice(wordArray);
// Store already guessed letters in an array
var alreadyChosenLetters = [];

// Function to return a random item in lower case from any passed array
function randomChoice(myArray) {
    var randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoice.toLowerCase();
}

displayUnderscores(randomWord);

document.onkeyup = function(event){
    if (validateInput(event)) {
        var userChoice = event.key.toLowerCase();
        if (checkRepeats(userChoice) == false) {
            checkContains(userChoice);
        }
        else {
            console.log("Your character was a repeat!");
        }  
    }
    else {
        console.log("You selected an invalid key");
    }
}


// Function to create underscores on page for randomWord.length
function displayUnderscores(randomWord_){
    for (var i = 0; i < randomWord_.length; i++) {
        var div = document.createElement("div");
        div.className = "randomWordLetters";
        div.id = "randomWordLetter" + i;
        document.getElementById("currentWord").appendChild(div);
        div.innerText = "___ "
    }
}

// Function to validate user input is between A and Z
function validateInput(event_){
    if (event_.keyCode >= 65 && event_.keyCode <= 90) {
        return true;
    }
    else {
        return false;
    }
}
// Function to check if user has already chosen the input
function checkRepeats(userChoice_){
    if (alreadyChosenLetters.includes(userChoice_)) {
        alert("You already chose the letter: " + userChoice_)
        return true;
    }
    else {
        alreadyChosenLetters.push(userChoice_)
        return false;
    }
}

// Function to check if user's choice exists in randomWord
function checkContains(userChoice1_) {
    if (randomWord.includes(userChoice1_)) {
        var i = randomWord.indexOf(userChoice1_);
        while (i != -1) {
            document.getElementById("randomWordLetter" + i).innerText = userChoice1_;
            i = randomWord.indexOf(userChoice1_, i + 1);
        }
    }
    else {
        document.getElementById("incorrectLetters").innerText += userChoice1_;
        guessesRemaining--;
    }
}
