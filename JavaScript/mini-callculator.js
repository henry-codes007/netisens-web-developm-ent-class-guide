const calculate = (num1, num2, operation) => {
    
    if(num1.length < 1 || num2.length < 1 || operation.length < 1){
        // console.log('You cannot submit empty prompts');
        return 'You cannot submit empty prompts';
    }else{
        num1 = Number(num1);
        num2 = Number(num2);
    
        if(['addition', 'add', '+', 'plus'].includes(operation)){
            return num1 + num2;
        }else if(['subtraction', 'subtract', '-', 'minus'].includes(operation)){
            return num1 - num2;
        }else if(['divide', 'division', '/'].includes(operation)){
            return num1 / num2;
        }else if(['multiply', '*', 'multiplication'].includes(operation)){
            return num1 * num2;
        }else if(['modulus', 'modulo', '%'].includes(operation)){
            return num1 % num2;
        }else{
            return "Invalid operation!";
        }
    }

   
}

let num1 = prompt('Enter the first number:').trim();
let num2 = prompt('Enter the second number:').trim();
let operation = prompt('Enter the operation:').trim().toLowerCase();


const result = calculate(num1, num2, operation);

console.log({result});