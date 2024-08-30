
let carsInStock = [
    "toyota", 
    "lamborghini", 
    "ferrari", 
    "mitsubishi",
    "volvo",
    "mercedes",
    "ford",
    "chevrolet",
    "honda",
    "bmw"
]

let customerChoice = prompt("What Car would you like to buy?").toLowerCase();

// console.log('BMW'.toLowerCase())
if(carsInStock.includes(customerChoice)){
    // display congrats and the car name
    console.log(`Congratulations! You've selected ${customerChoice}.`);
}else{
    // display an error message
    console.log(`Sorry, ${customerChoice} is not available in our stock.`);
}