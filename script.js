var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
  timerInterval = setInterval(incrementTimer, 1000);
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
  document.getElementById("resetButton").disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
}

function incrementTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var timerElement = document.getElementById("timer");
  timerElement.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}