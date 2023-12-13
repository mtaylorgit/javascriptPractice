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
let temperature = 25;//sadly we have to set this manually right now
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it is ${temperature.toFixed(1)} °F outside.`;//can also use temperature.toString()
let farenheitText = `The weather is ${weatherCondition} in ${userLocation} and it is ${celsiusToFahr(temperature).toFixed(1)} °F outside.`;//can also use temperature.toString()

//send the values to the HTML elements!
document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;




//array for the images
//let array1 = []; also array1.length; the last element array1[array1.length - 1]
//add another element to an array, at the end -- array1.push(item); -- add a number to the beginning, array1.unshift(item); --we can merge 2 arrays, array1.concat(array2);

//objects
student = {"name": "John", "yearOfBirth": 1980, "country": "Italy"}//key value pairs
//undefined is the absence of a value on a variable
//null and undefined have the same value but the TYPE is different

//The given JavaScript comparison a == b, where a = "2" and b = 2, will produce a result of true. This is because the loose equality operator (==) performs type coercion, converting the operands to the same type before making the comparison. 

//TEMPERATURE CHANGE (my function)
// document.querySelector(".weather-group").addEventListener("click", function(e) {
//     //look for target: input#fahr or input#celsius by passing the e to console log, which is an object
//     console.log(e.target.id);//this returns the id when we click the button
//     //we will need to write a conditional here 
//     let finalTemp;
//     if (e.target.id == "fahr") {
//         finalTemp = 5/9 * (temperature - 32)
//     } else {
//         finalTemp =  (temperature * (9/5)) + 32
//     } return finalTemp;
// });


//TEMPERATURE CHANGE 
document.querySelector(".weather-group").addEventListener("click", function(e) {
   
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = farenheitText;
    }
});


//DATE SECTION
new Date() //this is a Javascript object for date, will just print the date
new Date("2023-12-11") //this will create a dat object with that time stamp
shippingDate = new Date("2023-12-20")
deliveryDate = new Date("2023-12-26")
deliveryDate - shippingDate //gives you the number of milliseconds between the dates
//divide this by 8640000 to get hours so (deliveryDate - shippingDate)/8640000
//METHODS of the DATE OBJECT
// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()

//example: 
{/* <body>
    
    <div id="local-time">
        <span id="hours">00</span> : <span id="minutes">00</span>
    </div>
    
    <script type="text/javascript" charset="utf-8">
        // write your Javascript code below this line
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

    </script>
</body> */}
let localTime = new Date();
document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();

//set timeout for the seconds on the time
setTimeout(function(){},3000) //delayed 3 seconds, 3000 is in milliseconds


//padstart
let myString = "8"
myString.padStart(4,"0") //this will make it 08, so pads the single digits
setInterval(function(){
    let localTime = new Date();
document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000); //every second gets the time every second updated

//LOOPS
let animals = ["dog", "cat", "lion"];

for (let i = 0; i < animals.length; i++) {//this works regardless of how many elements in the array
    console.log(i);
}
//easier way below, same result
for (let i in animals) {//this handles the size of the array as necessary
    console.log(animals[i]);
}
//loop through and object
let bird = {"name": "parakeet", "color": "white"};

for (let i in animals) {
    console.log(bird[1]);//prints value
    console.log(1 + ":" + animals[i]);//prints the name of the property and the value
}
//test of loops - print all accounts starting with EX to the console
let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

function printEXAccounts() {
// write your solution here
    for (let i of bankAccounts) {
        if (i.startsWith("E")) {
        console.log(i);
    }
}
}
//GALLERY SECTION
//src: "./assets/gallery/image1.jpg alt="Thumbnail Image 1"

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

for (let i in galleryImages) {
    console.log(galleryImages[i]);
}



