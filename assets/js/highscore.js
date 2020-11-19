// Declaring and pointing to elements in the index html
var playAgain = document.querySelector( "#play-Again" );
var clearAllEl = document.querySelector( "#clear-all" );
var initListEl = document.querySelector( "#initials-List" );


var input_Array = []; // Create array of high scores to hold objects of user info
var tempArray = [];   // Empty array to hold only the scores to be sorted
var hsPointer = 0;        // Global high score pointer

// Runs the high scores page
function highScores( list ) {
    

    initListEl.innerHTML = ""; // Clear any vlaue inside the initListEl

    // Getting all values stored in user_Input object from storage, 
    // Parsing, and assigning to input_Array
    input_Array = JSON.parse(localStorage.getItem( "user_Input" ));

    if ( !input_Array ) {                               // If array is null/empty
        input_Array = [];                               // Define as an empty array
    }
    console.log(input_Array)                            // Log check array of objects

    sortHighScores();                                   // Call functin sorting high scores list from highest to lowest
    
    for ( i = 0; i < input_Array.length; i++ ) {        // For loop moving through input array

        var li = document.createElement("li");          // Create new <li> element and store it in var
        
        // Grab every object of user initials and score in array and assign to the text content of the li element
        li.textContent = input_Array[i].user_Initials + "..........." + input_Array[i].seconds_Left; 
        console.log(li.textContent);
 
        initListEl.appendChild(li);                     // Appending the content of li to parent element initListEl
    }
}
highScores();                                           // Call highscores function

// Sorts high scores from highest to lowest             
function sortHighScores() {
    
    function compareObjects( object1, object2, key ) { // Function for comparing objects at a specific key
        var obj1 = object1[key];                       // New variable holding object 1 key value
        var obj2 = object2[key];                       // New variable holding object 2 key value

        if (obj1 < obj2) {                             // If obj1 is less than obj2
            return 1;                                  // Return 1
        }
        if (obj1 > obj2) {                             // If obj1 is greater than obj2
            return -1                                  // Return -1
        }
        return 0;                                      // Return 0 if both obj1 === obj2
    }

    input_Array.sort((score1, score2) => {             // Sort method sorting input array and passing score1 and score2 as arguments
        return compareObjects(score1, score2, 'seconds_Left') // Return compare objects method returns sorted score from High to low
    })
}


// Starting game play again
// From the high scores page
function playAgainHS() {
    location.assign( "index.html" );
}  
playAgain.addEventListener("click", playAgainHS); // When user clicks the play again button run play again high scores


// Clearing names and scores of high scores screen
function clearAll() {

    for ( i = 0; i < input_Array.length; i++ ) {  // For loop to run through the length of the array
        initListEl.remove();                      // Removes element from DOM
        localStorage.clear();                     // Clears local storage
    }
}  
clearAllEl.addEventListener("click", clearAll); // When user clicks the clear all button run clearAll high scores