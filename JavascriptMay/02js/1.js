/*
 * @Author: your name
 * @Date: 2020-07-06 18:56:33
 * @LastEditTime: 2020-07-09 12:31:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/02js/1.js
 */
; (function () {
    'use strict';
    const slider = document.querySelector('.slider');
    const items = slider.querySelectorAll('.item');
    let i = 0;
    let get = getComputedStyle(items[i]).transform;

    
    
    boot();
    
    function boot() {
        console.log(get);
        startSlider();
    }

    function startSlider() {
        show(items[0]);
        setInterval(() => {
            checkC();

        }, 2000);
    }

    function checkC() {
        i++;
        if (i >= items.length) {
            i = 0;
        }

        let prev = getPrev();
        let next = items[i];

        show(next);
        hide(prev);

    }

    function getPrev() {
        return i === 0 ? items[items.length - 1] : items[i - 1];
    }

    function show(el) {
        if (!el) {
            return;
        }
        el.style.opacity = 1;
        el.style.zIndex = 3;
        // el.style.transform = 'translate3D(+600px,0,0)';
    }
    
    function hide(el) {
        if (!el) {
            return;
        }
        el.style.opacity = 1;
        el.style.zIndex = 1;
        // el.style.transform  = 'translate3D(-600px,0,0)';
    }





})();
