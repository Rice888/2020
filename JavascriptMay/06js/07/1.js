/*
 * @Author: your name
 * @Date: 2020-07-26 15:26:09
 * @LastEditTime: 2020-07-27 13:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavascriptMay/06js/07/1.js
 */
; (function () {
    'use strict';
    window.rice = {
        getData,
        setData,
    }
    /** 
     * done html 取值
     * @description: 
     * @param {HtmlElement} select 
     * @param {Array} select
     */

    function getData(select) {
        //新建空对象data 
        let data = {};
        //forEach 循环数组
        select.forEach(element => {
            //选中 element的ID
            let getEl = document.querySelector(element);
            //选中 id下有name的元素
            let getValue = getEl.querySelectorAll('[name]');
            //循环 getValue数组
            getValue.forEach(it => {
                switch (it.type) {
                    case 'radio':
                        //没有被打勾跳过
                        if (!it.checked) {
                            return;
                        }
                        //有打勾的it的健的值等于打勾的value
                        data[it.name] = it.value;
                        break;
                    case 'checkbox':
                        //Array.isArray(target) 不等于是空数组
                        if (!Array.isArray(data[it.name])) {
                            data[it.name] = [];
                        }
                        if (!it.checked) {
                            return;
                        }
                        //等于把it.value push进去
                        data[it.name].push(it.value);
                        break;
                    case 'date':
                    case 'time':
                    case 'week':
                    case 'month':
                        //data 类型转陈valueAsDate
                        data[it.name] = it.valueAsDate;
                        break;
                    default:
                        data[it.name] = it.value;
                        break;
                }
            });
        });
    }

    /**
     * done 设置用户数据方式重要
     * @description: 设置数据 用于生成数据
     * @param {Object} data 用户数据 
     * @param {Array} select 要填充的表单  
     */
    function setData(data, select) {
        //用forEach循环数组it = 表单id
        select.forEach(it => {
            //产线选取HTML DOM ELement 每一项
            let getM = document.querySelector(it);
            //判断 judge Html 是否有 表单里的ID 没有就跳过
            if(!getM) {
                return
            }
            
            // 用for let in 循环对象
            for (let key in data) {
                //在表单iD 每一项中找到 name 和 data 数据里相同的key 健
                let outValue = getM.querySelector(`[name=${key}]`);
                //如果相应的name 继续
                if (outValue) {
                    //switch 多项判断 判断选取的name的type 类型
                    switch (outValue.type) {
                        //如果有radio 当选框
                        case 'radio':
                            //找到当前把判断是否两个值相同，data的key的值赋值给 
                            let radio = getM.querySelector(`[type=radio][name=${key}][value=${data[key]}]`);
                            //如果项目有radio 就使用checked = true 进行打勾
                            radio && (radio.checked = true);
                            break;
                        case 'checkbox':
                            //checkbox因为有多个属性所以需要用数组forEach循环 data里的默认值
                            data[key].forEach(it=>{
                                //如果默认data里的kye等于 checkbox的值就打勾
                                let checkbox = getM.querySelector(`[type=checkbox][name=${key}][value=${it}]`);
                                checkbox && (checkbox.checked = true);
                            });
                            break;
                           // 其他类型默认等于data里的key
                        default:
                            outValue.value = data[key];
                            break;
                    }
                }
            }
        });
    }




})();