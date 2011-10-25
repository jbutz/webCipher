// Ceasar Box... ish
var CeasarBox = {
	forcePS : true, // Require the text being enciphered to be a perfect square in length
	init: function(force)
	{
		this.forcePS = force;
	},
	encipher: function(text)
	{
		var numC = 0;
		var numR = 0;
		var output = "";
		var tmp = [];
		//Check for a nice perfect square of a length!
		if(Math.sqrt(text.length) != Math.floor(Math.sqrt(text.length))
		{
			// Not equal! How dare you make this tricky!
			if(this.forcePS)
			{
				throw "Input text does not have a perfect square for its length";
				return;
			}
			else
			{
				// Generate filler for the end!
			}
		}
		else
		{
			numC = Math.sqrt(text.length);
			numR = numC;
		}
		for(i = 0; i < numC; i++)
		{
			tmp[i] = "";
		}
		c = 0;
		for(i = 0; i < text.length; i++)
		{
			tmp[c] = text.charAt(i);
			c = (c + 1) % numC;
		}
	},
	decipher: function(text)
	{
	}
};
