; (function () {
    'use strict'
    let popup, trigger, mask;

    boot('#A', '#B');

    function boot(A, B) {
        trigger = document.querySelector(A);
        popup = document.querySelector(B);

        initPopup();
        initMask();
        visible(false);
        hearOpen();
        hearClose();
    }


    function hearOpen() {
        document.addEventListener('click', (e) => {
            if (e.target == trigger) {
                visible(true);
            }
            rePosition()
        });
    }

    function hearClose() {
        mask.addEventListener('click', () => {
            visible(false);
        });

        popup.addEventListener('click', (e) => {
            if (e.target.className == 'close') {
                visible(false);
            }
        });

    }

    function rePosition() {
        popup.style.left = window.innerWidth / 2 - popup.offsetWidth / 2 + "px";
    }

    function visible(able = false) {
        popup.hidden = mask.hidden = !able;
    }

    function initPopup() {
        popup.classList.add('popup')
        popup.lastElementChild.classList.add('close');
        popup.firstElementChild.style.display = 'block';
        popup.lastElementChild.style.display = 'block';
        popup.lastElementChild.style.margin = '0 auto';
    }

    function initMask() {
        mask = document.createElement('div');
        mask.classList.add('mask');
        document.body.appendChild(mask);
    }



})();