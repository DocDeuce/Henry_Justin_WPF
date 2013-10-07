//Justin Henry 10-7-2013

//Calculating how much one would need to spend on gas in a week

var milesPerGallon = prompt("Your vehicle's fuel economy in miles per gallon is", ""); //Prompt for user to enter a value for their vehicle's fuel economy
var milesToWork = prompt("In miles, how far is work from home?", ""); //Prompt for user to enter a value for distance to work in miles
var daysOfWork = prompt("How may days of the week do you work?", ""); //Prompt for user to enter a value for the number of days they work in a week
var gasPrice = prompt("What is the current price of gas in your area? ", ""); //Prompt for user to enter a value for the current price of gas in their area

var milesPerDay = milesToWork * 2; //Declaration, definition, and formula for calculating how many miles the user drives in one day
var milesPerWeek = milesPerDay * daysOfWork; //Declaration, definition, and formula for calculating how many miles the user drives in one week
var gallonsPerWeek = milesPerWeek / milesPerGallon; //Declaration, definition, and formula for calculating how many gallons of gas the user would need to make their weekly commute
var gasBudget = gallonsPerWeek * gasPrice; //Declaration, definition, and formula for calculating how much money will need to be spent for the amount of gas needed for the weekly commute

document.write("You will need to spend about $" + parseInt(gasBudget) + " on gas for the week."); //Display of final calculation in browser
console.log("You will need to spend about $" + parseInt(gasBudget) + " on gas for the week."); //Display of final calculation in console
