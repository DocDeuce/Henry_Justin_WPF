//Justin Henry 10-12-2013 Conditionals Industry

var ticketPrice = 10; //The base ticket price
var over21 = ticketPrice - 5; //If they're 21 or older, they can buy drinks so they'll get $5 ticket discount
var onList = ticketPrice - 2; //Mailing list members save $2 on tickets
var both = ticketPrice - 7; //If they're over 21 and on the mailing list, they get both the $5 and $2 discounts for a total discount of $7

alert("Now is the time to get your tickets for the show I'll be performing in your town on November 22nd! The base price is $" + ticketPrice + ", but let's see what discounts you can get.")
//The alert serves to acquaint users to the situation

var age = prompt("How old are you?", ""); //User enters numeric age
if ((isNaN(age)) || (age === "")){ //Validates age entry by checking if age is not a number or left blank
    alert("Please enter a numeric value for your age."); //Alert executed if either condition is true, a loop would come in handy here but I guess we're not using those in this course
}

var list = prompt("Are you on the mailing list? Please type 'yes' or 'no'", ""); //User enters yes or no
if (!((list === "yes") || (list === "no"))){ //Check to see if user entered anything other than yes or no
    alert("Please type 'yes' or 'no'"); //Alert executed if neither yes or no is entered, another good place for a loop
}

if (age >= 21 && list === "yes"){ //Checks to see if user is over 21 and on mailing list
    console.log("Thank you for your support! Your ticket price is $" + both + "! Grab a drink and enjoy the show!");
    //Code executed of both conditions are true
}else if (age >= 21){
    console.log("Your ticket price is $" + over21 + "! Grab a drink and enjoy the show! You can save an additional $2 by joining my mailing list!");
    //Code executed if user is over 21 but not on mailing list
}else if (list === "yes"){
    console.log("Thank you for your support! Your ticket price is $" + onList + "! Enjoy the show!");
    //Code executed if user is under 21 but on the mailing list
}else{
    console.log("Your ticket price is $" + ticketPrice + "! You can save $2 by joining my mailing list!");
    //Code executed if user is neither over 21 nor on the mailing list
}
