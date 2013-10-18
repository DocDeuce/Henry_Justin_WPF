//Justin Henry 10-16-2013 Conditionals Personal

var milk = prompt("How many quarters of the milk carton remain?",""); //Prompt to enter a number for current amount of milk
var veggies = prompt("How many meals worth of vegetables are left?", ""); //Prompt to enter a number for current amount of vegetables
var meat = prompt("How many days worth of meet do you have?", ""); //Prompt to enter a number for current amount of meat

var total = parseInt(milk) + parseInt(veggies) + parseInt(meat); //Equation to come up with a total on-hand value

if (total <= 4){ //Checks if total on-hand is less than 4
    alert("Dude, go to the store NOW!");
    console.log("Dude, go to the store NOW!");
    //Code to execute if above condition is true, that not a lot to have on hand so shopping must ensue
}else if ((total >= 5) && (total <=7)){ //Checks if total on-hand is 5, 6, or 7
    alert("You should be okay for a day or two.");
    console.log("You should be okay for a day or two.");
    //Code to execute if above condition is true, this should be enough food to last another day
}else{
    alert("All is well! Check back in a few days.");
    console.log("All is well! Check back in a few days.");
    //Code to execute if above condition is true, there's enough food to last a few days
}