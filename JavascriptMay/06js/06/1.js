
/*
* @Author: your name
* @Date: 2020-07-25 14:26:56
 * @LastEditTime: 2020-07-26 13:52:40
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: /JavascriptMay/06js/06/1.js
*/
; (function () {
    'use strict';
    window.rice = {
        getData,
        setData,
    };
    let Form = [form];
    let data = {
        name: '埃尼',
        age: 18,
        gender: 'female',
        height: '170',
        weight: '100',
        money: '150000000',
        datetime: '12',
        email: 'rice@gmail.com',
        birthday: '2008-01-01',
        week: '1988-W20',
        orientation: ['car', 'male'],
        a: 1,
        b: 3,
    };

    function getData(select) {
        let data = {};
        let getValue = select.querySelectorAll('[name]')

        getValue.forEach(it => {
            switch (it.type) {
                case 'number':
                    data[it.name] = parseFloat(it.value);
                    break;
                case 'radio':
                    if (!it.checked)
                        return;
                    data[it.name] = it.value;
                    break;
                case 'checkbox':
                    if (!Array.isArray(data[it.name])) {
                        data[it.name] = [];
                    }
                    if (it.checked) {
                        data[it.name].push(it.value);
                    }
                    break;
                case 'date':
                case 'month':
                case 'week':
                    data[it.name] = it.valueAsDate;
                    break;
                default:
                    data[it.name] = it.value;
                    break;
            }

        });
    }


    function setData(data, select) {
        select.forEach(it => {
            for (let key in data) {
                let outValue = it.querySelector(`[name=${key}]`);
                let val = data[key];

                if (outValue) {
                    switch (outValue.type) {
                        case 'radio':
                            let radio = it.querySelector(`[type=radio][name=${key}][value=${val}]`);
                            radio && (radio.checked = true);
                            break;
                        case 'checkbox':
                            val.forEach(ck => {
                                console.log(ck);
                                let checkbox = it.querySelector(`[type=checkbox][name=${key}][value=${ck}]`);
                                checkbox && (checkbox.checked = true);
                            });
                            break;
                        default:
                            outValue.value = data[key];
                            break;
                    }
                } else {
                    return;
                }
            }
        });
    }

    // setData(data, Form);
    // getData(form);





})();