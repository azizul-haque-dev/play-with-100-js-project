const countEl = document.getElementById("count");
const date = document.getElementById("date");
const time = document.getElementById("time");
const form = document.querySelector("form");

let countdownInterval; // Store interval ID

function startCountdown() {
  countEl.innerHTML = "";
  let timeVal = time.value;
  let dateVal = date.value;
  let dateStr = `${dateVal} ${timeVal}:00`;
  let milisec = new Date(dateStr).getTime();

  if (milisec < Date.now()) {
    clearInterval(countdownInterval);
    form.reset();
    countEl.innerHTML =
      "<div class='red' >Set a valid date. Not a previous date</div>";
    return false;
  }

  let diff = (milisec - Date.now()) / 1000;
  let days = Math.floor(diff / 3600 / 24);
  let hours = Math.floor((diff / 3600) % 24);
  let mins = Math.floor((diff / 60) % 60);
  let secs = Math.floor(diff % 60);

  countEl.innerHTML = `
    <div>${days} <span>days</span></div>
    <div>${hours} <span>hours</span></div>
    <div>${mins} <span>minutes</span></div>
    <div>${secs} <span>seconds</span></div>
  `;

  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearInterval(countdownInterval); // Clear any existing interval

  startCountdown();

  countdownInterval = setInterval(startCountdown, 1000); // Start a new interval
});
