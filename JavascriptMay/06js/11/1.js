/*
 * @Author: your name
 * @Date: 2020-07-30 17:47:15
 * @LastEditTime: 2020-08-07 20:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/11/1.js
 */
; (function () {
    'use strict';
    window.rice = {
        boot,
    };

    function boot(setForm, head, data) {
        setForm.forEach(element => {
            let itemForm = document.querySelector(element);
            console.log(itemForm);
            setHead(itemForm, head);
            setBody(itemForm,head,data);
        });
    }

    function setHead(itemForm, thead) {
        thead.forEach(it => {
            if (it.bm == itemForm.id) {
                let thead = document.createElement("thead");
                let tr = document.createElement("tr")
                let html = "";
                for (let key in it) {
                    console.log(itemForm.id);
                    if (it[key] !== itemForm.id) {
                        html += `<th>${it[key]}</th>`
                    }
                }
                tr.innerHTML = html;
                thead.appendChild(tr);
                itemForm.appendChild(thead);
            }
        });
    }

    function setBody(itemForm,thead,data){
        thead.forEach(it=>{
            if(it.bm === itemForm.id) {
                let tbody = document.createElement('tbody');
                data.forEach(td => {
                    let tr = document.createElement('tr');
                    let html = "";
                    for(let key in it){
                        if(it[key] !== itemForm.id) {
                            html += `<td>${td[key]}</td>`
                        };
                    }
                    tr.innerHTML = html;
                    tbody.appendChild(tr);
                });
                itemForm.appendChild(tbody);
            }

        });
    }


})();