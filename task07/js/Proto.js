var config = {

	writable: true,
	configurable: true,
	enumerable: true

};

function defineProperty(objName, propName, propValue)
{
	config.value = propValue;	// add a new key to the config object
	Object.defineProperty(objName, propName, config);
}

var person = Object.create(null);
defineProperty(person, "fullName", function () {
		return this.firstName + " " + this.lastName;
	}); 

var male = Object.create(person);
var female = Object.create(person);

var male1 = Object.create(male);
defineProperty(male1, 'firstName', 'Nilesh');
defineProperty(male1, 'lastName', 'Shah');

var female1 = Object.create(female);
defineProperty(female1, 'firstName', 'Nirmita');
defineProperty(female1, 'lastName', 'N Shah');

male1.fullName();
female1.fullName();
