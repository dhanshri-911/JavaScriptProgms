// Determing Whether number is Prime or not...

// var ps = require("prompt-sync")
// var prompt = ps();
//var num = prompt("Enter the number: ");

var num = Math.floor(Math.random()*100);
if(num==0) {
    num = num + 1;
}
console.log("Number is: "+num)
//var num = prompt("Enter the number: ");
var sum = 0;
console.log("Factors of " + num + " are: ")
for (var i = 1; i <= num; i++) {
if (num % i == 0){
    var a = i;
//console.log(a) 
sum =  sum + a;}
}
console.log("Sum is: "+sum)

if(sum == (num + 1)) {
    console.log(num + " is a Prime Number")
} else{
    console.log(num + " is not a Prime Number")
}
