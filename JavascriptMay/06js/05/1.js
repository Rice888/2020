/*
 * @Author: your name
 * @Date: 2020-07-25 11:41:53
 * @LastEditTime: 2020-07-25 14:24:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/05/1.js
 */
; (function () {
    'use strict';
    let getData = document.querySelector('#form');
    let getValue = getData.querySelectorAll('[name]');
    let data = {
        name: '埃尼',
        age: 18,
        gender: 'female',
        height: '170',
        weight: '100',
    };

    console.log(getValue);
    getValue.forEach(it=>{
        console.log(it);
        //done input的 data[it.name]健 it.value 值
        data[it.name] = it.value;
    })

    //done key取健 data[key]取值
    for (let key in data) {
        let outValue = getData.querySelector(`[name=${key}]`);
        outValue.value = data[key];
    }



})();