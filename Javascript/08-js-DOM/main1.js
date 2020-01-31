; (function () {
    'use strict'
    const A = document.querySelector('#A');
    const B = document.querySelector('#B');

    document.addEventListener('click',(el)=>{
            // let target = el.target;
        if(el.target == A) {
             B.hidden =! B.hidden;
             return;
          }
        
        if(!el.target.closest('#B')) {
             B.hidden = true;
          }

          console.dir(el.target);
          
    });




})();