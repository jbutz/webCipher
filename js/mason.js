charH = 20;
charW = 20;
var Mason = {
	charW: 20,
	charH: 20,
	letterMap: {
		a: [false,[
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		b: [false,[
				[0,0],
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		c: [false,[
				[0,0],
				[0,charH],
				[charW,charH]]
			],
		d: [false,[
				[0,0],
				[charW,0],
				[charW,charH],
				[0,charH]]
			],
		e: [false,[
				[0,0],
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		f: [false,[
				[charW,0],
				[0,0],
				[0,charH],
				[charW,charH]]
			],
		g: [false,[
				[0,0],
				[charW,0],
				[charW,charH]]
			],
		h: [false,[
				[0,charH],
				[0,0],
				[charW,0],
				[charW,charH]]
			],
		i: [false,[
				[0,charH],
				[0,0],
				[charW,0]]
			],
		j: [true,[
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		k: [true,[
				[0,0],
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		l: [true,[
				[0,0],
				[0,charH],
				[charW,charH]]
			],
		m: [true,[
				[0,0],
				[charW,0],
				[charW,charH],
				[0,charH]]
			],
		n: [true,[
				[0,0],
				[0,charH],
				[charW,charH],
				[charW,0]]
			],
		o: [true,[
				[charW,0],
				[0,0],
				[0,charH],
				[charW,charH]]
			],
		p: [true,[
				[0,0],
				[charW,0],
				[charW,charH]]
			],
		q: [true,[
				[0,charH],
				[0,0],
				[charW,0],
				[charW,charH]]
			],
		r: [true,[
				[0,charH],
				[0,0],
				[charW,0]]
			],
		s: [false,[
				[0,0],
				[Math.floor(charW / 2),charH],
				[charW, 0]]
			],
		t: [false,[
				[0,0],
				[charW,Math.floor(charH / 2)],
				[0,charH]]
			],
		u: [false,[
				[charW,0],
				[0,Math.floor(charH / 2)],
				[charW,charH]]
			],
		v: [false,[
				[0,charH],
				[Math.floor(charW / 2), charH]]
			],
		w: [true,[
				[0,0],
				[Math.floor(charW / 2),charH],
				[charW, 0]]
			],
		x: [true,[
				[0,0],
				[charW,Math.floor(charH / 2)],
				[0,charH]]
			],
		y: [true,[
				[charW,0],
				[0,Math.floor(charH / 2)],
				[charW,charH]]
			],
		z: [true,[
				[0,charH],
				[Math.floor(charW / 2), charH]]
			]
	},
	draw: function(l, c, sW, sH, drawLetter)
	{
		var hasDot   = Mason.letterMap[l][0];
		var pathData = Mason.letterMap[l][1];
		var fudge = 0;
		c.beginPath();
		c.lineWidth = 3;
		for(var i = 0; i < pathData.length; i++)
		{
			if(i == 0)
			{
				c.moveTo(pathData[i][0] + sW,pathData[i][1] + sH);
			}
			else
			{
				c.lineTo(pathData[i][0] + sW,pathData[i][1] + sH);
			}
		}
		c.stroke();
		if(hasDot)
		{
			c.fillRect(Math.floor(charW / 2) + sW - 2, Math.floor(charH / 2) + sH - 2, 4, 4);
			fudge = 5;
		}
		
		if (drawLetter)
		{
			c.textBaseline = "middle";
			c.textAlign = "center";
			c.fillText(l, Math.floor(charW / 2) + sW + fudge, Math.floor(charH / 2) + sH);
		}
	}
}

function testDraw()
{
	var canvas = document.getElementById("masonc");
	var context= canvas.getContext("2d");
	Mason.draw('a',context,0,0,true);
	Mason.draw('b',context,30,0,true);
	Mason.draw('c',context,60,0,true);
	Mason.draw('j',context,0,60,true);
	Mason.draw('s',context,30,60,true);
	Mason.draw('y',context,60,60,true);
}
