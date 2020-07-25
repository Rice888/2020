/*
 * @Author: your name
 * @Date: 2020-07-24 14:53:44
 * @LastEditTime: 2020-07-25 11:36:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/04/1.js
 */
; (function () {
    'use strict';
    let tbody = document.getElementById('tbody');
    let scope = document.getElementById('scope');
    let list = [
        {
            name: '小米',
            gender: '同',
            score: 0,
        },
        {
            name: '小康',
            gender: '男',
            score: 66,
        },
        {
            name: '安妮',
            gender: '女',
            score: 100,
        },
    ];

    boot();
    function boot() {
        render();
        bindEvent();
    }
   
    function render(range) {
        tbody.innerHTML = "";
        list.forEach((user,i)=>{

            if(range) {
                let avail = 
                user.score < +range.max +1 &&
                user.score > +range.min -1;
                if(!avail) {
                    return;
                }
            }

            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user.score}</td>
                <td><button class="del">删除</button></td>
            `
            tbody.appendChild(tr);
            let del = tr.querySelector('.del');

            del.addEventListener('click', function () {
                list.splice(i,1);
                tr.remove();
                render();//done 重新渲染
            })
        });
    }

    function bindEvent() {
        scope.addEventListener('click', function (e) {
            let target = e.target;
            let range = target.dataset;
            if(target.nodeName !== 'BUTTON'){
                return;
            }
            render(range);
        })
    }
})();