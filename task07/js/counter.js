
/*var Counter = (function () {	
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
}());*/


var Counter = (function () {	
	var Counter = {}; // Object to be filled with other props and return it back
	var	value = 0;
	var getVal, incrementVal, resetVal;

	function returnValue() {  // Private function of the Counter Module
		return value;
	}
		
	getVal = function () {
		return returnValue();
	};
	incrementVal = function () {
		value ++;
		return returnValue();
	};
	resetVal = function () {
		value = 0;
		return returnValue();
	};	

	return {	
		get: getVal,
		increment: incrementVal,
		reset: resetVal
	};
}());