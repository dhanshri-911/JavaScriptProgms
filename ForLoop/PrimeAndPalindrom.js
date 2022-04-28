"use strict";
var ps = require("prompt-sync")
var prompt = ps();

function palPrime() {
var originalNum; 
var number;
var revNum = 0;
var count = 0;
var rem;

number = parseInt(prompt("Enter the number: "));
originalNum = number;  
          
  for(var i = 1; i <= number; i++){  
    if(number % i == 0) {  
    count++; }  
}  
console.log(count);
    
while(number > 0){  
    rem = number % 10;      
    revNum = (revNum * 10) + rem;    
    number = parseInt(number/10);   
}    
console.log(revNum)

if(originalNum == revNum && count == 2){  
    console.log(originalNum +" is a PalPrime number");  
} else{  
    console.log(originalNum +" is not a PalPrime number");  
 }  
}
palPrime();