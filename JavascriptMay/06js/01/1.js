/*
 * @Author: your name
 * @Date: 2020-07-19 14:18:23
 * @LastEditTime: 2020-07-23 17:53:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/1.js
 */
; (function () {
    'use strict';
    let collect, popup, sure, mask,config;
    let defaultConfig = {
        on: 'click',
    };

    boot('#collect', '#popup', '#sure',{
        on:'dblclick',
    });

    function boot(c, p, s,customer) {
        config = Object.assign({},defaultConfig, customer);
        collect = document.querySelector(c);
        popup = document.querySelector(p);
        sure = document.querySelector(s);
        console.log(config);

        prepareP();
        prepareM();

        openP();
        closeP();

    }
·
    function prepareP() {
        popup.classList.add('myPop');
        popup.hidden = true;
    }

    function prepareM() {
        mask = document.createElement('div');
        mask.classList.add('myMask');
        mask.hidden = true;
        document.body.appendChild(mask)
    }

    function setVisible(visible = true) {
        mask.hidden = popup.hidden = visible;
    }

    function openP() {
        collect.addEventListener(config.on, function () {
            setVisible(false);
            reposition();
        });
    }

    function closeP() {
        sure.addEventListener(config.on, function () {
            setVisible();
        });
        mask.addEventListener(config.on, function () {
            setVisible();
        });
        
        document.body.addEventListener('keyup', function (e) {
            console.dir(e);
            if(e.key === 'Escape') {
                setVisible();
                return;
            }
        })
    }

    function reposition(position = 'center') {
        console.log(1);
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        let wP = popup.offsetWidth;
        let wH = popup.offsetHeight;
        switch (position) {
            case '':
                
                break;
        
            default:
                popup.style.left = w / 2 - wP / 2 + 'px';
                popup.style.top = h / 2 - wH / 2 + 'px';
                break;
        }
    }


})();