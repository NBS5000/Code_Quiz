// section 1 - first page
// start quiz button click event to next section
// section 2 - questions and multiple choice
// hover property
// loop for each question
// show correct or incorrect
// click event to go to next section
// section 3 - show final score and log initials
// submit click event to go to next section
// section 4 - show highscores 
// submit click event go back/reset highscores




//****section 1****/

// declare variables for existing element in firstPage section
var firstPage = document.querySelector(".firstPage");

// declare variables for new elements in firstPage section & append
var firstPageh1 = document.createElement("h1");
firstPageh1.textContent = "Coding Quiz Challenge";
firstPageh1.setAttribute("class", "h1");

var firstPagep = document.createElement("p");
firstPagep.textContent = "Try to answer the following code-related questions within the time limit.  Keep in maind that incorect answers will penalize your scoretime by ten seconds!";
firstPagep.setAttribute("class","para");

var firstPagebtn = document.createElement("button");
firstPagebtn.textContent = "Start Quiz";
firstPagebtn.setAttribute("class", "btn");

firstPage.append(firstPageh1, firstPagep, firstPagebtn);

// add event listener to start button
firstPagebtn.addEventListener("click", startQuiz);


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
//****section 2****/

function startQuiz() {

  // first page section no longer displays 
  firstPage.setAttribute("style", "display: none");

  // declare variable for existing element in multipleChoice section
  var multipleChoice = document.querySelector(".multipleChoice");

  // declare variables for new elements in multipleChoice section & append
  var timerDiv = document.createElement("div");
  timerDiv.setAttribute("class", "timerDiv dflex-r");

  var choicesDiv = document.createElement("div");
  choicesDiv.setAttribute("class", "choicesDiv dflex-c");

  multipleChoice.append(timerDiv, choicesDiv);

  var displayTitle = document.createElement("a");
  displayTitle.setAttribute("href", "#");
  displayTitle.textContent = "View Highscores";
  displayTitle.setAttribute("style", "font-size 14px");

  var displayTimer = document.createElement("div");
  displayTimer.setAttribute("style", "font-size: 14px; align-items: flex-end; text-align: right; margin-right: 20px");

  timerDiv.append(displayTitle, displayTimer);

  var questionh2 = document.createElement("h2");  
  questionh2.textContent = " -";
  questionh2.setAttribute("style", "text-align: left");
  
  var aTag = document.createElement("a");
  
  var olEl = document.createElement("ol");
  olEl.setAttribute("class", "dflex-c");

  var result = document.createElement("div");
  result.setAttribute("class", "result")
 
  choicesDiv.append(questionh2, aTag, result);
  choicesDiv.setAttribute("style", "margin-left: 120px")
   
  var choice1 = document.createElement("li");
  choice1.textContent = " - ";

  var choice2 = document.createElement("li");
  choice2.textContent = " -";

  var choice3 = document.createElement("li");
  choice3.textContent = " - ";

  var choice4 = document.createElement("li");
  choice4.textContent = " - ";

  aTag.append(olEl);
  olEl.append(choice1, choice2, choice3, choice4);


  // var questions = [
  //   {
  //     title: "How are you?",
  //     choices: [
  //       {
  //         title: "Good",
  //         isAnswer: true,
  //       },
  //       {
  //         title: "Bad",
  //         isAnswer: false,
  //       }
  //     ]
  //   },
  //   {
  //     title: "How are doin?",
  //     choices: [
  //       {
  //         title: "bloody good",
  //         isAnswer: true,
  //       },
  //       {
  //         title: "Bad",
  //         isAnswer: false,
  //       }
  //     ]
  //   },
  // ]

  // set arrays for all questions and multiple choices
  var questions = ["Commonly used data types DO NOT include: ", "String values must be enclosed within ______ when being assigned to variables.",
  "The condition is an if/else statement if enclosed within ______.", "Arrays in JavaScript can be used to store ______.",
  "A very useful tool used during development and debugging for printing content to the debugger is:"];
  
  var correctAnswers = ["alerts", "quotes", "parentheses", "all of the above", "console log"];
  
  var choices2 = ["strings", "commas", "quotes", "numbers and strings","JavaScript"];
  
  var choices3 = ["booleans", "curly brackets", "curly brackets", "other arrays","termina/bash"];
  
  var choices4 = ["numbers", "parentheses", "square brackets", "booleans", "for loops"];

  // set count variables
  var questionCount = questions.length;
  var choicesCount = questionCount-1;
  console.log(questionCount);
  console.log(choicesCount);


  // [4,3,1,2,0]
  // shuffle

  
  // shuffle the indices -- the order of the qs that we want to show to the user
  var questionIndices = shuffle(Array.from(questions.keys()));


  var currentQuestion = 0;

  function renderQuestion(questionIndex){

    // get the qs
    // get the choices
    questionh2.textContent = questions[questionIndex];
  
    // randomise the choice order, so 1st option is not always correct
  
    var choices = shuffle([
      {
        title: correctAnswers[questionIndex],
        isCorrect: true
      },
      {
        title: choices2[questionIndex],
        isCorrect: false
      },
      {
        title: choices3[questionIndex],
        isCorrect: false
      },
      {
        title: choices4[questionIndex],
        isCorrect: false
      },
    ]);
  
    choice1.textContent = choices[0].title;
    choice1.setAttribute('data-answer', choices[0].isCorrect);
  
    choice2.textContent = choices[1].title;
    choice2.setAttribute('data-answer', choices[1].isCorrect);
    
  
    choice3.textContent = choices[2].title;
    choice3.setAttribute('data-answer', choices[2].isCorrect);
  
    choice4.textContent = choices[3].title;
    choice4.setAttribute('data-answer', choices[3].isCorrect);
  
  
    // attach even
    
    // random
  
    // get the ans
  }

  renderQuestion(questionIndices[currentQuestion]);

  
   

    aTag.addEventListener("click", function(event) {
      var element = event.target;
      console.log(element);

    
      if (!element.matches("li")) {
        return;
      }
      
      // user clicked on a choice
      currentQuestion++;
      var isCorrect = element.getAttribute('data-answer') === 'true';
      if(isCorrect){
        // display correct at the  bottom
        result.textContent = "Correct!";
        localStorage.setItem("time", timeLeft);

      }else{

        timeLeft = timeLeft - 10;
        displayTimer.textContent = timeLeft;
        localStorage.setItem("time", timeLeft);
        result.textContent = "Wrong!";
        aTag.setAttribute("style", "border-bottom: 2px solid rgb(109, 107, 107");
        
      }
      if(currentQuestion >= questionIndices.length){
        return FinalScoreDisplay();
      }

      // no delay
      setTimeout(function(){
        result.textContent =""
        renderQuestion(questionIndices[currentQuestion]);
      }, 1000);

  
       
    });

  // start timer and set else/if rules
        var timeLeft = 60;
        var timerInterval = setInterval(function() {
          timeLeft--;

      

          if (timeLeft <= 0) {
            displayTimer.textContent = timeLeft;
            clearInterval(timerInterval);
            olEl.setAttribute("style", "display: none");
            questionh2.textContent = "Time is up. The assessment is now concluded.";
            result.setAttribute("style", "display: none");
            aTag.setAttribute("style", "display: none")
            FinalScoreDisplay();
          } else {
            displayTimer.textContent = "Time:  " + timeLeft;
          }

        }, 1000);//end set Interval
  
    
        

 
    // create click event on aTag

   

    // declare variable for existing element in finalScore section
    var finalScore = document.querySelector(".finalScore");
    finalScore.setAttribute('style', "display:none");
    finalScore.setAttribute("class", "finalScore dflex-c");

    // declare variables for new elements in finalScore section & append
    var finalScoreh2 = document.createElement("h2");
    finalScoreh2.setAttribute("class", "finalScoreh2")

    var finalScoreCount = document.createElement("div");
    finalScoreCount.setAttribute("class", "finalScoreCount");
    finalScoreCount.textContent = " ";

    var finalScoreForm = document.createElement("form");
    finalScoreForm.setAttribute("class", "dflex-r");

    var finalScoreInputLabel = document.createElement("label");
    finalScoreInputLabel.textContent = "Enter initals: ";


    var finalScoreInput = document.createElement("input");
    finalScoreInput.setAttribute("type", "text");
    finalScoreInput.setAttribute("style", "width: 160px; border: solid #a3f1ee");
    
    var finalScoreSubmit = document.createElement("input");
    finalScoreSubmit.setAttribute("type", "submit");
    finalScoreSubmit.setAttribute("value", "Submit");
    finalScoreSubmit.setAttribute("style", "marign: 0; background: #a3f1ee; color: rgb (37, 37, 37); width: 80px; margin-left: 10px");

    finalScore.append(finalScoreh2, finalScoreCount, finalScoreForm);
    
    finalScoreForm.append(finalScoreInputLabel, finalScoreInput, finalScoreSubmit);
    finalScoreForm.setAttribute("style", "display: inline");
    
    //funciton to display final score

    function FinalScoreDisplay() {
      multipleChoice.setAttribute("style", "display: none");
      finalScore.setAttribute("style", "display: block; margin-left: 120px");
      finalScoreh2.textContent = "All done!"
      finalScoreCount.textContent = "Your final score is " + localStorage.getItem("time");
  
    };

    finalScoreSubmit.addEventListener("click", function(event) {
      event.preventDefault();


      localStorage.setItem("lastUser", finalScoreInput.value);
      // var existingHighscores = JSON.parse(localStorage.getItem('highscores')) || [];

      // existingHighscores.push({
      //   inital: finalScoreInput.value,
      //   score: timeLeft,
      // });
      // localStorage.setItem('highscores', JSON.stringify(existingHighscores))
      


      highScoresDisplay();
    });

    
    // declare variable for existing element in highScores section
    var highScores = document.querySelector(".highScores");
    highScores.setAttribute("class", "highScores dflex-c");
    highScores.setAttribute("style", "margin-left: 120px");

    // declare variables for new elements in finalScore section & append
    var highScoresh2 = document.createElement("h2");
    highScoresh2.setAttribute("class", "highScoresh2");

    var highScoresdiv = document.createElement("div")
    highScoresdiv.setAttribute("class", "highScoresdiv");
    highScoresdiv.setAttribute("style", "width: 70%, background-colour: #a3f1ee");


    var highScoresform = document.createElement("form");
    highScoresform.setAttribute("class", "dflex-r");

    var goBacksubmit = document. createElement("input");
    goBacksubmit.setAttribute("type", "submit");
    goBacksubmit.setAttribute("value", "Go Back");
    goBacksubmit.setAttribute("style", "display: none");

    var clearHighScoressubmit = document.createElement("input")
    clearHighScoressubmit.setAttribute("type", "submit");
    clearHighScoressubmit.setAttribute("value", "Clear Highscores");
    clearHighScoressubmit.setAttribute("style", "display: none");

    

    highScores.append(highScoresh2, highScoresdiv, highScoresform);

    highScoresform.append(goBacksubmit, clearHighScoressubmit);

    function highScoresDisplay() {
      var time = localStorage.getItem("time");
      var lastUser = localStorage.getItem("lastUser");

      // var highscores = JSON.parse(localStorage.getItem("highscores")) || []

      // for (var index = 0; index < highscores.length; index++) {
      //   var highscore = highscores[index];

        // create new li

        // var li = document.createElement('li');


        // put t in hs div


        
      // }
      

      if (!time || !lastUser) {
        return;
      } else { 
        highScoresh2.textContent = "Highscores";
        highScoresdiv.textContent = localStorage.getItem("lastUser") + " - " + localStorage.getItem("time");
      }

      finalScore.setAttribute("style", "display: none");
      goBacksubmit.setAttribute("style", "marign: 0; background: #a3f1ee; color: rgb (37, 37, 37); width: 80px");
      clearHighScoressubmit.setAttribute("style", "marign: 0; background: #a3f1ee; color: rgb (37, 37, 37); width: 160px; margin-left: 10px");

      clearHighScoressubmit.addEventListener('click', function(event){
        event.preventDefault();
        localStorage.setItem("highscores", "");
      });
      

    }







    // create random postion for multiple choices
    var postioning = ["1", "2","3","4"]
    var qCount = questions.length;

  

  

    

} //end of startQuiz function


  // finalScore.setAttribute("style", "display: none");
var finalScore = document.querySelector("finalScore");
var highScores = document.querySelector("#highScores");
  
 
  // var correctAnswer = document.createElement("button")
  // var choice2 = document.createElement("button");
  // var choice3 = document.createElement("button");
  // var choice4 = document.createElement("button");
  
  // multipleChoice.appendChild(correctAnswer);
  // multipleChoice.appendChild(choice2);
  // // multipleChoice.appendChild(choice3);
  // // multipleChoice.appendChild(choice4);
  
  // multipleChoice.classList.add("container");
  // multipleChoice.setAttribute("style", "display: flex; flex-direction: column; justify-content: flex-start");
  // // reset.setAttribute("style", "display: none");
  // // back.setAttribute("style", "display: none");
  // // startButton.setAttribute("style", "display: none");
  // timerDisplay.setAttribute("style", "justify-self: flex-end");
  // mainHeading.setAttribute("style", "display: none");
  // para.textContent = "  ";
  // startButton.setAttribute("style", "display: none");
  // multipleChoice.setAttribute("style", "class: container; display: flex; flex-direction: column; justify-content: center");


  // //syle newly created variables
  // multipleChoice.setAttribute("style", "display: flex; justify-contents: center");

  
  
    
  //   // create count variable
  //   var score = 0;
  //   var correct = 0;
  //   var incorrect = 0;
  //   var randomQ = qandA.question.length;
  //   var randomA1 = qandA.correctAnswer.length;
  //   var randomA2 = qandA.choice2.length;
  //   var randomA3 = qandA.choice3.length;
  //   var randomA4 = qandA.choice4.length;

  //   console.log(randomQ + " " +  randomA1 + " " +  randomA2 + " " +  randomA3 + " " + randomA4);

  //   // start questions
  //   for (var i = 0; i <= randomQ; i++) {
  //        var index = qandA.question[i];
  //       currentQuestion.innerHTML = qandA.question[i];
  //       randomQ--;
      
  //       if (i <= randomA1) {
  //         var index = qandA.correctAnswer[i];
  //         correctAnswer.textContent = qandA.correctAnswer[i];
  //         randomA1--;
  //       }
  //       if (i <= randomA2) {
  //         var index = qandA.choice2[i];
  //          choice2.textContent = qandA.choice2[i];
  //          randomA2--;
  //     }
  //       if (i <= randomA3) {
  //         var index = qandA.choice3[i];
  //         choice3.textContent = qandA.choice3[i];
  //         randomA3--;
  //   }
  //       if (i <= randomA4) {
  //         var index = qandA.choice4[i];
  //         choice4.textContent = qandA.choice4[i];
  //         randomA4--;
  //       }
  //       // add event listener to the multiple choice options
  //       multipleChoice.addEventListener("click", function(event) {
  //         event.preventDefault(multipleChoice);

  //       var element = event.target;
  //         //check if answer is correct
  //         if (element.matches(qandA.correctAnswer)) {
  //           score++;
  //           localStorage.setItem("correct", correct);
  //           correct++;
  //           multipleChoice.setAttribute("style", "border-bottom: 2px red");
  //           multipleChoice.textContent = "CORRECT";
  //           multipleChoice.setAttribute("Style", "font-size: 3em, opacity: 50%")
  //         } else {
  //           localStorage.setItem("incorrect", incorrect);
  //           incorrect--;
  //           multipleChoice.setAttribute("style", "border-bottom: 2px red");
  //           multipleChoice.textContent = "INCORRECT";
  //           multipleChoice.setAttribute("Style", "font-size: 3em, opacity: 50%")
  //         }

  //         });  //end event listener
  //       }    

  //     




//time to start when button is clicked
//when time starts - questions start
//if answer incorrect 10sec deducted from the clock
//when all questions answered or close is 0 game is over
//when game is over, save initials and score
