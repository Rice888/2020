; (function () {
    'use strict'
    const slider = document.querySelector('.slider');
    const item = slider.querySelectorAll('.item');
    let lastIndex = item.length - 1;
    let current = 0;


    boot();

    function boot() {

        console.log(getPrev());
        console.log(getNow());
        console.log(getNext());

        setInterval(() => {


            let prev = getPrev();
            let now = getNow();
            let next = getNext();
            if (current < lastIndex) {
                ++current;
            } else {
                current = 0;
            }

            prev.style.left = -prev.offsetWidth + 'px' ;
            now.style.left = '0';
            now.style.zIndex = '2';
            next.style.left = +next.offsetWidth + 'px';
            console.log(current);



        }, 2000);

    }

    function getPrev() {
        if (current > 0) {
            return item[current - 1];
        } else {
            return item[lastIndex];
        }
    }

    function getNow() {
        return item[current];
    }

    function getNext() {
        if (current < lastIndex) {
            return item[current + 1];
        } else {
            return item[0];
        }


    }



})();