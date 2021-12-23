

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

 //declare and create variables
  var body = document.body;
  var header = document.querySelector("header");
  var mainHeading = document.querySelector(".invite-h1");
  var container = document.createElement("div");
  var startButton = document.createElement("button");
  var questionDisplay = document.createElement("h1");
  var multipleChoice = document.createElement("ol");
  var li1 = document.createElement("li")
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");
  var timerDisplay = document.createElement("div");
  var finalScore = document.createElement("div");
  var reset = document.createElement("button");
  var back = document.createElement("button");
  var invitep = document.createElement("p");

// var correct = localStorage.getItem("correct");
// var incorrect = localStorage.getItem("incorrect");
//append newly created variables to HTML
  header.appendChild(questionDisplay);
  body.appendChild(container);
  container.appendChild(multipleChoice);
  multipleChoice.appendChild(li1);
  multipleChoice.appendChild(li2);
  multipleChoice.appendChild(li3);
  multipleChoice.appendChild(li4);
  body.appendChild(timerDisplay);
  body.appendChild(finalScore);
  body.appendChild(reset);
  body.appendChild(back);
  container.appendChild(invitep);
  container.appendChild(startButton);

  
  invitep.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalise your score time by ten seconds!"

  reset.setAttribute("style", "display: none");
  back.setAttribute("style", "display: none");
  container.setAttribute("style", "display: flex; flex-direction: column; justify-content: center");
  invitep.setAttribute("style", "dislay: flex; justify-content: space-around; padding-left: 12em; padding-right:12em; margin-left: 15em; margin-right: 15em");
  startButton.textContent = "Start Quiz";
  startButton.setAttribute("style", "background-color: #a3f1ee; color: rgb(37,37,3); border-radius: 20px; width: 20vh; font-size: 1.4em; padding: 2vh; margin-top: 4vh");


startButton.addEventListener("click", function(event) {
  event.stopPropagation();

  startQuiz();
});


function startQuiz() {

  // reset.setAttribute("style", "display: none");
  // back.setAttribute("style", "display: none");
  // startButton.setAttribute("style", "display: none");
  timerDisplay.setAttribute("style", "justify-self: flex-end");
  mainHeading.setAttribute("style", "display: none");
  invitep.textContent = "  ";
  startButton.setAttribute("style", "display: none");

  //syle newly created variables
  multipleChoice.setAttribute("style", "display: flex;");

  
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
    
    // create count variable
    var score = 0;
    var correct = 0;
    var incorrect = 0;
    var randomQuestion = QandA.question.length;
    var randomLi1 = QandA.answer.length;
    var randomLi2 = QandA.option1.length;
    var randomLi3 = QandA.option2.length;
    var randomLi4 = QandA.option3.length;

    console.log(randomQuestion + " " +  randomLi1 + " " +  randomLi2 + " " +  randomLi3 + " " + randomLi4);

    // start questions
    for (var i = 0; i <= randomQuestion.length; i++) {

        var index = QandA.question[i];
        randomQuestion--;
        questionDisplay.innerHTML = QandA.question[index];
      
        if (i < randomLi1.length) {
          var index = QandA.answer[i];
          randomLi1--;
          li1.textContent = QandA.answer[index];
        }
        if (i < randomLi2.length) {
          var index = QandA.option1[i];
          randomLi2--;
          li2.textContent = QandA.option1[index];
      }
        if (i < randomLi3.length) {
          var index = QandA.option2[i];
          randomLi3--;
          li3.textContent = QandA.option2[index];
    }
        if (i < randomLi4.length) {
          var index = QandA.option3[i];
          random--;
          li3.textContent = QandA.option3[index];
        } else {
          return;
        }

    }    

        // start timer and set else/if rules
        var timeLeft = 15;
        var timerInterval = setInterval(function() {
          if (timeLeft > 1) {
            timerDisplay.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
          } else if (timeLeft === 1) {
              timerDisplay.innerHTML = timeLeft + " second remaining";
              timeLeft--;
          } else {
                clearInterval(timerInterval);
                timerDisplay.innerHTML = "Time is up. The assessment is now concluded.";
          }
        }, 1000);//end set Interval


  //   if (lowercase) {
  //   selectedChars = selectedChars.concat(lowercaseRange);
  //   var index = Math.floor(Math.random() * lowercaseRange.length);
  //   var forceLower = lowercaseRange[index];
  //   forcedChars++
  //   newPassword += forceLower;
  // }
            
    // add event listener to the multiple choice options
    container.addEventListener("click", function(event) {
      var element = event.target;
//       //check if answer is correct
          if (element.matches(this.answer)) {
            score++;
            localStorage.setItem("correct", correct);
            correct++;
            container.setAttribute("style", "border-bottom: 2px red");
            container.textContent = "CORRECT";
            container.setAttribute("Style", "font-size: 3em, opacity: 50%")
          } else if (!element.matches(this.answer)) {
            localStorage.setItem("incorrect", incorrect);
            incorrect++;
            container.setAttribute("style", "border-bottom: 2px red");
            container.textContent = "INCORRECT";
            container.setAttribute("Style", "font-size: 3em, opacity: 50%")
            return;
          }  //else return
        });  //end event listener
//       };   //end for loop
}; //end loop