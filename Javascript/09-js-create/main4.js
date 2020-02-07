; (function () {
  'use strict';

  function getData(from) {
    let data = {};
    let inputs = from.querySelectorAll('[name]');

    inputs.forEach(it => {
      switch (it.type) {
        case 'number':
          data[it.name] = parseFloat(it.value);
          break;
        case 'radio':
          if (!it.checked) {
            return;
          } else {
            data[it.name] = it.value;
          }
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
          data[it.name] = it.valueAsData;
          break
        default:
          data[it.name] = it.value;
          break;
      }
    });
    return data;
  }

  function saveData(data, output) {
    for (let key in data) {
      let val = data[key];
      let outData = output.querySelector(`[name=${key}]`);
      console.log(data[key]);

      switch (outData.type) {
        case 'radio':
          let radio = output.querySelector(`[type=radio][name=${key}][value=${val}]`);
          if (radio) {
            radio.checked = true;
            console.log(radio);
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
    name: 'cq',
    age: 5,
    email: '123@email.com',
    today: '2020-02-20',
    orientation: ['male', 'female'],
    balance: 500000000,
    height: 175,
    gender: 'male',
  };


  
  console.log(getData(b));
  saveData(user, document.getElementById('b'));
  

})();