//Global Variables
const passwordDisplay = document.querySelector('.password-output input');
const passwordStrenghtIndicator = document.querySelector('#strenght-indicator');
const passwordLength = document.querySelector('.details span');
const passwordLengthRange = document.querySelector('.pass-length input');
const lowerCaseElement = document.getElementById('lowercase');
const upperCaseElement = document.getElementById('uppercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.password-output span');



passwordLength.innerText = passwordLengthRange.value;

passwordLengthRange.addEventListener('input', () => {
    passwordLength.innerText = passwordLengthRange.value;
})


generateBtn.addEventListener('click', () => {    
    const passWordLength = passwordLengthRange.value;    
    const includeUpperCase = upperCaseElement.checked;
    // console.log({includeUpperCase});
    const includeNumbers = numbersElement.checked;
    const includeSymbols = symbolsElement.checked;

    const password = generatePassword(passWordLength,includeUpperCase, includeNumbers, includeSymbols);    
    passwordDisplay.value = password;
    calculatePasswordStrength(password, passWordLength);    
});


function generatePassword(passWordLength, includeUpperCase, includeNumbers, includeSymbols){
    const lowercase = loopThroughASCIICodes(97, 122);
    const uppercase = loopThroughASCIICodes(65, 90);
    const numbers = loopThroughASCIICodes(48, 57);
    const symbols = loopThroughASCIICodes(33, 47)
    .concat(loopThroughASCIICodes(58, 64))
    .concat(loopThroughASCIICodes(91, 96))
    .concat(loopThroughASCIICodes(123, 126));    

    //By default set the lowercase character codes as default
    let charCodes = lowercase;

    //concat upperCase character codes if uppercase is selected
    if(includeUpperCase) charCodes = charCodes.concat(uppercase);

    //concat Number character codes if uppercase is selected
    if(includeNumbers) charCodes = charCodes.concat(numbers);

    //concat Symbol charactercodes if symbol checkbox is checked
    if(includeSymbols) charCodes = charCodes.concat(symbols);

    //array for storing generated passwords
    let array = [];


    for(let i = 0; i < passWordLength; i++){
        let character = charCodes[Math.floor(Math.random() * charCodes.length)];
        array.push(String.fromCharCode(character));
    }

    return array.join('')
}

//Function for producing all the needed ASCII codes
function loopThroughASCIICodes (low, high){
    const array = []
    for(let i = low; i <= high; i ++){
        array.push(i)
    }
    return array
}

//Event listener for copying generated password to clipboard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.value);
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    copyBtn.style.color = "#4285F4";
    setTimeout(() => {
        copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`;
        copyBtn.style.color = "#707070";
    },2000)
})


function calculatePasswordStrength(password, passWordLength){
    let strength = 0;
    const lowercaseCharacters = /[a-z]/g;
    const upperCaseCharacters = /[A-Z]/g;
    const numberCharacters = /[0-9]/g;
    const specialCharacters = /[^a-zA-Z0-9\s]/g;
    const repeatedCharacters = /(.)\1/g;
    if(passWordLength < 6){
        strength+=10;
    }
    if(password.match(lowercaseCharacters) !== null){
        strength+=15;
    }
    if(password.match(upperCaseCharacters) !== null){
        strength+=25;
    }
    if(password.match(numberCharacters) !== null){
        strength+=25;
    }
    if(password.match(specialCharacters) !== null){
        strength+=25;
    }

    if(strength > 75){
        passwordStrenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
    `
    }else if(strength > 50){
        passwordStrenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
    `
    }else if(strength > 25){
        passwordStrenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
        <span></span>
    `
    }else{
        passwordStrenghtIndicator.innerHTML = `
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
    `
    }

}
