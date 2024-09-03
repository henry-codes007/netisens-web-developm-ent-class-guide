let randomNumbers = [];
let count = 0;

for(let k = 0; k <=15; k++){
    let randomNumber = Math.round(Math.random() * 50);
    randomNumbers.push(randomNumber)
}

console.log(randomNumbers);

for(let i = 0; i < randomNumbers.length; i++){
    for(let j = 0; j < randomNumbers.length - 1; j++){
        if(randomNumbers[j] > randomNumbers[j + 1]){
            let biggerNumber = randomNumbers[j];
            let smallerNumber = randomNumbers[j + 1];
            randomNumbers[j] = smallerNumber;
            randomNumbers[j + 1] = biggerNumber;
        }
    }    
}

// randomNumbers.sort((a, b) => a-b);

// randomNumbers.sort((a, b) => {
//     return a - b;
// })


// randomNumbers.sort(function(a, b) {
//     return a - b 
// })
// randomNumbers[0] = 67;

console.log(randomNumbers);

for(let number of randomNumbers){
    if(number > 25){
        count++;
    }
}

console.log(count);