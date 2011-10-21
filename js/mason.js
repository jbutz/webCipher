var Mason = {
	charW: 20,
	charH: 20,
	letterMap: {
		a: [false,[
				[0,20],
				[20,20],
				[20,0]]
			],
		b: [false,[
				[0,0],
				[0,20],
				[20,20],
				[20,0]]
			],
		c: [false,[
				[0,0],
				[0,20],
				[20,20]]
			],
		d: [false,[
				[0,0],
				[20,0],
				[20,20],
				[0,20]]
			],
		e: [false,[
				[0,0],
				[0,20],
				[20,20],
				[20,0]]
			],
		f: [false,[
				[20,0],
				[0,0],
				[0,20],
				[20,20]]
			],
		g: [false,[
				[0,0],
				[20,0],
				[20,20]]
			],
		h: [false,[
				[0,20],
				[0,0],
				[20,0],
				[20,20]]
			],
		i: [false,[
				[0,20],
				[0,0],
				[20,0]]
			],
		j: [true,[
				[0,20],
				[20,20],
				[20,0]]
			],
		k: [true,[
				[0,0],
				[0,20],
				[20,20],
				[20,0]]
			],
		l: [true,[
				[0,0],
				[0,20],
				[20,20]]
			],
		m: [true,[
				[0,0],
				[20,0],
				[20,20],
				[0,20]]
			],
		n: [true,[
				[0,0],
				[0,20],
				[20,20],
				[20,0]]
			],
		o: [true,[
				[20,0],
				[0,0],
				[0,20],
				[20,20]]
			],
		p: [true,[
				[0,0],
				[20,0],
				[20,20]]
			],
		q: [true,[
				[0,20],
				[0,0],
				[20,0],
				[20,20]]
			],
		r: [true,[
				[0,20],
				[0,0],
				[20,0]]
			],
		s: [false,[
				[0,0],
				[Math.floor(20 / 2),20],
				[20, 0]]
			],
		t: [false,[
				[0,0],
				[20,Math.floor(20 / 2)],
				[0,20]]
			],
		u: [false,[
				[20,0],
				[0,Math.floor(20 / 2)],
				[20,20]]
			],
		v: [false,[
				[0,20],
				[Math.floor(20 / 2), 20]]
			],
		w: [true,[
				[0,0],
				[Math.floor(20 / 2),20],
				[20, 0]]
			],
		x: [true,[
				[0,0],
				[20,Math.floor(20 / 2)],
				[0,20]]
			],
		y: [true,[
				[20,0],
				[0,Math.floor(20 / 2)],
				[20,20]]
			],
		z: [true,[
				[0,20],
				[Math.floor(20 / 2), 20]]
			]
	},
	init: function(charW, charH)
	{
		if(charW < 20 || charH < 20)
		{
			throw "Pigpen Cipher character space too small!";
			return;
		}
		this.charW = charW;
		this.charH = charH;
		
		this.letterMap = {
			a: [false,[[0,charH],[charW,charH],[charW,0]]],
			b: [false,[[0,0],[0,charH],[charW,charH],[charW,0]]],
			c: [false,[[0,0],[0,charH],[charW,charH]]],
			d: [false,[[0,0],[charW,0],[charW,charH],[0,charH]]],
			e: [false,[[0,0],[0,charH],[charW,charH],[charW,0]]],
			f: [false,[[charW,0],[0,0],[0,charH],[charW,charH]]],
			g: [false,[[0,0],[charW,0],[charW,charH]]],
			h: [false,[[0,charH],[0,0],[charW,0],[charW,charH]]],
			i: [false,[[0,charH],[0,0],[charW,0]]],
			j: [true,[[0,charH],[charW,charH],[charW,0]]],
			k: [true,[[0,0],[0,charH],[charW,charH],[charW,0]]],
			l: [true,[[0,0],[0,charH],[charW,charH]]],
			m: [true,[[0,0],[charW,0],[charW,charH],[0,charH]]],
			n: [true,[[0,0],[0,charH],[charW,charH],[charW,0]]],
			o: [true,[[charW,0],[0,0],[0,charH],[charW,charH]]],
			p: [true,[[0,0],[charW,0],[charW,charH]]],
			q: [true,[[0,charH],[0,0],[charW,0],[charW,charH]]],
			r: [true,[[0,charH],[0,0],[charW,0]]],
			s: [false,[[0,0],[Math.floor(charW / 2),charH],[charW, 0]]],
			t: [false,[[0,0],[charW,Math.floor(charH / 2)],[0,charH]]],
			u: [false,[[charW,0],[0,Math.floor(charH / 2)],[charW,charH]]],
			v: [false,[[0,charH],[Math.floor(charW / 2), charH]]],
			w: [true,[[0,0],[Math.floor(charW / 2),charH],[charW, 0]]],
			x: [true,[[0,0],[charW,Math.floor(charH / 2)],[0,charH]]],
			y: [true,[[charW,0],[0,Math.floor(charH / 2)],[charW,charH]]],
			z: [true,[[0,charH],[Math.floor(charW / 2), charH]]]
		};
	},
	draw: function(l, c, sW, sH, drawLetter, letterLoc, fontSize)
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
			fudge = Math.floor((this.charW + this.charH) / 4);
			c.fillRect(Math.floor(this.charW / 2) + sW - 2, Math.floor(this.charH / 2) + sH - 2, 4, 4);
		}
		
		if (drawLetter)
		{
			if(!letterLoc)
			{
				letterLoc = "B";
			}
			else
			{
				letterLoc = letterLoc.toUpperCase();
				if(letterLoc != 'T' && letterLoc != 'R' && letterLoc != 'L' && letterLoc != 'B')
				{
					letterLoc = 'B';
				}
			}
			var x = 0;
			var y = 0;
			switch(letterLoc)
			{
				case 'T': // Top
					y = -1 * this.charH;
					break;
				case 'R': // Right
					x = this.charW;
					break;
				case 'L': // Left
					x = -1 * this.charW;
					break;
				case 'B': // Bottom
					y = this.charH;
					break;
			}
			c.textBaseline = "middle";
			c.textAlign = "center";
			if(!fontSize)
			{
				fontSize = "1.0em";
			}
			c.font = "bold " + fontSize + " sans-serif";
			
			c.fillText(l.toUpperCase(), Math.floor(this.charW / 2) + sW + x, Math.floor(this.charH / 2) + sH + y);
		}
	}
}

function testDraw()
{
	var canvas = document.getElementById("masonc");
	var context= canvas.getContext("2d");

	var m = Mason;
	m.init(50,50);
	m.draw('a',context,0,0,true);
	m.draw('j',context,60,00,true,'R','2.0em');
	m.draw('s',context,0,60,false);
	m.draw('y',context,60,60,false);
}
