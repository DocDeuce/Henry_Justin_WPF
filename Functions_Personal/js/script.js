// Justin Henry 10-23-13 Functions Personal

var driveTime = timeCalc(100, 80);

function timeCalc(d, v){
    var time = d / v;
    return time;
}
console.log("It will take you about " + driveTime + " hours to make your trip.");

if (driveTime <= 1.5){
    console.log("Bring your favorite CD for the ride.");
}else if (driveTime > 1.5 && driveTime < 3){
    console.log("Bring a good audiobook for the ride.");
}else{
    console.log("Bring a friend for the ride.");
}