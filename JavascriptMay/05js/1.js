/*
 * @Author: your name
 * @Date: 2020-07-14 22:20:37
 * @LastEditTime: 2020-07-19 15:05:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/05js/1.js
 */
; (function () {
    'use strict';
    const btn = document.querySelector('#btn');
    window.addEventListener('click', (e) => {
        // console.log(e);

        if (e.target == btn) {
            dropDown.hidden =  !dropDown.hidden;
            return;
        } 
        
        if(!e.target.closest('#dropDown')) {
            dropDown.hidden = true;
        }
    });

})();