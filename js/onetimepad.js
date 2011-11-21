window.OneTimePad = {
	padText: "EQJQSUJBMNDMWKROQFMEOVWVO",
	init : function()
	{
	},
	setPad: function(padTxt)
	{
		padTxt = padTxt.replace("\n","");
		padTxt = padTxt.replace(" ","");
		this.padText = padTxt.toUpperCase();
		return;
	},
	encipher: function(msg)
	{
		return this._run(msg,1);
	},
	decipher: function(msg)
	{
		return this._run(msg,-1);
	},
	_run: function(msg,op)
	{
		var conv = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		// Op should be 1 or -1
		if(op == "" || op == null || op == undefined)
		{
			op = 1;
		}
		if(op != 1 && op != -1)
		{
			throw "Operation should be 1 or -1";
			return;
		}
		msg = msg.toUpperCase();
		var pLen = this.padText.length;
		var mLen = msg.length;
		if(pLen < mLen)
		{
			throw "Message is longer than the pad";
			return;
		}
		var output = "";
		for(var i = 0; i < mLen; i++)
		{
			var m = msg.charAt(i);
			var mC = conv.indexOf(msg.charAt(i)) + 1;
			var pC = conv.indexOf(this.padText.charAt(i)) + 1;
			var r  = mC + (op * pC);
			r = r - 1;
			r = r % 26;
			if(r < 0)
			{
				r = r + 26;
			}
			r = conv.charAt(r);
			output += r;
		}
		return output;
	}
};

function testPad()
{
	var pad = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
	var msg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	window.OneTimePad.setPad(pad);
	document.write("Original Message:" + msg + "<br>");
	msg = window.OneTimePad.encipher(msg);
	document.write("Enciphered Message: " + msg + "<br>");
	msg = window.OneTimePad.decipher(msg);
	document.write("Deciphered Message: " + msg + "<br>");
}
