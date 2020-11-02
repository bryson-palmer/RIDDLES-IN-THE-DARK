
// Declaring and pointing to elements
var timeRemainEl = document.querySelector( "#time-remaining" ); 
var introEl = document.querySelector( "#intro" ); 
var playBtnEl = document.querySelector( "#play-button") ; 
var startGameEl = document.querySelector( "#startGame" ); 
var hiddenEl = document.querySelector( ".hidden");
var riddleEl = document.querySelector( "#riddle" ); 
var answer1El = document.querySelector( "#answer1" ); 
var answer2El = document.querySelector( "#answer2" ); 
var answer3El = document.querySelector( "#answer3" ); 
var answer4El = document.querySelector( "#answer4" ); 
var endGameEl = document.querySelector( "#endGame" ); 
var initialsEl = document.querySelector( "#initials" ); 
var submitBtnEl = document.querySelector( "#submitBtn" ); 

//  Global variables
var timeScore; // Time remaining and final score

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
      answer1: "Sword",
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
]; console.log(riddles[0].riddle);

// Empty riddles container. Will be passing objects from the riddles array to the empty.
var emptyRiddles = [];

// Functions to be used in the game
var functions = {
  
  // Subtract time and stop timer
  subTime: function() {
    setInterval(function() {
      if ( secondsLeft <= 0 ) {
        clearInterval( secondsLeft = 0 )
      }  
      timeRemainEl.innerHTML = secondsLeft
      secondsLeft--
      console.log( secondsLeft );
    }, 1000)
  }, 
  
  // Hide start page (intro)
  hide: function() {
    introEl.textContent = " ";
    console.log(introEl);
  },

  // Show game page
  showStart: function() {
    var displaySetting = startGameEl.style.display;
    if ( !displaySetting == "none" ) {
      startGameEl.style.display = "none";
    } else {
      startGameEl.style.display = "flex"
    }
      console.log(startGameEl.style.display);  
  },

  // Show end game page
  showEnd: function() {
    var displaySetting = endGameEl.style.display;
    if ( !displaySetting == "none" ) {
      endGameEl.style.display = "none";
    } else {
      endGameEl.style.display = "flex"
    }
      console.log(endGameEl.style.display);  
  },

  // Display riddle and questions
  displayRiddle: function() {
    for ( var i = 0; i < riddles.length - 1; i++ ) {
      riddleEl.innerHTML = riddles[i].riddle;
      answer1El.innerHTML = riddles[i].answer1; 
      answer2El.innerHTML = riddles[i].answer2;
      answer3El.innerHTML = riddles[i].answer3;
      answer4El.innerHTML = riddles[i].answer4;
     
    } console.log(riddles[i].riddle);
      console.log(riddles[i].answer1);
  },

}

// set clock to 75 seconds and display it
var secondsLeft = 75;
timeRemainEl.innerHTML = secondsLeft;


// function begins the game
function beginGame() {
  
  functions.subTime();
  functions.hide();
  functions.showStart();
  functions.displayRiddle();
}

playBtnEl.addEventListener("click", beginGame);
