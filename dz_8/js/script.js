

const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn = document.querySelector('#myButton');

 btn.addEventListener('click', onBtnClick,);

  function onBtnClick() {
      result.textContent = `Result: ${input1.value} ${action.value} ${input2.value} = ${calculate()}` ;
  
  };
 
  function calculate(){  
    switch (action.value) {
      case '+':
          return (+input1.value)+(+input2.value);
      case '-':
          return (+input1.value)-(+input2.value)
      case '*':
          return (+input1.value)*(+input2.value);
      case '/':
          return (+input1.value)/(+input2.value);
  }
  }
 









