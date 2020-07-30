/*
 * @Author: your name
 * @Date: 2020-07-29 12:54:38
 * @LastEditTime: 2020-07-30 17:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/10/1.js
 */
; (function () {
    'use strict';
    window.rice = {
        boot,
    }

    function boot(setForm, head, data) {
        render(setForm, head, data);
    }

    function render(setForm, head) {
        setForm.forEach(element => {
            let idItem = document.querySelector(element);
            outHead(idItem, head);
            outBody(idItem, head, data);
        });

    }

    function outHead(idItem, head) {
        head.forEach(it => {
            if (it.bm == idItem.id) {
                let thead = document.createElement('thead');
                let tr = document.createElement('tr');
                let html = "";
                for (let tl in it) {
                    if (it[tl] !== idItem.id) {
                        html += `<th>${it[tl]}</th>`
                    }
                }
                tr.innerHTML = html;
                thead.appendChild(tr);
                idItem.appendChild(thead);
            }
        });
    }

    /**
     * @description: 输出数据
     * @param {Array} idItem html元素目标Id
     * @param {Array} head.bm   表头加指引作用
     * @param {Array} data  要显示都元素
     */
    function outBody(idItem, head, data) {
        console.log(idItem);
        //先循环表头找到对应到元素
        head.forEach(it => {
            //如果是对应到元素创建tbody
            if (it.bm == idItem.id) {
                let tbody = document.createElement('tbody');
                //循环data里数据 每一条创建一个tr
                data.forEach(item => {
                    let tr = document.createElement('tr');
                    let html = '';
                    //循环表头到key
                    for (let key in it) {
                        //done 如果表头里到key 不是 表到索引 添加大html
                        if (it[key] !== idItem.id) {
                            //done html 找到 data里和表头到ky对应到值
                            html += `<td>${item[key] || '-'}</td>`
                        }
                    }
                    tr.innerHTML = html;
                    tbody.appendChild(tr);
                });
                idItem.appendChild(tbody);
            }
        });

    }


})();