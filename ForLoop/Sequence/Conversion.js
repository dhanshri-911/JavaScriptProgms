// Conversion values to other units....       

console.log("Convert 42 inches in ft");
console.log("1 ft = 12 inches");
var valueInFeet = 42 / 12;
console.log("42 inches in feet: " + valueInFeet + " ft");

console.log("");

console.log("Convert Area in meter square");
var rectangleArea = 60 * 40;
console.log("Area of Plot in feet: " + rectangleArea + "ft");
console.log("1 ft = 0.3048 meter");
var rectangleAreaInMeter = rectangleArea * 0.3048;
console.log("Area of plot in meter square: " + rectangleAreaInMeter + " square meters");

console.log("");

console.log("Calculate Area of 25 such Plots");
var totalAreaInFeet = rectangleArea * 25;
console.log("Area of 25 Plot in feet: " + totalAreaInFeet + " ft");
var totalAreaInMeters = rectangleAreaInMeter * 25;
console.log("Area of 25 Plot in meter square: " + totalAreaInMeters + " square meters");