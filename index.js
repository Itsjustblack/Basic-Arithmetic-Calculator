// A Basic Arithmetic Calculator
   const operator = prompt('Enter Operator ( either +, -, * or / ):');
   const num1 = parseFloat(prompt('Enter the First number: '));
   const num2 = parseFloat(prompt('Enter the Second number: '));
   let result = 0;

try{
   if((isNaN(num1)) || (isNaN(num2))) 
      throw new Error('Invalid Number');
   else
   if (operator === '+') {
         result = num1 + num2;
         console.log(`${num1} ${operator} ${num2} = ${result}`);
         alert(`${num1} ${operator} ${num2} = ${result}`);
      }
      else if (operator === '-') {
         result = num1 - num2;
         console.log(`${num1} ${operator} ${num2} = ${result}`);
         alert(`${num1} ${operator} ${num2} = ${result}`);
      }
      else if (operator === '*') {
         result = num1 * num2;
         console.log(`${num1} ${operator} ${num2} = ${result}`);
         alert(`${num1} ${operator} ${num2} = ${result}`);
      }
      else if(operator ===  '/'){
         result = num1 / num2;
         console.log(`${num1} ${operator} ${num2} = ${result}`);
         alert(`${num1} ${operator} ${num2} = ${result}`);
     }
     else{
        console.log(`Invalid Operator`);
        alert(`Invalid Operator`);
      }
}
catch (e) {
   console.log(e);
   alert(e);
}