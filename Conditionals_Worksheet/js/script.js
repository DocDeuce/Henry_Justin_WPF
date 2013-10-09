//Justin Henry 10-8-2013 Conditionals Worksheet

//Last Chance for Gas
var mpg = 26;
var gauge = 25;
var capacity = 18.5;

var gasLeft = capacity * (gauge / 100);
var milesLeft = gasLeft * mpg;

if (milesLeft > 200)
{
    console.log("Yes, you can make it without stopping for gas!");
}
else
{
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!");
}


//Check the Login
var userName = "BlacKoder";
var userPswd = "MarkIsGarvE";

var enteredName = prompt("Enter username:", "");
var enteredPswd = prompt("Enter password:", "");

if (enteredName == userName && enteredPswd == userPswd)
{
    console.log("Welcome, " + userName + "!");
}
if (!(enteredName == userName))
{
    console.log("User not found. Try again.");
}
if (!(enteredPswd == userPswd))
{
    console.log("Password does not match our records.");
}

//Movie Ticket Price
var ticketPrice = 12;
var discounted = 7;

var customerAge = 22;
var showTime = 4;

if ((customerAge >= 55 || customerAge < 10) || (showTime >= 3 && showTime <= 5))
{
    console.log("The ticket price is $" + discounted);
}
else
{
    console.log("The ticket price is $" + ticketPrice);
}


