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
console.log("Hi, " + customer + ". Your balance USD is" + balance);