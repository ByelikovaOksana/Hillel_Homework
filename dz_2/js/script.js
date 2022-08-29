'use strict';

let num1;
let num2;
do {
   num1=prompt('Enter first number');
} while (isNaN(num1) || num1 === null || num1 === '');

  do {
    num2=prompt('Enter second number');
 }while (isNaN(num2)|| num2 === null ||num2 === '');

let action = prompt('Enter acton?');
    
while (action !=='-' && action !=='+' && action !=='*' && action !=='/'){
      action = prompt('Enter acton?')
    } 
  
 
    let result1 = num1 - num2;
    let result2 = +num1 + +num2;
    let result3 = num1 * num2;
    let result4 = num1 / num2;


    let expression1 = num1+ '-' + num2 + '=' +result1;
    let expression2 = num1+ '+' + num2 + '=' +result2;
    let expression3 = num1+ '*' + num2 + '=' +result3;
    let expression4 = num1+ '/' + num2 + '=' +result4;

    switch (action) {
      case '-':result1
        alert( expression1 );
        break;
      case '+': result2
        alert(expression2 );
        break;
      case '*': result3
        alert(expression3 );
        break;
      case '/': result4
        alert(expression4);
        break;
      }