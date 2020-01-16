;(function() {
    'use strict'
    const slider = document.querySelector('.slider');
    const item = slider.querySelectorAll('.item');
    let current = 0;
    let lastIndex = item.length -1;


    boot();

    function boot() {
            loop();

      }


    function loop() {
        show(item[current])
        setInterval(() => {
            ++current;
            if(current >= item.length){
                current = 0;
            }     
            
            let perv = getPerv();
            
            hide(perv);
            show(item[current]);
        }, 1000);
      }

    function getPerv() {
       if(current == 0){
           return item[lastIndex];
       }else {
           return item[current - 1];
       }
      }

    function hide(el) {
        if(!el){
            return;
        }else {
            el.style.opacity  = 0;
            el.style.zIndex = 1
        }
      }

    function show(el) {
        if(!el){
            return;
        }else {
            el.style.opacity = 1;
            el.style.zIndex = 99;
        }
      }


    
    



})();