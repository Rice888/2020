; (function () {
    'use strict';
    /**
     * 将riceForm 暴露出去.
     */
    window.riceForm = {
        getData,
        saveData,
    };

    /**
     * @param {HTMLFormElement} from
     * @return {Object} data
     */
    function getData(from) {
        //新建空对象，用来存取数据
        let data = {};
        //选中所有form里所有input带name属性的元素
        let inputs = from.querySelectorAll(`[name]`);
        //forEach循环得到元素
        inputs.forEach(it => {
            //it就是每个组件
            //<input name='age' value= '1'>为例子
            //it.name ==> 'age'
            //it.value ==> '1' 

            //检查组件类型
            switch (it.type) {
                //如果组件是数字
                case 'number':
                    //将值转化成数字类型
                    data[it.name] = parseFloat(it.value);
                    break;
                //如果组件是单选
                case 'radio':
                    //如果有打勾就选中
                    if (it.checked) {
                        //     'age'        ‘1’
                        data[it.name] = it.value;
                    } else {
                        return;
                    }
                    break;
                //如果是复选框
                case 'checkbox':
                    //检查 当前是不是数组
                    if (!Array.isArray(data[it.name])) {
                        //如果不是就让他等于数组
                        data[it.name] = [];
                    }
                    //如果内容被选中就推到数组里
                    if (it.checked) {
                        data[it.name].push(it.value);
                    }
                    break;

                case 'date':
                case 'time':
                case 'week':
                case 'month':
                case 'datetime':
                case 'datetime-local':
                    //变成更强大的类型
                    data[it.name] = it.valueAsDate;
                    break;
                    //默认
                default:
                    data[it.name] = it.value;
            }
        });
        //返回
        return data;
    }

    /**
     * @param {object} data
     * @param {HTMLFontElement} output
     * 
     * key = data.na
     * data[key] = data.value;
     */

    function saveData(data, output) {
        //循环传进来的data 
        for (let key in data) {
            let outData = output.querySelector(`[name=${key}]`);
            let val = data[key];

            switch (outData.type) {
                //如果是单选
                case 'radio':
                    //选中所有符合的目标
                    let radio = output.querySelector(`[type=radio][name=${key}][value=${val}]`);
                    //如果纯在
                    if (radio) {
                        //吧内容勾选显示出来
                        radio.checked = true;
                    }
                    break;
                case 'checkbox':
                    val.forEach(it => {
                        let checkbox = output.querySelector(`[type=checkbox][name=${key}][value=${it}]`);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    });
                    break;
                default:
                    outData.value = data[key];
            }
        }
    }

    let user = {
        name: '王花花',
        age: 18,
        email: 'biaoyansu@gmail.com',
        today: '1998-01-01',
        gender: 'female',
        orientation: ['middle', 'male', 'female'],
        balance: 10,
        height: 180,
    };



    saveData(user, a);
    // getData(a);
    // console.log('getData(a):', getData(a));


    // console.log(getData(document.getElementById('b')));



})();