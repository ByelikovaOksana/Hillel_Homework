
'use strict';

let action; 
while (action !=='-' && action !=='+' && action !=='*' && action !=='/'){
      action = prompt('Введите действие:')
    } 

const arr = [];
const amount=  getAmount('Введите количество чисел');
arr.length=amount 


for(let i=0; i<arr.length; i++){
  do{arr[i]=+prompt('Введите число')}
  while(isNaN(arr[i])||arr[i] ==''||arr[i]==null)
      };
     
      
function getAmount(label) {
  let amt;
  do {
      amt = prompt(label);
  } while (isAmountInvalid(amt));

  return +amt;
}

function isAmountInvalid(amount){
  return amount===null||amount.trim() ===''||isNaN(amount)||+amount<3;
 }


function getSum(){

let sum=0
for (let i = 0; i < arr.length; i++){
 sum += arr[i]}
 return sum
 }
 

 let resultSubt=arr.reduce(function (prev,item){
  return prev-item })


function getMult(){
  let mult=1
  for (let i = 0; i < arr.length; i++){
   mult *= arr[i]}
    return mult}
  
    
  let resultDivision=arr.reduce(function (prev,item){
       return prev/item })
   
 

switch (action) {
  case '+':getSum()
  alert(arr.join('+')+'='+getSum());    
    break;
  case '-':resultSubt
  alert(arr.join('-')+'='+resultSubt);
    break;
  
  case '*': getMult()
  alert(arr.join('*')+'='+getMult());;;
    break;
   case '/': resultDivision  
   alert(arr.join('/')+'='+resultDivision);
    break;
  }