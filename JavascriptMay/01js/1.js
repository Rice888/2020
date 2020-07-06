/*
 * @Author: your name
 * @Date: 2020-07-05 10:24:35
 * @LastEditTime: 2020-07-06 18:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/01js/1.js
 */
; (function () {
    'use strict';
    const T = document.querySelector('#test');
    const A = T.querySelector('#AD');
    let winGet = getComputedStyle;
    let c = 0;

    let bc = ['rgb(255, 255, 255)',
        'rgb(47, 86, 194)',
        'rgb(179, 157, 35)',
        'rgb(54, 207, 207)',
        'rgb(209, 85, 27)']

    let i = ['技能培训', '房屋装修', '网站设计']

    
    boot();

    function boot() {
        startFlash();
    }

    function startFlash() {
        setInterval(() => {
            visible(()=>{
                GB();
            });
        }, 1000);
    }
    
    function cV() {
        return winGet(A).opacity == 1;
    }
    
    function visible(show,hide) {
        if(cV()) {
            A.style.opacity = 0;
            hide && hide();
        }else{
            A.style.opacity = 1;
            show && show();
        }
    }

    function GB() {
        i < bc.length-1? i ++ : i =0;
        T.style.borderColor =  bc[i];
        
    }
·



    

    







})();