
var playAgain = document.querySelector( "#play-Again" );
var clearAllEl = document.querySelector( "#clear-all" );
var initListEl = document.querySelector( "#initials-List" );

// Create array of high scores to hold objects of user info
var input_Array = []; 

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

    for ( i = 0; i < input_Array.length; i++ ) {  
        console.log("You made it in the for loop");

        var li = document.createElement("li");          // Create new li element and store it in var
        console.log(li);
        
        // Grab user initials and score in each object in array and assign to the text content of the li element
        li.textContent = input_Array[i].user_Initials + "..........." + input_Array[i].seconds_Left; 
        console.log(li.textContent);
 
        initListEl.appendChild(li);                     // Appending the content of li to parent element initListEl
    }
}
highScores();


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
clearAllEl.addEventListener("click", clearAll); // When user clicks the play again button run play again high scores