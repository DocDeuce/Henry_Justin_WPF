//Justin Henry 10-16-2013 Conditionals Personal

var milk = prompt("How many quarters of the milk carton remain?","");
var veggies = prompt("How many meals worth of vegetables are left?", "");
var meat = prompt("How many days worth of meet do you have?", "");

var total = parseInt(milk) + parseInt(veggies) + parseInt(meat);

if (total <= 4){
    alert("Dude, go to the store NOW!");
    console.log("Dude, go to the store NOW!");
}else if ((total >= 5) && (total <=7)){
    alert("You should be okay for a day or two.");
    console.log("You should be okay for a day or two.");
}else{
    alert("All is well! Check back in a few days.");
    console.log("All is well! Check back in a few days.");
}