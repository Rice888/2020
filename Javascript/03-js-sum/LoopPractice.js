; (function () {
    'use strict'
    const A = [
        '王花花',
        '刘备备',
        '李拴蛋',
        '赵可爽',
    ];
    
    let str = '';
    
    for(let i = 0 ; i < A.length ; i++) {
        let it = A[i];
        let fu = ',';
        if(i == A.length - 1) { //当 i 循环到 A 列表的最后一项时 fu 等于空./
            fu = '';
        }
        str += it + fu;
    }
    
    console.log(str);
    
})();