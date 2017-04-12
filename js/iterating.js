/**
 * Created by SarahVillareal on 4/12/17.
 */
(function(){
    "use strict";
//declare and initialize

    var pies = ["apple", "cherry", "key lime"];

    var pies = [];
    pies [1] = "apple";
    pies [2] = "cherry";

    // counting array items

    console.log (pies. lenght);


    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.

    var names = ["Sandy", "Sarah", "Suzy", "Sabrina"];
    console.log (names. length);
    console.log (names [0]);
    console.log (names [1]);
    console.log (names [2]);
    console.log (names [3]);

    for (var i = 0; i < pies.length; ++i) {
        console.log (pies [i]);
    }

    pies.forEach();

    for (var i = 0; i < nameslenght; i++){
        consoloe.log (names [i]);

        names.forEach (function (element, index){
            console.log (element + "and index is: " + index);
        })
    }

})();

