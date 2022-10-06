'use strict'

function Calculator(value) {
    this.set=value; 
    this.add = (b) => (value += b);  
    this.mult= (b) => (value *= b);
    this.div = (b) => (value /= b);
    this.sub = (b) => (value -= b);
   }
  const calc = new Calculator(10);
  


