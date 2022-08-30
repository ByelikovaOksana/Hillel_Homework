'use strict'
const operand= getOperand('Enter operand:');
const Even = calculateEven(operand);
const Odd = calculateOdd(operand);

if (operand % 2 == 0){
  alert(`The sum of even numbers: ${Even}`)
} else{alert (`The sum of odd numbers: ${Odd}`)};

function getOperand(label) {
  let operandA;
  do {
      operandA = prompt(label);
  } while (isOperandInvalid(operandA));

  return +operandA;
}

function isOperandInvalid(operand){
   return operand===null||operand.trim() ===''||isNaN(operand)||+operand<=0;
  }

function calculateEven(operand) {
  let sum = 0;
  for (let i = 2; i <= operand; i+=2) {
    sum += i;
  }
  return sum;
}

function calculateOdd(operand) {
  let sum = 0;
  for (let i = 1; i <= operand; i+=2) {
    sum += i;
  }
  return sum;
}




