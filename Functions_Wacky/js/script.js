// Justin Henry 10-24-2013 Functions Wacky

//How many Asian weaver ants would it take to carry a certain weight?

var weight; //Declaring the variable that will hold a numerical value for the weight to be carried by the ants
do{ //This begins a loop that will repeat the prompt until a useable value is entered
    weight = prompt("Enter the weight to be carried in kilograms.", ""); //Prompts user to enter a number for the weight to be carried
}while((isNaN(weight)) || (weight === "")); //Checks if weight is left blank or is not a number

var method; //Declaring the variable that will
method = prompt("Will the weight be carried across the floor or the ceiling? Type 'floor' or 'ceiling.'", ""); //Prompts user to enter one of two strings
if (method === "ceiling"){ //checks if string is "ceiling"
    var carry;
    carry = 5; //The Asian weaver ant can carry 100 times its 5mg weight in the absence of inertia and friction
}else if (method === "floor"){
    var carry;
    carry = 2; //"Carried" can mean dragged across the ground. With inertia amd friction involved, ants' carrying abilities are reduced
}else{ //The following code will run if neither "ceiling" nor "floor" are entered into the prompt
    do{ //Starts a loop that runs a prompt as long as the
    method = prompt("Type 'floor' or 'ceiling.'", ""); //Prompts user again
    }while(!((method === "ceiling") || (method === "floor"))); //Keeps the prompt coming until either "ceiling" or "floor" is entered
}

var calcAnts = function(weight, carry){ //Sets up function with parameters matching those that will be brought into it
    var ants = (weight * 10000) / carry; //The math. A kg is a million mg so I start by converting. It's only ten thousand in the math because I have to divide the product by either 500 or 200 so I cancelled out 2 zeros.
    return ants; //returns a value to be used outside of the function
}

var ants = calcAnts(weight, carry); //Calls the function and uses previously established variables as the arguments

alert("It would take " + ants + " Asian weaver ants to carry " + weight + "kg on the " + method + ".");//Gives the user the information
console.log("It would take " + ants + " Asian weaver ants to carry " + weight + "kg on the " + method + ".");//Logs information