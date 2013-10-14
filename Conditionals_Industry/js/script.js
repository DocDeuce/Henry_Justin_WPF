//Justin Henry 10-12-2013 Conditionals Industry

var ticketPrice = 10;
var over21 = ticketPrice - 5;
var onList = ticketPrice - 2;
var both = ticketPrice - 7;

alert("Get your tickets for the show I'll be performing in your town on November 22nd now! The base price is $" + ticketPrice + ", but let's see what discounts you can get.")

var age = prompt("How old are you?", "");
if ((isNaN(age)) || (age === "")){
    alert("Please enter a numeric value for your age.");
}

var list = prompt("Are you on the mailing list? Please type 'yes' or 'no'", "");
if (!((list === "yes") || (list === "no"))){
    alert("Please type 'yes' or 'no'");
}

if (age >= 21 && list === "yes"){
    console.log("Thank you for your support! Your ticket price is $" + both + "! Grab a drink and enjoy the show!");
}else if (age >= 21){
    console.log("Your ticket price is $" + over21 + "! Grab a drink and enjoy the show! You can save an additional $2 by joining my mailing list!");
}else if (list === "yes"){
    console.log("Thank you for your support! Your ticket price is $" + onList + "! Enjoy the show!");
}else{
    console.log("Your ticket price is $" + ticketPrice + "! You can save $2 by joining my mailing list!");
}
