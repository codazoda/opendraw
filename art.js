// Setup some params
const width = 1860;
const height = 2480;

// Grab the canvas element from the page
var canvas = document.getElementById("drawingCanvas");

canvas.width = width;
canvas.height = height;

// Grab the 2D context of the canvas to draw on
var ctx = canvas.getContext("2d");

// Draw lined paper
function linedPage() {
    var lines = 21;

    // Calculate the pixel height, rounded down
    var lineHeight = Math.floor(height / lines);

    // Loop drawing horizontal lines
    for (var i = 1; i <= lines-1; i++) { // Start from 1 to avoid drawing at y=0
        var y = i * lineHeight;
        horizontalLine(y);
    }
}

// Draw a vertical line at x position
function verticalLine(x) {
    line(x, 0, x, height);
}

// Draw a horizontal line at y position
function line(x1, y1, x2, y2, color="#000000", width=1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Draw a horizontal line at y position
function horizontalLine(y) {
    line(0, y, width, y);
}

linedPage();
verticalLine(300);
