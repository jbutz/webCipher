var Mason = {};
Mason.draw = {};

Mason.draw.a = function(c, width, height) // Context, Width, Height
{
	width -= 1;
	height -= 1;
	c.beginPath();
	c.moveTo(0,height);
	c.lineTo(width,height);
	c.lineTo(width,0);
	c.stroke();
	c.textBaseline = "middle";
	c.textAlign = "center";
	c.fillText("A", Math.floor(width / 2), Math.floor(height / 2));
}
Mason.draw.b = function(c, width, height) // Context, Width, Height
{
	width -= 1;
	height -= 1;
	c.beginPath();
	c.moveTo(1,0);
	c.lineTo(1,height);
	c.lineTo(width,height);
	c.lineTo(width,0);
	c.stroke();
	c.textBaseline = "middle";
	c.textAlign = "center";
	c.fillText("B", Math.floor(width / 2), Math.floor(height / 2));
}

function testDraw()
{
	var canvas = document.getElementById("masonc-a");
	var context= canvas.getContext("2d");
	Mason.draw.a(context,20,20);
	var canvas = document.getElementById("masonc-b");
	var context= canvas.getContext("2d");
	Mason.draw.b(context,20,20);
}
