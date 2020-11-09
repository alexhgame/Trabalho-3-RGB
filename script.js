var redValEl = document.getElementById('redValEl');
var greenValEl = document.getElementById('greenValEl');
var blueValEl = document.getElementById('blueValEl');
var hexaValue = document.getElementById('hexaValue');

var rgb = document.getElementById('rgb');
var hex = document.getElementById('hex');

    function convert() {
        var red = redValEl.value;
	    var green = greenValEl.value;
	    var blue = blueValEl.value;

	    var hexaColorCode = "#" + getHexa(red) + getHexa(green) + getHexa(blue);
	    hexaValue.value = hexaColorCode;

	    rgb.style.background = `rgb(${red}, ${green}, ${blue})`;
	    hex.style.background = hexaColorCode;
    };

	function getHexa(value) {
		var hexa = parseInt(value).toString(16);
		return hexa.length == 1 ? "0" + hexa : hexa;
	}
