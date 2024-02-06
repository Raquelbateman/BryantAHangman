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


let startBtn = getElementById("startBtn");
let restartBtn = getElementById("restartBtn");
let displayWord = getElementById("displayedWord");
let displayedGuesses = getElementById("guesses");
let letterBank = getElementById("letterBank");
let input = getElementById("input");


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
startBtn.addEventListener('click', function(){
    dataCall();

})

// response => response.json takes our data. fetch is fetching the data we have inside .json
// ".." is a conversation that says we're using this file
// the comversation continues when it gets to .then
// "response" is just a variable

    function dataCall(){
        fetch('../data/data.json').then(response => response.json()).then( data =>{

        } )
        //let rndNum = Math.floor(Math.random() * dataCall.length)
    }



