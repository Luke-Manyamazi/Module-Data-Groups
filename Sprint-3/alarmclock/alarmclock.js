function setAlarm() {
  const userInput = document.getElementById("alarmSet").value;
  const timeInSeconds = parseInt(userInput, 10);

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  startTimer(timeInSeconds);
}

function startTimer(totalSeconds) {
  let timeRemaining = totalSeconds;

  updateTimeDisplay(timeRemaining);

  const timerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      triggerAlarmActions(); // Trigger alarm when timer ends
    } else {
      timeRemaining -= 1;
      updateTimeDisplay(timeRemaining);
    }
  }, 1000);
}

function updateTimeDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById("clock").textContent = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

function triggerAlarmActions() {
  const alarmAudio = document.getElementById("alarmSound");
  alarmAudio.play();

  document.body.classList.add("alarm-active");
}

function stopAlarm() {
  const alarmAudio = document.getElementById("alarmSound");
  alarmAudio.pause();
  alarmAudio.currentTime = 0;

  document.body.classList.remove("alarm-active");
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm(); // Correct function for stopping the alarm
  });
}

window.onload = setup;
