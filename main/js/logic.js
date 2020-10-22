// QUIZ QUESTIONS, ANSWERS AND RESULTS
// variables
let currentQuestionIndex = 0
let time = questions.length * 15;
let timerId;

const questionsEl = document.getElementById("questions");
const timerEl = document.getElementById("time");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");
const initialsEl = document.getElementById("initials");
const feedbackEl = document.getElementById("feedback");

// questions in arrays
// start quiz function
function start() {
  var startScreenEl = document.getElementById("startscreen");
  startScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);
  
  timerEl.textContent = time;

  getQuestion()

}
// function for displaying current question
function buildQuiz() {
  // variable for storing HTML output
  const output = [];

  // for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable for list of possible answers
    const answers = [];

    // for each available answer
    for (letter in currentQuestion.answers) {
      // HTML radio button
      answers.push(
        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
      <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            </div>`
    );
  });

  // combine output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

// showing quiz results
function showResults() {
  // gethering answers
  const answerContainers = quizContainer.querySelectorAll(".answers");
  // keep track of user answers
  let numCorrect = 0;

  // for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].getElementsByClassName.color =
        "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });
  // show number of correct answers from total
  score=numCorrect;
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}



let score = 0



// display quiz
buildQuiz();



// show first slide here



function startTimer(){
  var counter = 40;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}




function saveUser () {
  let user = document.getElementById("name").value;
  var userList = JSON.parse(localStorage.getItem("userDetails"))||[]
  userList.push({
    user:user,
    score:score,
  })
  localStorage.setItem("userDetails",JSON.stringify(userList))
  console.log(user);
}
