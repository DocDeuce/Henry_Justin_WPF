// Justin Henry 10-4-2013 Expressions Worksheet

//Dog Years
var humanAge = 1; //declaration and definition
var dogAge; //declaration

dogAge = humanAge * 7; //definition and formula for calculating dog years based on given human years

console.log("Sparky is " + humanAge + " human years old, which is " + dogAge + " in dog years."); //Final product

//Slice of Pie Part I
var slices = 8; //declaration and definition
var people = 10; //declaration and definition
var pizzas = 4; //declaration and definition
var slicesPer; //declaration

slicesPer = (pizzas * slices) / people; //definition and formula for calculating how many slices each person gets

console.log("Each person ate " + slicesPer + " slices of pizza at the party."); //Final quotient

//Slice of Pie Part II
var sparkySlices; //declaration

sparkySlices = (pizzas * slices) - (parseInt (slicesPer) * people); //definition and formula for calculating quotient remainder as integer

console.log("Sparky got " + sparkySlices + " slices of pizza.") //Final difference

//Average Shopping Bill
var shoppingWeeks = [120, 115, 107, 110, 121];
var shoppingTotal = (shoppingWeeks[0] + shoppingWeeks[1] + shoppingWeeks[2] + shoppingWeeks[3] + shoppingWeeks[4]);
var shoppingAvg = shoppingTotal / 5;

console.log("You have spent a total of $" + shoppingTotal + " on groceries over 5 weeks. That is an average of $" + shoppingAvg + " per week.");

//Discounts