//Drink away the ugly
var rate = prompt("On a scale of 1-10, how ugly is the person you're looking at?", "");
var date = prompt("How many weeks has it been since your last date?", "");
var weight = prompt("How much do you weigh?", "");

var bac = .06 + (rate * .02);
var bacAlt = bac - ((date / 4) * .02);
var drinks = ((.615 * weight) * (bacAlt +.015)) / 5.14;

document.write(bac + "<BR>");
document.write(bacAlt + "<BR>");
document.write(drinks);
