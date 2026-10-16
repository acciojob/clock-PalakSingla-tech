//your JS code here. If required.

const timer = document.createElement("p");
timer.id = "timer";
document.body.appendChild(timer);

function updateTimer() {
  timer.textContent = new Date().toLocaleString();
}

// Display immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
