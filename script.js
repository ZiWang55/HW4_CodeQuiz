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

function buildQuiz() {}
function showResults() {}

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

// // stored list of answer choices
// const answers = [];

// // for each available answer
// for (letter in currenQuestion.answers){

//     // HTML radion button
//     answers.push(

//     )
// }
