const startingMinutes = 10; // 10 minute counter
let time = startingMinutes * 60; // counting down in seconds

const coundownEl = document.getElementById('countdown'); // countdown display

setInterval(updateCountdown, 1000); // set 1 second loop for function updateCountdown

function updateCountdown(){
    const minutes = Math.floor(time / 60); // set the minute display of the remaining seconds
    let seconds = time % 60; // get the seconds of the remaining seconds after the minutes
    seconds = seconds < 10 ? '0'+seconds : seconds; // format seconds for output
    countdownEl.innerHTML = '${minutes}:${seconds}'; // write to display
    time--; //decrement countdown
}