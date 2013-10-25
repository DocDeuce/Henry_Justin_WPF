// Justin Henry 10-24-2013 Functions Industry

//Considering how much it cost to make a certain number of merchandise units, at what price should each unit be sold in order to generate a desired profit?

function priceCalc(){ //begins the function
    var units; //declaration of units representing the number of merch units purchased to be resold
    var cost; //declaration of cost representing the cost to produce the merch units
    var profit; ///declaration of profits representing the desired outcome of sales
    var price; //declaration of price to be determined by the equation to follow
    units = 100; //100 merch units
    cost = 200; //merch was purchased for $200
    profit = 300; //A desired profit of $300
    price = (profit + cost) / units; //Equation to solve for price
    console.log("To make a profit of $" + profit + ", sell each unit for $" + price + "."); //Tells the user how much each merch unit should be sold to reach the desired profit
}

priceCalc() //invocation of the function