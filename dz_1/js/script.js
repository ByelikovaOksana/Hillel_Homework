'use strict';

const number1 = +prompt('введите первое число', '');
const number2 = +prompt('введите второе число', '');

function result(number1, number2) {
    return number1 + number2;
  }
  
  alert(`Результат: ${number1} + ${number2} = ${result(number1, number2)}`);