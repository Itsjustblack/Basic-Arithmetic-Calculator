// A Basic Arithmetic Calculator
const operator = prompt('Enter Operator ( either +, -, * or / ):');

   const num1 = parseFloat(prompt('Enter the First number: '));
   const num2 = parseFloat(prompt('Enter the Second number: '));

let result = 0;

if(typeof num1 !== 'number' || typeof num2 !== 'number') 
   throw new Error('Invalid Number my');
  try{ if (operator === '+') {
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