; (function () {
    'use strict'
    const board = document.querySelector('.board');
    const inner = board.querySelector('.inner')
    let size = 0;
    let ad = true;
    let list = ['背背山', '六六坡', '背背路'];

    function boot() {
        startFlash();

    }

    function startFlash() {
        setInterval(() => {
            toggle(() => {
                current++;
            });
            toggleColor();
            toggleBorder();
            // setSize() ;
            // changeText();
            server(list);
            console.log(getComputedStyle(board).color);

        }, 500);
    }

    function toggleColor() {
        if (isVisible()) {
            getComputedStyle(board).color == 'rgb(255, 0, 0)' ? board.style.color = 'rgb(0, 255, 0)' : board.style.color = 'rgb(255, 0, 0)';
        }
    }

    function toggleBorder() {
        isVisible() ? board.style.borderColor = 'inherit' : board.style.borderColor = 'transparent';
    }

    function isVisible() {
        return getComputedStyle(inner).opacity == 1;
    }

    function toggle(onShow, onHidden) {
        if (isVisible()) {
            inner.style.opacity = 0;
            onHidden && onHidden();
        } else {
            inner.style.opacity = 1;
            onShow && onShow();
        }
    }

    function setSize() {
        if (isVisible()) {
            size++;
            if (size > 5) {
                size = 1
            }
        }
        inner.style.fontSize = size * 2 + 'rem';
    }

    function changeText() {
        let text;
        if (isVisible()) {
            if (ad) {
                text = '贴膜';
            } else {
                text = '修脚';
            }
            inner.innerText = text;
            ad = !ad;
        }

    }

    let current = 0;
    function server(A) {
        if (isVisible()) {

            if (current >= A.length) {
                current = 0;
            }
        }
        inner.innerText = A[current];
        console.log(current);
    }
    boot();

})();