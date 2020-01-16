; (function () {
    'use strict'
    const slider = document.querySelector('.slider');
    const item = slider.querySelectorAll('.item');
    let current = 0;
    let lastIndex = item.length - 1;


    function boot() {
        show(item[current]);
        setInterval(() => {
            loop();
            console.log('当前'+current);
            console.log('长度'+item.length);
            
        }, 3000);
    }

    function loop() {
        ++current;
        if (current >= item.length) {
            current = 0;
        }
        let prev = getPerv();
        let next = getNext();
        hide(prev);·
        show(next);
    }

    function getPerv() {
        if (current == 0) {
            return item[lastIndex];
        } else {
            return item[current - 1];
        }
    }

    function getNext() {
        return item[current];
    }
·
    function hide(el) {
        if (!el) {
            return
        } else {
            el.style.opacity = 0;
            el.style.zIndex = 1;
        
        }
    }

    function show(el) {
        if (!el) {
            return;
        } else {
            el.style.opacity = 1;
            el.style.zIndex = 99;
        }
    }

    boot();
    console.log(item);
    



})();