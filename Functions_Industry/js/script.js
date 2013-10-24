// Justin Henry 10-24-2013 Functions Industry

var sellPrice = priceCalc(100, 200, 300);

function priceCalc(units, cost, profit){
    var price = (profit + cost) / units;
    return price;
}

console.log("To make a profit of $" + profit + ", sell each unit for $" + sellPrice + ".");
