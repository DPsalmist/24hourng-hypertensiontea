// Countdown Timer //


const startingMinutes = 30;

// Get seconds
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

// Set interval
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Seconds time / 60 give minutes. Math floor not to get decimals 
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 30 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--; 
} 
