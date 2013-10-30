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

var method;
method = prompt("Will the weight be carried across the floor or the ceiling? Type 'floor' or 'ceiling.'", "");
if (method === "ceiling"){
    var carry;
    carry = 5;
}else if (method === "floor"){
    var carry;
    carry = 2;
}else{
    do{
    method = prompt("Type 'floor' or 'ceiling.'", "");
    }while(!((method === "ceiling") || (method === "floor")))
}

console.log(carry);
/*
var ants = (weight * 10000) / carry;
*/