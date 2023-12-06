// alert("test javascript code nalga fochi");

// function testAlert(message) {
//     alert(message);
// }

// testAlert("Testing this!");
// console.log("stinky poo!");
// console.log(4 + 5);

// document.getElementById("greeting").innerHTML = "Poop duty!";

//functionality to open and close the menu below
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
//we need to select the close button to get it to close the menu
document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
//Variables - he used VAR, but launchcode recommends LET! because VAR is a global variable, available everywhere and that cause problems. Using LET it will only be available inside that block of code.
//the CONST keyword, it works same as LET - when you are not going to reassign a value to a variable, use CONST. unless you want to reassign the variable, then use LET
const customer = "Lily Faluna";//not changed
let balance = 2000;//balance may change, so we need to be able to reaasign value
balance = balance + 200;
console.log("Hi, " + customer + ". Your balance USD is " + balance);

//be consistent with variable naming, choose camel case or underscore like customer_balance, or customerName. Can't start with number, no dashes

//typeof operator will tell you the type

//only use numbers when you need to do calculations, in case of account numbers, use strings.  
//remember you can get the length of a string, variableName.length,you can also use .slice to get like the first two characters of a string. variableName.slice(0,2) would get 0 and 1 (because the second number is excluded). you can also remove things from a string, using replace. variableName.replace("_", "$") this would replace the underscore with a $, or we could just remove the underscore by having the second item be empty, like this "" BUT remember to save this action, you would need to reassign the value to the variable!

//integer and float -- everything in Javascript is number. Other languages differentiate. also remember the MATH object in JavaScript! it has .round, and many other methods!! .floor rounds down, force rounding up .ceil, .toFixed(#ofdecimal places) if ommitted, no decimal places. Examples: Math.round(price) is a built in function; price.toFixed(2) this is a method. parseFloat(num1) --> this converts a string to a float with decimals. You can convert a number to a string, with num1.toString();

