
//Reading input from console using prompt-sync NodeJS Module
"use strict";
var ps = require("prompt-sync");
var prompt = ps();
const n = prompt("Enter the value for N: ");

let term = 0.0;
for (let i = 1; i <= n; i++)
{
   console.log(`1/${i} + `); 
    term += 1 / i;
}

console.log(`${n} term in Harmonic Series is: ${term}`);

