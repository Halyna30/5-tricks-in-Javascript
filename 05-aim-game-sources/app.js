const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    const time = parseInt(e.target.getAttribute("data-time"));
    startGame();
  }
});

function startGame() {
  screens[1].classList.add("up");
  timeEl.innerHTML();
}
