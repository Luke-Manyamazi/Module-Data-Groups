function setAlarm() {
  let alarmTime = document.getElementById("alarmSet").value;
  let timeRemaining = alarmTime;
  let timer = setInterval(() => {
    if (timeRemaining === 0) {
      clearInterval(timer);
      playAlarm();
    } else {
      timeRemaining--;
    }
    let minutes = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (timeRemaining % 60).toString().padStart(2, "0");
    document.getElementById(
      "timeRemaining"
    ).innerText = `Time Remaining: ${minutes}:${seconds}`;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
