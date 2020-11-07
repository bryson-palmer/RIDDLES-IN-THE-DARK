
// Create array of high scores from form submition
var input_Array = [];
console.log(input_Array);
function highScores() {

    initials_ListEl = document.querySelector( "#initials-List" );
    initials_ListEl.innerHTML = "";

    if ( input_Array != [] ) {
        name_Scores = JSON.parse(localStorage.getItem( "user_Input" ));
        input_Array.push(name_Scores);
        console.log( name_Scores );
    
    } else ( input_Array = [] )
        
        var li = document.createElement("li");
        console.log("step one");
        li.textContent = name_Scores;
        console.log("step two");
        li.setAttribute( "data-name", name_Scores && "data-score", name_Scores );
        console.log("step three");
        initials_ListEl.appendChild(li);
        console.log("step four");
        

    // // ToUppercase input
    // var str = "Hello World!";
    // var res = str.toUpperCase()
    // // JSON stringify() SET
    // localStorage.setItem("user", JSON.stringify(user));
    // // Set local storage
    // // Get local storage
    // var lastUser = JSON.parse(localStorage.getItem("user"));
    // userFirstNameSpan.textContent = lastUser.firstName;
    // // Parse return
}

highScores();