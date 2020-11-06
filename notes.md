# Task Notes

<!-- Global variablesl -->

* var interval; to do the "timed" functionality

<!-- look up setInterval function -->
* interval = setInterval( function() {}, 1000 );

* clearInterval to stop the timeOut

* var currentScore/timeLeft

* var riddles - Array

* var pointer/index - Current position in the riddles array

* var Begin button

```
<!-- an Array holding objects of -->
var riddles = [
    {
        // riddles text
        // list of riddles answers
        // correct annswer
        answer: "correct"
    }
]
```

Given I am taking a riddles quiz

When I click the `start button`
 
```
function startGame() {

}
```
`start button`.addEventListener("click", startGame);

Then a timer starts and I am presendted with a riddle

* Set starting score = 75 

* Start the interval to begin the score countdown

* Present the riddle = create new HTML elements for my riddle content

    > Set the #riddles div's innerHTML = ""; 
    > Append a H2 for the riddle text
    > Append a new button for each answer choice

    > var button = document.createElement("button");
    > button.textContent = riddleText;
    > button.setAttribute("data-choice", riddleText);

When I answer a riddle

* When the user clicks one of my answer buttons
    increase correct answer

When I answer a riddle incorrectly

    event.target.matches("button");

    <!-- inside of a click event listener -->
    > var clickButtonContent = event.target.textContent; 
    > var clickButtonContent = event.target.getAttribute("data-choice", riddleText); 

    <!-- comparison if statement -->
    > The riddle is correct with clickButtonValue == riddles[pointer].answer

Then time is subtracted from the clock

    > Subtract points from current score.

Then I am presented with another question

* Increase our pointer by 1

* Present the next riddle

<!-- if pointer == riddles.length - 1 -->
When all riddles are answered or the timer reaches 0

Then the game is over

    > clearInterval( interval );
    > clear out current riddle or hide the #riddles element
    > Show our results form for getting the user's initials

When the game is over
Then I can save my initials and score

    > On my initials form "submit"

        > var highscores = [];
        > Get the currently saved highscores out of localStorage.getItem("highscores")
        > if( stored highscores ) highscores = JSON.parse( stored high scores )
        > else highscores = [];
        > Create a new list
        > Get the value of the initials input
        > Append a oject with the initial's and score
        > Store our list of highschores in local storage

        

        Gollum art from https://www.jing.fm/iclip/TTwiiJ_gollum-hobbit-clipart/
        The Lonely Mountain art from https://www.jing.fm/iclip/TTwoiR_the-hobbit-smaug-kids-t-shirt-smaug-and/
        hobbit-header art from https://icon-library.com/icon/hobbit-icon-19.html
        Bilbo art from https://favpng.com/png_view/bilbo-baggins-brave-frontier-bilbo-baggins-the-hobbit-fan-art-clip-art-png/UhHWQrMz
        Gandalf art from https://clipartlook.com/img-237482.html
        One ring (gold) icon from https://icons8.com/icon/33125/one-ring
        One ring (tongue of mordor) art from https://www.pngwing.com/en/free-png-pqwef