//Commonly used data types DO NOT include:
// strings, booleans, alerts, numbers
//String values must be enclosed within ______ when being assigned to variables.
// commas, curly brackets, quotes, parentheses
//The condition is an if/else statement is enclosed within ______.
// quotes, curly brackets, parentheses; square brackets
//Arrays in JavaScript can be used to store ______.
// numbers and strings, other arrays, booleans, all of the above
//A very useful tool used during development and debugging for printing content to the debugger is:
// JavaScript, termina/bash, for loops, console log
//All done!
//Your final score is
//Enter Initals [submit]
//Highscores
//Go Back
//Clear Highscores



//time to start when button is clicked
//when time starts - questions start
//if answer incorrect 10sec deducted from the clock
//when all questions answered or close is 0 game is over
//when game is over, save initials and score

var startButton = document.getElementById("start-button");
var timerDisplay = document.querySelector(".time");


function timer() {
    var timeLeft = 10;
    var timerInterval = setInterval(function() {
        if (timeLeft > 1) {
          timerDisplay.innerHTML = timeLeft + " seconds remaining";
          timeLeft--;
        } else if (timeLeft === 1) {
          timerDisplay.innerHTML = timeLeft + " second remaining";
          timeLeft--;
        } else {
          clearInterval(timerInterval);
          timerDisplay.innerHTML = "Time is up. The assessent has now ended."
        }
        }, 1000);
      }

startButton.addEventListener("click", function() {
  timer()
});
