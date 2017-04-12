/**
 * Created by SarahVillareal on 4/11/17.
 */

//====Given Example=====//

'use strict';
 var random= Math.floor((Math.random()*50)+1);
 console.log('Random stopping point is: ' + random);
     for (var i = 1; i < 100; i++) {
     if (i % 2 == 0)
         continue;

     console.log('Here is an odd number: ' + i);
 }


