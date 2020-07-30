/*
 * @Author: your name
 * @Date: 2020-07-28 13:42:36
 * @LastEditTime: 2020-07-29 14:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/09/1.js
 */
; (function () {
    'use strict';
    window.rice = {
        boot,
    }
    /**
     * @description: 生成表单是数据
     * @param {Array} outEl 生成数据目标
     * @param {Array} thead 生成表中的一项
     * @param {Array} data 生成数据
     */


    function boot(outEl, setHead, data) {
        // let thead , tr;
        //循环输出位置的数组 找到每一个表单
        outEl.forEach(it => {
            let outEl = document.querySelector(it);
            // 循环表头数据
            console.log(outEl);
            setHead.forEach(b => {
                //判断表头到位置 是否等于 id到值 就是找到和表头相同到表 用户只需穿件表id
                    
                if (b.bm == outEl.id) {
                    //如果存在创建 thead 和 tr
                    let thead = document.createElement('thead');
                    let tbody = document.createElement('tbody');
                    let tr = document.createElement('tr');
                    //循环表头里到数组  同 创建th
                    let html = "";
                    for (let key in b) {
                        //判断如果 把但表头到数据和 thead 到数据一一对应
                        if (b[key] !== b.bm) {
                            html += `<th>${b[key]}</th>`;
                        }
                        tr.innerHTML = html;
                    }
                    console.log(tr);
                    thead.appendChild(tr);
                    outEl.appendChild(thead);


                    data.forEach(el => {
                        let btr = document.createElement('tr');
                        let html = "";
                        // console.log(btr);
                        for (let user in b) {
                            
                            if (el[user] !== undefined) {
                                html += `<td>${el[user]}</td>`
                            }

                        }
                        btr.innerHTML = html;
                        tbody.appendChild(btr);
                    });
                    outEl.appendChild(tbody);
                }
            });

        });
    }
})();