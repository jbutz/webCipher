var shiftDebug = false;
var ShiftCipher = {
	shift: 3,
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	init: function(shift)
	{
		this.shift = shift;
	},
	encipher: function(string,shiftVal)
	{
		var output = "";
		var tChar, loc;
		if(shiftVal == "" || shiftVal == undefined)
		{
			shiftVal = this.shift;
		}
		string = string.toUpperCase();
		

		for(i = 0; i < string.length; i++)
		{
			tChar = string.charAt(i);
			loc = this.alphabet.search(tChar);
			if(loc != -1)
			{
				// Character is in the alphabet
				loc = loc + shiftVal;
				if(loc < 0)
				{
					loc += this.alphabet.length;
				}
				loc = loc % this.alphabet.length;
				output += this.alphabet.charAt(loc);
			}
			else
			{
				output += tChar;
				if(shiftDebug && window.console && console.log)
				{
					console.log(tChar,"Character not found in alphabet");
				}
			}
		}
		return output;
	},
	decipher: function(string,shiftVal)
	{
		if(shiftVal == "" || shiftVal == undefined)
		{
			shiftVal = this.shift;
		}
		shiftVal = -1 * shiftVal;
		return this.encipher(string,shiftVal);
	}
};

function testShift()
{
	var str = "Hello There!";
	var enc = ShiftCipher.encipher(str,1);
	document.write("<p>"+enc+"</p>");
	document.write("<p>"+ShiftCipher.decipher(enc,1)+"</p>");
}
