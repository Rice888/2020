; (function () {
    'use strict'

    // let max = 100;
    // let i;


    // while (i >= max) {
    //     i++;
    //     console.log(i);
    //     if (i >= max) {
    //         break;
    //     }
    // }

    // while (--max) { //!!00 false 变00
    //     console.log(max);
    // }


    // for(i = 0; i < max; i ++) {
    //     console.log(i);
        
    // }

    let UserList = [
        'xg',
        'xm',
        'xz',
    ];

    for(let i = 0; i < UserList.length; i++){  //i++ 是循环 从0 开始
        let it;
        it = '我是：' +  UserList[i] + (i+1); //i+1 循环的结果加 1 .
        if(it.includes('xm')){
            continue;
        };
        console.log(it);
    }

})();