// Justin Henry 10-24-2013 Functions Industry

/*var sellPrice = priceCalc(100, 200, 300);

function priceCalc(units, cost, profit){
    var price = (profit + cost) / units;
    return price;
}

console.log("To make a profit of $" + profit + ", sell each unit for $" + sellPrice + ".");
*/



function priceCalc(){
    var units;
    var cost;
    var profit;
    var price;
    units = 100;
    cost = 200;
    profit = 300;
    price = (profit + cost) / units;
    console.log("To make a profit of $" + profit + ", sell each unit for $" + price + ".");
}

priceCalc()