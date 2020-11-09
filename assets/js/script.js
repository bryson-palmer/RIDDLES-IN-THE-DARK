
// Declaring and pointing to elements in the index html
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
var correctScore = 0;        // Counter for correct answers
var incorrectScore = 0;      // Counter for incorrect answers
var pointer = 0;             // Pointer used for moving through the array of objects
var clickButtonContent = ""; // Variable to hold the value of the user's current answer


var timeScore;                          // A global interval counter
var seconds_Left = 75;                  // A global time counter set to max time
timeRemainEl.innerHTML = seconds_Left;  // Printing time to html


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
    // {
    //   riddle: "Thirty white horses on a red hill, \nFirst they champ, \nThen they stamp, \nThen they stand still.",
    //   answer1: "Swords",
    //   answer2: "Dwarves",
    //   answer3: "Wargs",
    //   answer4: "Teeth",
    //   answer: "Teeth"
    // },
    // {
    //   riddle: "Voiceless it cries, \nWingless flutters, \nToothless bites, \nMouthless mutters.",
    //   answer1: "Wind",
    //   answer2: "Moth",
    //   answer3: "Eagle",
    //   answer4: "Dream",
    //   answer: "Wind"
    // },
    // {
    //   riddle: "An eye in a blue face, \nSaw an eye in a green face. \n'That eye is like to this eye' \nSaid the first eye, \n'But in low place, \nNot in high place.'",
    //   answer1: "A puddle",
    //   answer2: "The sun",
    //   answer3: "The sky",
    //   answer4: "The moon",
    //   answer: "The sun"
    // },
    // {
    //   riddle: "It cannot be seen, cannot be felt, \nCannot be heard, cannot be smelt. \nIt lies behind stars and under hills, \nAnd empty holes it fills. \nIt comes first and follows after, \nEnds life, kills laughter.",
    //   answer1: "Dark",
    //   answer2: "Silence",
    //   answer3: "Nothing",
    //   answer4: "Anger",
    //   answer: "Dark"
    // },
    // {
    //   riddle: "A box without hinges, key, or lid, \nYet golden treasure inside is hid.",
    //   answer1: "The heart",
    //   answer2: "Dragon hoard",
    //   answer3: "The mind",
    //   answer4: "An Egg",
    //   answer: "An Egg"
    // },
    // {
    //   riddle: "Alive without breath, \nAs cold as death; \nNever thirsty, ever drinking, \nAll in mail never clinking.",
    //   answer1: "Water",
    //   answer2: "A tree",
    //   answer3: "Fish",
    //   answer4: "A rock",
    //   answer: "Fish"
    // },
    // {
    //   riddle: "No-legs lay on one-leg, \ntwo-legs sat near on three-legs, \nfour-legs got some.",
    //   answer1: "Foot on a box, feet on a stool, dog gets the scraps",
    //   answer2: "Fish on a table, man on a stool, cat gets the scraps",
    //   answer3: "Water in a skin, hobbit on an uruk hai, riders of rohan",
    //   answer4: "Ring on finger, fingers in hand, hand holds sword, and battles man",
    //   answer: "Fish on a table, man on a stool, cat gets the scraps"
    // },
    // {
    //   riddle: "This thing all things devours: \nBirds, beasts, trees, flowers; \nGnaws iron, bites steel; \nGrinds hard stones to meal; \nSlays king, ruins town, \nAnd beats high mountain down.",
    //   answer1: "Time",
    //   answer2: "Dragon",
    //   answer3: "Water",
    //   answer4: "Lava",
    //   answer: "Time"
    // },
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
    
    timeScore = setInterval(function() {    // Storing the value setInterval returns in timeScore
    timeRemainEl.innerHTML = seconds_Left;  // Display time
      
      if ( seconds_Left <= 0 ) {                             // If seconds reach 0 or less
        startGameEl.removeEventListener("click", gameFlow);  // Remove click for start game button
        myMethods.stopCountdown();                           // Stop timer 
        timeRemainEl.innerHTML = 0;                          // Assign and display 0 for time
        myMethods.revealGandalf();                           // Reveal Gandalf method
        console.log( "*Reveal Gandalf*" );                   // Log final counts
        console.log( "Time: " + seconds_Left);
        console.log( "FINAL Correct Score: " + correctScore );
        console.log( "FINAL Incorrect Score: " + incorrectScore );
        return;
      }  
    seconds_Left--; // Decrements the time by one second
    }, 1000);
  }, 

  // Stop timer and display its value
  stopCountdown: function() {
    
    clearInterval( timeScore );              // Clear timeScore interval
    timeRemainEl.innerHTML = seconds_Left;   // Display where the timer stopped
  },
  
  // Hide start page (intro)
  hideIntro: function() {
    var displaySetting = introEl.style.display; // Variable holding the style property of introEl
    if ( !displaySetting == "none"); {          // If display setting is not "none"
      introEl.style.display = "none";           // Then set the display setting to "none"
    }  
  },

  // Show game page
  showGame: function() {
    var displaySetting = startGameEl.style.display; // Variable holding the style property of startGameEl
    if ( !displaySetting == "none" ) {              // If display setting is not "none"
        startGameEl.style.display = "none";         // Then set the display setting to "none"
    } else 
        startGameEl.style.display = "flex";         // Else set the display setting to "flex" 
        console.log("Show Game");                   // Log check
  },

  // Show end game page
  showEnd: function() {
    var displaySetting = endGameEl.style.display; // Variable holding the style property of endGameEl
    if ( !displaySetting == "none" ) {            // If display setting is not "none"
        endGameEl.style.display = "none";         // Then set the display setting to "none"
    } else {
        endGameEl.style.display = "flex";         // Else set the display setting to "flex"
        startGameEl.style.display = "none";       // Hide startGameEl
        console.log( "*Show End*" );              // Log final counts
        console.log( "Time: " + seconds_Left);
        console.log( "FINAL Correct Score: " + correctScore );
        console.log( "FINAL Incorrect Score: " + incorrectScore );
    } 
  },
  
  // Reveal Gandalf
  revealGandalf: function() {
    startGameEl.style.display = "none"; // Hide
    endGameEl.style.display = "none";   // Hide 
    gandalfEl.style.display = "flex";   // Reveal Gandalf and play again button
    playAgainEl.style.display = "flex"; // Reveal playAgain button
  },

  // Display first riddle and answers 
  displayRiddle1: function() {
    riddleEl.innerHTML = riddles[pointer].riddle;
    answer1El.innerHTML = riddles[pointer].answer1; 
    answer2El.innerHTML = riddles[pointer].answer2;
    answer3El.innerHTML = riddles[pointer].answer3;
    answer4El.innerHTML = riddles[pointer].answer4;
    console.log( "Riddle 1 displayed" );
  }, 

  // Display next riddle                                          // Save for later use
  displayNextRiddle: function() {                                 // Math.floor(Math.random()*riddles.length - 1)

    if ( pointer < riddles.length ) {                             // If < length, then display next riddle 
      riddleEl.innerHTML = riddles[pointer].riddle;               // Display next riddle
      answer1El.innerHTML = riddles[pointer].answer1;             //
      answer2El.innerHTML = riddles[pointer].answer2;             //
      answer3El.innerHTML = riddles[pointer].answer3;             //
      answer4El.innerHTML = riddles[pointer].answer4;             //
      console.log( "Riddle " + ( pointer + 1 ) + " displayed.");  // log ponter of riddle
    } else {
      startGameEl.removeEventListener("click", gameFlow);         // Else remove the click listener
      myMethods.stopCountdown();                                  // Call the stop countdown method
      myMethods.showEnd();                                        // Show end screen with initials input form
      return;
    }
  },

  
  // Check answer
  answerCheck: function(clickButtonContent) {                          // Pass user's choice into function
    console.log( "The user's choice is (" + clickButtonContent + ") inside answerCheck()." ); // Log check
    
    // If user's choice does not equal the key answer and time is >= 0
    if ( clickButtonContent !== riddles[pointer].answer && seconds_Left >= 0 ) {
        console.log( "wrong Answer" );                                            // Log check wrong answer
        incorrectScore++;                                                         // Increment incorrect score
        seconds_Left -= 20;                                                       // Subtract 20 sec penalty
        console.log( "incorrectScore: " + incorrectScore );                       // Log incorrect score
      } else {
        console.log( "Correct Answer" );                                          // Log check correct answer
        correctScore++;                                                           // Increment correct score
        console.log( "correctScore: " + correctScore );                           // Log correct score
    }
  }, 

  // Clear the inner HTML elements 
  // Holding current riddle and answers
  clearInnerHTML: function() {
      riddleEl.innerHTML = "";
      answer1El.innerHTML = "";
      answer2El.innerHTML = "";
      answer3El.innerHTML = "";
      answer4El.innerHTML = "";
  }

} // End of functions object _________________________________________________________


// Function begins the game
function beginGame() {
  
  myMethods.countDown();      // Starts the count down
  myMethods.hideIntro();      // Hides the start/info page
  myMethods.showGame();       // Displays the start game HTML elements
  myMethods.displayRiddle1(); // Displays the first riddle and answers
}
playBtnEl.addEventListener("click", beginGame); // When the play button is clicked run begin game


// Function controls behavior of game
function gameFlow(event) {
  
  clickButtonContent = event.target.textContent;  // GET user answer with event.target
  
    myMethods.answerCheck(clickButtonContent);    // Call check answer and pass user's choice
    myMethods.clearInnerHTML();                   // Clear inner html elements
    pointer++;                                    // Increment the pointer value by 1
    myMethods.displayNextRiddle();                // Call display next riddle
}
startGameEl.addEventListener("click", gameFlow);  // When user clicks an answer run game flow


// Starting game play again
// Reload page
function playAgain() {
  location.reload();
}
playAgainEl.addEventListener("click", playAgain); // When user clicks the play again button run play again


// Submit initials form
function submitInitials(event) {
  event.preventDefault();         // Prevent submit button default

  // Getting all values stored in user_Input object from storage, 
  // Parsing, and assigning to input_Array
  input_Array = JSON.parse(localStorage.getItem( "user_Input" ));

    if ( !input_Array ) {   // If array is null/empty
        input_Array = [];   // Define as an empty array
    }

  var user_Initials = initialsEl.value.toUpperCase();                // Uppercasing user input value and storing in new var
  var user_Input = {                                                 // Declare new object of user_Input
    user_Initials: user_Initials,                                    // Holding Keys and vlaues
    seconds_Left: seconds_Left                                       // Initials and time (secondsLeft)
  };      
  
  console.log( "User initials or name: " + user_Initials );          // Log check initials

  input_Array.push(user_Input);                                      // Push user input into input_Array

  localStorage.setItem( "user_Input", JSON.stringify(input_Array));  // Setting user_Input values to storage, stringify array

  initialsEl.innerHTML = "";                                         // Clear inner html of element initialsEl
  
  location.assign( "highscore.html" );                               // Assigning a new html page highscore.html
  
  submitBtnEl.removeEventListener("click", submitInitials);          // Remove the listener for the click
  
}
submitBtnEl.addEventListener("click", submitInitials);  // When user clicks the submit button for their initials run