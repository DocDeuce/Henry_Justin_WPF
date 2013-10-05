//Calculating how much one would need to spend on gas in a week
var milesPerGallon = prompt("Your vehicle's fuel economy in miles per gallon is", "");
var milesToWork = prompt("In miles, how far is work from home?", "");
var daysOfWork = prompt("How may days of the week do you work?", "");
var gasPrice = prompt("What is the current price of gas in your area? ", "");

var milesPerDay = milesToWork * 2;
var milesPerWeek = milesPerDay * daysOfWork;
var gallonsPerWeek = milesPerWeek / milesPerGallon;
var gasBudget = gallonsPerWeek * gasPrice;

document.write(gasBudget);