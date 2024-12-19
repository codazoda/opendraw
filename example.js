// Setup some params
const width = 2550; // 8.5" at 300dpi
const height = 3300; // 11" at 300dpi
const color = "blue";
const stroke = 5;

// Grab the canvas element from the page
var canvas = document.getElementById("drawingCanvas");

// Grab the 2D context of the canvas to draw on
var ctx = canvas.getContext("2d");

// Set some variables
canvas.width = width;
canvas.height = height;

// Draw a line
function line(x1, y1, x2, y2, color="#000000", lineWidth=1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Draw a circle
function circle(x, y, radius, color="#000000", lineWidth=1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 360);
    ctx.stroke();
}

// Draw a rectangle
function rect(x, y, width, height, color="#000000", lineWidth=1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
};

// Draw a line
line(0, height/2, width, height/2, "blue", stroke);

// Draw a circle
circle(width/2, height/2, 500, "red", stroke);

// Draw a rectangle
rectWidth = 1600;
rectHeight = 600;
rect(width/2-rectWidth/2, height/2-rectHeight/2, rectWidth, rectHeight, "green", stroke);
