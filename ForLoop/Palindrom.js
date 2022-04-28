//Reading input from console using prompt-sync NodeJS Module
"use strict";
var ps = require("prompt-sync");
var prompt = ps();
let number = prompt("Enter the value for N: ");
var originalNumber = number;

function checkPalindrome(){
    let reversedNumber = 0;
    let temp = number;
    while(temp>0){
        let digit = temp % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        temp =  Math.floor(temp/10);
    }
     if(originalNumber == reversedNumber){
         console.log("Number is Palindrom");
     }else{
        console.log("Number is not  Palindrom");
     }
}
checkPalindrome();
