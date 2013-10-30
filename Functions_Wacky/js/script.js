// Justin Henry 10-24-2013 Functions Wacky

//How many Asian weaver ants would it take to carry a certain weight?

/*var weight = prompt("Enter the weight to be carried in kilograms.", "");
if ((isNaN(weight)) || (weight === "")){

}*/

var weight;
do{
    weight = prompt("Enter the weight to be carried in kilograms.", "");
}while((isNaN(weight)) || (weight === ""))

console.log(weight);


var carry;
var method;
method = prompt("Will the weight be carried across the floor or the ceiling? Type 'floor' or 'ceiling.'", "");
if (method === "ceiling"){
    carry = 5;
}else if (method === "floor"){
    carry = 2;
}else{
    method = prompt("Type 'floor' or 'ceiling.'", "");
}

/*
var ants = (weight * 10000) / carry;
*/