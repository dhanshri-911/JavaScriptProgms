//Reading input from console using prompt-sync NodeJS Module
"use strict";
var ps = require("prompt-sync");
var prompt = ps();
let input = prompt("Enter the value for N: ");
if (input == 0){
    console.log("Factorial of zero = 1");    
}else if (input == 1){
    console.log(`the factorial is = ${0}`);
}
else{
    let fact = 1 ;
    for (let i = 2 ; i <= input ; i++){
        fact = fact*i;
    }
    console.log(`the factorial of ${input} is ${fact}.`);
}