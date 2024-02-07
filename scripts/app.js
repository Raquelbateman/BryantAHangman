// Have an array of different words - data.json
// Make a counter variable to count the number of remaining turns/turns taken
// Variable for maximum turns that can be taken
// Random generator or function to grab a word from our array
// Create a number of underscores equal to the length of our random word
// Keep a letter bank, to show which letters the user has already tried
// Counter for correct guesses, so that we know if they've won the game
// Input field for user
// Start Button
// Replay Button
// Make a display field for remaining/used turns
// Loop to display the letters in their correct positions when the user guesses a letter correctly
// Popup to ask if you're sure you want to restart?


let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let displayWord = document.getElementById("displayWord");
let displayedGuesses = document.getElementById("guesses");
let letterBank = document.getElementById("letterBank");
let userInput = document.getElementById("userInput");
let lettersJoined = "";

// will become random word we use for array
let randomWord = "";

// array equal square brackets
// this will contain an array thgat will join together later
//in order to display the underscores and letters they have guessed correct
// in the spaces they would take up in a word

let letterArray = [];

// this will be the letters they have guessed

let wrongGuess = "";

// need to make a counter variable, number of gueses they have made. starts at zero
let guesses = 0;

let maxGuesses = 6;

// this is the code to make sure the start button is functioning correctly
startBtn.addEventListener('click', function() {
    dataCall();
  })

  restartBtn.addEventListener('click', function(){
    resetGame();
});


userInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        let guess = userInput.value.toLowerCase();

        // check if the users guess is included in our random word
        if(randomWord.includes(guess)){
            //alert("test");
            for(let i=0; i < randomWord.length; i++){
                if(randomWord[i] === guess){
                    letterArray[i] = guess;
                }
            }
        }
        else{
            wrongGuess += guess + "  ";
            letterBank.textContent = wrongGuess;
            guesses++;
        }
        updateGameState();
        userInput.value = "";
        gameEnd();
    }
});
//this is declaring it as JSON data
//fetch is an address to pull from. its pulling data for data.json
// JSON is where you access your data

// fetch means to grab data  
// use data.words when they're are "words" in the JSON file
function dataCall() {
    
    fetch('../data/data.json').then(response => response.json()).then( data => {

        let rndNum = Math.floor(Math.random() * data.words.length);
        randomWord = data.words[rndNum];
        console.log(randomWord);
        
        startGame(randomWord)
       
    });
}

function startGame(word){
    letterArray=[];
   
    for(let i = 0; i < word.length; i++){
        letterArray[i]= "_";
        updateGameState();
        userInput.readOnly = false;
    
}
}

// when it displays it will have a spae between evereything, underscores
// backtips and dollar signs are for interpellation
function updateGameState(){
    displayWord.textContent = letterArray.join(" ");
    displayedGuesses.textContent = `Guesses Used: ${guesses} / ${maxGuesses}`;
}

// resets variables with blank value, sets arrays to blank and resets the display area to the original starting values/words
//resets the game back to the original screen

function resetGame(){
    randomWord = "";
    wrongGuess = "";
    letterArray = [];
    guesses = 0;
    userInput.readOnly = true;
    userInput.value = "";
    numofGuesses.textContent = "Guesses Used: X / X";
    GameWord.textContent = "Press Start!";
    lettersused.textContent = "Letters Used";
}

function gameEnd(){
    // Lose: check if guesses === maxGuesses
    // Win: check if randomWord === letterArray
    if(guesses === maxGuesses){
        alert(`You lose! Your word was ${randomWord}`);
        resetGame();
    }else if(letterArray.join("") === randomWord && randomWord != ""){
        alert(`You win! Your word was ${randomWord}`);
        resetGame();
    }
}
