'use strict';

const action = getAction();
const operands= getOperands();
const result =calculateResult();
alert('Результат: '+ result);


function getAction() {
let val

do {
    val = prompt('Выберите действие: + - * /');
} while (isOperatorInvalid(val));
return val;
  }

function isOperatorInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getOperands(){
  let operand;
  let number;
  do{
 operand= prompt('Введите числа через запятую:')}
while (isOperandInvalid(operand));
  number =operand.split(',')

for(let i = 0; i < number.length; i++){
  number[i] = +number[i];
  }
return number
};


function isOperandInvalid(operand) {
  return operand === null || operand.trim() === '';
}

function calculateResult(){ 
  let result=operands.reduce(function (prev,item){
  switch (action) {
      case '+':
          return prev +item;
      case '-':
          return prev - item;
      case '*':
          return prev * item;
      case '/':
          return prev / item;
  }
})

return result
}
