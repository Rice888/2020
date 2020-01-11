;(function() {
    'use strict'
    
    function shopping(a) {
        console.log('clothes');
        console.log('food');
        console.log('camera');
        let games = a();
        console.log('active'+ games);
        
        
    }

    function game() {
        return ' game';
    }

    shopping(game);

})();