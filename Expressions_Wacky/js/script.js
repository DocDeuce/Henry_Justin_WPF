//Drink away the ugly
alert("It's one hour until last call and you still haven't found a hookup for the night. The pickings are slim and your best bet is the ugly one by the bar. You're probably goin to need a few more drinks before you go that route, though.")
var rate = prompt("On a scale of 1-10, how ugly is the person you're looking at?", "");
var date = prompt("How many weeks has it been since your last date?", "");
var weight = prompt("How much do you weigh?", "");

var bac = .06 + (rate * .02);
var bacAlt = bac - ((date / 4) * .02);
var drinks = ((.615 * weight) * (bacAlt +.015)) / 5.14;

document.write("You will need about " + parseInt(drinks) + " drinks to reduce your perception of that person's ugliness to an approachable level.");
