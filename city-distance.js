// Variables for user input
var city1X = 1;
var city1Y = 1;
var city2X = 4;
var city2Y = 4;

// Display welcome message for user
console.log('Welcome to the distance calculator! (distances calculated in km)');

// Prompt user to enter x- and y-coordinates for city #1
console.log('\nEnter the x coordinate for city #1: ');
console.log('\nEnter the y coordinate for city #1: ');

// Prompt user to enter x- and y-coordinates for city #2
console.log('\nEnter the x coordinate for city #2: ');
console.log('\nEnter the y coordinate for city #2: ');

// Calculate distance bewteen the two cities
function CalculateDist(X1, Y1, X2, Y2) {
	var distance = Math.floor(Math.sqrt(Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2)));
	// Display distance to user
	console.log('\nThe distance between city #1 and city #2 is approximately ' + distance + ' km.');
}

CalculateDist(city1X, city1Y, city2X, city2Y);
