// operator name
const operator = prompt('Enter your operator(either +, -, * or /): ');

//Number choosing
let numberone = parseFloat(prompt('Enter first number:'));
let numbertwo = parseFloat(prompt('Enter your second number'));

let result;
if(operator == '+'){
    result = numberone + numbertwo;
} else if (operator =='-'){
    result = numberone -numbertwo;
} else if(operator == '*'){
   result = numberone * numbertwo;
} else{
    result = numberone/numbertwo
}

//result
alert(`${numberone} ${operator} ${numbertwo} = ${result}`);
