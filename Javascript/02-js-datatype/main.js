; (function () {
    'use strict'
    //字符串
    let whh = 'whh';
    let lsd = "lsd";
    let cxy = `cxy`;
    console.log(whh, lsd, cxy);
    //数字类型
    let age = 10;
    let pi = 3.14;
    let bigNumber = 1e3;
    console.log(bigNumber);
    //空

    let coffee = null;
    let wtf = undefined; //空

    console.log(coffee, wtf);

    //数组

    let a = [1, 2, 3, 4, null, undefined,{

    }];

    let array = ['a','b',['c']];
    console.log(a[4]);

    let person = {
        name: 'whh',
        age: 18,
        a: 1,  
        son:{
            name: 'xww',
            age: 2
        }  
    }

    console.log(person.age);
    console.log(array[2][0]);
    console.log(person.son.name);
    
    
    








})();