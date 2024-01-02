


//put this gallery at the top so it will be available to all functions
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

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]

//functionality to open and close the menu 
function menuHandler() {
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
//we need to select the close button to get it to close the menu
document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
}



//function to convert degrees, doesn't need to be inside the handler
function celsiusToFahr(temperature) {
    let fahr = (temperature * (9/5)) + 32
    return fahr;
}
//invoke the function above to use it!

//Greeting Section

function greetingHandler() {
let currentHour = new Date().getHours();

let greetingText;
if (currentHour <12) {
    greetingText = "Good morning!";
} else if (currentHour < 19) {
    greetingText = "Good afternoon!";
} else if (currentHour < 24) {
    greetingText = "Good evening!";
} else {
    greetingText = "Welcome!";
}

//TEMPERATURE CHANGE 
document.querySelector(".weather-group").addEventListener("click", function(e) {
   
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = farenheitText;
    }
});

// const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 25;//sadly we have to set this manually right now
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it is ${temperature.toFixed(1)} °F outside.`;//can also use temperature.toString()
let farenheitText = `The weather is ${weatherCondition} in ${userLocation} and it is ${celsiusToFahr(temperature).toFixed(1)} °F outside.`;//can also use temperature.toString()

//send the values to the HTML elements!
document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

}


//array for the images
//let array1 = []; also array1.length; the last element array1[array1.length - 1]
//add another element to an array, at the end -- array1.push(item); -- add a number to the beginning, array1.unshift(item); --we can merge 2 arrays, array1.concat(array2);

//objects
student = {"name": "John", "yearOfBirth": 1980, "country": "Italy"}//key value pairs
//undefined is the absence of a value on a variable
//null and undefined have the same value but the TYPE is different

//The given JavaScript comparison a == b, where a = "2" and b = 2, will produce a result of true. This is because the loose equality operator (==) performs type coercion, converting the operands to the same type before making the comparison. 



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


//padstart example
let myString = "8"
myString.padStart(4,"0") //this will make it 08, so pads the single digits

function clockHandler() {
setInterval(function(){
    let localTime = new Date();
document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000); //every second gets the time every second updated
}


//GALLERY SECTION
function galleryHandler() {
//src: "./assets/gallery/image1.jpg alt="Thumbnail Image 1"



// for (let i in galleryImages) {
//     console.log(galleryImages[i]);
// }

//forEach Loop(a method of the array data type)
// galleryImages.forEach(function(image, index){
//     console.log(image); //using index AND the elements themselves
// });

    
let mainImage = document.querySelector("#gallery > img"); //this selects the element, but he created a variable to keep using query selector
let thumbnails = document.querySelector("#gallery .thumbnails")

mainImage.src = galleryImages[0].src;//this actually populates the first image from the array inside the html


mainImage.alt = galleryImages[0].src;//this gets the alt text from the array

//dynamic thumbnails below
//this dynamically creates thumbnails for each image in the 'gallery images' array and appends them to the thumbnails container.
//the code uses the 'querySelector' method to select elements by their css selector and the 'create Element' method to create new 'img' elements for the thumbnails. the 'forEach' method is used to iterate over the 'galleryImages' array and create a thumbnails for each image.

galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");// this creates and html element
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
   // thumb.dataset.selected = false; wrote the if below

    if (index === 0) {
        thumb.dataset.selected = true;
    } else {
        thumb.dataset.selected = false;
    }

//using terniary if --- same as above but shorter
//thumb.dataset.selected = index === 0 ? true : false;

thumb.addEventListener("click", function(e) {
    let selectedIndex = e.target.dataset.arrayIndex; 
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    thumbnails.querySelectorAll("img").forEach(function(img) {
        img.dataset.selected = false; //this makes them all unselected when you click something
    });

    e.target.dataset.selected = true; //making sure the one you select is highlighted, or selected
});
//to add more images, just modify the array - this makes it VERY dynamic

    thumbnails.appendChild(thumb);
});
}


//Products Section - will be taken from json file --- copied pasted here so we can write the loop below!!

{/* <div class="product-item">
<img src="./assets/products/img6.png" alt="AstroFiction">

<div class="product-details"> 
   <h3 class="product-title">AstroFiction</h3>
   <p class="product-author">John Doe</p>
   <p class="price-title">Price</p>
   <p class="product-price">$ 49.90</p>
    </div>
</div> */}

function productsHandler(){//run loop through products array and generate these items

    //Products Section
    let productsSection = document.querySelector(".products-area");

    function populateProducts(productList) {

        productsSection.textContent = ""; //this clears so that every time you hit a button it doesn't keep adding pictures

         //run a loop through the products and create an HTML element ("product-item") for each of them
    productList.forEach(function(product,index){
        //Create the HTML element for the individual product
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");
        
        //Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;//did this because they don't have alt

        //Create the product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        //Create Product Title (the H3), author, price-title, and price (which are 3 Ps)
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        //these are the P tags
        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";

        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        //Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        //Add the child HTML elements of the product
        productElm.append(productImage);
        productElm.append(productDetails);

        //Send all the complete individual product to the product section
        productsSection.append(productElm);
    });
    }

    // let productsSection = document.querySelector(".products-area");

    //created these variables for using the buttons free, paid 
    let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    });

    // let freeProducts = products.filter(item => !item.price || item.price <= 0); <--example of above written as arrow function
    //notice lack of parenthesis, return keyword, braces
    
    let paidProducts = products.filter(function(item){
        return item.price > 0;
    });

    // //run a loop through the products and create an HTML element ("product-item") for each of them
    // products.forEach(function(product,index){
    //     //Create the HTML element for the individual product
    //     let productElm = document.createElement("div");
    //     productElm.classList.add("product-item");
        
    //     //Create the product image
    //     let productImage = document.createElement("img");
    //     productImage.src = product.image;
    //     productImage.alt = "Image for " + product.title;//did this because they don't have alt

    //     //Create the product details section
    //     let productDetails = document.createElement("div");
    //     productDetails.classList.add("product-details");

    //     //Create Product Title (the H3), author, price-title, and price (which are 3 Ps)
    //     let productTitle = document.createElement("h3");
    //     productTitle.classList.add("product-title");
    //     productTitle.textContent = product.title;

    //     //these are the P tags
    //     let productAuthor = document.createElement("p");
    //     productAuthor.classList.add("product-author");
    //     productAuthor.textContent = product.author;

    //     let priceTitle = document.createElement("p");
    //     priceTitle.classList.add("price-title");
    //     priceTitle.textContent = "Price";

    //     let productPrice = document.createElement("p");
    //     productPrice.classList.add("product-price");
    //     productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

    //     //Append the product details
    //     productDetails.append(productTitle);
    //     productDetails.append(productAuthor);
    //     productDetails.append(priceTitle);
    //     productDetails.append(productPrice);

    //     //Add the child HTML elements of the product
    //     productElm.append(productImage);
    //     productElm.append(productDetails);

    //     //Send all the complete individual product to the product section
    //     productsSection.append(productElm);
    // });

    populateProducts(products);
  //Array filter method to get buttons to work (all, paid, free)
 
  document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
  document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
  document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

  let productsFilter = document.querySelector(".products-filter");

  productsFilter.addEventListener("click", function(event){

    console.log(event.target.id); //GIVES YOU the id, they are paid, free all
    if (event.target.id === "all") {
    populateProducts(products);
    } else if (event.target.id === "paid") {
    populateProducts(paidProducts);
    } else if (event.target.id === "free") {
    populateProducts(freeProducts)
    }
  });

}

function footerHandler() {
    let currentYear = new Date().getFullYear();//this is dynamic so when year changes it will update
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;
    //© 2023 - All rights reserved
}


  

// Fetch method for using API for weather at location
navigator.geolocation.getCurrentPosition(function(position){

    const latitude = position.coords.latitude;
    
    const longitude = position.coords.longitude;
 

    console.log(latitude);
    console.log(longitude);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;
    console.log(url);



    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let temperature = data.current.temperature_2m;
    console.log(temperature);
});
});


  




//Page Load

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();



