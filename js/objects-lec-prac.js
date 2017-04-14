"use strict";
//------Creating a Custom Object-----//

//var car = new Object();

// console.log(typeof car);

//------Object Literal Notation-----//
//***---An Object instance can also be created by using object literal notation (using curly braces).
//  continued from above: JavaScript will treat this just as if you had used new Object().

//var car = {};

//console.log(typeof car);

//-----Setting Properties on a Custom Object

// Once you have created an object, you can assign properties to it.
// As mentioned earlier, properties are pieces of data that are relevant to the object.

//  Properties are assigned to JavaScript objects by either dot notation or array notation.

//var car = {};
//car.make = "Toyota";
//car["model"] = "Camry";

var car = {
    make: "Toyota",
    model: "Camry",
};
console.log("The car model is: " + car.model);