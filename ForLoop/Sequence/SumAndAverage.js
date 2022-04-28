// Adding and finding the average of five random numbers....

var num1 = Math.round(Math.random() * 89 + 10);
console.log("First number is: "+num1);
var num2 = Math.round(Math.random() * 89 + 10);
console.log("Second number is: "+num2);
var num3 = Math.round(Math.random() * 89 + 10);
console.log("Third number is: "+num3);
var num4 = Math.round(Math.random() * 89 + 10);
console.log("Fourth number is: "+num4);
var num5 = Math.round(Math.random() * 89 + 10);
console.log("Fifth number is: "+num5);

console.log("Addition of five random numbers is: "+(num1+num2+num3+num4+num5));
console.log("Avg of five random numbers is: "+((num1+num2+num3+num4+num5)/5));
