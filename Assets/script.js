

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
var timerDisplay = document.querySelector(".timer-text");
var correct = localStorage.getItem("correct");
var incorrect = localStorage.getItem("incorrect");
var resetButton = document.querySelector(".reset-button");
var choices = document.querySelector(".multiple-choices");
var displayQuestion = document.querySelectorAll(".currentQuestion");
var finalScore = document.getElementById("finalScore");

startButton.addEventListener("click", questionsLoop);


function questionsLoop() {

  // start timer and set else/if rules
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
            timerDisplay.innerHTML = "Time is up. The assessent has now ended.";
      }
    }, 1000);//end set Interval

    //create object to store question and multiple choices
    var QandA = {
      question: ["Commonly used data types DO NOT include:", "String values must be enclosed within ______ when being assigned to variables.",
      "The condition is an if/else statement if enclosed within ______.", "Arrays in JavaScript can be used to store ______.",
      "A very useful tool used during development and debugging for printing content to the debugger is:"],
      answer: ["alerts", "quotes", "parentheses", "all of the above", "console log"],
      option1: ["strings", "commas", "quotes", "numbers and strings","JavaScript"],
      option2: ["booleans", "curly brackets", "curly brackets", "other arrays","termina/bash"],
      option3: ["numbers", "parentheses", "square brackets", "booleans", "for loops"],
      };
    
    // create variable to keep count
    var score = 0;
    
     // start questions
    for (var i = 0; i < QandA.question.length; i++) {
      var currentQuestion = QandA.question[i];
      displayQuestion.textContent = currentQuestion;
      property.getElementById("opt1").innerHTML = QandA.answer[i];
      property.getElementById("opt2").innerHTML = QandA.option1[i];
      property.getElementById("opt3").innerHTML = QandA.option2[i];
      property.getElementById("opt4").innerHTML = QandA.option3[i];
      // choices.children[2].textContent = QandA.option1[i];
      // choices.children[3].textContent = QandA.option2[i];
      // choices.children[4].textContent = QandA.option3[i];
      
        // add event listener to the multiple choice options
        choices.addEventListener("click", function(event) {
          var element = event.target;
       //check if answer is correct
          if (element.matches(this.answer)) {
            score++;
            localStorage.setItem("score", score);
            choices.setAttribute("style", "border-bottom: 2px red");
            var div = document.createElement("div");
            div.textContent = "CORRECT";
            choices.appendChild(div);
          } else {
            return;
          }  //else return
        });  //end event listener
      };   //end for loop
};//end loop
 

