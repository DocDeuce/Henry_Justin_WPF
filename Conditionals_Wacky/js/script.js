// Justin Henry 10-17-2013 Conditionals Wacky

alert("How much Woodchuck would a woodchuck chug if a woodchuck could chug Woodchuck?");

var gender = prompt("Is it Mr. or Mrs. Woodchuck?","Mr. or Mrs."); //Prompt enter the woodchuck's gender'
var weight = prompt("How many pounds is this woodchuck packing?", ""); //Prompt to enter the woodchuck's weight (they average 4-9 pounds)

if ((isNaN(weight)) || (weight === "")){ //Validates weight entry by checking if weight is not a number or left blank
    alert("Please enter a numeric value for the weight of the woodchuck."); //Alert if weight is not a number or left blank
}
if (!((gender === "Mr.") || (gender === "Mrs."))){ //Validates that user enters an applicable string
    alert("Please enter 'Mr.' or 'Mrs.' to indicate the gender of the woodchuck."); //Alert if user enters invalid string
}

if ((weight >= 7) && (gender = "Mr.")){ //Checks for a woodchuck that is both male and 7 pounds or over
    alert("I hope you brought a six-pack.");
    console.log("I hope you brought a six-pack.");
    //Code to execute if both conditions are true
}else if (gender = "Mr."){
    alert("Keep an eye on him. If he tries for more than 4,take his keys.");
    console.log("Keep an eye on him. If he tries for more than 4,take his keys.");
    //Code to execute if male woodchuck is less than 7 pounds
}else if (weight >= 7){
    alert("She's a big girl but keep an eye on her if she tries for more than 5.");
    console.log("She's a big girl but keep an eye on her if she tries for more than 5.");
    //Code to execute if female woodchuck is over 7 pounds
}else{
    alert("How much Woodchuck would a woodchuck up chuck? Don't let her have more than 3.");
    console.log("How much Woodchuck would a woodchuck up chuck? Don't let her have more than 3.");
    //Code to execute if female woodchuck is less than 7 pounds
}