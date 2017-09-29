// Array to store random words to guess
var wordArray = ["Sample", "Double", "Length", "Drops", "Elton", "Dog", "Table", "Awning", "Jeans", "Chalk", "Plants", "Ozone"];

// Function which returns random item from array wordArray
function randomizeChoice(myArray){
    // Randomly choose an item from array by selecting a random number between 0 and 1, multiplying it by length of array, and rounding it down to a whole number.
    var choice =  myArray[Math.floor(Math.random()*wordArray.length)];
    // Return random int
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
// Array to store letters the user chooses 
var alreadyChosenLetters = [];
// DEBUG
console.log("Way outside loop: " + alreadyChosenLetters);

// Loop to create DIVs which each store an "_ " for each letter
for (var index = 0; index < numberOfLetters; index++) {
    // Creates an element to store the "_ "
    var div = document.createElement("div");
    // Add class name "className" to created Div
    div.className = "randomWordLetters";
    // Add ID of randomWordLetter+[int] to each Div
    div.id = "randomWordLetter" + index;
    // DEBUG
    console.log(div);
    // Append the Divs to the "Container" div
    document.getElementById("container").appendChild(div);
    // Set the inner text of the Divs to "_ "
    div.innerText = "___  ";
}

// Obtain user input, validate it, show correct and incorrect guesses on screen.
document.onkeyup = function(event) {
    // Ensure user input is valid (between a - z)
    if (validateInput(event)){
        // Convert user choice to lower case for standardization
        userChoice = event.key.toLowerCase();
        // DEBUG
        console.log(alreadyChosenLetters);
        // Check if user has already entered the letter they are choosing
        if (alreadyChosenLetters.includes(userChoice)) {
            // Alert to user that their letter has already been selected
            alert("You already chose the letter: " + userChoice);
            // DEBUG
            console.log(alreadyChosenLetters + "Inside Loop!");
        }
        // If User choice has NOT already been selected by user already
        else {
            // Push the user choice to alreadyChosenLetters array
            alreadyChosenLetters.push(userChoice);
            // DEBUG
            console.log(alreadyChosenLetters + "SUPER INSIDE LOOP");
            // Check if random word has the user's letter choice
            if (randomWord.includes(userChoice)) {
                // If so, find the first index where user's letter exists in the random word
                var inx = randomWord.indexOf(userChoice);
                // Continue looping through random word looking for user choice (until it doesn't exist anymore)
                while (inx != -1) {
                    // Find the Div(s) on page where the user's chosen letter SHOULD go and append the user choice to said location
                    document.getElementById("randomWordLetter" + inx).innerText = userChoice;
                    // Change the index to be 1 more than wherever the user's chosen letter was last found.
                    inx = randomWord.indexOf(userChoice, inx + 1);
                }
            }
            // ELSE, if user's chosen word has NOT been already selected AND does not exist in the random word, append the user's choice to the page's "IncorrectLetters div"
            else {
                document.getElementById("incorrectLetters").innerText += userChoice;
            }
        }
    }
}

// Functoin to validate user input
// TODO: Ensure key hasn't been pressed already
function validateInput(keyEvent) {
    // DEBUG
    console.log(event);
    // Verify key is between 65 and 90 (a and z) ASCII, return true if proper, else return false.
    if (keyEvent.keyCode >= 65 && keyEvent.keyCode <= 90) {
        return true;
    }
    else {
        return false;
    }
}


