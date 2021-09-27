const boadr = document.querySelector("#board");
const colors = [
  "#ed6c64",
  "#64bded",
  "#64ed82",
  "#ebf062",
  "#e863eb",
  "#a60f3c",
  "#f09526",
  "#70512c",
  "#2c3c70",
];
const SQARES_NUMBER = 500;

for (let i = 0; i < SQARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  boadr.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #1d1d1d";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
