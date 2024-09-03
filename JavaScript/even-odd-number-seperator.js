let randomNumbers = [];
let evenNumbers = [];
let oddNumbers = [];

console.log(randomNumbers);

// generate 20 random numbers between 1 and 30, inclusive
for(let i = 1; i <= 20; i++){
    // generate a random number between 0 and 0.9
    let randomNumber = Math.random();
    // console.log(randomNumber);
    
    // multiply them by 30 to make them greater than 1
    randomNumber = randomNumber * 30;
    // console.log(randomNumber);

    // convert them to integers
    randomNumber = Math.round(randomNumber);
    // console.log(randomNumber);

    randomNumbers.push(randomNumber);

    // let randomNumber = Math.round(Math.random() * 30);
}

console.log(randomNumbers);

// seperate even numbers from odd numbers

for(let num of randomNumbers){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }else{
        oddNumbers.push(num);
    }
}

console.log(evenNumbers);
console.log(oddNumbers);