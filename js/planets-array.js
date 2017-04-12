// /**
//  * Created by SarahVillareal on 4/12/17.
//  */
// "use strict
// (function(){
//     var fruits = []
//     fruits.push("Banana");
//     fruits.push("Apple");
//     fruits.push("Kiwi");
//         console.log(el);
//     })
// // ==add 1,000 index=== for (var i = 0; i <1000; i++){fruits.push("Fruit" + i );}//
//     fruits.forEach(function (el, i ) {
//         console.log(el + "index" + i );
// })();
//
//     // Deleting the last element



(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planet");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.unshift('Sun');
    console.log(planets);


    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    console.log('Removing the first item:' + planets[planets.length -0]);
    var removeItemSun = planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    console.log('Removing the last item:' + planets[planets.length -1]);
    var removeItemPluto = planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var index = planets.indexOf('Earth');
    console.log(index);

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    var removed = planets.splice (3,1);
    console.log(removed);
    console.log(planets);

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.splice(planets.indexOf('Earth') + 1, 0,'Mars');
    console.log(planets);

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.sort();
    console.log(planets);

})();