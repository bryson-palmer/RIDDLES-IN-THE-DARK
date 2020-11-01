
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
]

console.log(riddles[0].riddle);

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
