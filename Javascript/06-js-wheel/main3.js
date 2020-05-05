; (function () {
    'use strict'
    const slider = document.querySelector('.slider');
    const item = document.querySelectorAll('.item');
    let current = 0;


    loop();
    function loop() {

    }


    setInterval(() => {
        ++current;

        if (current >= item.length) {
            current = 0;
        }

        let prev = current == 0 ? item[item.length - 1] : item[current - 1];
        let next = item[current];

        hide(prev);
        show(next);
    }, 1000);


    function hide(el) {
        if (!el) {
            return;
        } else {
            el.style.opacity = 0;
        }
    }

    function show(el) {
        if (!el) {
            return;
        } else {
            el.style.opacity = 1;
        }

    }






})();