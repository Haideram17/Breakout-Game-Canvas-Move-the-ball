//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
Var x = canvas.width/2;
var y = canvas.height-30;

//amount to move the ball 
var dx = 2;
var dy = -2;

//Draw the ball 
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillstyle = "green";
	ctx.fill();
	ctx.closePath;
	x += dx;
	y += dy;
}
setInterval(draw, 10);