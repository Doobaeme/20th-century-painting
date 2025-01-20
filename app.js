const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// canvas 원리 알기
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "pink";
// ctx.fill();

// ctx.moveTo(150, 50);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.lineTo(150, 150);
// ctx.lineTo(150, 50);
// ctx.fill();

// 집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
// ctx.moveTo(150, 400);
// ctx.lineTo(500, 400);
// ctx.stroke();

// 사람 그리기
ctx.fillRect(325, 200, 15, 100);
ctx.fillRect(460, 200, 15, 100);
ctx.fillRect(350, 200, 100, 200);
ctx.fillRect(420, 410, 20, 150);
ctx.fillRect(360, 410, 20, 150);

ctx.arc(400, 140, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(360, 560, 20, 1 * Math.PI, 2 * Math.PI);
ctx.arc(440, 560, 20, 1 * Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(380, 130 + 5, 8, 1 * Math.PI, 2 * Math.PI);
ctx.arc(420, 130 + 5, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
