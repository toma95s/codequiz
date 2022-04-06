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

//eventListeners
startButton.addEventListener('click',)
//need to have a function for the time
function timer(){

}
//function to start the quiz
function startQuiz(){
    
}

//need to have a function adjust the time using math when it's an incorrect answer

//need to have a function that uses the questions

//the answers will need to be a button, append that button into the html from here?


//need a function to calculate score and adjust the timer

//need to see if anser is correct move on to the next and if answer is incorrect subtract time?

//function to display and store highschores

//need a function to end the quiz


