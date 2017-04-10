'use strict';

var luckyNumber = Math.floor(Math.random()* 6);

var  receipt= 60;

var total= 0;

switch (luckyNumber) {

    case 1:
        console.log("You got a 10% discount");
        total = receipt - (receipt * .1)
        break;
    case 2:
        console.log("You Got A 20% Discount");
        total = receipt - (receipt * .2)
        break;
    case 4:
        console.log("You Got A 40% Discount");
        total = receipt - (receipt * .4)
        break;
    case 5:
        console.log("You Got A 50% Discount");
        total = receipt - (receipt * .5)
        break;
    default:
        console.log("You Did Not Get A Discount");
        total = receipt;
}

console.log("Total: $" + total.toFixed(4));

switch (luckyNumber) {

    case 1:
        console.log("January");
        total = receipt - (receipt * .1)
        break;
    case 2:
        console.log("February");
        total = receipt - (receipt * .2)
        break;
    case 4:
        console.log("April");
        total = receipt - (receipt * .4)
        break;
    case 5:
        console.log("May");
        total = receipt - (receipt * .5)
        break;
    default:
        console.log("You Did Not Get A Discount");



}

