; (function () {
    'use strict'

    const list = [
        {
          name: '王花花',
          salary: 100,
        },
        {
          name: '李拴蛋',
          salary: 200,
        },
        {
          name: '牛备备',
          salary: 300,
        },
      ];

      let result = [];

      for(let i = 0 ; i < list.length; i++){
          let it = list[i];
        if(it.name.startsWith('王')) {
            continue;
        }
    
        result.push(it.name);

      }

      console.log(result);
      


})();