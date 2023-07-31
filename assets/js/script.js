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
const quizPanel = document.getElementById("quiz-panel");
const resultsPanel = document.getElementById("results-panel")
const guidePanel = document.getElementById("guide-panel");
const scoresPanel = document.getElementById("scores-panel");


let currentPanel = "guide-panel";

window.onload = function () {
    displayGuidePanel();
};

// Add event listeners

document.addEventListener("DOMContentLoaded", function () {
    // Info Bar controls
    homeInfoBarButton.addEventListener("click", displayWelcomePanel);

    // Panel Button controls
    quizDisplayButton.addEventListener("click", displayQuizPanel);
    guideDisplayButton.addEventListener("click", displayGuidePanel);
    scoresDisplayButton.addEventListener("click", displayScoresPanel);
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
    loadQuizQuestions();
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

// Quiz Functions 
function loadQuizQuestions() {
    console.log("load Quiz Questions");
    quizQuestion.innerText = currentQuestion.question;
    quizAnswer1.innerText = currentQuestion.a;
    quizAnswer2.innerText = currentQuestion.b;
    quizAnswer3.innerText = currentQuestion.c;
    quizAnswer4.innerText = currentQuestion.d;
    quizCorrectAnswer = currentQuestion.answer;
    console.log("correct Answer: " + quizCorrectAnswer)
}