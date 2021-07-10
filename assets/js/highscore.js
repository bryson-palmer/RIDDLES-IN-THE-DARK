// Declaring and pointing to elements in the index html
const playGameAgainEl = document.querySelector( "#playGameAgain" );
const clearAllEl = document.querySelector( "#clearAll" );
let initialsListEl = document.querySelector( "#initialsList" );
let highScoresArray = []; // Create array of high scores to hold objects of user info

// Sorts high scores from highest to lowest             
const sortHighScores = () => {
    
    const compareHighscores = ( score1, score2, timeLeft ) => { // Function for comparing objects at a specific key
        let scoreOne = score1[timeLeft];                        // New variable holding object 1 key value
        let scoreTwo = score2[timeLeft];                        // New variable holding object 2 key value

        if (scoreOne < scoreTwo) {                              // If obj1 is less than obj2
            return 1;                                           // Return 1
        }
        if (scoreOne > scoreTwo) {                              // If obj1 is greater than obj2
            return -1                                           // Return -1
        }
        return 0;                                               // Return 0 if both obj1 === obj2
    }

    highScoresArray.sort((highScore1, highScore2) => {             // Sort method sorting input array and passing score1 and score2 as arguments
        return compareHighscores(highScore1, highScore2, 'secondsLeft') // Return compare objects method returns sorted score from High to low
    })
}

// Runs the high scores page
const highScores = () => {
    
    initialsListEl.innerHTML = ""; // Clear any vlaue inside the initialsListEl

    // Getting all values stored in userInput object from storage, 
    // Parsing, and assigning to highScoresArray
    highScoresArray = JSON.parse(localStorage.getItem( "userInput" ));

    if ( !highScoresArray ) {                               // If array is null/empty
        highScoresArray = [];                               // Define as an empty array
    }
    console.log(highScoresArray)                            // Log check array of objects

    sortHighScores();                                       // Call functin sorting high scores list from highest to lowest
    
    for ( i = 0; i < highScoresArray.length; i++ ) {        // For loop moving through input array

        let li = document.createElement("li");              // Create new <li> element and store it in var
        
        // Grab every object of user initials and score in array and assign to the text content of the li element
        li.textContent = highScoresArray[i].userName + "..........." + highScoresArray[i].secondsLeft; 
        console.log(li.textContent);
 
        initialsListEl.appendChild(li);                     // Appending the content of li to parent element initialsListEl
    }
}
highScores();                                           // Call highscores function

// Starting game play again
// From the high scores page
const playAgain = () => {
    location.assign( "index.html" );
}  
playGameAgainEl.addEventListener("click", playAgain); // When user clicks the play again button run play again high scores


// Clearing names and scores of high scores screen
const clearAll = () => {

    for ( i = 0; i < highScoresArray.length; i++ ) {  // For loop to run through the length of the array
        initialsListEl.remove();                      // Removes element from DOM
        localStorage.clear();                     // Clears local storage
    }
}  
clearAllEl.addEventListener("click", clearAll); // When user clicks the clear all button run clearAll high scores