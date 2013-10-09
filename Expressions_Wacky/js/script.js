//Justin Henry 10-7-2013 Expressions_Wacky

//Drink away the ugly - a formula for approximating the number of drinks required to reduce perception of ugliness in others. Please note that I do not participate in or condone this type of behavior. It was the wacky thing thing that came to mind.

alert("It's one hour until last call and you still haven't found a hookup for the night. You're sober and lonely, the pickings are slim, and your best bet is the ugly one by the bar. You're probably going to need a few more drinks before you go that route, though.");
//An alert explaining the situation to the user
var rate = prompt("On a scale of 1-10, 1 being 'not very attractive' and 10 being 'hideous' how ugly is the person you're looking at?", "");
//Prompt for user to enter a number representing their current perception of ugliness in another
var date = prompt("How many weeks has it been since your last date?", "");
//Prompt for user to enter the number of weeks since their last date
var weight = prompt("How much do you weigh?", "");
//Prompt for user to enter their weight in pounds

var bac = .06 + (rate * .02);
//bac stands for blood alcohol content. This equation determines what the user's bac would need to be in order to reduce perception of ugliness based on how ugly the other person is perceived to be
var bacAlt = bac - ((date / 4) * .02);
//this alternate bac takes into account the number of weeks since the users last date. The longer it has been, the less alcohol the situation should require.
var drinks = ((.615 * weight) * (bacAlt +.015)) / 5.14;
//this equation is based on the Basic Windmark Formula for determining bac but has been rearranged to solve for number of drinks. The .615 is an average of the distribution ratios for men and women

document.write("You will need about " + parseInt(drinks) + " drinks to reduce your perception of that person's ugliness to an approachable level.");
//Displays the final calculation for the user in the browser
console.log("You will need about " + parseInt(drinks) + " drinks to reduce your perception of that person's ugliness to an approachable level.");
//Displays the final calculation for the user in the console