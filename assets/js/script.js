
// Declaring and pointing to elements
var timeRemainEl = document.querySelector( "#time-remaining" ); 
var introEl = document.querySelector( "#intro" ); 
var playBtnEl = document.querySelector( "#play-button" ) ; 
var startGameEl = document.querySelector( "#startGame" ); 
var hiddenEl = document.querySelector( ".hidden" );
var buttonsEl = document.querySelector( ".buttons" )
var riddleEl = document.querySelector( "#riddle" ); 
var answer1El = document.querySelector( "#answer1" ); 
var answer2El = document.querySelector( "#answer2" ); 
var answer3El = document.querySelector( "#answer3" ); 
var answer4El = document.querySelector( "#answer4" );
var gandalfEl = document.querySelector( "#gandalf" ); 
var playAgainEl = document.querySelector( "#playAgain" );
var endGameEl = document.querySelector( "#endGame" ); 
var initialsEl = document.querySelector( "#initials" ); 
var submitBtnEl = document.querySelector( "#submitBtn" ); 

// Global variables
var correctScore = 0;
var incorrectScore = 0;
var pointer = 0;
var clickButtonContent = "";

// Declare, set clock to 75 seconds, and display it
var secondsLeft = 75;

// an Array holding objects of riddles, answers, and correct answer
var riddles = [
    {
      riddle: "What has roots as nobody sees, \nIs taller than trees, \nUp, up it goes, \nAnd yet never grows?",
      answer1: "A tree",
      answer2: "A castle",
      answer3: "A mountain",
      answer4: "A giant",
      answer: "A mountain"
    },
    {
      riddle: "Thirty white horses on a red hill, \nFirst they champ, \nThen they stamp, \nThen they stand still.",
      answer1: "Swords",
      answer2: "Dwarves",
      answer3: "Wargs",
      answer4: "Teeth",
      answer: "Teeth"
    },
    {
      riddle: "Voiceless it cries, \nWingless flutters, \nToothless bites, \nMouthless mutters.",
      answer1: "Wind",
      answer2: "Moth",
      answer3: "Eagle",
      answer4: "Dream",
      answer: "Wind"
    },
    {
      riddle: "An eye in a blue face, \nSaw an eye in a green face. \n'That eye is like to this eye' \nSaid the first eye, \n'But in low place, \nNot in high place.'",
      answer1: "A puddle",
      answer2: "The sun",
      answer3: "The sky",
      answer4: "The moon",
      answer: "The sun"
    },
    {
      riddle: "It cannot be seen, cannot be felt, \nCannot be heard, cannot be smelt. \nIt lies behind stars and under hills, \nAnd empty holes it fills. \nIt comes first and follows after, \nEnds life, kills laughter.",
      answer1: "Dark",
      answer2: "Silence",
      answer3: "Nothing",
      answer4: "Anger",
      answer: "Dark"
    },
    {
      riddle: "A box without hinges, key, or lid, \nYet golden treasure inside is hid.",
      answer1: "The heart",
      answer2: "Dragon hoard",
      answer3: "The mind",
      answer4: "An Egg",
      answer: "An Egg"
    },
    {
      riddle: "Alive without breath, \nAs cold as death; \nNever thirsty, ever drinking, \nAll in mail never clinking.",
      answer1: "Water",
      answer2: "A tree",
      answer3: "Fish",
      answer4: "A rock",
      answer: "Fish"
    },
    {
      riddle: "No-legs lay on one-leg, \ntwo-legs sat near on three-legs, \nfour-legs got some.",
      answer1: "Foot on a box, feet on a stool, dog gets the scraps",
      answer2: "Fish on a table, man on a stool, cat gets the scraps",
      answer3: "Water in a skin, hobbit on an uruk hai, riders of rohan",
      answer4: "Ring on finger, fingers in hand, hand holds sword, and battles man",
      answer: "Fish on a table, man on a stool, cat gets the scraps"
    },
    {
      riddle: "This thing all things devours: \nBirds, beasts, trees, flowers; \nGnaws iron, bites steel; \nGrinds hard stones to meal; \nSlays king, ruins town, \nAnd beats high mountain down.",
      answer1: "Time",
      answer2: "Dragon",
      answer3: "Water",
      answer4: "Lava",
      answer: "Time"
    },
    {
      riddle: "What have I got in my pocket?",
      answer1: "Hands",
      answer2: "Nothing",
      answer3: "A ring",
      answer4: "A knife",
      answer: "A ring"
    },
]; // End of riddles object ___________________________________________________________


// Object methods to be used in the game
var myMethods = {
  
  // Countdown functionality
  countDown: function() {
    setInterval(function() {
      
      // Remove click for start game button
      // Reveal Gandalf if seconds countdown to 0 or less
      // Set timeer display to 0 and stop timer
      if ( secondsLeft <= 0 ) {
          startGameEl.removeEventListener("click", gameFlow);
          timeRemainEl.innerHTML = 0;
          secondsLeft === 0;
          clearInterval( secondsLeft );
          myMethods.revealGandalf();
      
          console.log(secondsLeft);
          return;

      // Remove click for start game button
      // Set timeer display to seconds left on clock and stop timer
      } else if ( pointer == 10 ) {
          startGameEl.removeEventListener("click", gameFlow);
          timeRemainEl.innerHTML = secondsLeft;
          clearInterval( secondsLeft );
          return;

      // Set timer display to seconds left and countdown in seconds
      } else
          timeRemainEl.innerHTML = secondsLeft;
          secondsLeft--
    
    }, 1000)
  }, 
  
  // Hide start page (intro)
  hideIntro: function() {
    var displaySetting = introEl.style.display;
    if ( !displaySetting == "none"); {
      introEl.style.display = "none";
    } 
      // introEl.style.display = "flex";   
  },

  // Show game page
  showGame: function() {
    var displaySetting = startGameEl.style.display;
    if ( !displaySetting == "none" ) {
        startGameEl.style.display = "none";
    } else 
        startGameEl.style.display = "flex";
        console.log("Show Game");    
  },

  // Show end game page
  showEnd: function() {
    var displaySetting = endGameEl.style.display;
    if ( !displaySetting == "none" ) {
        endGameEl.style.display = "none";
    } else {
        endGameEl.style.display = "flex";
        startGameEl.style.display = "none";
        console.log("Show End");
        console.log( "Time: " + secondsLeft);
        console.log( "FINAL Correct Score: " + correctScore );
        console.log( "FINAL Incorrect Score: " + incorrectScore );
    } 
  },

  // Reveal Gandalf and play again button
  // Hide all other screens
  revealGandalf: function() {
    startGameEl.style.display = "none";
    endGameEl.style.display = "none";
    gandalfEl.style.display = "flex";
    playAgainEl.style.display = "flex";
  },

  // Hide Gandalf and play again button
  // Show all other screens
  hideGandalf: function() {
    startGameEl.style.display = "flex";
    endGameEl.style.display = "none";
    gandalfEl.style.display = "none";
    playAgainEl.style.display = "none";
  },

  // Display first riddle and answers 
  // Math.floor(Math.random()*riddles.length - 1)
  displayRiddle1: function() {
    riddleEl.innerHTML = riddles[pointer].riddle;
    answer1El.innerHTML = riddles[pointer].answer1; 
    answer2El.innerHTML = riddles[pointer].answer2;
    answer3El.innerHTML = riddles[pointer].answer3;
    answer4El.innerHTML = riddles[pointer].answer4;
    console.log( "Riddle 1 displayed" );
  }, 

  // Display next riddle
  // Check if all questions are done log final counts and show end page
  displayNextRiddle: function() {
    if ( pointer < riddles.length ) {
        riddleEl.innerHTML = riddles[pointer].riddle;
        answer1El.innerHTML = riddles[pointer].answer1; 
        answer2El.innerHTML = riddles[pointer].answer2;
        answer3El.innerHTML = riddles[pointer].answer3;
        answer4El.innerHTML = riddles[pointer].answer4;
        console.log( "Riddle " + ( pointer + 1 ) + " displayed.");
    } else 
        this.showEnd();
        return
    
  },

  // Gets user choice and compares to the correct answer
  // Increment respective counters and penalty
  answerCheck: function(clickButtonContent) {
    console.log( "The user's choice is (" + clickButtonContent + ") inside answerCheck()." );
    
    if ( clickButtonContent !== riddles[pointer].answer ) {
        console.log( "wrong Answer" );
        incorrectScore++;
        if ( secondsLeft >= 0 ) {
            secondsLeft -= 20; 
            console.log( "incorrectScore: " + incorrectScore );
        }     
    } else {
        console.log("Correct Answer");
        correctScore++;
        console.log( "correctScore: " + correctScore );
    }
  }, 

  // Clear the inner HTML elements holding current riddle and answers
  clearInnerHTML: function() {
      riddleEl.innerHTML = "";
      answer1El.innerHTML = "";
      answer2El.innerHTML = "";
      answer3El.innerHTML = "";
      answer4El.innerHTML = "";
  }

} // End of functions object ___________________________________________

// Function begins the game
function beginGame() {
  
  myMethods.countDown();      // Starts the count down
  myMethods.hideIntro();      // Hides the start/info page
  myMethods.showGame();       // Displays the start game HTML elements
  myMethods.displayRiddle1(); // Displays the first riddle and answers
}
playBtnEl.addEventListener("click", beginGame); // When the play button is clicked run begin game


// User answer behavior 
// Display next riddle
// Log counters
function gameFlow(event) {
  
  // GET  user answer with event.target
  clickButtonContent = event.target.textContent;
  myMethods.answerCheck(clickButtonContent);
  myMethods.clearInnerHTML();
  pointer++;
  myMethods.displayNextRiddle();
}
startGameEl.addEventListener("click", gameFlow);

// Starting game play again
function playAgain(event) {


}
playAgainEl.addEventListener("click", playAgain);

// Submit initials form
function submitInitials(event) {
  event.preventDefault();

  // ToUppercase input
  // JSON stringify()
  // Set local storage
  // Get local storage
  // Parse return
}
submitBtnEl.addEventListener("click", submitInitials)