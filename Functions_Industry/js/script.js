// Justin Henry 10-24-2013 Functions Industry


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