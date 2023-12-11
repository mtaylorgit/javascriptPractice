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

//need 4 dynamic items on the page

//function to convert degrees
function celsiusToFahr(temperature) {
    let fahr = (temperature * (9/5)) + 32
    return fahr;
}
//invoke the function above to use it!

//Greeting Section

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 25;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it is ${celsiusToFahr(temperature).toFixed(1)} °F outside.`;//can also use temperature.toString()

//send the values to the HTML elements!
document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;




//array for the images
//let array1 = []; also array1.length; the last element array1[array1.length - 1]
//add another element to an array, at the end -- array1.push(item); -- add a number to the beginning, array1.unshift(item); --we can merge 2 arrays, array1.concat(array2);

//objects
student = {"name": "John", "yearOfBirth": 1980, "country": "Italy"}//key value pairs
//undefined is the absence of a value on a variable
//null and undefined have the same value but the TYPE is different

//The given JavaScript comparison a == b, where a = "2" and b = 2, will produce a result of true. This is because the loose equality operator (==) performs type coercion, converting the operands to the same type before making the comparison. 

