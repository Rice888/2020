/*
 * @Author: your name
 * @Date: 2020-07-23 17:52:22
 * @LastEditTime: 2020-07-24 11:05:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/02/1.js
 */
; (function () {
    'use strict';
    // let pop = document.querySelectorAll('[data-popOut]');
    let check = [];
    let popOut;

    boot();

    function boot() {
        prepare();
        show();
    }

    //@description:  创建一个新div 插入body
    function prepare() {
        popOut = document.createElement('div');
        popOut.classList.add('popOut');
        document.body.appendChild(popOut);
        setVisible();
    }

    //点击的目标显示
    function show() {
        document.addEventListener('click', function (e) {
            let x = e.target;
            let outDate = e.target.dataset.popout;
            sure(outDate,x);
        });
    }
    
    //设置显示隐藏
    function setVisible(visible = true) {
        popOut.hidden = visible;
    }
    /**
     * @description: 判断当前状态
     * @param {array} 
     * @return: 
     */
    function sure(outDate,x) {
        //如果没有outDate就隐藏
        if (!outDate) {
            setVisible();
            //否则把点的内容=dataset的内容
        } else {
            popOut.innerText = outDate;
            //推到数组里做判断
            check.push(outDate);
            //如果当前是隐藏就显示
            if (popOut.hidden == true) {
                setVisible(false);
                //检查是非两次的数一样一样就隐藏然后重制check
            } else if (check[0] == check[1]) {
                setVisible();
                check = [];
                //如果不一样也重制check然后把最后一次保存进行判断
            } else {
                check = [];
                check.push(outDate);
            }
        }
        //重制pop的位置
        reposition(x);
    }


    function reposition(b) {
        //get当前位置
        let l = b.getBoundingClientRect();
        popOut.style.left = l.x + 'px';
        popOut.style.top = l.y + 32 + 'px';

    }

})();·