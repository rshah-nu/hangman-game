// Array to store random words to guess
var wordArray = ["Sample", "Double", "Length", "Drops", "Elton", "Dog", "Table", "Awning", "Jeans", "Chalk", "Plants", "Ozone"];

// Function which returns random item from array wordArray
function randomizeChoice(myArray){
    var choice =  myArray[Math.floor(Math.random()*wordArray.length)];
    return choice.toLowerCase();
}

// Stores returned random choice to a global var.
var randomWord = randomizeChoice(wordArray);
// DEBUG
console.log(randomWord + " :Random Word")
// Stores number of letters in random word
var numberOfLetters = randomWord.length;
// DEBUG
console.log(numberOfLetters + " :Number of Letters");

// Loop to create DIVs which each store an "_ " for each letter
for (var index = 0; index < numberOfLetters; index++) {
    var element = randomWord[index];
    console.log(element);
    var div = document.createElement("div");
    div.className = "randomWordLetters";
    div.id = "randomWordLetter" + index;
    console.log(div);
    document.getElementById("container").appendChild(div);
    div.innerText = "___  ";
}

// Get user input
document.onkeyup = function(event) {
    var incorrectLetters = [];
    if (validateInput(event))
    {
        for (var index = 0; index < numberOfLetters; index++) {
            var currentLetter = randomWord[index];
            if (event.key.toLowerCase() == currentLetter) {
                document.getElementById("randomWordLetter" + index).innerText = currentLetter + "  ";
            }
            else {
                document.getElementById("incorrectLetters").innerHTML += event.key.toLowerCase();
            }
        }

    }
    else {
        console.log("Oh you messed up!");
    }


}

function validateInput(keyEvent) {
    console.log(event);
    if (keyEvent.keyCode >= 65 && keyEvent.keyCode <= 90) {
        return true;
    }
    else {
        return false;
    }
}


