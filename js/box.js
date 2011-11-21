// Ceasar Box... ish
var CeasarBox = {
	forcePS : true, // Require the text being enciphered to be a perfect square in length
	init: function(force)
	{
		this.forcePS = force;
	},
	formatInput: function(text)
	{
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var output = ""
		text = text.toUpperCase();
		for(i = 0; i < text.length; i++)
		{
			if(alphabet.search(text.charAt(i)) != -1)
			{
				output += text.charAt(i);
			}
		}
		return output;
	},
	encipher: function(text)
	{
		var numC = 0;
		var output = "";
		var tmp = [];
		text = this.formatInput(text);
		//Check for a nice perfect square of a length!
		if(Math.sqrt(text.length) != Math.floor(Math.sqrt(text.length)))
		{
			// Not equal! How dare you make this tricky!
			if(this.forcePS)
			{
				throw "Input text does not have a perfect square for its length";
				return;
			}
			else
			{
				// Figure out what we will use to get this to work.
				numC = Math.ceil(Math.sqrt(text.length));
			}
		}
		else
		{
			numC = Math.sqrt(text.length);
		}
		for(i = 0; i < numC; i++)
		{
			tmp[i] = "";
		}
		c = 0;
		for(i = 0; i < text.length; i++)
		{
			tmp[c] += text.charAt(i);
			c = (c + 1) % numC;
		}
		for(i = 0; i < numC; i++)
		{
			output += tmp[i];
		}
		return output;
	},
	decipher: function(text)
	{
		var numC = 0;
		var output = "";
		var tmp = [];
		text = this.formatInput(text);
		//Check for a nice perfect square of a length!
		if(Math.sqrt(text.length) != Math.floor(Math.sqrt(text.length)))
		{
			// Not equal! How dare you make this tricky!
			if(this.forcePS)
			{
				throw "Input text does not have a perfect square for its length";
				return;
			}
			else
			{
				// Figure out what we will use to get this to work.
				numC = Math.ceil(Math.sqrt(text.length));
			}
		}
		else
		{
			numC = Math.sqrt(text.length);
		}
		for(i = 0; i < numC; i++)
		{
			tmp[i] = "";
		}
	}
};

function testBox()
{
	var str = "A FREE BEER";
	var enc = CeasarBox.encipher(str);
	document.write("<p>Ceasar Box Test<br>Input: "+str+"</p>");
	document.write("<p>"+enc+"</p>");

	CeasarBox.init(false);
	str = "FREE BEER";
	var enc = CeasarBox.encipher(str);
	document.write("<p>Ceasar Box Test<br>Input: "+str+"</p>");
	document.write("<p>"+enc+"</p>");
}
