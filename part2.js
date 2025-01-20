const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "steelblue",
  "kaki",
  "deepink",
];

// let color = colors[0];
// let colorIndex = 0;

let x = 0;
let y = 0;

function onMove(event) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

// 클릭시 시작점 변경
function onClick(event) {
  const corners = [0, 800];
  x = corners[Math.floor(Math.random() * corners.length)];
  y = corners[Math.floor(Math.random() * corners.length)];
}

// 클릭시 색상 변경
// function onClick(event) {
//   colorIndex = (colorIndex + 1) % colors.length; // 인덱스를 순환
//   color = colors[colorIndex]; // 새로운 색상 할당
// }

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onClick);
