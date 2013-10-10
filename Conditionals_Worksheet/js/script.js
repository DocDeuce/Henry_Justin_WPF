//Justin Henry 10-8-2013 Conditionals Worksheet

//Last Chance for Gas
var mpg = 26; //How many miles per gallon does the car get?
var gauge = 25; //What percentage of the fuel tank's capacity is filled?
var capacity = 18.5; //What is the capacity of the fuel tank in gallons?

var gasLeft = capacity * (gauge / 100); //This calculates the remaining gas based in the tank's capacity and percent filled
var milesLeft = gasLeft * mpg; //This calculates how many more miles the car can go based on how much gas remains and how many miles per gallon it can go

if (milesLeft > 200) //Checks if there is enough gas to make it to the next station
{
    console.log("Yes, you can make it without stopping for gas!"); //Code performed if condition is true
}
else
{
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!"); //Code performed if condition is false
}


//Check the Login
var userName = "BlacKoder"; //Stored Username
var userPswd = "MarkIsGarvE"; //Stored Password

var enteredName = prompt("Enter username:", ""); //Prompts user to enter username
var enteredPswd = prompt("Enter password:", ""); // Prompts user to enter password

if (enteredName === userName && enteredPswd === userPswd) //Checks to see if the username and password that are entered match what is stored
{
    console.log("Welcome, " + userName + "!"); //Code performed if everything matches
}
if (!(enteredName === userName)) //If the username entered does NOT match the one stored
{
    console.log("User not found. Try again."); //Code to execute if NOT condition is true
}
if (!(enteredPswd === userPswd)) //If the password entered does NOT match the one stored
{
    console.log("Password does not match our records."); //Code to execute if NOT condition is true
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


