// Justin Henry 10-23-13 Functions Personal

//how long will a trip take when the distance and travel velocity are known?

var driveTime = timeCalc(100, 80); //A variable to hold the results of the function with 100 representing distance in miles and 80 representing velocity in miles per hour

function timeCalc(d, v){ //parameters for function d as in distance and v as in velocity
    var time = d / v; ///equation solving for time
    return time; //returns the time result so it can be used outside of the function
}
console.log("It will take you about " + driveTime + " hours to make your trip."); //explains to thew user the time the trip will take

if (driveTime <= 1.5){ //checks if the trip will take less than an hour and a half
    console.log("Bring your favorite CD for the ride."); //friendly advice for a quick trip
}else if (driveTime > 1.5 && driveTime < 3){//checks if the trip will take between an hour and half and 3 hours
    console.log("Bring a good audiobook for the ride."); //friendly advice for a trip that will take some time
}else{ //checks if the trip will take more than 3 hours
    console.log("Bring a friend for the ride."); //friendly advice for a long trip
}