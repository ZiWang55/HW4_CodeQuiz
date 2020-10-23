// variables
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

let questionsEl = document.getElementById("questions");
let timerEl = document.getElementById("time");
let choicesEl = document.getElementById("choices");
let submitBtn = document.getElementById("submit");
let startBtn = document.getElementById("start");
let initialsEl = document.getElementById("initials");
let feedbackEl = document.getElementById("feedback");

// start quiz function
function start() {
  // hide start screen
  var startScreenEl = document.getElementById("startscreen");
  startScreenEl.setAttribute("class", "hide");
  // show question
  questionsEl.removeAttribute("class");
  // start timer
  timerId = setInterval(clockTick, 1000);
  // show the timer
  timerEl.textContent = time;

  buildQuiz();
}
// function for displaying current question
function buildQuiz() {
  // get current question
  let currentQuestion = questions[currentQuestionIndex];

  // for each question title
  let titleEl = document.getElementById("quiz-title");
  titleEl.textContent = currentQuestion.title;

  // clear out old question choices
  choicesEl.innerHTML = "";

  // loop choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create button for choice
    let choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;
    // add eventListner for each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // if wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // time penalty
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    // display time on page
    timerEl.textContent = time;

    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // flash feedback on page
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // check if end
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    buildQuiz();
  }
}

function quizEnd() {
  // timer stop
  clearInterval(timerId);

  // show end screen
  let endScreenEl = document.getElementById("endscreen");
  endScreenEl.removeAttribute("class");

  // show score
  let finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide question
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // time update
  time--;
  timerEl.textContent = time;

  // endquiz when out of time
  if (time <= 0) {
    quizEnd();
  }
}

function highScore() {
  let initials = initialsEl.value.trim();
  // making sure no empty value
  if (initials !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // new score for current user
    let newScore = {
      score: time,
      initials: initials,
    };

    // saving to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // direct to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    highScore();
  }
}

// user click submit button
submitBtn.onclick = highScore;
// user click start button
startBtn.onclick = start;

initialsEl.onkeyup = checkForEnter;
// OLD CODE, DID NOT ACHEIVE WHAT I WANTED AND WAS TOO COMPLICATED.
//     // for each available answer
//     for (letter in currentQuestion.answers) {
//       // HTML radio button
//       answers.push(
//         `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} :
//                     ${currentQuestion.answers[letter]}
//                 </label>`
//       );
//     }

//     // add this question and its answers to the output
//     output.push(
//       `<div class="slide">
//       <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//             </div>`
//     );
//   });

//   // combine output list into one string of HTML and put it on the page
//   quizContainer.innerHTML = output.join("");
// }

// // showing quiz results
// function showResults() {
//   // gethering answers
//   const answerContainers = quizContainer.querySelectorAll(".answers");
//   // keep track of user answers
//   let numCorrect = 0;

//   // for each question
//   myQuestions.forEach((currentQuestion, questionNumber) => {
//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     // if answer is correct
//     if (userAnswer === currentQuestion.correctAnswer) {
//       // add to the number of correct answers
//       numCorrect++;

//       // color the answers green
//       answerContainers[questionNumber].getElementsByClassName.color =
//         "lightgreen";
//     }
//     // if answer is wrong or blank
//     else {
//       // color the answers red
//       answerContainers[questionNumber].style.color = "red";
//     }
//   });
//   // show number of correct answers from total
//   score=numCorrect;
//   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }

// let score = 0

// // display quiz
// buildQuiz();

// // show first slide here

// function startTimer(){
//   var counter = 40;
//   setInterval(function() {
//     counter--;
//     if (counter >= 0) {
//       span = document.getElementById("count");
//       span.innerHTML = counter;
//     }
//     if (counter === 0) {
//         alert('sorry, out of time');
//         clearInterval(counter);
//     }
//   }, 1000);
// }

// function saveUser () {
//   let user = document.getElementById("name").value;
//   var userList = JSON.parse(localStorage.getItem("userDetails"))||[]
//   userList.push({
//     user:user,
//     score:score,
//   })
//   localStorage.setItem("userDetails",JSON.stringify(userList))
//   console.log(user);
// }
