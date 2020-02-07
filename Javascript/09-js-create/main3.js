; (function () {
    'use strict';
    let data = {
        name: 'whh',
        age: '18',
        gender: 'man',
        height: 160,
    };

    // boot();
    // function boot() {
    //     getData();
    //     saveData();
    //   }

    function getData(from) {
        let data = {};
        let inputs = from.querySelectorAll('[name]');
        inputs.forEach(it => {
            data[it.name] = it.value;
        });
        return data;
    }


    function saveData(data, form) {
        for (let key in data) {
            let input = form.querySelector(`[name=${key}]`)
            input.value = data[key];
        }
    }


    // console.log(getData(document.getElementById('a')));
    saveData(getData(document.getElementById('c')), document.getElementById('a'));
    saveData(data, document.getElementById('b'));


})();