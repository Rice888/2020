;(function() {
    'use strict'
    const a = document.getElementById('a');
    const toggle = document.getElementById('toggle');


    document.addEventListener('keyup',(it)=>{

      if(it.key == 'j' && it.metaKey) {
         
        a.hidden = ! a.hidden;
        }

      console.log(it);
      
    });
    
    
})();