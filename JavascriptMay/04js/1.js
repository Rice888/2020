/*
 * @Author: your name
 * @Date: 2020-07-11 22:34:07
 * @LastEditTime: 2020-07-14 22:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/04js/1.js
 */
; (function () {
    'use strict';
    const slider = document.querySelector('.slider');
    const items = slider.querySelectorAll('.item');
    let i = 0 ;
    let config = {
        mode:'slider',
        interval:1000,
    };

    boot({
        mode:'fade',
        interval:2000,
    });

    function boot(customer) {
        config = Object.assign({},config, customer);
        let f;
        switch (config.mode) {
            case 'slider':
                f = false;
                checkS(f)
                setInterval(() => {
                    initI();
                    checkS(f);

                }, config.interval);
                break;
            case 'fade':
                f = true;
                checkS(f)
                setInterval(() => {
                    initI();
                    checkS(f);
                }, config.interval);
                break;
            default:
                case 'slider':
                f = false;
                checkS(f)
                setInterval(() => {
                    initI();
                    checkS(f);

                }, config.interval);
                break;
        }
    }


    function initI() {
        i++;
        if(i >= items.length){
            i = 0;
        }
    }

    function checkS(key) {
        let prev = getPrev();
        let now = getNow();
        let next = getNext();

        toLeft(prev,key);
        show(now,key);
        toRight(next,key);
    }

    function getPrev() {
        if(i===0){
            return items[items.length -1];
        }else{
            return items[i -1];
        }
    }

    function getNow() {
        return items[i];
    }

    function getNext() {
        if(i >= items.length -1) {
            return items[0];
        }else{
            return items[i+1];
        }
    }

    function toLeft(el,key) {
        if(!el) {
            return;
        }
        if(key) {
            el.style.opacity = 0;
        }else{
            el.style.transform = 'translate3D(-600px,0,0)';
        }
        el.style.zIndex = 1;
    }

    function show(el,key) {
        if(!el){
            return;
        }
        if(key){
            el.style.opacity = 5;
        }else{
            el.style.transform = 'translate3D(0,0,0)';
        }
        el.style.zIndex = 5;
    }

    function toRight(el,key) {
        if(!el){
            return;
        }
        if(key){
            el.style.opacity = 0;
        }else{
            el.style.transform = 'translate3D(600px,0,0)';
        }
        el.style.zIndex = 0
    }
    




})();