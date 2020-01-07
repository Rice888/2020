;(function() {
    'use strict'
    let times = 11;
    let name = 'whh';
    let greeting;


    if(times  >= 18) {
        greeting = 'bye!';

    }else if(times <= 12) {
        greeting = 'Do you have lunch!'
    } else {
        greeting = 'Hello!'
    };


    console.log(name +':'+ greeting);



})();