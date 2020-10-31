
// Globals
var timeRemainEl = document.querySelector( "#time-remaining" ); // Declaring and pointing to id time-remaining
var introEl = document.querySelector( "#intro" ); // Declaring and pointing to id intro
var playBtnEl = document.querySelector( "#play-button") ; // Declaring and pointing to id play-button
var initialsEl = document.querySelector( "#initials" ); // Declaring and pointing to id initials
var startGameEl = document.querySelector( "#startGame" ); // Declaring and pointing to id startGame
var riddleEl = document.querySelector( "#riddle" ); // Declaring and pointing to id riddle
var answer1El = document.querySelector( "#answer1" ); // Declaring and pointing to id answer1
var answer2El = document.querySelector( "#answer2" ); // Declaring and pointing to id answer2
var answer3El = document.querySelector( "#answer3" ); // Declaring and pointing to id answer3
var answer4El = document.querySelector( "#answer4" ); // Declaring and pointing to id answer4
var endGameEl = document.querySelector( "#endGame" ); // Declaring and pointing to id endGame
var initialsEl = document.querySelector( "#initials" ); // Declaring and pointing to id initials
var submitBtnEl = document.querySelector( "#submitBtn" ); // Declaring and pointing to id submitBtn
var timeScore; // Time remaining and final score
var pointer; // Current position in the riddles array

        // riddles text
        // list of riddles answers
        // correct annswer
        //  answer: "correct"
// an Array holding objects of riddles, answers, and correct answer
var riddles = [
    {
        
    }
]

// set clock to 75 seconds and display it
var secondsLeft = 75;
timeRemainEl.innerHTML = secondsLeft;


// function subtracting time from secondsLeft, clearing, and displaying countdown
function subTime() {
    setInterval(function() {
      if ( secondsLeft <= 0 ) {
        clearInterval( secondsLeft = 0 )
      }  
      timeRemainEl.innerHTML = secondsLeft
      secondsLeft--
      console.log( secondsLeft );
    }, 1000)
  }
  
  

  // function begins the game
function beginGame() {
    subTime();
}

playBtnEl.addEventListener("click", beginGame);
