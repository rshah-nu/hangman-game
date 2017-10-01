// Global Variable Declarations

// Variable to store random words to guess in an array
// var wordArray = ["Yesterday", "Blackbird", "Length", "Drops", "Elton", "Dog", "Table", "Awning", "Jeans", "Chalk", "Plants", "Ozone"];
var wordArray = ["Yesterday", "Hey Jude", "Here Comes The Sun", "Revolution", "Eleanor Rigby", "Come Together", "Across the Universe", "She Loves You", "All My Loving", "Helter Skelter"];
// Maximum guesses available
var guessesRemaining = 12;
// HACK!
document.getElementById("guessesRemaining").innerText = guessesRemaining;
// User wins total
var userWins = 0;
// Store random word from randomChoice fxn
var randomWord = randomChoice(wordArray);
// Store already guessed letters in an array
var alreadyGuessedLetters = [];
// Variable to store correct letters to later check if user won or not
var correctLetters = "";
// Hack!
var randomChoiceUpper;

// Function to return a random item in lower case from any passed array
function randomChoice(myArray) {
    randomChoiceUpper = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoiceUpper.toLowerCase();
}

// Call to function to print underscores to page
displayUnderscores(randomWord);

// Function to create underscores on page for randomWord.length
function displayUnderscores(randomWord_){
    for (var i = 0; i < randomWord_.length; i++) {
        // Creates spaces for space characters
        if (randomWord_[i] == " ") {
            var div = document.createElement("div");
            div.className = "randomWordLetters";
            div.id = "randomWordLetter" + i;
            document.getElementById("currentWord").appendChild(div);
            div.innerText = "\xa0\xa0\xa0\xa0";
            // hack!
            correctLetters += "a";
            }
        // Prints "___" for real letters.
        else {
            var div = document.createElement("div");
            div.className = "randomWordLetters";
            div.id = "randomWordLetter" + i;
            document.getElementById("currentWord").appendChild(div);
            div.innerText = "___ "
        }

    }
}

// Get user input and validate  / check for similarity between random word
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
    if (alreadyGuessedLetters.includes(userChoice_)) {
        alert("You already chose the letter: " + userChoice_)
        return true;
    }
    else {
        alreadyGuessedLetters.push(userChoice_)
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
            correctLetters += userChoice1_;
            if (correctLetters.length == randomWord.length) {
                youWin(randomChoiceUpper, randomWord);
            }
        }
    }
    else {
        document.getElementById("incorrectLetters").innerHTML += "<h2>" + " " + userChoice1_ + "," + "</h2>";
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerText = guessesRemaining;
        if (guessesRemaining == 0) {
            youLose()
        }
        
    }
}

function youWin(randomWord1_, randomWord_) {
    document.getElementById("musicName").innerHTML = "<h1 class = \"glyphicon glyphicon-music\">" + " " + randomWord1_ + "</h1>";
    userWins++;
    document.getElementById("wins").innerText = userWins;
    document.getElementById("discImage").src = "assets/images/albumImages/" + randomWord_ + ".jpg"
    resetGame(); 

}

function youLose(){
    alert("Sorry! You ran out of chances!");
    resetGame();
}
function resetGame() {
// Maximum guesses available
guessesRemaining = 12;
document.getElementById("guessesRemaining").innerText = guessesRemaining;
// Store random word from randomChoice fxn
randomWord = randomChoice(wordArray);
// Store already guessed letters in an array
alreadyGuessedLetters = [];
document.getElementById("incorrectLetters").innerText = "";
// Variable to store correct letters to later check if user won or not
correctLetters = "";
// Hack!
randomChoiceUpper;
document.getElementById("currentWord").innerText = "";
displayUnderscores(randomWord);
}