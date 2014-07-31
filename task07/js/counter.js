
var Counter = (function () {	
	var Counter = {}; // Object to be filled with other props and return it back
	var	value = 0;

	function returnValue() {  // Private function of the Counter Module
		return value;
	}
		
	Counter.get = function () {
		return returnValue();
	};
	Counter.increment = function () {
		value ++;
		return returnValue();
	};
	Counter.reset = function () {
		value = 0;
		return returnValue();
	};	

	return Counter;
}());