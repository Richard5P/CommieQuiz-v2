//Variables - initialise targeted elements
//  Navigation and Info Bar controls
const homeInfoButton = document.getElementById("btn-home");

let currentPanel = "guide-panel";

window.onload = function () {
    displayHomePanel();
};

// Add event listeners

document.addEventListener("DOMContentLoaded", function () {
    // controls Area
    homeInfoBarButton.addEventListener("click", displayHomePanel);