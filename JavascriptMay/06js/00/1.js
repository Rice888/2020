/*
 * @Author: your name
 * @Date: 2020-07-19 14:18:23
 * @LastEditTime: 2020-07-21 13:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/1.js
 */ 
;(function() {
    'use strict';
    let collect,popup,mask;
    
    boot('#collect','#popup');
    

    function boot(collectSelector,popupSelector) {
        collect = document.querySelector(collectSelector);
        popup = document.querySelector(popupSelector);
        
        preparePop();
        prepareMask();

        bindOpen();
        bindClose();
    }
    
    function preparePop() {
        popup.hidden = true;
        popup.classList.add('myPop');
        
    }

    function repositionPop(yOffset = 200) {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let width = popup.offsetWidth;
        let height = popup.offsetHeight;

        popup.style.left = w/2 - width/2 + 'px';
        popup.style.top = h/2 - height/2 - yOffset + 'px';
    }
    
    function prepareMask() {
        mask = document.createElement('div');
        mask.classList.add('mask');
        mask.hidden= true;
        document.body.appendChild(mask);
    }

    function setVisible(visible = false) {
        mask.hidden = popup.hidden = visible;
    }

    function bindOpen() {
        collect.addEventListener('click', function () {
            setVisible();
            repositionPop(); //done 重新定位
        });
    }

    function bindClose() {
        mask.addEventListener('click', function () {
            setVisible(true);
        });
        sure.addEventListener('click', function () {
            setVisible(true);
        });
        document.addEventListener('keyup', function (key) {
            console.dir(key);
            if(key.key == "Escape") {
                setVisible(true);
                return;
            }
        });
    }


})();