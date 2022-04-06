/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/


// Questions for quiz: https://www.interviewbit.com/javascript-mcq///

const quizQuestions = [
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
   choices:{
    a: "stringify ()",
    b: "parse ()",
    c: "convert ()",
    d: "None of the above"
   },
    correctAnswer: "a"
},
{
    question: "What does the Javascript “debugger” statement do?",
   choices:{
    a: "It will debug all the errors in the program at the runtime",
    b: "It acts as a breakpoint in a program",
    c: "It will debug error in the current statement if any",
    d: "All of the above"
   },
    correctAnswer: "b"
},
{
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
   choices:{
    a: "Boolean",
    b: "Undefined",
    c: "Object",
    d: "Integer"
   },
    correctAnswer: "c"
},
{
    question: "What keyword is used to check whether a given property is valid or not?:",
   choices:{
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies"
   },
    correctAnswer: "a"
},
{
    question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
   choices:{
    a: "Both the datatype and the result of the expression are compared.",
    b: "Only the datatype of the expression is compared",
    c: "Only the value of the expression is compared",
    d: "None of the above"
   },
    correctAnswer: "a"
},
{
    question: "How can a dataype be declared to be a constant type?",
   choices:{
    a: "const",
    b: "var",
    c: "let",
    d: "constant"
   },
    correctAnswer: "a"
}]

//need to initialize variables
const startButton = document.getElementById("startQuiz");
const nextButton = document.getElementById("nextButton");
const questionsQuiz =document.getElementById("questions"); 
const answersQuiz = document.getElementById("answers");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");

var totalTime = 120;
var currentQuestion;
var choiceButton;

//add start button listener
startButton.addEventListener("click",startQuiz);
//need to have a function for the time
function timer(){
var intervalTime = setInterval(function(){
    totalTime--;
    timer.textcontent = totalTime;
    if(totalTime <=0){
        clearInterval(intervalTime);
        return;
    }
},1000);
return intervalTime;
}
    


//function to start the quiz
function startQuiz(){
console.log("Start!");
startButton.addEventListener('click',timer);  
startButton.classList.add('hide');

document.querySelector(".container").style.display = "none";
quiz.style.display = "block";

currentQuestion = 0;

}
//need a function to move to next question
//need to have a function that uses the questions
function nextQuestion(){
    var questionTest = quizQuestions[currentQuestion];
    var quizChoices = questionTest.choices;

    var headerQuestion = document.getElementById("questions");
    headerQuestion.textContent = questionTest.question;

    for (var i = 0; i<quizChoices.length; i++){
        var choice = quizChoices[i];
        var choiceButton = document.querySelector("#answer"+i);
        choiceButton.textContent = choice;
    }
}
// function nextQuestion(){
//     var arrayQuiz = [];
//     for (var i=0; i<quizQuestions.length;i++){
//         arrayQuiz =
//     }
// }

document.querySelector("#answers").addEventListener("click",checkanswer);

//need variables for validation
const validateText = document.getElementById("validationDisplay");

//need to have a function to validate answers
//need to see if anser is correct move on to the next and if answer is incorrect subtract time?
function checkanswer(){
    validateText.textContent=" "
    //validateText.style.display="block";

    //need to somehow compare the text of the choice button with the current answer to the CURRENT question
    //need a function for this in order to use the event.target
    //need a function to calculate score and adjust the timer
    //need to have a function adjust the time using math when it's an incorrect answer
    if(choiceButton.textContent === quizQuestions[currentQuestion].correctAnswer){
        validateText.textContent = "Correct!";
        setTimeout(function(){
            validateText.style.display = "none"},1000);
        timer.textContent = totalTime + "seconds";
    }
    else{
        validateText.textContent = "WRONG!"
        setTimeout(function(){validateText.style.display="none"},1000);
        
        if(totalTime >= 10){
            totalTime -= 10;
            timer.textContent = totalTime + "seconds";
        }
        else{
            timer = 0;
            console.log("QUIZ OVER");
            endquiz();
        }
    }

}










//function to display and store highschores

//need a function to end the quiz
// function endquiz(

// )


