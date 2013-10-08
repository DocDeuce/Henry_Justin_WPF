//Justin Henry 10-8-2013 Conditionals Worksheet

//Last Chance for Gas
var mpg = 26;
var gauge = 25;
var capacity = 18.5;

var gasLeft = capacity * (gauge / 100);
var milesLeft = capacity * mpg;

if (milesLeft > 200)
{
    consle.log("Yes, you can make it without stopping for gas!");
}
else
{
    consle.log("You only have " + gasLeft + "gallons of gas in your tank, better get gas now while you can!");
}

