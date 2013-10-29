// Justin Henry 10-24-2013 Functions Wacky

//How many Asian weaver ants would it take to carry a certain weight?

var weight = prompt("Enter the weight to be carried in kilograms.", "");
if ((isNaN(weight)) || (weight === "")){

}

var carry;
var method = prompt("Will the weight be carried across the floor or the ceiling? Type 'floor' or 'ceiling.'", "");
if (method === "ceiling"){
    carry = 5;
}else if (method === "floor"){
    carry = 2;
}else{

}

