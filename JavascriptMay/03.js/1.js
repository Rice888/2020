/*
 * @Author: your name
 * @Date: 2020-07-09 12:35:41
 * @LastEditTime: 2020-07-10 23:52:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/03.js/1.js
 */
; (function () {
    'use strict';
    const slider = document.querySelector('.slider');
    const items = slider.querySelectorAll('.item');

    let f;
    // i 循环 slider下都items
    let i = 0;
    // config 配置默认使用模式
    let config = {
        mode: 'slider',
        interval: 1000,
    }

    //驱动可以传入个性样式
    boot({
        // mode: 'fade',
        interval:2000,
    });

    function boot(customer) {
        // assign 加个对象合并 个性化参数右边覆盖左边.
        config = Object.assign({}, config, customer)

        // 用switch 判断.
        switch (config.mode) {
            case 'slider':
                //默认是假
                f = false;
                checkS(f);
                setInterval(() => {
                    initI();
                    checkS(f);
                }, config.interval);
                break;
            case 'fade':
                //变成真
                f = true;
                checkS(f);
                setInterval(() => {
                    initI();
                    checkS(f);
                }, config.interval);
                break;
            default:
                f = false;
                //setInterval 延迟启动调用一次 第一次传如即可
                checkS(f);
                setInterval(() => {
                    initI();
                    checkS(f);
                }, config.interval);
                break;
        }
        console.log(config);
    }

    function checkS(f) {
        let prev = getPrev();
        let current = getCurrent();
        let next = getNext();
        toLeft(prev,f);
        now(current,f);
        toRight(next,f);
    }

    function initI() {
        i++;
        if (i >= items.length) {
            i = 0;
        }
    }
    // i= 0  把最后一张图移到循环 0 -1 不够 变成4 
    function getPrev() {
        return i === 0 ? items[items.length - 1] : items[i - 1];
    }

    console.log(items[items.length -1]);
    function getCurrent() {
        return items[i];
    }

    //i 大于长度 图片从第一个开始
    function getNext() {
        return i >= items.length - 1 ? items[0] : items[i + 1];
    }

    //f 是针都变淡入淡出 假的偏移
    function toLeft(el,f) {
        if (!el) {
            return;
        }
        f ? el.style.opacity = 0 : el.style.transform = "translate3D(-600px,0,0)";
        el.style.zIndex = 1;
    }

    //f 是针都变淡入淡出 假的偏移
    function now(el,f) {
        if (!el) {
            return;
        }
        if(f) {
            el.style.opacity = 1;
        }else{
            el.style.transform = "translate3D(0,0,0)";
        }
        el.style.zIndex = 5;
    }

//f 是针都变淡入淡出 假的偏移
    function toRight(el,f) {
        if (!el) {
            return;
        }
        f ? el.style.opacity = 0 : el.style.transform = "translate3D(600px,0,0)";
        el.style.zIndex = 0;
    }



})();