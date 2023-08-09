//Variables - initialise targeted elements
//  Navigation and Info Bar controls
const homeInfoBarButton = document.getElementById("btn-home");

const quizDisplayButton = document.getElementById("btn-quiz");
const guideDisplayButton = document.getElementById("btn-guide");
const scoresDisplayButton = document.getElementById("btn-scores");

// Panels
const panelArea = document.getElementById("panel-area");
const welcomePanel = document.getElementById("welcome-panel");
const recUserPanel = document.getElementById("rec-user-panel");
const difficultyPanel = document.getElementById("select-difficult-panel");
const startQuizPanel = document.getElementById("start-quiz-panel");
const quizPanel = document.getElementById("quiz-panel");
const resultsPanel = document.getElementById("results-panel")
const guidePanel = document.getElementById("guide-panel");
const scoresPanel = document.getElementById("scores-panel");

// Panel Buttons
const displayQuiz = document.getElementById("btn-quiz");
const displayGuide = document.getElementById("btn-quide");
const displayScores = document.getElementById("btn-scores");

const quizLevel_1 = document.getElementById("btn-comrade");
const quizLevel_2 = document.getElementById("btn-vanguarde");
const quizLevel_3 = document.getElementById("btn-intelligencia");

//Quiz Navigation Buttons
const btnStart = document.getElementById("btn-start");
const btnNext = document.getElementById("btn-next");

// Quiz Buttons
const quizQuestion = document.getElementById("quiz-question");
const quizAnswer1 = document.getElementById("btn-answer-1");
const quizAnswer2 = document.getElementById("btn-answer-2");
const quizAnswer3 = document.getElementById("btn-answer-3");
const quizAnswer4 = document.getElementById("btn-answer-4");

// Global Variables - set start up default values
let currentPanel = "guide-panel";
let questionIndex = 0;

// Add event listeners

document.addEventListener("DOMContentLoaded", function () {
    // Info Bar controls
    homeInfoBarButton.addEventListener("click", displayWelcomePanel);

    // Panel Button controls
    quizDisplayButton.addEventListener("click", displayQuizPanel);
    guideDisplayButton.addEventListener("click", displayGuidePanel);
    scoresDisplayButton.addEventListener("click", displayScoresPanel);

    // Quiz controls
    btnStart.addEventListener("click", startQuiz);
    btnNext.addEventListener("click", nextQuestion);
})

// Define functions
// hide and display panel functions

function hidePanels() {
    // hide timers as well
    //        gameTimerDisplay.classList.add("hidden");
    //        questionTimerDisplay.classList.add("hidden");    

    let panels = document.getElementsByClassName("panel");
    for (let i = 0; i < panels.length; i++)
        panels[i].classList.add("hidden");
}

function displayWelcomePanel() {
    console.log("Welcome Panel");
    hidePanels();
    welcomePanel.classList.remove("hidden");
    currentPanel = "welcome-panel";
}

function displayQuizPanel() {
    console.log("Quiz Panel");
    hidePanels();
    quizPanel.classList.remove("hidden");
    currentPanel = "quiz-panel";
}

function displayScoresPanel() {
    console.log("Scores Panel");
    hidePanels();
    scoresPanel.classList.remove("hidden");
    currentPanel = "scores-panel";
}

function displayGuidePanel() {
    console.log("Guide Panel");
    hidePanels();
    guidePanel.classList.remove("hidden");
    currentPanel = "guide-panel";
}

// Quiz Navigation Functions
function startQuiz() {
    console.log("Start Quiz");
    questionIndex = 0; 
    displayQuizPanel();
    btnNext.style.display = "block";
    nextQuestion();
}

// Quiz Functions 
function nextQuestion() {
    if (questionIndex < quizQuestions.length) {
      let iQr = getRandomInt(0, 15);
      displayQandA(iQr);
      questionIndex += 1;
    } else {
        console.log("before setTime");
        setTimeout(function() {
          displayScoresPanel();
          iQ = 0;
        }, 2000);
    }
  }
  
function displayQandA(iQr) {
    // here goes the if statement to make the start quiz button dissapear
   /* if (btnStart.style.display !== "none"){
      console.log ("hiding display button");
      btnStart.style.display = "none";
    } */
    quizQuestion.innerText = quizQuestions[iQr].q;
    quizAnswer1.innerText = quizQuestions[iQr].a;
    quizAnswer2.innerText = quizQuestions[iQr].b;
    quizAnswer3.innerText = quizQuestions[iQr].a;
    quizAnswer4.innerText = quizQuestions[iQr].b;
  }
  
  // Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  