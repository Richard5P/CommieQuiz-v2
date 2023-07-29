//Variables - initialise targeted elements
//  Navigation and Info Bar controls
const homeInfoBarButton = document.getElementById("btn-home");

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
    // controls Area
    homeInfoBarButton.addEventListener("click", displayHomePanel);
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
    
function displayHomePanel() {
        console.log("Home Panel");
        hidePanels();
        welcomePanel.classList.remove("hidden");
        currentPanel = "welcome-panel";
    }

function displayGuidePanel() {
    console.log("Guide Panel");
    hidePanels();
    guidePanel.classList.remove("hidden");
    currentPanel = "guide-panel";    
}