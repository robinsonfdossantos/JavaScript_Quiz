// **** QUESTIONS ****
const quizJavaScript = [
    {
        question: "How do you call a function called 'Quiz'?",
        answers: ["call Quiz()", "call function Quiz()", "Quiz function()", "Quiz()"],
        correctAnswer: 3
    },

    {
        question: "How to write an 'IF' condition in JavaScript?",
        answers: ["if i = 2", "if i == 2", "if (i == 2)", "if i = 2 then"],
        correctAnswer: 2
    },

    {
        question: "How to write the 'FOR' loop sintax?",
        answers: ["for (i = 0; i <= 2; i++)", "for (i = 0; 1 <= 2)", "for i = 1 to 10", "for (i <= 2; i++)"],
        correctAnswer: 0
    },

    {
        question: "How to add a comment in a line in JavaScript?",
        answers: ["' Example", "<!--Example-->", "// Example", "/* Example"],
        correctAnswer: 2
    },

    {
        question: "How to add a comment for multiple lines in JavaScript",
        answers: ["' Example '", "<!--Example-->", "// Example //", "/* Example */"],
        correctAnswer: 3
    },

    {
        question: "JavaScript and Java are th same?",
        answers: ["False", "True", "True, if you use both in a browser", "True, if you use both for desktop application"],
        correctAnswer: 0
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onmouseclick", "onchange", "onmouseselection"],
        correctAnswer: 0
    },
];

let currentQuestion = 0;

startQuiz()

// Button starts and disappear
function startQuiz() {
    startButton.addEventListener('click', function () {
        timeLeft = 30;
        questionsAnswered = 0;
        currentQuestion = 0;
        score = 0;
        document.querySelector("button").style.display = "none";
        document.getElementById("explain").style.display = "none";
        displayQuestion();
        hideScore();
        Timer();
    });
}

function hideScore() {
    document.getElementById("score-section").style.display = "none";
}

function showScore() {
    document.getElementById("score-section").style.display = "block";
}

hideScore();

// Start the quiz
function displayQuestion() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";

    const question = document.createElement("h2");
    question.textContent = quizJavaScript[currentQuestion].question;
    quiz.appendChild(question);

    // Display the answer options
    const answers = quizJavaScript[currentQuestion].answers;

    for (let i = 0; i < answers.length; i++) {
        const answer = document.createElement("button");
        answer.textContent = answers[i];
        answer.addEventListener("click", checkAnswer);
        quiz.appendChild(answer);
    }
}

// *** TIMER ***
var score = 0;
var timeLeft = 30;
var numQuestions = 7;
var questionsAnswered = 0;
var timer;

function Timer() {
    timer = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0 || questionsAnswered === numQuestions) {
            endQuiz();
            timeLeft = 0
        } else {
            document.getElementById("time").textContent = timeLeft;
        }

    }, 1000); // Update every second (1000ms)
}

// Function to check the user's answer
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = quizJavaScript[currentQuestion].answers[quizJavaScript[currentQuestion].correctAnswer];
    if (selectedAnswer === correctAnswer) {
        score++;
        questionsAnswered++;
    } else {
        questionsAnswered++;
        timeLeft -= 5;
    }
    currentQuestion++;

    if (currentQuestion < quizJavaScript.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Display the results
function endQuiz() {
    clearInterval(timer);
    showScore();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").textContent = `Quiz Over! You scored ${score * 10}  points`;
    document.getElementById("score").textContent = `Your score is ${score} out of ${quizJavaScript.length}`;
}

// **** Save Score ****
saveButton.addEventListener('click', function () {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    const nameUser = document.getElementById('user').value;
    const scoreSaved = score * 10;
    const data = { user: nameUser, score: scoreSaved };

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    if (confirm("Your score has been saved. Play again?")) {
        location.reload();
    } else {
        quitGame();
    }
})

function quitGame() {
    const confirmQuit = confirm('Are you sure you want to quit the game?');
    if (confirmQuit) {
        window.close();
    } else {
        location.reload();
    }
}

