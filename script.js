// variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz(){}
function showResults(){}

// display quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// questions in arrays
const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which oneo f these is a JavaScript package manager?",
        answers: {
            a: "Node.js";
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question:
    }
]
