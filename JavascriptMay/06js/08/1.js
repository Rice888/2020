/*
 * @Author: your name
 * @Date: 2020-07-27 15:20:05
 * @LastEditTime: 2020-07-28 13:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/08/1.js
 */
; (function () {
    'use strict';
    window.rice = {
        getData,
        setData,
    }


    function getData(form) {
        let data = [];

        form.forEach(element => {
            let aim = document.querySelector(element);
            let getValue = aim.querySelectorAll('[name]');
            let item = {};
            getValue.forEach(it => {
                switch (it.type) {
                    case 'radio':
                        if (!it.checked) {
                            return;
                        }
                        item[it.name] = it.value;
                        break;
                    case 'checkbox':
                        // console.log(it);
                        if (!Array.isArray(item[it.name])) {
                            item[it.name] = [];
                        }
                        if (!it.checked) {
                            return;
                        }
                        item[it.name].push(it.value);
                        break;
                    case 'date':
                    case 'month':
                    case 'week':
                        item[it.name] = it.valueAsDate;
                        break;
                    default:
                        item[it.name] = it.value;
                        break;
                }
            });
            data.push(item);
        });
        console.log(data);
    }

    function setData(data,form) { 
        form.forEach(element => {
            let hel = document.querySelector(element);
            for(let key in data){
                let aim = hel.querySelector(`[name=${key}]`);
                if(aim) {
                    switch (aim.type) {
                        case 'radio':
                            let radio = hel.querySelector(`[type=radio][name=${key}][value=${data[key]}]`);
                            radio && (radio.checked = true);
                            break;
                        case 'checkbox':
                            if(!Array.isArray(data[key])) {
                                return;
                            }
                            data[key].forEach(val=>{
                                let checkbox = hel.querySelector(`[type=checkbox][name=${key}][value=${val}]`);
                                checkbox && (checkbox.checked = true);
                            })
                            break;
                        default:
                            aim.value = data[key];
                            break;
                    }
                }                
            }
        });
    }



})();