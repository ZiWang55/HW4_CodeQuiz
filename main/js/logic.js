// QUIZ QUESTIONS, ANSWERS AND RESULTS


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

// function for showing slide
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
    endscreen.style.display = "block";
queContainer.style.display = "none";
showResults()
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

// functions for showSlide
function showNextSlide() {
  if(currentSlide < slides.length -1 ) {
    currentSlide++
      showSlide(currentSlide);
  }
else {
  nextButton.style.display = "none";
  submitButton.style.display = "inline-block";
  endscreen.style.display = "block";
queContainer.style.display = "none";
showResults()
}
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
let score = 0

// variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const queContainer = document.querySelector(".quiz-container")
const endscreen = document.getElementById("endscreen");
endscreen.style.display = "none";
queContainer.style.display = "none";
// questions in arrays
// start quiz function

// display quiz
buildQuiz();

// pagination variables
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// show first slide here
showSlide(currentSlide);

// on submit, show results
submitButton.addEventListener("click", saveUser);
// eventListeners for slide
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);



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


function start() {
  var x = document.getElementById("startscreen");
  queContainer.style.display = "block";
  x.style.display = "none";
 
 startTimer()
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
