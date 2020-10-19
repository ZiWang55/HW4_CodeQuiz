// variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
// questions in arrays
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which oneo f these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

// functions
// new functions

// variables for navigation buttons
// same code



function buildQuiz() {
  //adds pagination divs
  output.push(
    `<div class="slide">
    <div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>
    </div>`
  );
}

// pagination variables
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
// show first slide here
showSlide(currentSlide);

// eventListeners
// new eventListeners

// showing quiz results
function showResults() {

  // gethering answers
  const answerContainers = quizContainer.querySelectorAll('.answers');
  // keep track of user answers
  let numCorrect = 0;

  // for each question
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].getElementsByClassName.color='lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color='red';
      }
  });
// show number of correct answers from total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// function for showing slide
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.legnth-1){
    nextButton.style.display = 'none';
    submitButton.style.dsiplay = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
// display quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

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
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // combine output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}
