var questionsContainerEl = document.querySelector("#questions");

var promptEl = document.querySelector("#question-prompt");
var choicesEl = document.querySelector("#question-choices");

var finalScoreEl = document.querySelector("#final-score");
var timerEl = document.querySelector("#countdown");

var feedbackEl = document.getElementById("right-wrong");
var highScoreScreenEl = document.getElementById("highscore-input");
var initialsEl = document.getElementById("player");

var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit")

var currentQuestion = 0;
var time = 100;
var timer;


var questions = [

    {
        prompt: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<javascript>", "<script>", "<js>"],
        answer: "<script>"
    },

    {
        prompt: "Where is the correct place to insert the JavaScript?",
        choices: ["The <head> section", "both the <head> section and the <body> section are correct", "the <body> section", "A <p> element"],
        answer: "the <body> section" 
    },

    {
        prompt: "What is the correct syntax for referring to an external script called `xxx.js`?",
        choices: ["<script name=`xxx.js`", "<script src=`xxx.js`>", "<script href=`xxx.js`>", "<script rel=`xxx.js`"],
        answer:  "<script src=`xxx.js`>"
    },

    {
        prompt: "The external JavaScript file must contain the <script> tag.",
        choices: ["true", "false"],
        answer: "false"
    }

];

var startQuiz = function() {
    
    var startInfoEl = document.querySelector(".start-info");
    startInfoEl.setAttribute("class", "hide");
    questionsContainerEl.removeAttribute("class");
    timer = setInterval(clock, 1000);
    timerEl.textContent = time;
    displayQuestion();

};

var displayQuestion = function() {

    var questionIndex = questions[currentQuestion];
    promptEl.textContent = questionIndex.prompt;
    choicesEl.innerHTML = "";

    questionIndex.choices.forEach(function(choices, i) {

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice btn btn-outline-primary")
        choiceBtn.setAttribute("value", choices);
        choiceBtn.textContent = i + 1 + ". " + choices;
        choiceBtn.onclick = choiceClick;
        choicesEl.appendChild(choiceBtn);

    });

}

var choiceClick = function() {

    if (this.value !== questions[currentQuestion].answer) {

        time -= 10;
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";

    } else {

        feedbackEl.textContent = "Correct!";

    };

    feedbackEl.setAttribute("class", "feedback");

    setTimeout(function() {

        feedbackEl.setAttribute("class", "feedback hide");

    }, 1000);

    currentQuestion++;

    setTimeout(() => {

        if (currentQuestion === questions.length) {

            endQuiz();

    } else {

        displayQuestion();

    };

    }, 1000);

};

var clock = function() {

    time--;
    timerEl.textContent = time;

    if (time <= 0) {

        endQuiz();

    }

};

var endQuiz = function() {
    clearInterval(timer);

    questionsContainerEl.setAttribute("class", "hide");

    highScoreScreenEl.removeAttribute("class");

    finalScoreEl.textContent = time;
};

var saveScore = function() {

    var initials = initialsEl.value.trim();

    if (initials !== "") {

        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var userScore = {

            score: time,
            initials: initials

        };

        highscores.push(userScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
        window.location.reload();

    };

};

submitBtn.onclick = saveScore;
startBtn.onclick = startQuiz;