let intervalId = null;
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  const timer = document.getElementById("timer");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");

  startBtn.addEventListener("click", () => {
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
      count += 1;
      timer.textContent = count;
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
  });

  stopBtn.addEventListener("click", () => {
    if (intervalId === null) return;

    clearInterval(intervalId);
    intervalId = null;

    stopBtn.disabled = true;
    startBtn.disabled = false;
  });
});