const fillCursor = "cursor/bucket.cur";
const drawCursor = "cursor/brush.cur";
const eraserCursor = "cursor/eraser.cur";
const strokeMode = document.getElementById("stroke-mode");
const fontFamily = document.getElementById("Font-family");
const fontSize = document.getElementById("font-size");
const fontWeight = document.getElementById("font-weight");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const deleteBtn = document.getElementById("delete-btn");
const eraserBtn = document.getElementById("eraser-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
  canvas.style.cursor = `url(${drawCursor}), auto`;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "배경 채우기";
    canvas.style.cursor = `url(${drawCursor}), auto`;
  } else {
    isFilling = true;
    modeBtn.innerText = "그리기";
    canvas.style.cursor = `url(${fillCursor}), auto`;
  }
}

function onCanvasClick() {
  if (isFilling) {
    canvas.style.cursor = `url(${fillCursor}), auto`;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDeleteClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "배경 채우기";
  canvas.style.cursor = `url(${eraserCursor}), auto`;
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function updateFont() {
  const selectedFontFamily = fontFamily.value;
  const selectedFontSize = fontSize.value;
  const selectedFontWeight = fontWeight.value;
  ctx.font = `${selectedFontWeight} ${selectedFontSize}px ${selectedFontFamily}`;
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    updateFont();
    if (strokeMode.checked) {
      ctx.strokeText(text, event.offsetX, event.offsetY);
    } else {
      ctx.fillText(text, event.offsetX, event.offsetY);
    }
    ctx.restore();
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onFontFamilyChange() {
  ctx.font = "";
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
deleteBtn.addEventListener("click", onDeleteClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
fontFamily.addEventListener("change", updateFont);
fontSize.addEventListener("input", updateFont);
fontWeight.addEventListener("change", updateFont);
