/*
 * @Author: your name
 * @Date: 2020-07-24 11:07:21
 * @LastEditTime: 2020-07-24 14:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/03/1.js
 */
; (function () {
    'use strict';
    let list = [
        {
            name: '百度',
            href: 'http://www.baidu.com/',
        },
        {
            name: '谷歌',
            href: 'http://www.google.com/',
        },
    ]

    boot();
    function boot() {
        render();
        setInterval(() => {
            list.push(
                {
                    name: '德蓝特',
                    href: 'http://www.dltst.com',
                },
            );
            render();
        }, 1000);
    }

    function render() {
        dropdown.innerHTML = '';
        list.forEach(it => {
            let a = document.createElement('a');
            a.classList.add('item');
            a.href = it.href;
            a.innerText = it.name;
            dropdown.appendChild(a);
        });
    }

})();