// 'use strict';
function Hamburger(size) {
    this._size=size;
    this._topping=[];
     };

Hamburger.SMALL_SIZE = { price: 50, callories: 100 };
Hamburger.MIDDLE_SIZE = { price: 75, callories: 150 };
Hamburger.BIG_SIZE = { price: 100, callories: 200 };

Hamburger.TOPPING_MAYO = { price: 20, callories: 30 };
Hamburger.TOPPING_KETCHUP = { price: 40, callories: 20 };
Hamburger.TOPPING_CHEESE = { price: 35, callories: 50 };
Hamburger.TOPPING_SALAD = { price: 45, callories: 30 };
Hamburger.TOPPING_POTATO = { price: 100, callories: 70 };

Hamburger.prototype.addTopping=function(topping){
    this._topping.push(topping)
    return this
};

Hamburger.prototype.getPrice=function(){
    return this._topping.reduce(
        (acc,topping)=> acc + topping.price,
        this._size.price
    );
};
Hamburger.prototype.getCallories=function(){
    return this._topping.reduce(
        (acc,topping)=> acc + topping.callories,
        this._size.callories
    );
};

const hamburger = new Hamburger(Hamburger.BIG_SIZE); 
hum.addTopping(Hamburger.TOPPING_POTATO);
hum.addTopping(Hamburger.TOPPING_CHEESE);
hum.addTopping(Hamburger.TOPPING_SALAD);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());