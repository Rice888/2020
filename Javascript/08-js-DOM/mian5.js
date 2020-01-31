; (function () {
    'use strict'
    let clicked = new Set();
    let old;

    boot();

    function boot() {
        bindEvents();
    }

    function bindEvents() {
        document.addEventListener('click', (e) => {
            let el = e.target;
            let content = el.dataset.popout;
            if (content) {
                if (old) {
                    hide(old);
                }
                old = el;
                show(el, content);
                clicked.add(el);
            } else {
                hideAll();
            }
            console.dir(clicked);

        });
    }

    function show(el, content) {
        if (!el.$popout) {
            let popout = document.createElement('div');
            popout.classList.add('popout');
            popout.innerText = content;
            el.$popout = popout;
            document.body.appendChild(popout);
        } else {
            el.$popout.hidden = false;
        }
        reposition(el);

    }
    function hide(el) {
        el.$popout.hidden = true;
    }

    function hideAll() {
        clicked.forEach(el => {
            el.$popout.hidden = true;
        });
    }

    function reposition(el) {
        let b = el.getBoundingClientRect();

        switch (el.dataset.position) {
            case 'top':
                el.$popout.style.left = b.left + 'px';
                el.$popout.style.top = b.top - el.offsetHeight * 2.5  + 'px';
                break;
            case 'bottom':
                el.$popout.style.left = b.left + 'px';
                el.$popout.style.top = b.top + el.offsetHeight + 5 + 'px';
                break;
            case 'left':
                el.$popout.style.left = b.left - el.offsetWidth * 3.5  + 'px';
                el.$popout.style.top = b.top  + 'px';
                break;
            case 'right':
                el.$popout.style.left = b.right + 1 + 'px';
                el.$popout.style.top = b.top  + 'px';
                break;
            default:
                break;
        }
        console.log(b);
    }
    

})();