; (function () {
    'use strict'
    let arr = [
        1,
        2,
        666,
    ];

    console.log(arr[2]);

    let arr1 = [
        1,
        2,
        [666],
    ];

    console.log(arr1[2][0]);

    let arr2 = [
        [
            [1, 5],
            ['whh', 666],
        ],
    ];

    console.log(arr2[0][1][1]);

    let arr3 = [
        [
            [100, 'Emmm'],
            [
                2, 'yo', [666],
            ],
        ],
    ];

    console.log(arr3[0][1][2][0]);

    let obj = {
        a: 1,
        b: 2,
        c: 666,
    };

    console.log(obj.c);

    let obj1 = {
        a: 1,
        b: {
            yo: {
                em: '6',
                ha: 666,
            },
        },
    };

    console.log(obj1.b.yo.ha);

    let obj2 = {
        a: 1,
        b: {
            yo: [
                2,
                'la',
                {
                    hello: '~',
                    a:666,
                },

            ],
        },
    };

    console.log(obj2.b.yo[2].a);


    let obj3 = {
        a:1,
        b:{
            x:[
                2,{ya:[666]}
            ],
        },
    };

    console.log(obj3.b.x[1].ya[0]);

    let obj4 = {
        a:[3,5],
        b:['yo',1],
    }

    console.log(obj4.a.length)
    console.log(obj4.b.length)

    let obj5 = {
        a:{foo:2},
        yo:[3,5],
        b:{
            la: {
                name:'wood',
                x:[5, 'a', 'c'],
                muhhah: ['bob', 'huhah'],
                length:100,
            },
        },
    };

    let a = obj5.yo.length;
    let b = obj5.b.la.x.length;
    let c = obj5.b.la.muhhah.length;



    console.log(a + b + c);

    let obj6 = {
        la: 'Ha',
        v: 2,
        p: [2, 5],
        b: {
          a: {
            name: 'White',
            yo: [5, 'a', 'c'],
            length: 100,
            map: true,
          },
        },
      };


      let d = obj6.la;
      let e = obj6.b.a.name;
      
      console.log(d + e)


})();